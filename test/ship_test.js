var expect = require(`chai`).expect;

describe(`checkForShip`, function () {
    var checkForShip = require(`../game_logic/ship_methods`).checkForShip;

    it('should correctly report no ship at the given players coordinates ', function () {
        let player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                }
            ]
        };

        expect(checkForShip(player, [8, 1])).to.be.false;
        expect(checkForShip(player, [8, 0])).to.be.false;
    });

    it('should correctly report a ship at the given players coordinates ', function () {
        let player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                }
            ]
        };

        expect(checkForShip(player, [0, 1])).to.be.true;
        expect(checkForShip(player, [0, 0])).to.be.true;
    });


    it('should correctly handle ships located at more than one coordinate ', function () {
        let player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1], [0, 3]]
                }
            ]
        };

        expect(checkForShip(player, [0, 0], [0, 1], [0, 3])).to.be.true;
    });

    it('should correctly handle multiple ships located at more than one coordinate ', function () {
        let player = {
            ships: [
                {
                    locations: [[0, 1], [0, 1], [0, 3]]
                },
                {
                    locations: [[0, 2], [0, 1], [0, 3]]
                },
                {
                    locations: [[1, 0], [0, 1], [0, 3]]
                },

            ]
        };

        expect(checkForShip(player, [0, 1], [0, 1], [0, 3])).to.be.true;
        expect(checkForShip(player, [0, 2], [0, 1], [0, 3])).to.be.false;
        expect(checkForShip(player, [4, 0], [0, 1], [0, 3])).to.be.false;
    });
})