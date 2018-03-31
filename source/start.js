// start.js

module.exports = {{embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: "https://i.imgur.com/TgNMUlS.jpg"
    },
    title: "Ladder",
    url: "http://google.com",
    description: "Ladder FAQ",
	"thumbnail": {
      "url": "https://i.imgur.com/TgNMUlS.jpg"
    },
//thumbnail: "https://i.imgur.com/TgNMUlS.jpg", 
    fields: [{
        name: "Q: How often are the songs updated?",
        value: "A: Once every 48 hours.  It is worth mentioning that the songs will contain Platinum-only songs, so non-Platinum members get to experience them too.."
      },
      {
        name: "Q: Can we pick the song(s) we want to play?",
        value: "A: No, the songs are pre-determined and one random song will be chosen for you from the song list."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Example"
    }
  }
}
};
