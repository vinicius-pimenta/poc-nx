import { sum } from "@shared/utils";

describe('project-02', () => {
  it('should test project-02', async () => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    expect(sum(1,1)).toEqual(2);
  });
});
