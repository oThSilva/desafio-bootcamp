class Hero {
    constructor(tipo, ataque, nome, idade){
        this.nome = nome
        this.tipo = tipo
        this.ataque = ataque
        this.idade = idade
    }
    attack(){
        console.log(`O ${this.tipo} atacou usando ${this.ataque}`)
    }
}
let mago = new Hero("mago", "magia")
let guerreiro = new Hero("guerreiro", "espada")
let monge = new Hero("monge", "artes marciais")
let ninja = new Hero("ninja", "shuriken")
mago.attack()
guerreiro.attack()
monge.attack()
ninja.attack()