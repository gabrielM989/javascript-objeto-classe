class Carro { /* Isso é método */

    constructor(m, a, c){ /* dentro da constructor, criamos parâmetros */
        this.marca = m /* o primeiro marca é a propriedade/metodo e o segundo é o parâmetro */
        this.ano = a
        this.cor = c 
    }

    ligarCarro(){ /* criação do método */
        console.log('Carro ligado!')
    }

    desligarCarro(){
        console.log('Carro desligado')
    }

    acelerar(){
        console.log('Acelerando')
    }   
}

let c = new Carro('Fiat', 2020, 'Preto') /* criação do objeto */
let c2 = new Carro('Ferrari', 2019, 'Vermelha')

console.log(c)
console.log(c2)

