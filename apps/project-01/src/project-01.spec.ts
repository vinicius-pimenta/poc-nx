import { delay, sub, sum } from "@shared/utils";

describe('project-01', () => {
  it('should test project-01', async () => {
    expect(sum(1,1)).toEqual(2);
    await delay(5000)
    expect(sub(1,1)).toEqual(0);
  });
});
