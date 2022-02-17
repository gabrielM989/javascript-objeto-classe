let cachorro = {

    tipo: 'cachorro',
    nome: 'jade',
    cor: 'preto/cinza',
    comida: 'ração',
    bebida: 'agua',
    passear: 'Andar pela rua',


    andar: false,
    fome: false,
    sede: false,

    comida() {
        if (this.fome) {
            console.log('A Jade já está alimentada')

        } else {
            this.fome = true
            console.log('A Jade está comendo')
        }
    },

    bebida() {
        if (this.sede) {
            console.log('O animal já bebeu água')
        } else {
            this.sede = true
            console.log('A Jade está tomando água')
        }
    },

    passear() {
        if (this.andar) {
            console.log('A Jade já passeou hoje')
        } else {
            this.andar = true
            console.log('A Jade precisa sair para passear')
        }

    }

}

cachorro.comida()
cachorro.comida()
cachorro.bebida()
cachorro.bebida()
cachorro.passear()
cachorro.passear()