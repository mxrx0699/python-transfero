// //programa para ler o nome e escrever o nome
// let nome = prompt("Digite o nome");
// // console.log(nome); 
// // alert("O nome é: "+nome);
// document.write("O nome é: "+nome);

// let valor = prompt("Digite um número");
// let valor2 = prompt("Digite segundo número");
// let soma = valor + valor2;
// document.write("O resultado da soma é: "+soma);

// let valor = prompt("Digite o primeiro número");
// let valor1 = prompt("Digite o segundo número");
// if (valor.trim() === "" || valor1.trim() === "") {
//     alert("Informe valores válidos")
// } else {
//     let num = parseFloat(valor)
//     let num1 = parseFloat(valor1)
//     let soma = valor + valor1;
//     document.write("O resultado da soma é: " + soma);
//     if (soma > 20) {
//         document.write("Soma maior que 20");
//     } else if (soma < 20) {
//         document.write("Soma menor que 20");
//     } else {
//         document.write("Soma igual a 20");
//     }
// }

//exercício 1 -  ler 3 valores e verificar se podem ser lados de um triangulo e informar caso afirmativo, qual é o triangulo

// let valor = prompt("Digite o primeiro número")
// let valor1 = prompt("Digite o segundo número")
// let valor2= prompt("Digite o terceiro número")
// if(valor.trim() === "" || valor1.trim() === "" || valor2.trim() === "") {
//     alert("Informe valores válidos!")
// } else if ( 
// (parseInt(valor)+ parseInt(valor1) < parseInt(valor2)) || 
// ( parseInt(valor)+ parseInt(valor2) < parseInt(valor1)) || 
// ( parseInt(valor1)+ parseInt(valor2) < parseInt(valor))
//  ) {
//     alert("Os valores não podem formar um triângulo!") 
// } else {
//     if (parseInt (valor) == parseInt (valor1) && parseInt(valor1) == parseInt(valor2)) {
//         document.write("Triângulo Equilátero!")
//     } else if (parseInt(valor) == parseInt (valor1) || parseInt(valor1) == parseInt (valor2) || parseInt (valor) == parseInt (valor2)) {
//         document.write("Triângulo Isósceles!")
//     } else {
//         document.write("Triângulo Escaleno")
//     }
// }

//exercicio 2 - ler altura e peso, e informar o imc e qual a situação do indivíduo

// let altura = parseFloat(prompt("Digite a altura:"))
// let peso = parseFloat(prompt("Digite o peso:"))
// let imc = peso / (altura ** 2)
// if (isNaN(altura) || isNaN(peso)) {
//     document.write("Digite valores válidos!")
// } else {
//     if (imc >= 18.5 && imc <= 24.9) {
//         document.write("Peso ideal!")
//     } else if (imc >= 25 && imc <= 29.9) {
//         document.write("Sobrepeso!")
//     } else if (imc >= 30 && imc <= 34.9) {
//         document.write("Obesidade grau I ")
//     } else if (imc >= 35 && imc <= 39.9) {
//         document.write("Obesidade grau II ")
//     } else if (imc >= 40) {
//         document.write("Obesidade grau III ou mórbida ")
//     } else if (imc < 18.5) {
//         document.write("Baixo peso!")
//     }
// }

// exercicio 3 -  Solicitar a idade do usuário e informa se ele é maior ou menor de idade.

// let idade = parseInt(prompt("Digite sua idade:"))
// if(isNaN(idade)) {
//     document.write("A idade deve ser preenchida!")
// } else if(idade >= 18) {
//     document.write("Você é maior de idade!")
// } else {
//     document.write("Você é menor de idade!")
// }

//exercicio 4 - Solicita um valor e um percentual de desconto, e calcula o valor final.
// let valor = parseFloat(prompt("Digite um valor:"))
// let percentualDesconto = parseFloat(prompt("Digite o percentual para desconto:"))
// if (isNaN(valor) || isNaN(percentualDesconto)) {
//     alert("Informe um valor válido!")
// } else {
//     let num = (valor * percentualDesconto / 100);
//     num = valor - num;
//     document.write("O valor final é: " + num.toFixed(2))
// }

// Exercicio 5 - Lê um número e informa se ele é par ou ímpar.

// let valor = parseFloat(prompt("Digite um valor"))
// if (isNaN(valor)) {
//     alert("Digite um valor válido!")
// } else {
//     if (valor % 2  == 0) {
//         document.write("O valor informado é par.")
//     } else {
//         document.write("O valor informado é ímpar.")
//     }
// }

//exercicio 7 - Solicita três números e calcula a média.

let valor = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let valor3 = parseFloat(prompt("Digite o terceiro valor:"));
if(isNaN(valor) || isNaN(valor2) || isNaN(valor3)) {
    alert("Digite um número válido!")
} else {
    let media = (valor + valor2 + valor3) / 3 
    document.write("O valor da média é: "+media.toFixed(2))
}
