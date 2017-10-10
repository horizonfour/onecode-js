const log = require('./util/log');
const fluentValidator = require('fluent-validator')();
const Base = require('./util/base/base');

global.log = log.info;
global.error = log.error;

class CodeTest extends Base {
  static validate(item) {
    const validation = fluentValidator
      .validate(item.firstValue)
      .isInt()
      .validate(item.otherValue)
      .isInt();

    validation.throwOnError();
  }

  /**
   * @param  {} firstValue
   * @param  {} otherValue
   * função responsavel por somar dois inteiros
   */
  static sum(firstValue, otherValue) {
    this.validate({ firstValue, otherValue });
    return firstValue + otherValue;
  }
}
module.exports = CodeTest;
