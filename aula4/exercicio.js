/*ideia: um programa para receber um número de 1 a 7
e informar qual é o dia da semana 
*/
// let dia = 3
// if (dia == 1) {
//     console.log ("Domingo")
// } else if (dia == 2) {
//     console.log("Segunda")
// } else if (dia == 3) {
//     console.log ("Terça")
// } else if (dia == 4) {
//     console.log ("Quarta")
// } else if (dia == 5) {
//     console.log("Quinta")
// } else if (dia == 6 ) {
//     console.log("Sexta")
// } else if (dia == 7) {
//     console.log ("Sábado")
// } else {
//     console.log ("Dia inválido. Informe um número de 1 a 7.")
// } 

let dia = 1
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    case 4:
        console.log("Quarta");
        break;
    case 5:
        console.log("Quinta");
        break;
    case 6:
        console.log("Sexta");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido. Digite um valor entre 1 e 7");
}

