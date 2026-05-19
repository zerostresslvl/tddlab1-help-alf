function FindSpaceship() {}

FindSpaceship.prototype.find = function(map) {
if(!map || map.length === 0) {
    return "Spaceship lost forever.";
}
};

module.exports = FindSpaceship;