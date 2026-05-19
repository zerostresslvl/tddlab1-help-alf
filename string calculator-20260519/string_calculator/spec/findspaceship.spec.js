describe('FindSpaceship', function() {
  var finder;

  beforeEach(function() {
    finder = new FindSpaceship();
  });

  it('should return Spaceship lost forever for empty string', function() {
    expect(finder.find("")).toBe("Spaceship lost forever.");
  });

  it('should return [0, 0] when X is at bottom-left', function() {
      expect(finder.find("X")).toEqual([0, 0]);

  }); 
});