const bar = require("../src/bar/index");
const foo = require("../src/foo/index");

describe('Suite', () => {
    it('should print', () => {
        bar();
        foo();
    });
});
