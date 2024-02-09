// launchcode.test.js code:
const launchcode = require('../index.js');

  // Write your unit tests here!
describe('launchcode', () => {
  it('checks the value of organization', () => {
    expect(launchcode.organization).toBe('nonprofit');
  });

  it('checks the value of executiveDirector', () => {
    expect(launchcode.executiveDirector).toBe('Jeff');
  });

  it('checks the value of percentageCoolEmployees', () => {
    expect(launchcode.percentageCoolEmployees).toBeCloseTo(0.85);
  });

  it('checks the value of programsOffered', () => {
    expect(launchcode.programsOffered).toContain('program1');
    expect(launchcode.programsOffered).toContain('program2');
    expect(launchcode.programsOffered).toContain('program3');
    expect(launchcode.programsOffered).toContain('program4');
    expect(launchcode.programsOffered.length).toBe(4);
  });

  it('checks the output of launchOutput', () => {
    expect(launchcode.launchOutput(2)).toBe('Launch!');
    expect(launchcode.launchOutput(3)).toBe('Code!');
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks!');
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
    expect(launchcode.launchOutput(7)).toBe('Rutabagas! That doesn\'t work.');
  });
});