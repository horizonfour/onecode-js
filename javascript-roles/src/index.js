class CodigoTeste {
  static sum(firstValue, otherValue) {
    return firstValue + otherValue;
  }
}

const codigoTeste = new CodigoTeste();
console.log('sum', codigoTeste.sum(2, 1));
