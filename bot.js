const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '>ladder') {
    	message.channel.send(' \n Q: Are there any requirements for ladder? \n A: There are no entrance fee or requirements.  You can play as many times as you want each day.\n Q: How often are the songs updated?');
        message.channel.send(' \n A: Once every 48 hours.  It is worth mentioning that the songs will contain Platinum-only songs, so non-Platinum members get to experience them too. \n Q: Can we pick the song(s) we want to play? \n A: No, the songs are pre-determined and one random one will be picked from the song list.');
        message.channel.send('**Source** - https://www.taptap.com/topic/2666165 \n' )  	
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
