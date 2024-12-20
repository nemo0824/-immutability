import { immutable } from '../src';

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
});
