const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '>ladder') {
    	message.reply('FAQ - https://www.taptap.com/topic/2666165 \n Q: Are there any requirements for ladder? \n A: There are no entrance fee or requirements.  You can play as many times as you want each day.Q: How often are the songs updated?');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
