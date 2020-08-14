// Supports ES6
// import { create, Whatsapp } from 'venom-bot';
const venom = require('venom-bot'); // Estamos importando uma API que permite gerar um QRcode do Whatzapp
const banco = require ('./banco') // Estamos importanto o banco de dados para que será utilizado para anexar os usuarios
const stages = require ('./stages') //// Estamos importando a biblioteca que conterar os estágios da conversa

venom.create().then((client) => start(client));
function start(client) {
  client.onMessage((message) => {
    console.log(message)
    let resp = stages.step[getStage(message.from)].obj.execute(message.from, message.body, message.sender.name);
/*Com a resposta dos stages vamos gerar um array que será posteriormente repassado para a pessoa que mandou a mensagem */


    for (let index = 0; index < resp.length; index++) {
      const element = resp[index];
      client.sendText(message.from, element)
      
    }
  });
}


function getStage(user){
  if (banco.db[user]) {
    //Se existir esse numero no banco de dados
    return banco.db[user].stage;
  
  } else {
    //Se for a primeira vez que entra e contato
    banco.db[user] = {
      stage: 0,
      itens: [],
    };
    return banco.db[user].stage;
  }
}


