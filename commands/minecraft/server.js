
/**
  * O Comando "howtoask" vai enviar uma mensagem ao usuário mostrando como o mesmo deve realizar uma pergunta ao estar com dúvida.
*/

const Discord = require('discord.js')

module.exports = {

  /**
    * Primeiro o metodo run(client, message, args) será executado pelo nosso arquivo message.js
    * Que passará os argumentos atraves do middleware que programamos.
  */

  run: function(client, message, args) {
  const linkFoto = 'https://play-lh.googleusercontent.com/S-wmvJd2VnTxmVAgJ4vanYuyOdUwZOa_Fk7XHG8UsfMRopHf92cweU04hr2HmVpdp9k'
  
    const texto = "Servidor: 24h 🕛\nModo: RL Craft\nVersão: 1.12\nLaucher Sugerido: [clique aqui](https://tlauncher.org/en/) \n\nIP: minewolfs.reis.host"

    
    const embed = new Discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setAuthor('===SERVIDOR MINECRAFT WOLFS===')
      .setThumbnail(linkFoto)
      .setDescription(texto)
        .setFooter('2022 © Servidor Wolfs', 'https://i.imgur.com/gQzGies.jpg?width=60,height=60')
      .setTimestamp()
    message.channel.send({ embed })
  },


  /**
    * Aqui podemos colocar mais algumas configurações do comando.
  */

  conf: {},

  /**
    * Aqui exportamos ajuda do comando como o seu nome categoria, descrição, etc...
  */
 
  get help() {
    return {
      name: 'server',
      category: 'Ajuda',
      description: 'Template de como fazer uma pergunta.',
      usage: '$ascent',
    }
  },
}
