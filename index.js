class calculadora {
    constructor(numA, numB, operador) {
      this.numA = numA;
      this.numB = numB;
      this.operador = operador;
    }
  
    escrever() {
      var resultado;
      if (this.operador === '+') {
        resultado = this.numA + this.numB;
      } else if (this.operador === '-') {
        resultado = this.numA - this.numB;
      } else if (this.operador === 'x') {
        resultado = this.numA * this.numB;
      } else if (this.operador === '/') {
        resultado = this.numA / this.numB;
      } else {
        console.log('Operador inválido');
        return;
      }
      console.log('Resposta: ' + resultado);
    }
  }
  
  var numAA = parseInt(prompt("Digite o primeiro número: "));
  var numBB = parseInt(prompt("Digite o segundo número: "));
  var oper = prompt("Digite o operador: +, -, x, /: ");
  
  var conta = new calculadora(numAA, numBB, oper);
  conta.escrever();
  