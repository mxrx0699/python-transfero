let idade = 18
switch(true) {
    case (idade >= 16 && idade <= 17):
        console.log("Compra apenas acompanhado de um responsável legal");
        break;
    case (idade >= 18):
        console.log("Pode comprar bebida");
        break;
    default:
        console.log("Não pode comprar bebida")
}
