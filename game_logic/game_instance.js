const fire = require('./ship_methods').fireShip;

function checkGameStatus(players) {
    return false;
}

function takeTurn(opposingPlayer, guessFunction) {
    let coordinate = guessFunction();
    fire(opposingPlayer, coordinate);
    let gameOver = checkGameStatus();

    return gameOver;
}

module.exports = {
    checkGameStatus: checkGameStatus,
    takeTurn: takeTurn
};