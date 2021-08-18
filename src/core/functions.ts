export const curry = (fn: Function) => (...args: string[]) => fn.bind(null, ...args);
export const map = curry((fn: any, arr: any) => arr.map(fn));
export const join = curry((str: string, arr: string[]) => arr.join(str));
export const toLowerCase = (str: string) => str.toLocaleLowerCase();
export const split = curry((splitOn: string, str: string) => str.split(splitOn));
export const compose = (...functions: Function[]) => (value: never) => functions.reduceRight((accumulator, fn) => fn(accumulator), value);