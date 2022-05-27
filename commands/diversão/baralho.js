/**
 * O Comando "cat" envia um gif ou uma imagem aleatória de um ou mais gatos.
*/

const Discord = require('discord.js')
const axios = require('axios').default

const api = axios.create({
  baseURL: 'https://deckofcardsapi.com/api/deck/zkh0s13aw6ir/draw/?count=1',
  timeout: 1000,
})

module.exports = {
  run: async (client, message, args) => {
    try {
      const deck = await api.get()
      
      const embed = new Discord.MessageEmbed()
        .setAuthor('Sua carta é')
        .setImage(deck.data.cards[0].image)
        .setColor(process.env.COLOR)
        .setFooter('2022 © Servidor Wolfs', 'https://i.imgur.com/gQzGies.jpg?width=200,height=200')
        .setTimestamp()
      message.channel.send(embed)
    } catch (error) {
      message.reply('Infelizmente eu não consegui pegar uma carta. 😔')
    }
  },

  conf: {},

  get help() {
    return {
      name: 'baralho',
      description: '',
      usage: '!baralho',
      category: 'Diversão',
    }
  },
}
