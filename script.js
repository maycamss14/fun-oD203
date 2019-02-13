// // 
// function NOME(ARGUMENTO, ARUGUMETO, ARGUMENTO, ARGUMENTO) {
//   EXECUÇÃO
// }
// NOME(PARAMETRO, PARAMETRO, PARAMETRO, PARAMETRO);


let primeiroValor = Number(prompt('Qual o primeiro valor para a soma?'));
function somaElevadaAoQuadrado (a=0, b=0){ //Assinatura da function
    let soma = a+b;
    return soma**2;

}

console.log(somaElevadaAoQuadrado(10,10));

function aleatorio(min,max){
    return Math.floor (Math.random() * (max - min +1))+ min;
}

/*
min 0
max 10

Math.floor(0.5*(110))/*

