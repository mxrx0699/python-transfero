//Verificar se um número está dentro de dois intervalos

let numero = 25;
switch(true) {
    case (numero >= 1 && numero <= 10 || numero >= 50 && numero <= 100):
        console.log("Número válido");
        break;
    default:
        console.log("Número inválido");
}
