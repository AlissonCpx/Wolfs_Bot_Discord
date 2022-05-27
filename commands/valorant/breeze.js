
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
  const linkFoto = 'https://images-ext-1.discordapp.net/external/Ef1K6wlwMIHsC0sM4sXW-yLzxH9GVjME6xzLGo7r8H0/%3Fcb%3D20210427160616/https/static.wikia.nocookie.net/valorant/images/1/10/Loading_Screen_Breeze.png/revision/latest?width=844&height=475'
  
    const texto = "𝗦𝗘𝗡𝗧𝗜𝗡𝗘𝗟𝗔𝗦 :  Cypher - Sage\n𝗗𝗨𝗘𝗟𝗜𝗦𝗧𝗔𝗦 : Raze - Jett - Yoru\n𝗖𝗢𝗡𝗧𝗥𝗢𝗟𝗔𝗗𝗢𝗥𝗘𝗦 : Viper\n𝗜𝗡𝗜𝗖𝗜𝗔𝗗𝗢𝗥𝗘𝗦 : Skye - Sova"

    
    const embed = new Discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setAuthor('BREEZE')
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
      name: 'breeze',
      category: 'Ajuda',
      description: 'Template de como fazer uma pergunta.',
      usage: '$ascent',
    }
  },
}
