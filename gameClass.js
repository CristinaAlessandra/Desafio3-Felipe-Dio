class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = this.capitalizeFirstLetter(tipo.toLowerCase()); // Converte para minúsculas e capitaliza a primeira letra
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    atacar() {
        let ataque;

        switch (this.tipo) {
            case 'Mago':
                ataque = 'magia';
                break;
            case 'Guerreiro':
                ataque = 'espada';
                break;
            case 'Monge':
                ataque = 'artes marciais';
                break;
            case 'Ninja':
                ataque = 'shuriken';
                break;
            default:
                ataque = 'ataque desconhecido';
        }

        console.log(`${this.tipo} atacou usando ${ataque}.`);
    }
    
    mensagem(){
        console.log(`Olá ${this.nome}! Sua idade atual é ${this.idade} - (${this.tipo}).`)
    }

    executarAcao() {
        this.mensagem();
        this.atacar();
        console.log();
    }

}

let user1 = new heroi("Jaina Proudmoore", 37, "mago")
user1.executarAcao();

let user2 = new heroi("Thrall", 32, "guerreiro")
user2.executarAcao();

let user3 = new heroi("Tyrande Whisperwind", 13.847, "monge")
user3.executarAcao();

let user4 = new heroi("Sylvanas Windrunner", 2.700, "ninja")
user4.executarAcao();