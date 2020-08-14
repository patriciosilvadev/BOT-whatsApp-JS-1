const cardapio = require ('../cardapio')
const banco = require ('../banco')

/* Usamos o if para responder em cada caso de pergunta, conforme o código digitado pelo usuário vale lembarar que como a entrada
   de dados é do tipo string usamos um if, no entanto nada impede que façamos uma conversão do tipo para int e neste caso utilizemos
   o shwitch a depender da melhor forma que a aplicação for utilizada*/


function execute (user, msg){



    if (msg === '1'){
        return ["RESPOSTA 1 \n \n"]
    }
    if (msg === '2'){
        return ["RESPOSTA 2 \n \n"]
    }
    
    if (msg === '3'){
        return ["RESPOSTA 3 \n \n"]

    }

    banco.db[user].stage = 0; // Aqui estamos retornando para o stage 0 entretanro se tivesse mais estágios na conversa poderiamos ir para proxima

}

exports.execute = execute;
