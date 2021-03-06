
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
  const linkFoto = 'https://images-ext-1.discordapp.net/external/mUFwcK4_TP0CAVK3EzMGOyRVkAa2nKwI6nGRXz-2-zU/https/static1-br.millenium.gg/articles/2/73/22/%40/103951-icebox-valorant-article_image_t-2.png?width=712&height=475'
  
    const texto = "π¦ππ‘π§ππ‘ππππ¦ :  Killjoy - Sage\nππ¨ππππ¦π§ππ¦ : Jett - Reyna - Raze\nππ’π‘π§π₯π’ππππ’π₯ππ¦ : Viper\nππ‘ππππππ’π₯ππ¦ : Sova - Sky"

    
    const embed = new Discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setAuthor('ICEBOX')
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
      name: 'icebox',
      category: 'Ajuda',
      description: 'Template de como fazer uma pergunta.',
      usage: '$ascent',
    }
  },
}
