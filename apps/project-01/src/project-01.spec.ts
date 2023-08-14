import { sum,sub } from 'utils';

describe('project-01', () => {
  it('should test project-01', () => {
    expect(sum(1,1)).toEqual(2);
    expect(sub(1,1)).toEqual(0);
  });
});
