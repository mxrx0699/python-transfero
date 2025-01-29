let idade = prompt("Digite uma idade")
switch(true) {
    case (idade >= 16 && idade <= 17):
        document.write("Compra apenas acompanhado de um responsável legal");
        break;
    case (idade >= 18):
        document.write("Pode comprar bebida");
        break;
    default:
        document.write("Não pode comprar bebida")
}
