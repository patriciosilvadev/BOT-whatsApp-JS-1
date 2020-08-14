const cardapio = require ('../cardapio')
const banco = require ('../banco')
/* Criamos uma variável dentro da função para exibir o menu aqui já anexamos um parametro de mensagem, mas 
   neste estagio 0 ele não seria técnicamente nescessário */

function execute(user,msg) {

    let menu = "////////// OPÇÕES //////////// \n \n"
    Object.keys(cardapio.menu).forEach((value) =>{
        let element = cardapio.menu[value]
        menu += `${value} - ${element.descricao} \n`
    })

    banco.db[user].stage = 1;// Estamos indo para o próximo estágio da pergunta
    return ["Olá sou Katarina uma assistente virtual. Para fazer uma pergunta basta digitar o código da sua pergunta",menu]
}

exports.execute = execute;  