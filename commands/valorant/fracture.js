
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
  const linkFoto = 'https://images-ext-1.discordapp.net/external/t2kogf-zJy-rbc4BliTfCgxl6yD3YV7QdcJS0ehv5IU/https/s2.glbimg.com/IoRqAW_PVLLQgOdOcqzyPras8gg%3D/0x0%3A2500x1377/984x0/smart/filters%3Astrip_icc%28%29/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/D/4/u9gxxCSSSATYEpzAzLEw/fracture.jpg?width=862&height=475'
  
    const texto = "π¦ππ‘π§ππ‘ππππ¦ :  Killjoy - Cypher - Chamber\nππ¨ππππ¦π§ππ¦ : Raze - Reyna - Yoru\nππ’π‘π§π₯π’ππππ’π₯ππ¦ : Astra - Viper\nππ‘ππππππ’π₯ππ¦ : Skye - Sova - Breach"

    
    const embed = new Discord.MessageEmbed()
      .setColor(process.env.COLOR)
      .setAuthor('FRACTURE')
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
      name: 'fracture',
      category: 'Ajuda',
      description: 'Template de como fazer uma pergunta.',
      usage: '$ascent',
    }
  },
}
