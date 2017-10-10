const assert = require('assert');
const CodigoTest = require('./index');

global.describe('CodeTest', () => {
  global.describe('#sum()', () => {
    global.it('deve fazer a soma de dois valores', () => {
      assert.equal(CodigoTest.sum(1, 2), 3);
    });

    global.it('deve dar erro com strings não numericas', () => {
      assert.throws(() => CodigoTest.sum('a', 'b'));
    });
  });
});
