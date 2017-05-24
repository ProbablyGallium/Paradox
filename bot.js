//Constants
const Discord = require('discord.js');
const client = new Discord.Client();
var GQuotes = []
var FWeapons = ["a steel chair!" , "a baseball bat!" , "a sword!" , "a potato. Seriously." , "A pie! the power of memes."]
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
    message.author.send("HELP:\ng-help: This, of course.\ng-ping: Shows your ping.\ng-PressF: Pays Respects to a user, defaults to you if no user is mentioned.\ng-quote: Pull a quote.\ng-storequote: Store a quote to pull later.")
}
Array.prototype.randomElement = function () {
    return GQuotes[Math.floor(Math.random() * GQuotes.length)]
}
//Quote commands
if (message.content.startsWith(prefix + 'storequote')
) {
  var quote =(message.content.substring(13));
message.channel.send("Stored quote in position " + [GQuotes.length] + ".")
GQuotes.push(quote);
}
if (message.content === (prefix + 'quote')
) {
message.channel.send(GQuotes.randomElement())
}
//Fight command
if (message.content.startsWith(prefix + 'fight')) {
var yourhp = Math.floor((Math.random() * 11) + 100);
var theirhp = Math.floor((Math.random() * 11) + 100);
var you = message.author
var them = message.mentions.users.first()
message.channel.send("It's " + you + " vs " + them + " this week on GalliumTV Fight Night!")
while (yourhp > 0 && theirhp > 0) {
var dmg = (Math.floor((Math.random() * 30) + 1));
message.channel.send(you + "hits" + them + "with" + FWeapons.randomElement() + "for" + dmg + "damage!")
}
}
});
//Token
client.login("MzE1ODM0ODU2MDk1NDgxODU2.DAMhKg.H0j3P1TGoHxlZUV66Sg4fMYjpas");
