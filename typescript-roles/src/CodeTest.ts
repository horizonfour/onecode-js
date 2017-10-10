export class CodeTest {
  /**
   * @param  {} firstValue
   * @param  {} otherValue
   * função responsavel por somar dois inteiros
   */
  sum(firstValue: number, otherValue: number): number {
    // log.info('teste', firstValue.toString());
    return firstValue + otherValue;
  }
}
export default CodeTest;

const result = new CodeTest().sum(2, 1);
console.log('result', result);
// log.info('result', result.toString());
