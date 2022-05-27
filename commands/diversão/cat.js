/**
 * O Comando "cat" envia um gif ou uma imagem aleatória de um ou mais gatos.
*/

const Discord = require('discord.js')
const axios = require('axios').default

const api = axios.create({
  baseURL: 'https://api.thecatapi.com/v1',
  timeout: 1000,
})

const titles = [
  'Lindo gatinho',
  'Meow!',
  'Pare de procrastinar.',
  'Aproveitando bem o dia!',
  'Sim.',
  'A mimir?',
]

function randomTitle() {
  if (titles.length === 0) { return undefined }
  const index = Math.floor(Math.random() * titles.length)
  return titles[index]
}

module.exports = {

  run: async (client, message, args) => {
    try {
      const response = await api.get('images/search')
      console.log(response)
      const embed = new Discord.MessageEmbed()
        .setAuthor('Lobos odeiam gatos... seu traidor')
        .setColor(process.env.COLOR)
        .setFooter('2022 © Servidor Wolfs', 'https://i.imgur.com/gQzGies.jpg?width=200,height=200')
        .setTimestamp()
      message.channel.send(embed)
    } catch (error) {
      message.reply('Infelizmente eu não consegui pegar uma foto de gato para você. 😔')
    }
  },

  conf: {},

  get help() {
    return {
      name: 'gatos',
      description: 'Envia um gif ou uma imagem aleatória de um ou mais gatos! API: https://api.thecatapi.com/v1/images/get',
      usage: '!cat',
      category: 'Diversão',
    }
  },
}
