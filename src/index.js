require('dotenv').config()
const discord = require('discord.js')
const client = new discord.Client()

client.on('ready',function(){
  process.stdout.write('Bot is up and running....')
})

client.login(process.env.BOT_TOKEN)