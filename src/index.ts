export function immutable(value: any) {
  if (value === null || typeof value !== 'object') {
    return value;
  }
  let copy = Array.isArray(value) ? [] : {};

  for (let key in value) {
    copy[key] = immutable(value[key]);
  }

  return copy;
}
