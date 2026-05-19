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

  it('should return Spaceship lost forever when no X in map', function() {
      expect(finder.find(".....")).toBe("Spaceship lost forever.");
  });

    it('should return [7, 2] for assignment example', function() {
      expect(finder.find("..........\n..........\n.......X..\n..........\n..........")).toEqual([7, 2]);
  });

});