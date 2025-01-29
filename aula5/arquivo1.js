// programa para ler o nome e escrever o nome
// let nome = prompt("Digite o nome");
// // console.log(nome); 
// // alert("O nome é: "+nome);
// document.write("O nome é: "+nome);

// let valor = prompt("Digite um número");
// let valor2 = prompt("Digite segundo número");
// let soma = valor + valor2;
// document.write("O resultado da soma é: "+soma);

let valor = prompt("Digite o primeiro número");
let valor1 = prompt("Digite o segundo número");
if (valor.trim() === "" || valor1.trim() === "") {
    alert("Informe valores válidos")
} else {
    let num = parseFloat(valor)
    let num1 = parseFloat(valor1)
    let soma = valor + valor1;
    document.write("O resultado da soma é: " + soma);
    if (soma > 20) {
        document.write("Soma maior que 20");
    } else if (soma < 20) {
        document.write("Soma menor que 20");
    } else {
        document.write("Soma igual a 20");
    }
}

                             