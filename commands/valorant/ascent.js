
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
  const linkFoto = 'https://cdn1.dotesports.com/wp-content/uploads/sites/3/2020/07/07194327/Ascent-2-1536x801-1.png'
  const texto = "π¦ππ‘π§ππ‘ππππ¦ :  Killjoy\nππ¨ππππ¦π§ππ¦ : Raze - Reyna \nππ’π‘π§π₯π’ππππ’π₯ππ¦ : Brimstone - Omen \nππ‘ππππππ’π₯ππ¦ : Skye - Breach"

    
    const embed = new Discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setAuthor('ASCENT')
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
      name: 'ascent',
      category: 'Ajuda',
      description: 'Template de como fazer uma pergunta.',
      usage: '$ascent',
    }
  },
}
