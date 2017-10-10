import * as assert from 'assert';
import { CodeTest } from './CodeTest';
const codeTest = new CodeTest();
describe('CodeTest', () => {
  describe('#sum()', () => {
    it('deve fazer a soma de dois valores', () => {
      assert.equal(codeTest.sum(1, 2), 3);
    });
  });
});
