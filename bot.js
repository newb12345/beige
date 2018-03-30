const Discord = require('discord.js');
const client = new Discord.Client();
//sql

var fs = require('fs');


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
  //faq's on ladder  
      if (command === "ladder") {
         var lad = fs.readFileSync("./source/ladder.txt", {"encoding": "utf-8"});
	     message.channel.send(lad);
        }
//help command
      if(command === "h") {
	  var help = fs.readFileSync("./source/help.txt", {"encoding": "utf-8"}); 
           message.delete().catch(O_o=>{}); 
           message.author.send(help);
       }    
//make beige greet you	
      if (command === "hello") {
          message.reply('hi~');
  	}
//make beige talk
     if(command === "say") {     
	     //for mods and admin only
	if(!message.member.roles.some(r=>["Admin", "Mod"].includes(r.name)))
		return message.reply("Sorry, you don't have permissions to use this!");
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
// for reading text         
         }
	
	if (command === "readtip") {
         var tips = fs.readFileSync("./source/tips.txt", {"encoding": "utf-8"});
	     message.channel.send(tips);
        }
	if (command === "addtip"){
	 	let cat = args[0];
		   if(!cat)
   			   return message.reply("Eyyy...Choose what category is the tip first.");
		let tip = args.slice(1).join(' ');
			  if(!tip)
   			   return message.reply("Ya! You forgot to include the tip!");
		
	 message.channel.send("Thanks! Your tip will be added after the mods read it. ^^");	
	}
    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

