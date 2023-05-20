function appendToResult(value) {
    document.getElementById('result').value += value; //Adiciona o valor (número ou operador) ao campo de texto
}

function clearResult() {
    document.getElementById('result').value = ''; //Limpa o campo de texto
}

function calculateResult() {
    var result = eval(document.getElementById('result').value); //Avalia a expressão matemática presente no campo de texto
    document.getElementById('result').value = result; //Exibe o resultado no campo de texto
}