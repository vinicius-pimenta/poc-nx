import { sum } from 'utils';

describe('project-03', () => {
  it('should test project-03', async () => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    expect(sum(1,1)).toEqual(2);
  });
});
