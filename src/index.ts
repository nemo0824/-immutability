export function immutable(value: any): any {
  if (value === null || typeof value !== 'object') {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((v): any => immutable(v));
  }

  const copy: { [key: string]: any } = {};
  for (const key in value) {
    copy[key] = immutable(value[key]);
  }
  return copy;
}

export function useGeneric<T>(value: T): T {
  if (value === null || typeof value !== 'object') {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map((v) => useGeneric(v)) as T;
  }

  const copy = {} as { [key: string]: any };
  for (const key in value) {
    copy[key] = useGeneric((value as any)[key]);
  }

  return copy as T;
}

// 원본 js 로 만든 깊은 복사
// let deepcopy = function(v){
//   if(v === null || typeof v !== 'object'){
//       return v
//   }
//   let copy = Array.isArray(v) ? [] : {}
//   for(let key in  v){
//       copy[key] = deepcopy(v[key])
//   }
//   return copy
// }
