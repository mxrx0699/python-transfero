const operador = "+"
let valor = 9
let valor1 = 5
switch(operador) {
    case "+":
        console.log(valor + valor1);
        break;
    case "-":
        console.log(valor - valor1);
        break;
    case "*":
        console.log(valor * valor1);
        break
    case "/":
        console.log(valor / valor1);
        break;
    default:
        console.log("Operador inválido!")
}
