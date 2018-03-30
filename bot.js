const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require('fs');
var help = fs.readFileSync("./help.txt", {"encoding": "utf-8"});  

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', async message => {
    //botception
     if(message.author.bot) return;
    
//prefix = ">"
  if(message.content.indexOf(process.env.prefix) !== 0) return;
    
  const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
    
   if (command === "ladder") {
    	message.channel.send('\n __*Are there any requirements for ladder?*__ \
        \n -There are no entrance fee or requirements.  You can play as many times as you want each day. \
        \n\n __*How often are the songs updated?*__ \
        \n -Once every 48 hours.  It is worth mentioning that the songs will contain Platinum-only songs, so non-Platinum members get to experience them too. \
        \n\n __*Can we pick the song(s) we want to play?*__ \
        \n -No, the songs are pre-determined and one random one will be picked from the song list. \
        \n\n **Source** - https://www.taptap.com/topic/2666165 \n'); 	
        }
    
      if (command === "hello") {
          message.reply('hi~');
  	}
     if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
// for reading text         
       
       if(command === "help") {
           message.channel.send(help);
       }
         
  }
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

