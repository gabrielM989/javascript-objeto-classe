let usuariosD = parseInt(prompt('Informe quantos usuários você quer: '))

let usuarioA = []


for (let i = 1; i <= usuariosD; i++) {

    let usuario = {

        nome: '',
        idade: 0,
        sexo:'',
    }

    usuario.nome = prompt(`Informe o nome do ${i}° usuário: `),
    usuario.idade = parseInt(prompt(`Informe a idade do ${i}° usuário: `)),
    usuario.sexo = prompt(`Informe o sexo do ${i}° usuário: `),

    usuarioA.push(usuario)

    document.write(`O nome do ${i}° usuário é o: ${usuario.nome}, cuja idade é de: ${usuario.idade}, com o sexo: ${usuario.sexo} <br> <br>`)

}


