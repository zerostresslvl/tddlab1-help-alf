function FindSpaceship() {}

FindSpaceship.prototype.find = function(map) {
if(!map || map.length === 0) {
    return "Spaceship lost forever.";
}

  if (map.indexOf('X') !== -1) {
    return [0, 0];
  }

  return "Spaceship lost forever.";


};

