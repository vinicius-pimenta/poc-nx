import { mult } from "@shared/helper";

describe('project-03', () => {
  it('should test project-03', async () => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    expect(1).toEqual(1);
    expect(mult(3, 6)).toEqual(18)
  });
});
