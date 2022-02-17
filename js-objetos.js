let carro = new Object() /* instanciação de objeto */
console.log(carro)

let carro2 = { /* Assim também instancia um objeto */ /* atributo/propriedade são a mesmas coisa (conteúdo dentro do objeto) */

    marca: 'Fiat',
    ano: 2003,
    cor: 'azul',
    tipoCombustivel: 'alcool',  /* Dá para fazer a quebra de linha, ou deixar tudo na mesma */
    ligado: false, /* é uma propriedade "ligado" */

    ligarCarro: function(){ /* "ligarCarro --> Será o nosso método/funcao, ligar o carro" */
    if(this.ligado){
        console.log('Não pode ligar um carro que já está ligado')
    }else{
        this.ligado = true
        console.log('Carro ligado! vrum vrum')
    }
  
    },

    desligarCarro: function(){
        if(this.ligado){ /* para se referenciar a um método/propriedade do objeto, é necessário usar a palavra this */
           this.ligado = false
            console.log('Carro desligado')
        } else{
    
            console.log("Você não pode desligar um carro que já está desligado")
        }

    },

    andarCarro() { /* Não precisa colocar o : function */
    
        console.log('Andar Carro')
    
        }

} 

console.log(`Marca: ${carro2.marca}, Ano: ${carro2.ano}, Cor: ${carro2.cor}, Tipo de Combustível: ${carro2.tipoCombustivel}`)

carro2.ligarCarro() /* ligar */
carro2.ligarCarro() /* ligar */
carro2.desligarCarro() /* delisgar */
carro2.desligarCarro() /* não dá para desligar o carro */
carro2.andarCarro()
