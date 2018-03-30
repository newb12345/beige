const Discord = require('discord.js');
const client = new Discord.Client();
//sql
//const sql = require("sqlite");
//sql.open("./addtips.sqlite");

var fs = require('fs');

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(':memory:');

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
	

 if (command === "table"){
  db.serialize(function() {
  db.run("CREATE TABLE lorem (info TEXT)");
 
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
 
  db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
      messge.channel.send(row.id + ": " + row.info);
  });
});
 
db.close();	
 }	
	
	
/*
  //reading and adding tips  
      if (command === "readtip") {
	      let cat = args[0];
         var read = fs.readFileSync("./source/tips.txt", {"encoding": "utf-8"});
	     message.channel.send(read);

 	sql.get(`SELECT * FROM addtips WHERE category ="${cat}"`).then(row => {
            message.channel.send(`Tips in ${cat}: ${row.suggestion}`)
       		 });	     
	 sql.get("SELECT * FROM addtips", function (err, result, fields) {
    			if (err) throw err;
    		message.channel.send(result);
  		});
        } 
	
	
	
// this whole block is for sqlite
 if (command === "addtip") {
	  let tip = args.slice(1).join(' ');
	  let cat = args[0];
	sql.get(`SELECT * FROM addtips WHERE creator = "${message.author.id}"`).then(row => {
		if (!row) { // Can't find the row.
		  sql.run("INSERT INTO addtips (category, suggestion, creator) VALUES (?, ?, ?)", [cat, tip, message.author.id]);
			} else { // Can find the row.
		  sql.run("INSERT INTO addtips (category, suggestion, creator) VALUES (?, ?, ?)", [cat, tip, message.author.id]);
			}
		}).catch(() => {

		});
		console.error; // Gotta log those errors
                sql.run("CREATE TABLE IF NOT EXISTS addtips (category TEXT, suggestion TEXT, creator TEXT)").then(() => {
                sql.run("INSERT INTO addtips (category, suggestion, creator) VALUES (?, ?, ?)", [cat , tip , message.author.id]);
         });
	message.channel.send("Adding tips succesful!");
	 
  } 
*/
 
         

    
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

