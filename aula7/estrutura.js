// Leia o nome do time de 10 torcedores, e ao final informe quantos são flamenguistas, vascaínos, tricolores, botafoguenses, ou outro time.
// let times = [];
// let time;
// let flamengo = 0;
// let fluminense = 0;
// let botafogo = 0;
// let vasco = 0;
// let outroTime = 0;
// for (let i = 0; i < 10; i++) {
//     time = prompt("Qual o seu time?").toLowerCase();
//     times.push(time);
// } for (let i = 0; i < 10; i++) {
//     switch(times [i]) {
//         case "Flamengo":
//             flamengo++;
//             break;
//         case "Fluminense":
//             fluminense++;
//             break;
//         case "Botafogo":
//             botafogo++;
//             break;
//         case "Vasco":
//             vasco++;
//             break;
//         default:
//             outroTime++;
//             break; 
//     }
// }
// document.write("Flamengo...: "+flamengo+"<br>")
// document.write("Fluminense...: "+fluminense+"<br>")
// document.write("Vasco...: "+vasco+"<br>")
// document.write("Botafogo...: "+botafogo+"<br>")
// document.write("Outro time...: "+outroTime+"<br>")

// let times = []; // criação do array
// let time;

// let vasco = 0;
// let flamengo = 0;
// let fluminense = 0;
// let botafogo = 0;
// let outroTime = 0;

// for (let i = 0; i < 10; i++) {
//     time = prompt("Qual o seu time?").toLowerCase(); // o que será digitado sairá minúsculo
//     times.push(time);
// }

// for (let i = 0; i < 5; i++) {
//     switch (times[i]) {
//         case "flamengo":
//             flamengo++;
//             break;
//         case "fluminense":
//             fluminense++;
//             break;
//         case "botafogo":
//             botafogo++;
//             break;
//         case "vasco":
//             vasco++;
//             break;
//         default:
//             outroTime++;
//             break;
//     }
// }  

// document.write("Flamengo..: "+flamengo+"<br>")
// document.write("Fluminense: "+fluminense+"<br>")
// document.write("Vasco.....: "+vasco+"<br>")
// document.write("Botafogo..: "+botafogo+"<br>")
// document.write("Outro time...: "+outroTime+"<br>")

// 10) Faça um programa que leia os seguintes dados de 10 pessoas:
// - nome
// - cidade
// Ao final, crie um loop que informe o nome e a cidade de cada indice informado pelo usuário

// let nome = [];
// let cidade = [];

// // coletando os dados de 10 itens
// for (let i = 0; i <3; i++) {
//     nome.push(prompt("Infome o nome da pessoa "+(i+1)+":"));
//     cidade.push(prompt("Informe o nome da cidade"+(i+1)+":"));
// }
// document.write(nome[1]);
// document.write(cidade[1]);

// let nome = [];
// let cidade = [];

// // coletando os dados de 10 itens
// for (let i = 0; i <3; i++) {
//     nome.push(prompt("Infome o nome da pessoa "+(i+1)+":"));
//     cidade.push(prompt("Informe o nome da cidade"+(i+1)+":"));
// }

// let indice;
// while (true) {
//     indice = prompt("Informe o índice");
//     document.write("Nome: "+nome[indice] +"<br>");
//     document.write("Cidade: "+cidade[indice] +"<br>");
//     continua = prompt("Deseja ler outro índice <s/n>").toLowerCase();
//     if (continua != "s") break;
// }

// programa 10 usando dois arrays:

// // correção do 10 com 2 arrays
// let nome   = [];
// let cidade = [];

// //coletando os dados de 10 itens
// for (let i=0; i<3; i++){
//     nome.push(prompt("informe o nome da pessoa "+(i+1)+":"));
//     cidade.push(prompt("informe a cidade da pessoa "+(i+1)+":"));
// }

// let indice;
// let continua;
// while (true){
//     indice = prompt("Informe o índice");
//     if (indice>=0 && indice<3) {
//         alert("Nome..: "+nome[indice]+" Cidade: "+cidade[indice]);
//     } else {
//         alert("índice inválido");
//     }
//     continua = prompt("deseja ler outro índice <s/n>").toLowerCase();
//     if (continua !="s") break;
// }

// programa 10 usando agora um array duplo (objeto)
// array duplo / objeto
// let pessoas  = [];
// let nome;
// let cidade;
// //coletando os dados de 10 itens
// for (let i=0; i<3; i++){
//     nome = prompt("informe o nome da pessoa "+(i+1)+":");
//     cidade = prompt("informe a cidade da pessoa "+(i+1)+":");
//     pessoas.push({nome:nome, cidade:cidade});
// }

// let indice;
// let continua;
// while (true){
//     indice = prompt("Informe o índice");
//     if (indice>=0 && indice<3) {
//         alert("Nome..: "+pessoas[indice].nome+" Cidade: "+pessoas[indice].cidade);
//     } else {
//         alert("índice inválido");
//     }
//     continua = prompt("deseja ler outro índice <s/n>").toLowerCase();
//     if (continua !="s") break;
// }


