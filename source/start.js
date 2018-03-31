// start.js

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Ladder")
  .setAuthor(client.user.username, "https://i.imgur.com/TgNMUlS.jpg")
  .setColor(3447003)
  .setDescription("Ladder FAQ")
  .setFooter("Brought to you by: BlinKcle, weiwei, Steve", "http://i.imgur.com/w1vhFSR.png")
  .setThumbnail("http://i.imgur.com/p2qNFag.png")
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  .addField("Q: How often are the songs updated?",
    "A: Once every 48 hours.  It is worth mentioning that the songs will contain Platinum-only songs, so non-Platinum members get to experience them too.", true)
  .addField("Q: Can we pick the song(s) we want to play?", "A: No, the songs are pre-determined and one random song will be chosen for you from the song list.", true)
  /*
   * Blank field, useful to create some space.
   */
  .addBlankField(true)
  .addField("Inline Field 3", "You can have a maximum of 25 fields.", true);

module.exports = Object.freeze({
  embed: {embed}
});
