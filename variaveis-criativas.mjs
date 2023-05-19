import * as agenda from './dadosAgenda.mjs';

const autor = agenda.nome0;

const versao = '1.0a'

let introducao = `Tu pode escrever uma string assim
e outra assim
que isso é código javascript válido!'
`

let corpo = `
E nestes blocos de código dá pra
escrever um montão de coisas.

E o corpo pode ter vários parágrafos.
`

let rodape = ` 
Este texto foi escrito por ${autor}
versão: ${versao}
`

console.log(introducao)
console.log(corpo);
console.log(rodape)