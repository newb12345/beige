const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    //if(message.author.bot) return;
    
    
   // if (message.content === 'ping') {
    //	message.reply('pong');
        
   if (message.content === ">ladder") {
    	message.channel.send('\n __*Are there any requirements for ladder?*__ \
        \n -There are no entrance fee or requirements.  You can play as many times as you want each day. \
        \n\n __*How often are the songs updated?*__ \
        \n -Once every 48 hours.  It is worth mentioning that the songs will contain Platinum-only songs, so non-Platinum members get to experience them too. \
        \n\n __*Can we pick the song(s) we want to play?*__ \
        \n -No, the songs are pre-determined and one random one will be picked from the song list. \
        \n\n **Source** - https://www.taptap.com/topic/2666165 \n'); 	
        }
      if (message.content === "hello") {
          message.reply('hi~');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

