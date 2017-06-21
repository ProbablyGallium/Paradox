//Constants
const Discord = require('discord.js');
const client = new Discord.Client();
var GQuotes = []
var Fstrings = [", but they tripped over a rock and fell in the ocean.", ", but they hurt themselves in their confusion.", ". SHORYUKEN!", ". HADOUKEN!", ". KA-POW!", " with a pillow.", " with a large fish.", ", but they stumbled over their shoelaces.", ", but they missed.", " with a burnt piece of toast.", ", but it wasn't very effective..."];
var rand = Fstrings[Math.floor(Math.random() * Fstrings.length)];
String.prototype.toAlternatingCase = function () {
    tmp = this.toLowerCase(); (this[0] == this[0].toLowerCase() ? i = 1 : i = 0); for(i; i < tmp.length; i = i+2) { tmp = tmp.substr(0,i) + tmp[i].toUpperCase() + tmp.substr(i+1); } return tmp;
}
function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const sleep = require('system-sleep');
//Boot Sequence
client.on('ready', () => {
  console.log('Ready!');
});
//The Good Shit
var prefix = "g-"
//Ping command
client.on('ready', () => {
        client.user.setGame('Being Coded by Gallium#1327...slowly');
});
client.on('message', message => {
if (message.author.bot) {return};
  if (message.content.startsWith (prefix + 'ping')
) {
    message.channel.send('Pong! ' + Math.round(client.ping) + 'ms');
    console.log('Client Ping reported as ' + Math.round(client.ping) + 'ms.')
  }
//PressF Command
  if (message.content === (prefix + 'pressF')) {
message.reply("🇫")
}
else if (message.content.startsWith(prefix + 'pressF')) {
  if (message.channel.type === "dm") {
    message.channel.send("🇫")
  }
  else {
  message.mentions.users.first().lastMessage.react("🇫")
}
}
//Help command
  if (message.content === (prefix + 'help')
) {
    message.react('👌');
    message.author.send("HELP:\ng-help: This, of course.\ng-ping: Shows your ping.\ng-pressF: Pays Respects to a user, defaults to you if no user is mentioned.\ng-quote: Pull a quote.\ng-storequote: Store a quote to pull later.\ng-coin: Flip a coin.\ng-spongemock <text>: MoCk SoMe TeXt\ng-fight @user: Fight someone, ripped straight from Bug-Bot\ng-guildinfo: Learn about the guild you're in. **REQUIRES EMBED LINKS**\ng-spinner: Spin a fidget spinner.\ng-about: Learn more about me!")
}
Array.prototype.randomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)]
}
//Quote commands
if (message.content.startsWith(prefix + 'storequote')
) {
  if (message.channel.type === "dm") {
    message.channel.send("Sorry, but this command can't be used in DMs.")
  }
  else {
  var quote =(message.content.substring(13));
message.channel.send("Stored quote in position " + [GQuotes.length] + ".")
GQuotes.push(quote);
}}
if (message.content === (prefix + 'quote')
) {
  if (message.channel.type === "dm") {
    message.channel.send("Sorry, but this command can't be used in DMs.")
  }
  else {
message.channel.send(GQuotes.randomElement(GQuotes))
}
}
//Coin command
if (message.content.startsWith(prefix + 'coin')) {
var random = Math.floor((Math.random() * 10) + 1);
if(random & 1)
{ message.channel.send("The coin landed on **heads**.")
}
else
{ message.channel.send("The coin landed on **tails**.")
}
}
//SpOnGeMoCk CoMmAnD
if (message.content.startsWith(prefix + 'spongemock')) {
  var mocktext = message.content.substring(12)
  message.channel.send(mocktext.toAlternatingCase() + "\n\nhttps://pbs.twimg.com/media/C_emMBoWsAAgxCu.jpg")
}
//Fight Command, No regrets, Logiz
if(message.content.startsWith(prefix + "fight")) {
 if (message.mentions.users.size < 1) {
   message.reply("You can't fight thin air, pick someone...");
}
else if (message.mentions.users.size > 1) {
  message.channel.send("Whoa, hang on there, Chuck Norris. One at a time.")
}
  else {
    if (message.channel.type === "dm") {
      message.channel.send(message.author.username + " is fighting GalliumBot" + Fstrings.randomElement(Fstrings));
    }
    else {
message.channel.send(message.author.username + " is fighting " + message.mentions.users.first().username + Fstrings.randomElement(Fstrings));
}}}
//Guildinfo command
if (message.content === (prefix + "guildinfo")) {
  if (message.channel.type === "dm") {
    message.channel.send("Whoa, there! You trying to crash the bot? I can't give you guild info in a channel that isn't in a guild!")
  }
  else {
    const embed = {
      "description": "Created by " + message.guild.owner.user.tag + " on "  + message.guild.createdAt,
      "color": message.member.displaycolor,
      "thumbnail": {
        "url": message.guild.iconURL
      },
      "author": {
        "name": "Information on " + message.guild.name + ":"
      },
      "fields": [
        {
          "name": "Guild ID",
          "value": message.guild.id
        },
        {
          "name": "Members",
          "value": message.guild.memberCount + " members"
        },
        {
          "name": "Region",
          "value": message.guild.region
        }
      ]
    };
message.channel.send({embed})
}}
if (message.content === (prefix + 'about')){
message.channel.send(":wave: **Hi there!** :smiley: \n\nThis bot is made by Gallium#1327, and the code can be found at https://github.com/benzarr410/GalliumBot. It's also being further developed by Akii#2111 so that it fits what their server needs, so check out their repo too at https://github.com/jennasisis/GalliumBot. \n\nYou can find all the commands for this bot by typing ``g-help``. **Remember, this bot is still in development.** So most of its features may still be buggy. If you encounter any problems, please feel free to contact Gallium#1327. \n\n**Thanks for using the bot!**")
}
if(message.content.startsWith(prefix + "shame")) {
 if (message.mentions.users.size < 1) {
   message.reply("Shame on...no one. You forgot to shame someone.");
}
else if (message.mentions.users.size > 1) {
  message.channel.send("Whoa, you're shaming too many people. One at a time pls.")
}
  else {
message.channel.send(message.mentions.users.first() + ", 🔔 ***S H A M E*** 🔔");
}
}
if (message.content.startsWith(prefix + "spinner")) {
 if (message.content == prefix + "spinner") {
   message.channel.send("Available spinners: Red, Orange, Yellow, Green, Blue, Purple, Space\n\nSpin one of these with `g-spinner <type>`")
 }
 else {
  var spinnerType = message.content.substring(10)
if (spinnerType == "red") {
  var spinner = "<:SpinnerRed:327104207683321856>"
}
else if (spinnerType == "orange") {
  var spinner = "<:SpinnerOrange:327104207662481408>"
}
else if (spinnerType == "yellow") {
  var spinner = "<:SpinnerYellow:327104208048226304>"
}
else if (spinnerType == "green") {
  var spinner = "<:SpinnerGreen:327104207058370560> "
}
else if (spinnerType == "blue") {
  var spinner = "<:SpinnerBlue:327104206987198464>"
}
else if (spinnerType == "purple") {
  var spinner = "<:SpinnerPurple:327104206567636992>"
}
else if (spinnerType == "pink") {
  var spinner = "<:SpinnerPink:327104206244937729>"
}
else if (spinnerType == "space") {
  var spinner = "<:SpinnerSpace:327104206060126208>"
}
message.channel.send("You spun the " + spinnerType + " spinner. " + spinner )
var spinFor = randNum(10, 120)
sleep(spinFor*1000);
message.channel.send("Your " + spinnerType + " spinner spun for **" + spinFor + "** seconds. " + spinner)
}}
});
//Token
client.login("MzE1ODM0ODU2MDk1NDgxODU2.DChP4w.XofKDgPi6rjkYtS2-dV33mveXBk");
