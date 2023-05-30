// Glossário

// Expressão = sempre pode ser reduzida a um valor
// Ex. 1 + 1 -> é reduzida a 2

// Bloco de código
// Contexto
// Escopo (visibilidade)

let x = 0;
let y = 100;

function abc() {
    // O bloco é o que está entre as chaves

    let a=10;
    let b=20;

    // Essas duas variáveis existem 
    // apenas dentro do contexto de
    // execução do bloco  
    console.log('em abc:')
    // Daqui de dentro enxergamos a e b e x e y tb!
    console.log('a=',a);
    console.log('y=',y);
    
}
console.log('no contexto global/programa');
abc();
// Erro: a não está definida neste contexto
// Escopo:
//---------
/// a não é visível daqui
// a está fora do escopo atual

//console.log('valor de a=',a);

//Declarações:

/**
 * Em geral é necessário declarar um 'nome'
 * antes de usá-lo
 * 
 * Ex. não posso usar a variável de nome 'email'
 * antes de declarar para o interpretador
 * que email vai ser usado como nome de uma 
 * variável.
 */

// Declarações de nomes que serão usados
// por variáveis
let idade;
let email; 

// Declarações de nomes que ficarão
// atrelados a valores constantes - 
// não vão mudar durante a execução
// do programa

const cpf = 0;
const registro = 1;

// Declaração que diz que a palavra cde
// vai ser usada para referenciar o bloco 
// de código dessa funcão
function cde() {
    return 'oioioi';
}

fgh = function() {
    return 'heheheh';
}

console.log('cde = ', cde());
console.log('fgh = ',fgh());


// Invocação
// sinônimo de 'chamar'
// Ex. invocar a função cde()

cde();

// Mais usado com métodos de objetos
// Ex.

// A mensagem .log() está invocando
// o método log()
console.log('hehehe');


// Estruturas de dados
//
// Existem para agrupar dados
// normalmente atribuindo algum
// significado a esse grupo

// Array é uma das mais básicas

let lista = [1,2,3,4,5];
let tarefas = ['acordar', 'sair', 'voltar'];

