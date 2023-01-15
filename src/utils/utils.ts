export function format(one: string, two: string, three: string): string {
  return (one || '') + (two ? ` ${two}` : '') + (three ? ` ${three}` : '');
}
