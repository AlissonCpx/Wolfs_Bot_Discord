
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
  const linkFoto = 'https://s2.glbimg.com/M7RriMa_cAQynuksWfEt4_A8iJg=/0x0:930x522/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2020/V/q/mOhbr6Qb2sopJj1DmaEg/split.png'
  
    const texto = "𝗦𝗘𝗡𝗧𝗜𝗡𝗘𝗟𝗔𝗦 :  Cypher - Sage\n𝗗𝗨𝗘𝗟𝗜𝗦𝗧𝗔𝗦 : Raze - Reyna\n𝗖𝗢𝗡𝗧𝗥𝗢𝗟𝗔𝗗𝗢𝗥𝗘𝗦 : Omen - Astra\n𝗜𝗡𝗜𝗖𝗜𝗔𝗗𝗢𝗥𝗘𝗦 : Sova - Breach "

    
    const embed = new Discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setAuthor('SPLIT')
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
      name: 'split',
      category: 'Ajuda',
      description: 'Template de como fazer uma pergunta.',
      usage: '$ascent',
    }
  },
}
