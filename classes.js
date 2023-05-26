class Doador {
    #_nome;
    #_tipo;
    #_idade;
    #_dataUltimaDoacao;


    constructor(nome, idade, tipo, dataUltimaDoacao) {
        this.#_nome = nome;
        this.#_tipo = tipo;
        this.#_idade = idade;
        this.#_dataUltimaDoacao = dataUltimaDoacao;
    }

    get nome() {
        return this.#_nome;
    }

    set nome(nome) {
        console.log('Executando o método set nome()');
        this.#_nome = nome;
    }

    status() {
        const meuStatus = [
            this.#_tipo,
            this.#_dataUltimaDoacao
        ];
        return meuStatus;
    }
    
}

d1 = new Doador('Gustavo',20,'a+','23/23/23');
d2 = new Doador('Luis',30,'b','22/22/22');

const situacao = d1.status();
console.log("Status");
for (let index = 0; index < situacao.length; index++) {
    const element = situacao[index];
    console.log(index+'. '+element);
}
