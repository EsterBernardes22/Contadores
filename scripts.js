let contador = 0
let res = document.querySelector('section#result')
// As variaveis declaradas aqui fora são consideradas GLOBAIS e funcionam dentro do codigo

function contar() {
    contador ++ // É a mesma coisa que contador = contador +1 
    res.innerHTML = `<p> O contador está com <mark>${contador}</mark> cliques.</p>`
}
 
function zerar() {
    contador = 0
    res.innerHTML = null
}

// Função para realizar a soma
function soma() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const resultado = num1 + num2;
    document.getElementById("somaResult").textContent = `Resultado: ${resultado}`;
}

// Função para realizar a subtração
function subtracao() {
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
    const resultado = num3 - num4;
    document.getElementById("subtracaoResult").textContent = `Resultado: ${resultado}`;
}

// Função para realizar a multiplicação
function multiplicacao() {
    const num5 = parseFloat(document.getElementById("num5").value);
    const num6 = parseFloat(document.getElementById("num6").value);
    const resultado = num5 * num6;
    document.getElementById("multiplicacaoResult").textContent = `Resultado: ${resultado}`;
}

// Função para realizar a divisão
function divisao() {
    const num7 = parseFloat(document.getElementById("num7").value);
    const num8 = parseFloat(document.getElementById("num8").value);

    if (num8 !== 0) {
        const resultado = num7 / num8;
        document.getElementById("divisaoResult").textContent = `Resultado: ${resultado}`;
    } else {
        document.getElementById("divisaoResult").textContent = "Não é possível dividir por zero.";
    }
}

