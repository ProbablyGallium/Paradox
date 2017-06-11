//Constants
const Discord = require('discord.js');
const client = new Discord.Client();
var GQuotes = []
var Fstrings = [", but they tripped over a rock and fell in the ocean.", ", but they hurt themselves in their confusion.", ". SHORYUKEN!", ". HADOUKEN!", ". KA-POW!", " with a pillow.", " with a large fish.", ", but they stumbled over their shoelaces.", ", but they missed.", " with a burnt piece of toast.", ", but it wasn't very effective..."];
var rand = Fstrings[Math.floor(Math.random() * Fstrings.length)];
String.prototype.toAlternatingCase = function () {
    tmp = this.toLowerCase(); (this[0] == this[0].toLowerCase() ? i = 1 : i = 0); for(i; i < tmp.length; i = i+2) { tmp = tmp.substr(0,i) + tmp[i].toUpperCase() + tmp.substr(i+1); } return tmp;
}
//Boot Sequence
client.on('ready', () => {
  console.log('Ready!');
});
//The Good Shit
var prefix = "g-"

client.on('ready', () => {
  client.user.setGame('Being Coded by Gallium#1327');
});
client.on('message', message => {
if (message.author.bot) {return};

//Ping command
if (message.content.startsWith (prefix + 'ping')) {
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
  if (message.content === (prefix + 'help')) {
    message.react('👌');
    message.author.send("HELP:\ng-help: This, of course.\ng-ping: Shows your ping.\ng-PressF: Pays Respects to a user, defaults to you if no user is mentioned.\ng-quote: Pull a quote.\ng-storequote: Store a quote to pull later.\ng-coin: Flips a coin.\ng-spongemock: dOeS tHiS tO tHe StRiNg, attached with a spongemock meme.")
}
Array.prototype.randomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)]
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
message.channel.send(GQuotes.randomElement(GQuotes))
}
//Coin command
if (message.content.startsWith(prefix + 'coin')) {
var random = Math.floor((Math.random() * 10) + 1);
if(random & 1)
{
  message.channel.send("The coin landed on **heads**.")  // ODD
} else {
message.channel.send("The coin landed on **tails**.")    // EVEN
  }
}
//SpOnGeMoCk CoMmAnD
if (message.content.startsWith(prefix + 'spongemock')) {
  var mocktext = message.content.substring(12)
  message.channel.send(mocktext.toAlternatingCase() + "\n\nhttps://pbs.twimg.com/media/C_emMBoWsAAgxCu.jpg")
  }
});
//Fight Command, No regrets, Logiz
if(message.content.startsWith(prefix + "fight")) {
 if (message.mentions.users.size < 1) {
   console.log(message.mentions.users.size)
   message.reply("you can't fight thin air, pick someone...");
}
else if (message.mentions.users.size > 1) {
  message.channel.send("Whoa, hang on there, Chuck Norris. One at a time.")
}
  else {
message.channel.send(message.author.username + " is fighting " + message.mentions.users.first().username + Fstrings.randomElement(Fstrings));
}
}
//ayy => lmao
if (message.content.startsWith("ayy")){
  message.channel.send("lmao");
}
//Token
client.login("Your application\'s token here");
