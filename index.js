const Discord = require('discord.js');
const dotenv = require('dotenv');
const textToOverlay = require('./text-overlay');
const fs = require('fs');

dotenv.config();

const client = new Discord.Client();

const MOTDS = [
  'I hate Mondays.',
  'Taco Tuesday. Let\'s go to Chick-fil-a.',
  'I don\'t know.',
  'Are you a male?',
  'Don\'t forget to do your timecards.'
]

const MOTD = MOTDS[(new Date().getDay()-1)];

client.on('ready', async () => {
  client.guilds.cache.array().forEach(async guild =>
    {
      console.log(MOTD);
      const files = await textToOverlay('./resources/MicrosoftTeams-image.png', MOTD);
      await guild.systemChannel.send({files: [files]});
  });
  client.destroy();
});

(async () => {
  console.log(process.env.CLIENT_TOKEN);
  await client.login(process.env.CLIENT_TOKEN);
})()