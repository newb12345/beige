const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '>ladder') {
    	message.channel.send('\n **Are there any requirements for ladder?** \
        \n There are no entrance fee or requirements.  You can play as many times as you want each day. \
        \n **How often are the songs updated?** \
        \n Once every 48 hours.  It is worth mentioning that the songs will contain Platinum-only songs, \
           so non-Platinum members get to experience them too. \n **Can we pick the song(s) we want to play?** \
        \n No, the songs are pre-determined and one random one will be picked from the song list. \
        \n **Source** - https://www.taptap.com/topic/2666165 \n'); 	
        }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
