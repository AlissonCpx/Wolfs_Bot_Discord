
/**
  * O Comando "howtoask" vai enviar uma mensagem ao usuΓ‘rio mostrando como o mesmo deve realizar uma pergunta ao estar com dΓΊvida.
*/

const Discord = require('discord.js')

module.exports = {

  /**
    * Primeiro o metodo run(client, message, args) serΓ‘ executado pelo nosso arquivo message.js
    * Que passarΓ‘ os argumentos atraves do middleware que programamos.
  */

  run: function(client, message, args) {
  const linkFoto = 'https://static.wikia.nocookie.net/valorant/images/7/70/Loading_Screen_Haven.png/revision/latest?cb=20200620202335'
  
    const texto = "π¦ππ‘π§ππ‘ππππ¦ :  Cypher - Sage\nππ¨ππππ¦π§ππ¦ : Raze - Reyna - Phoenix - Jett\nππ’π‘π§π₯π’ππππ’π₯ππ¦ : Omen\nππ‘ππππππ’π₯ππ¦ : Sova - Breach"

    
    const embed = new Discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setAuthor('HAVEN')
      .setThumbnail(linkFoto)
      .setDescription(texto)
        .setFooter('2022 Β© Servidor Wolfs', 'https://i.imgur.com/gQzGies.jpg?width=60,height=60')
      .setTimestamp()
    message.channel.send({ embed })
  },


  /**
    * Aqui podemos colocar mais algumas configuraΓ§Γ΅es do comando.
  */

  conf: {},

  /**
    * Aqui exportamos ajuda do comando como o seu nome categoria, descriΓ§Γ£o, etc...
  */
 
  get help() {
    return {
      name: 'haven',
      category: 'Ajuda',
      description: 'Template de como fazer uma pergunta.',
      usage: '$ascent',
    }
  },
}
