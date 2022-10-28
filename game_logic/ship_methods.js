function checkForShip(player, coordinates) {
    var shipPresent, ship;

    for (var i = 0; i < player.ships.length; i++) {
        ship = player.ships[i];

        shipPresent = ship.locations.filter(function (actualCoordinates) {
            return (actualCoordinates[0] === coordinates[0])
                && (actualCoordinates[1] === coordinates[1]);
        })[0];

        if (shipPresent) {
            return true;
        }
    }
    return false;
}

module.exports.checkForShip = checkForShip;