// ladder.js
//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Ladder")
  .setColor(3447003)
  .setDescription("FAQ's about the Ladder")
  .setFooter("Source:https://www.taptap.com/topic/2666165","https://i.imgur.com/TgNMUlS.jpg")
  .setThumbnail("https://i.imgur.com/TgNMUlS.jpg")
  .setTimestamp()
  .addField("Are there any requirements for ladder?",
    "A:  There are no entrance fee or requirements.  You can play as many times as you want each day. ", true)
  .addField("Q: How often are the songs updated?",
    "A: Once every 48 hours.  It is worth mentioning that the songs will contain Platinum-only songs, so non-Platinum members get to experience them too.", true)

    .addField("Q: Can we pick the song(s) we want to play?", "A: No, the songs are pre-determined and one random song will be chosen for you from the song list.", true)
    .addField("During the song, I'm clearly leading.  Yet in the results screen I lost.  How?", "The status on the upper left corner is merely your score less the opponent's score based on your taps and influence.  Score bonuses are not included in this calculation, but are added in during the results screen.", true)

.addField("Are there any placement rewards?", "No, all players in the same medal receive the same reward, regardless of stars.", true)
.addField("Will there be a special card every month? Which medal is eligible for the card?", "Yes, Gold Medal players and above will receive a special card every month.", true)
.addField(" How is my opponent decided?", "Based on your current medal/placement.", true)
.addField(" After reaching Champion Medal, what is the maximum number of stars a person can obtain?", "You can obtain up to 9999 stars, but the rewards do not change as it is based on medal only.", true)
.addField(" Is there an achievement associated with ladder?", "Not at this time.  We will add it later.", true)
/*
   * Blank field, useful to create some space..addBlankField(true)
   */

;
module.exports = Object.freeze({
  embed: {embed}
});
