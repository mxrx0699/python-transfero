// let idade = 12
// switch(idade) {
//     case (idade < 12):
//         console.log("Criança")
//         break
//     case (idade >= 12):
//         console.log("Adolescente")
//         break
//     case (idade >= 18):
//         console.log("Adulto")
//         break
//     case (idade >= 65):
//         console.log ("Idoso")
//         break
//     default:
//         console.log("Informe uma idade!")
// }

const idade = 20;
switch(true) {
    case (idade >= 0 && idade <= 12):
        console.log("Criança");
        break;
    case (idade >= 13 && idade <= 17):
        console.log("Adolescente");
        break;
    case (idade >= 18 && idade <= 65):
        console.log("Adulto");
        break;
    case (idade >= 66):
        console.log("Idoso");
        break;
    default:
        console.log("Idade inválida");
}
