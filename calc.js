// declaração da variável global document denominada como d
let d = document;
let deveLimpar = false;

function insert(num) {
  //Pegar o valor do objeto HTML resultado e armazena na variável número
  var resultado = d.getElementById('resultado').innerHTML;

  //limita o numero de caracteres no visor
  if (resultado.length >= 15) {
    return;
  }

  //se num for um ponto, verifica se o último número no visor já contém um ponto decimal
  if (num === '.') {
    var ultimoNumero = resultado.split(/[\+\-\*\/]/).pop();
    if (ultimoNumero.includes('.')) {
      return;
    }
  }

  //se deveLimpar for true, limpa o visor e insere o número, caso contrário, insere o número na continuação do cálculo
  if (deveLimpar) {
    if (['+', '-', '*', '/'].includes(num)) {
      d.getElementById('resultado').innerHTML = resultado + num;
    } else {
      clean();
      d.getElementById('resultado').innerHTML = num;
    }
    deveLimpar = false;
  } else {
    var ultimoCaractere = resultado[resultado.length - 1];
    if (['+', '-', '*', '/'].includes(ultimoCaractere) && ['+', '-', '*', '/'].includes(num)) {
      resultado = resultado.slice(0, -1);
    }
    d.getElementById('resultado').innerHTML = resultado + num;
  }
}

function clean() {
  //limpa o visor
  d.getElementById('resultado').innerHTML = "";
}

function back() {
  //remove o último caractere do visor
  var resultado = d.getElementById('resultado').innerHTML;
  d.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular() {
  //realiza o cálculo e exibe o resultado no visor
  var resultado = d.getElementById('resultado').innerHTML;
  if (resultado) {
    d.getElementById('resultado').innerHTML = eval(resultado);
    deveLimpar = true;
  } else {
    d.getElementById('resultado').innerHTML = "Nada a Calcular"
  }
}
