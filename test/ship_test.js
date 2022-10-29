var expect = require(`chai`).expect;

describe(`checkForShip`, function () {
    var checkForShip = require(`../game_logic/ship_methods`).checkForShip;

    var player;

    before(function () {
        player = {
            ships: [
                {
                    locations: [[0, 0], [0, 1]]
                },
                {
                    locations: [[0, 2], [0, 1], [0, 3]]
                },
                {
                    locations: [[1, 0], [0, 1], [0, 3]]
                },
            ]
        };
    })

    it('should correctly report no ship at the given players coordinates ', function () {


        expect(checkForShip(player, [8, 1])).to.be.false;
    });

    it('should correctly report a ship at the given coordinates ', function () {

        expect(checkForShip(player, [0, 1])).to.deep.eq(player.ships[0]);
    });

    it('should correctly handle ships located at more than one coordinate ', function () {

        expect(checkForShip(player, [0, 0])).to.deep.eq(player.ships[0]);
    });

    it('should correctly handle multiple ships located at more than one coordinate ', function () {

        expect(checkForShip(player, [0, 1])).to.deep.eq(player.ships[0]);
        expect(checkForShip(player, [1, 0])).to.deep.eq(player.ships[2]);
        expect(checkForShip(player, [0, 2])).to.deep.eq(player.ships[1]);
    });
});

describe(`damage ship`, function () {
    var damageShip = require(`../game_logic/ship_methods`).damageShip;

    it('should register the damage on a given ship at a location', function () {

        var ship = {
            locations: [[0, 0]],
            damage: []
        }

        damageShip(ship, [0, 0]);
        expect(ship.damage).to.not.be.empty;
        expect(ship.damage[0]).to.deep.eq([0, 0]);

    });
})

describe(`Fire Function `, function () {
    var fire = require(`../game_logic/ship_methods`).fireShip;

    var player;

    beforeEach(function () {
            player = {
                ships: [
                    {
                        locations: [[0, 1]],
                        damage: []
                    }
                ]
            }
        }
    )

    after(function () {
        console.log(`Entire Test Case has been completed`);
    });

    afterEach(function () {
        console.log(`One Unit test Completed!`);
    });

    it('should record damage on the given player ship at given coordinate', function () {

        fire(player, [0, 1]);
        expect(player.ships[0].damage[0]).to.deep.eq([0, 1]);
    });

    it('should not record damage on the given player ship at given coordinate', function () {

        fire(player, [9, 6]);
        expect(player.ships[0].damage[0]).to.not.deep.eq([0, 1]);
        expect(player.ships[0].damage).to.be.empty;
    });
})














