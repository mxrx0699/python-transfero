let idade = 12
switch(idade) {
    case (idade < 12):
        console.log("Criança")
        break
    case (idade >= 12):
        console.log("Adolescente")
        break
    case (idade >= 18):
        console.log("Adulto")
        break
    case (idade >= 65):
        console.log ("Idoso")
        break
    default:
        console.log("Informe uma idade!")
}
