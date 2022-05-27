module.exports = (client) => {

  
const prefix = process.env['token']
  const activities = [
    `${prefix}help para obter ajuda.`,
    `sua derrota! Áuuuuuuuuu`,
  ]
  let i = 0
  setInterval(() => client.user.setActivity(`sua derrota! Áuuuuuuu`, {
    type: 'WATCHING',
  }), 30000)
  client.user
    .setStatus('online')
    .catch(console.log)
  console.log(`Eu estou online agora, meu nome é ${client.user.username}. Há ${client.users.cache.size} usuário(s) online no servidor!`)
}
