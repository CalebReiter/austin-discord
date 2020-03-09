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
  const responses = client.guilds.cache.array().map(async guild => {
    try {
      const files = await textToOverlay('./resources/MicrosoftTeams-image.png', MOTD);
      await guild.systemChannel.send('@everyone', {files: [files]});
    } catch (e) {
    await guild.systemChannel.send('Today is a bad day.');
  }});
  await Promise.all(responses);
  client.destroy();
});

client.login(process.env.CLIENT_TOKEN);
