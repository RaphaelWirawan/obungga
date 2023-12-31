const { Client, Events, GatewayIntentBits } = require("discord.js");
const { token } = require(dotenv);

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(token);
