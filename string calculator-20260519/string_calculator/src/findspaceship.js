function FindSpaceship() {}

FindSpaceship.prototype.find = function(map) {
if(!map || map.length === 0) {
    return "Spaceship lost forever.";
}

  var rows = map.split('\n');

  for (var row = 0; row < rows.length; row++) {
    var col = rows[row].indexOf('X');
    if (col !== -1) {
      var y = rows.length - 1 - row;
      return [col, y];
    }
  }

  return "Spaceship lost forever.";
};

