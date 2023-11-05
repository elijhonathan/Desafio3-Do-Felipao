// # 3️⃣ Escrevendo as classes de um Jogo
// **O Que deve ser utilizado**
// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções
// - Classes e Objetos

// ## Objetivo:
// Crie uma classe generica que represente um herói de uma aventura e que possua as seguintes propriedades:
// - nome
// - idade
// - tipo (ex: guerreiro, mago, monge, ninja )

// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// se guerreiro -> no ataque exibir (usou espada)
// se monge -> no ataque exibir (usou artes marciais)
// se ninja -> no ataque exibir (usou shuriken)

// ## Saída
// Ao final deve se exibir uma mensagem:
// - "o {tipo} atacou usando {ataque}"
//   ex: mago atacou usando magia
//   guerreiro atacou usando espada

class personagem
{
    constructor(nome, Xp, classe)
    {
        this.nome = nome
        this.Xp = Xp
        this.classe = classe
        this.ataque = ""
    }

    movimentoAtaque()
    {
        if(this.classe === "Guerreiro")
        {
            this.ataque = "Ataque com a espada"
        }

        else if(this.classe === "Mago")
        {
            this.ataque = "Ataque com magia"
        }

        else if(this.classe === "Lutador")
        {
            this.ataque = "Ataque com Golpe de artes marciais"
        }

        else if(this.classe === "Ninja")
        {
            this.ataque = "Ataque com katana"
        }

        else
        {
            this.ataque = "Ataque Generico (Classe não encontrada...)"
        }
    }

    atacar()
    {
        this.movimentoAtaque()
        console.log(`${this.nome} da classe ${this.classe} usou ${this.ataque}`)
    }

    reletar()
    {
        console.log(`O personagem ${this.nome} da classe ${this.classe} está com ${this.Xp} de XP`)
    }
}

let conan = new personagem("Conan", 50, "Guerreiro")
let jiraya = new personagem("Jiraya", 30, "Ninja")
let bruceLee = new personagem("BruceLee", 99, "Lutador")
let gandalf = new personagem("Gandalf", 100, "Mago")
let eli = new personagem("Eli", 1, "Programador")


conan.reletar()
conan.atacar()

jiraya.reletar()
jiraya.atacar()

bruceLee.reletar()
bruceLee.atacar()

gandalf.reletar()
gandalf.atacar()

eli.reletar()
eli.atacar()


