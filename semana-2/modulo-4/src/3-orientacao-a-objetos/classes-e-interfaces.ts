
// static
class Usuario {
    public nome;
    public idade;
    constructor(nome: string, idade: number) {
        this.nome =  nome;
        this.idade = idade;
    }
}

class Player extends Usuario {
    public jogo;

    constructor (nome: string, idade: number, jogo: string) {
        super(nome, idade);

        this.jogo = jogo;
    }

    dizerOJogoAtual() {
        return `Estou jogando, no momento: ${this.jogo}`;
    }

    static queHoraSao() {
        return Date();
    }

}

const jogador = new Player('Ana', 25, 'Red Dead Redempiton 2');
console.log(jogador.dizerOJogoAtual());
console.log(Player.queHoraSao());

// private, protected, public
// public : é acessivel de forma geral, dentro e fora da classe
// private: é acessivel apenas dentro da classe onde o campo foi criado
// protected: é acessível apenas dentro da classe (e subclasses) onde o campo foui criado

class Jogo {
    protected nome;
    // não funcionaria classe JogoComDescricao
    // private nome;
    constructor (nome: string) {
        this.nome = nome;
    }

    dizerNome() {
        return `O nome do jogo é: ${this.nome}`;
    }
}

// class JogoComDescricao extends Jogo{
//     private descricao;

//     constructor(nome: string, descricao: string) {
//         super(nome);

//         this.descricao = descricao;
//     }

//     dizerNomeComDescricao() {
//         return `O nome do jogo é: ${this.nome}`;
//     }
// }

// const ghost = new JogoComDescricao('Ghost od tsushima', 'É um jogo muito batuta cheio de samurai por ai');
// console.log(ghost.dizerNome());

// interfaces
interface IJogoComDescricao {
    descricao: string;
    dizerNomeComDescricao(): string;
}

// implements
class JogoComDescricao extends Jogo implements IJogoComDescricao {
    public descricao;

    constructor(nome: string, descricao: string) {
        super(nome);

        this.descricao = descricao;
    }

    dizerNomeComDescricao() {
        return `O nome do jogo é: ${this.nome}`;
    }
}

type TJogoComDescricao = {
    descricao: string;
    dizerNomeComDescricao(): string;
} 

const obj: TJogoComDescricao = {
    descricao: 'descricao do jogo',
    dizerNomeComDescricao() {
        return '123';
    }
}

