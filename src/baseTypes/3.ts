let some: unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') {
  str = some;
}

/* Or like this */
// str = some as string;

export {};