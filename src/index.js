require('dotenv').config()
const messages = require('./messages.json')
const discord = require('discord.js')

const client = new discord.Client()
client.on('ready',function(){
  process.stdout.write('Bot is up and running....')
})

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.cache.find(ch => ch.name === 'general');
  if (!channel) return;
  channel.send(`${messages.welcomeMessage} ${member} ! ${messages.welcomeMessageBody}`);
});

client.login(process.env.BOT_TOKEN)