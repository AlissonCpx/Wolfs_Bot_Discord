
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
  const linkFoto = 'https://cdn1.dotesports.com/wp-content/uploads/sites/3/2020/07/07194327/Ascent-2-1536x801-1.png'
  const texto = "𝗦𝗘𝗡𝗧𝗜𝗡𝗘𝗟𝗔𝗦 :  Killjoy\n𝗗𝗨𝗘𝗟𝗜𝗦𝗧𝗔𝗦 : Raze - Reyna \n𝗖𝗢𝗡𝗧𝗥𝗢𝗟𝗔𝗗𝗢𝗥𝗘𝗦 : Brimstone - Omen \n𝗜𝗡𝗜𝗖𝗜𝗔𝗗𝗢𝗥𝗘𝗦 : Skye - Breach"

    
    const embed = new Discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setAuthor('ASCENT')
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
      name: 'ascent',
      category: 'Ajuda',
      description: 'Template de como fazer uma pergunta.',
      usage: '$ascent',
    }
  },
}
