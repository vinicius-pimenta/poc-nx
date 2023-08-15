import { mult } from './mult';

describe('sharedHelper', () => {
  it('should work', () => {
    expect(mult(2,2)).toEqual(4);
  });
});
