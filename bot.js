//Constants
const Discord = require('discord.js');
const client = new Discord.Client();
//Boot Sequence
client.on('ready', () => {
  console.log('Ready!');
});
//The Good Shit
var prefix = "g-"
//Ping command
client.on('ready', () => {
        client.user.setGame('Being Coded by Gallium#1327');
});
client.on('message', message => {
if (message.author.bot) {return};
  if (message.content.startsWith (prefix + 'ping')
) {
    message.channel.send('Pong! ' + client.ping + 'ms');
    console.log('Client Ping reported as ' + client.ping + 'ms.')
  }
//PressF Command
  if (message.content === (prefix + 'pressF')) {
message.reply("🇫")
}
else if (message.content.startsWith(prefix + 'pressF')) {
  message.mentions.users.first().lastMessage.react("🇫")
}
//Help command
  if (message.content === (prefix + 'help')
) {
    message.react('👌');
    message.author.send("HELP:\n-help: This, of course.\n-ping: Shows your ping.\n-PressF: Pays Respects to a user, defaults to you if no user is mentioned.\n-quote: Pull a  quote.\n-storequote: Store a quote to pull later.")
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var GQuotes = ['placeholder do not reference',]
if (message.content.startsWith(prefix + 'storequote')
) {
  var quote =(message.content.substring(13));
message.channel.send("Stored quote in position " + [GQuotes.length - 1] + ".")
GQuotes.push(quote);
}
if (message.content === (prefix + 'quote')
) {
message.channel.send(GQuotes[getRandomIntInclusive(1, [GQuotes.length - 1])])
}
});
//Token
client.login("MzE1ODM0ODU2MDk1NDgxODU2.DAMhKg.H0j3P1TGoHxlZUV66Sg4fMYjpas");
