const Discord = require('discord.js');
const dotenv = require('dotenv');
const textToOverlay = require('./text-overlay');

dotenv.config();

const client = new Discord.client();

const MOTDS = [
  'I hate Mondays.',
  'Taco Tuesday. Let\'s go to Chick-fil-a.',
  'I don\'t know.',
  'Are you a male?',
  'Don\'t forget to do your timecards.'
]

const MOTD = MOTDS[(new Date()-1)];

client.on('ready', async () => {
  const responses = client.guilds.array().map(guild =>
    guild.systemChannel.send(null, {
      textToOverlay('./resources/MicrosoftTeams-image.png', MOTD);
    }));
  await Promise.all(responses);
  client.destroy();
})

client.login(process.env.CLIENT_TOKEN);