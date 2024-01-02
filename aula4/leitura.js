const dados = require("./cliente.json");

//console.log(dados);
//console.log(typeof dados);

const dadosString = JSON.stringify(dados);

console.log(dadosString);
console.log(typeof dadosString);

const novoDados = JSON.parse(dadosString);

console.log(novoDados);