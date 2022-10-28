const expect = require(`chai`).expect;

expect(true).to.be.true;

function titleCase(title) {
    return title.toUpperCase();
}

function titleCaseFirst(title) {
    var words = title.split(` `);

    var titleCaseWords = words.map(function () {
        return title[0].toUpperCase() + title.substring(1);
    })

    return titleCaseWords.join(` `)
}

expect(titleCase(`the great mouse detective`)).to.be.a(`string`);

// New Expectation
// expect(titleCase(`Reversiblan`)).to.be.eq(`Reversiblan`);  // equal
// expect(titleCase(`Reversiblan`)).to.be.eq(`dsjfhjkasdehkj`);  // not equal

expect(titleCase(`a`)).to.be.eq(`A`);  // not equal
expect(titleCaseFirst(`word`)).to.be.eq(`Word`);  // not equal


expect(titleCaseFirst(`Car`)).to.be.a(`string`);




