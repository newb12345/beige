const Discord = require('discord.js');
const client = new Discord.Client();
//sql
//const sql = require("sqlite");
//sql.open("./tips.sqlite");

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
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
// for reading text         
         }

  //reading and adding tips  
      if (command === "readtip") {
         var read = fs.readFileSync("./source/tips.txt", {"encoding": "utf-8"});
	     message.channel.send(read);

        } 
	
// this whole block is for sqlite
 if (command === "addtip") {
	  let tips = args.slice(1).join(' ');
	  let category = args[0];
	 message.channel.send(category);
	 message.channel.send("------");
	 message.channel.send(tips);
	 /*
sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      sql.run("INSERT INTO scores (category, tips, member) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS tips (category TEXT, tips TEXT, member TEXT)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });
});
*/

  } 
//*
 
         

    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

