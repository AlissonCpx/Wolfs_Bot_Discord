
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
  const linkFoto = 'https://theclutch.com.br/wp-content/uploads/2022/02/bind-minecraft1.jpg'
  
    const texto = "π¦ππ‘π§ππ‘ππππ¦ :  Killjoy - Cypher - Chamber - Sage\nππ¨ππππ¦π§ππ¦ : Raze - Reyna\nππ’π‘π§π₯π’ππππ’π₯ππ¦ : Omen - Viper - Astra\nππ‘ππππππ’π₯ππ¦ : Skye - Sova - Breach "

    
    const embed = new Discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setAuthor('BIND')
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
      name: 'bind',
      category: 'Ajuda',
      description: 'Template de como fazer uma pergunta.',
      usage: '$ascent',
    }
  },
}
