import { format } from './utils';

describe('format', () => {
  it('returns empty string for no tags defined', () => {
    expect(format(undefined, undefined, undefined)).toEqual('');
  });

  it('formats just first tag', () => {
    expect(format('One', undefined, undefined)).toEqual('One');
  });

  it('formats first and last tag', () => {
    expect(format('One', undefined, 'Three')).toEqual('One Three');
  });

  it('formats first, middle and last tag', () => {
    expect(format('One', 'Two', 'Three')).toEqual('One Two Three');
  });
});
