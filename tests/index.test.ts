import { immutable, useGeneric } from '../src';

describe('테스트 그룹 이름', () => {
  it('더하기 테스트', () => {
    const result = 1 + 2;

    // 테스트 로직
    expect(result).toEqual(3);
  });

  it('빼기테스트', () => {
    const result = 3 - 1;
    expect(result).toEqual(2);
  });

  it('null을 넣었을때 null 로 나와야한다 테스트', () => {
    const result = immutable(null);
    expect(result).toEqual(null);
  });

  it('null을 넣었을때 null 로 나와야한다 테스트', () => {
    const result = immutable(null);
    expect(result).toEqual(null);
  });

  it('number를 넣었을때 number로 나와야한다 테스트', () => {
    const result = immutable(10);
    expect(result).toEqual(10);
  });

  it('object(얕은복사) 를 넣었을때 object(얕은복사)로 나와야한다 테스트', () => {
    const result = immutable({ a: 1, b: 2 });
    expect(result).toEqual({ a: 1, b: 2 });
  });

  it('object(깊은복사) 를 넣었을때 object(깊은복사)로 나와야한다 테스트', () => {
    const result = immutable({ a: 1, b: 2, c: { cccc: 33333 } });
    expect(result).toEqual({ a: 1, b: 2, c: { cccc: 33333 } });
  });

  it('Array(얕은복사) 를 넣었을때 Array(얕은복사)로 나와야한다 테스트', () => {
    const result = immutable([1, 2, 3, 4]);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  it('Array(깊은복사) 를 넣었을때 Array(깊은복사)로 나와야한다 테스트', () => {
    const result = immutable([1, 2, 3, 4, [5, 6, [7, 8]]]);
    expect(result).toEqual([1, 2, 3, 4, [5, 6, [7, 8]]]);
  });

  it('Array, Object(깊은복사) 를 넣었을때 Array, Object(깊은복사)로 나와야한다 테스트', () => {
    const result = immutable({
      a: 1,
      b: { c: 2 },
      d: [3, 4, { e: 5 }],
    });
    expect(result).toEqual({
      a: 1,
      b: { c: 2 },
      d: [3, 4, { e: 5 }],
    });
  });

  it('origin 에서 불변성함수 적용시 result값 변경했을대 같은지', () => {
    const origin = { a: 10, b: 20, c: { ccc: 1111 } };
    const result = immutable(origin);

    result.c.ccc = 9999;

    expect(origin).toEqual({ a: 10, b: 20, c: { ccc: 1111 } });
  });
  // use Generic

  it('number를 넣었을때 number로 나와야한다 테스트', () => {
    const result = useGeneric(10);
    expect(result).toEqual(10);
  });
});
