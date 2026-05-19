const FindSpaceship = require('../src/findspaceship');

describe('FindSpaceship', function() {
  var finder;

  beforeEach(function() {
    finder = new FindSpaceship();
  });

  it('should return Spaceship lost forever for empty string', function() {
    expect(finder.find("")).toBe("Spaceship lost forever.");
  });

  it('should return spaceship lost forever when no X in map', function() {
    expect(finder.find(".....")).toBe("Spaceship lost forever.");

  });
});