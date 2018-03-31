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
    const swearWords = ["darn", "fuck", "shit", "damn","dick","bitch","cunt","shag","pussy"];
	if(swearWords.some(word => message.content.toLowerCase().includes(word))) {
		 message.delete().catch(O_o=>{});
 		 message.reply("Oh no you said a bad word!!! I deleted it for ya.");
		 
  // Or just do message.delete();
		} 
//prefix = ">"
  if(message.content.indexOf(process.env.prefix) !== 0) return;
const categ = ["ladder", "club", "roadshow","ranking","krunk-dorm", "others"];
  const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //faq's on ladder  
    switch(command) {
		case 'ladder':    
         		var com = fs.readFileSync("./source/ladder.txt", {"encoding": "utf-8"});
	   		message.channel.send(com);
		    break;
		case 'roadshow':    
         		var com = fs.readFileSync("./source/roadshow.txt", {"encoding": "utf-8"});
	   		message.channel.send(com);
		    break;
		case 'nhr':    
         		var com = fs.readFileSync("./source/nhr.txt", {"encoding": "utf-8"});
	   		message.channel.send(com);
		    break;
		case 'club':    
         		var com = fs.readFileSync("./source/club.txt", {"encoding": "utf-8"});
	   		message.channel.send(com);
		  	  break;
		 case 'collection':    
         		var com = fs.readFileSync("./source/collection.txt", {"encoding": "utf-8"});
	   		message.channel.send(com);
		   	 break;
		 case 'events':    
         		var com = fs.readFileSync("./source/events.txt", {"encoding": "utf-8"});
	   		message.channel.send(com);
		   	 break;
		 case 'achievements':    
         		var com = fs.readFileSync("./source/achievements.txt", {"encoding": "utf-8"});
	   		message.channel.send(com);
		   	 break;
		 case 'training':    
         		var com = fs.readFileSync("./source/training.txt", {"encoding": "utf-8"});
	   		message.channel.send(com);
		   	 break;
		 case 'ranking':    
         		var com = fs.readFileSync("./source/ranking.txt", {"encoding": "utf-8"});
	   		message.channel.send(com);
		   	 break;
		 case 'management':    
         		var com = fs.readFileSync("./source/management.txt", {"encoding": "utf-8"});
	   		message.channel.send(com);
		   	 break;   
	         case 'schedule':    
         		var com = fs.readFileSync("./source/schedule.txt", {"encoding": "utf-8"});
	   		message.channel.send(com);
		   	 break; 
		 case 'krunkdorm':    
         		var com = fs.readFileSync("./source/krunkdorm.txt", {"encoding": "utf-8"});
	   		message.channel.send(com);
		   	 break; 
		  case 'shop':    
         		var com = fs.readFileSync("./source/shop.txt", {"encoding": "utf-8"});
	   		message.channel.send(com);
		   	 break; 		    
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
		let cat = args[0];
		  if(!cat)
   			   return message.reply("Choose first which tip you want to view :" + (categ));
		if(!categ.some(word => message.content.includes(word))) 
 			return message.reply("Category should be one of these:" + (categ));
		switch(cat) {
          	  // !ping
          	  case 'ladder':
			var tips = fs.readFileSync("./source/tips_ladder.txt", {"encoding": "utf-8"});
			message.channel.send(tips);
          		 break;
		case 'club':
			var tips = fs.readFileSync("./source/tips_club.txt", {"encoding": "utf-8"});
			message.channel.send(tips);
          		 break;	
		case 'roadshow':
			var tips = fs.readFileSync("./source/tips_roadshow.txt", {"encoding": "utf-8"});
			message.channel.send(tips);
          		 break;	
		case 'ranking':
			var tips = fs.readFileSync("./source/tips_ranking.txt", {"encoding": "utf-8"});
			message.channel.send(tips);
          		 break;	
		case 'krunk-dorm':
			var tips = fs.readFileSync("./source/tips_dorm.txt", {"encoding": "utf-8"});
			message.channel.send(tips);
          		 break;	
		case 'others':
			var tips = fs.readFileSync("./source/tips_others.txt", {"encoding": "utf-8"});
			message.channel.send(tips);
          		 break;	
            // Just add any case commands if you want to..
     		   }

	     
        }
	if (command === "hi") {
		var user = "<@!398297283831136256>" ;//Just assuming that's their user id.
		var userID = user.replace(/[<@!>]/g, '');
		var member = message.guild.member(userID);
		    message.member.send("hi!");
		client.users.get("398297283831136256").send("My Message");
		message.channel.send("Hi!");
	}
	
	if (command === "addtip"){
	 	let cat = args[0];
		   if(!cat)
   			   return message.reply("Eyyy...Choose what category is the tip you want to view first.");
		let tip = args.slice(1).join(' ');
			  if(!tip)
   			   return message.reply("Ya! You forgot to include the tip!");
	
	if(!categ.some(word => message.content.includes(word))) 
 		return message.reply("Category should be one of these:" + (categ));
		
	 message.channel.send("Thanks! Your tip will be added after the mods read it. ^^");
   
        message.member.send("Category:  "+ (cat) ); // send that user a DM
	message.member.send(" Tip: " + (tip) +" by " + (  message.author.username  ));
		
	
	}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

