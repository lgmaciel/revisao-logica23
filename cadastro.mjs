import { question } from "readline-sync";

let dados = [];

let nomeNovo = question("nome: ");
let tipoNovo = question("tipo s: ");
let dataNova = question("data: ");

dados.push(
    {
        nome: nomeNovo,
        tipo: tipoNovo,
        data: dataNova
    }
);
