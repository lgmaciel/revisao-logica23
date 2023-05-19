import { question } from "readline-sync";

let dados = [
    {nome: 'gustavo', tipo:'a'},
    {nome: 'marcelo', tipo: 'b'},
    {nome: 'gabriel', tipo: 'o'},
    {nome: 'nayhara', tipo: 'b'}
];

let chave = question('tipo? ');


for (let index = 0; index < dados.length; index++) {
    const doador = dados[index];
    if (doador.tipo == chave) {
        console.table(doador);
    }
}
