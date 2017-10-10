export class CodeTest {
  /**
   * @param  {} firstValue
   * @param  {} otherValue
   * função responsavel por somar dois inteiros
   */
  sum(firstValue: number, otherValue: number): number {
    return firstValue + otherValue;
  }
}
export default CodeTest;

const result = new CodeTest().sum(2, 1);
console.log('result', result);
