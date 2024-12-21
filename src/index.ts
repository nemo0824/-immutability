export function immutable(value: any) {
  if (value === null || typeof value !== 'object') {
    return value;
  }
  let copy: any[] | { [key: string]: any } = Array.isArray(value) ? [] : {};

  for (let key in value) {
    copy[key] = immutable(value[key]);
  }

  return copy;
}

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
