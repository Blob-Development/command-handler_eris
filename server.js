/*
  Reference:
  - https://github.com/abalabahaha/eris/blob/master/lib/Constants.js
  - https://abal.moe/Eris/docs/reference
*/

const bot = require("./handler/Client.js");
require('dotenv').config();

const client = new bot(`Bot ${process.env.SECRET}`, { // https://abal.moe/Eris/docs/Client
  intents: ["guilds", "guildMembers", "guildMessages", "guildPresences"],
  messageLimit: 100,
  maxShards: "auto"
});

require("./handler/Module.js")(client);
require("./handler/Event.js")(client);

client.connect();
