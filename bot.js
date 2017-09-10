//Constants
const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const config = require('./config.json');
const away = require("./away.json");
const tags = require("./tags.json")
const prefix = config.prefix
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
const hastebin = require('hastebin-gen');
var Fstrings = [" with a transformer.", ", but creates a black hole and gets sucked in.", " with poutine.", ", but they slipped on a banana peel", " and in the end, the only victor was the coffin maker.", ", and what a fight it is!  Whoa mama!", ", with two thousand blades!", ", but he fell into a conveniently placed manhole!" , ", but they tripped over a rock and fell in the ocean.", ", but they hurt themselves in their confusion.", ". SHORYUKEN!", ". HADOUKEN!", ". KA-POW!", " with a pillow.", " with a large fish.", ", but they stumbled over their shoelaces.", ", but they missed.", " with a burnt piece of toast.", ", but it wasn't very effective..."];
var rand = Fstrings[Math.floor(Math.random() * Fstrings.length)];
var dadmode = 0
String.prototype.toAlternatingCase = function () {
    tmp = this.toLowerCase(); (this[0] == this[0].toLowerCase() ? i = 1 : i = 0); for(i; i < tmp.length; i = i+2) { tmp = tmp.substr(0,i) + tmp[i].toUpperCase() + tmp.substr(i+1); } return tmp;
}
function insertSpaces(aString) {
  return aString.split("").join(" ");
}
function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Boot Sequences
client.on('ready', () => {
  console.log('Ready!')
});
//Ping command
client.on('ready', () => {
        client.user.setGame('Being Coded by Gallium#1327...slowly');
});
client.on('guildCreate', () => {
  console.log("Joined guild " + guild.name + "with " + guild.memberCount + " members.")
})
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
    message.author.send("HELP:\np.help: This, of course.\np.ping: Shows your ping.\np.pressF: Pays Respects to a user, defaults to you if no user is mentioned.\np.quote: Pull a quote.\np.storequote: Store a quote to pull later.\np.coin: Flip a coin.\np.spongemock <text>: MoCk SoMe TeXt\np.fight @user: Fight someone, ripped straight from Bug Bot.\np.guildinfo: Learn about the guild you're in. **REQUIRES EMBED LINKS**\np.spinner: Spin a fidget spinner.\np.about: Learn more about me!\np.shame: S H A M E\np.dadmode: Ever wanted Paradox to make shitty dad jokes? Me neither, but I did it anyway.\np.aesthetic: M A K E S T E X T V A P O R W A V E\np.temp: Convert temperatures between F and C and vice versa.\np.eval: ***SECRET COMMAND NOT FOR USE BY NORMIES***")
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
message.channel.send("Stored quote in position " + [Quotes.length] + ".")
Quotes.push(quote);
}}
if (message.content === (prefix + 'quote')
) {
  if (message.channel.type === "dm") {
    message.channel.send("Sorry, but this command can't be used in DMs.")
  }
  else {
message.channel.send(Quotes.randomElement(Quotes))
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
  message.channel.send(mocktext.toAlternatingCase(), {
    files: ['./mock.jpg']
});
}
//Fight Command, No regrets, Logiz
if(message.content.startsWith(prefix + "fight")) {
 if (message.mentions.users.size < 1) {
if (message.channel.type = "dm") {
  message.channel.send(message.author.username + " is fighting Paradox" + Fstrings.randomElement(Fstrings))
}
   message.reply("You can't fight thin air, pick someone...");
 } 
else if (message.mentions.users.size > 1) {
  message.channel.send("Whoa, hang on there, Chuck Norris. One at a time.")
}
    else {
message.channel.send(message.author.username + " is fighting " + message.mentions.users.first().username + Fstrings.randomElement(Fstrings));
}
}
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
        "url": message.guild.iconURL()
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
message.channel.send(":wave: **Hi there!** :smiley: \n\nThis bot is made by Gallium#1327, and the code can be found at https://github.com/benzarr410/Paradox. It's also being further developed by Akii#2111 so that it fits what their server needs, so check out their repo too at https://github.com/jennasisis/AkiiBot. \n\nYou can find all the commands for this bot by typing ``p.help``. **Remember, this bot is still in development.** So most of its features may still be buggy. If you encounter any problems, please feel free to contact Gallium#1327 or use p.report. \n\n**Thanks for using the bot!**")
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
   message.channel.send("Available spinners: Red, Orange, Yellow, Green, Blue, Purple, Space\n\nSpin one of these with `p.spinner <type>`")
 }
 else {
  var spinnerType = message.content.substring(10)
if (spinnerType == "red") {
  var spinner = "<:SpinnerRed:354283874051686401>"
  var isSpinner = true  
}
else if (spinnerType == "orange") {
  var spinner = "<:SpinnerOrange:354283875310239745>"
  var isSpinner = true  
}
else if (spinnerType == "yellow") {
  var spinner = "<:SpinnerYellow:354283875402252289>"
  var isSpinner = true  
}
else if (spinnerType == "green") {
  var spinner = "<:SpinnerGreen:354283875003793409>"
  var isSpinner = true  
}
else if (spinnerType == "blue") {
  var spinner = "<:SpinnerBlue:327104206987198464>"
  var isSpinner = true  
}
else if (spinnerType == "purple") {
  var spinner = "<:SpinnerPurple:327104206567636992>"
  var isSpinner = true  
}
else if (spinnerType == "pink") {
  var spinner = "<:SpinnerPink:327104206244937729>"
  var isSpinner = true  
}
else if (spinnerType == "space") {
  var spinner = "<:SpinnerSpace:327104206060126208>"
  var isSpinner = true
}
else {
  message.channel.send("You can't spin a spinner that doesn't exist!")
  var isSpinner = false
}
if (isSpinner) {
message.channel.send("You spun the " + spinnerType + " spinner. " + spinner )
var spinFor = randNum(10, 120)
setTimeout(function() {
   (message.channel.send("Your " + spinnerType + " spinner spun for **" + spinFor + "** seconds. " + spinner)) }, spinFor*1000);
}
}}
if (message.content.startsWith(prefix + "dadmode")) {
  if (message.content.substring(10) === "off") {
  dadmode = 0;
  message.channel.send("Dad mode off. Dad must have gone on a business trip.")
}
else if (message.content.substring(10) === "on") {
  dadmode = 1;
  message.channel.send("Dad mode on. Send a message starting with **I'm** to begin.")
}
  else {
    message.channel.send("I couldn't understand. If you would like to turn dad mode off, type `p.dadmode off`. If you want to turn it back on, type `p.dadmode on`.")
  }
  }
if (message.content.startsWith("I'm") && dadmode == "1") {
  message.channel.send("Hi, " + message.content.substring(4) + ", I'm Dad!")
}
if (message.content.startsWith(prefix + 'aesthetic')) {
  var spacedtext = message.content.substring(11)
  var wavetext = insertSpaces(spacedtext)
  message.channel.send("```"+wavetext.substring(2)+"```")
}
if (message.content.startsWith(prefix + "temp")) {
  if (message.content.substring(7,8) === "c") {
    var starttemp = message.content.substring(8)
    var endtemp = Math.round(10*starttemp*1.8+32)/10;
    message.channel.send(starttemp + "°C = " + endtemp + "°F.")
  }
  else if (message.content.substring(7,8) === "f") {
    var starttemp = message.content.substring(8)
    var endtemp = Math.round(10*(starttemp-32)/1.8)/10
    message.channel.send(starttemp + "°F = " + endtemp + "°C.")
  }
}
      if (message.content.startsWith(prefix + "eval")) {
            const args = message.content.split(" ").slice(1);
    if(message.author.id !== "158272711146209281") return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);
  var evalOut = (clean(evaled))
  if (evalOut.length > 2000) {
   hastebin(evalOut, "js").then(r => {
    message.channel.send("Output larger than 2000 characters, posted to " + r + " ."); //https://hastebin.com/someurl.js
}).catch(console.error);
}
else {
message.channel.send("```xl\n" + evalOut + "\n```")
}
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
if (message.content.startsWith(prefix + "away")){
  let away = JSON.parse(fs.readFileSync("./away.json", "utf8"));
  if (!away[message.author.id]) away[message.author.id] = {
    isAway: true,
    msg: [message.content.substring(7)]
    };
  else away[message.author.id] = {
      isAway: true,
      msg: [message.content.substring(7)]
  };
  let userData = away[message.author.id];        
  message.reply("I've set you as **away**. If pinged, I'll send `" + userData.msg + "`.")    
    fs.writeFile("./away.json", JSON.stringify(away), (err) => {
});
}
if (message.content === (prefix + "back")){
  let away = JSON.parse(fs.readFileSync("./away.json", "utf8"));
  let userData = away[message.author.id];          
      userData.isAway = false,
      userData.msg = null
  message.reply("I've set you as **back**. I won't send anything if you're pinged now.")    
    fs.writeFile("./away.json", JSON.stringify(away), (err) => {
//Listener for ping where:tm:
    });
}
if (message.content.startsWith(prefix + "avatar")){
  if (message.mentions.members.size < 1) {
      message.channel.send("Avatar for **" + message.author.username + "**: " + message.author.avatarURL);
  }
  else if (message.mentions.members.size > 1) {
      message.reply("I can only give you the avatar of one user, silly!")
  }
  else {
     message.channel.send("Avatar for **" + message.mentions.members.first().displayName + "**: " + message.mentions.members.first().user.avatarURL)
  }
}
if (message.content.startsWith(prefix + "prune")) {
  if (!message.member.permissions.has("MANAGE_MESSAGES")) {
    message.channel.send("I'm afraid I can't let you do that.\nMissing Permissions");
  }
  else {
  message.channel.bulkDelete(message.content.substring(8))
 message.reply("Pruned **" + message.content.substring(8) + "** messages.")
  }
}
if (message.content.startsWith(prefix + "report")) {
  message.client.users.get("158272711146209281").send("**" + message.author.tag + "** reported a bug:" + message.content.substring(8))
  message.reply("Your report has been sent!")
}
if (message.content.startsWith(prefix + "suggest")) {
  message.client.users.get("158272711146209281").send("**" + message.author.tag + "** suggested a feature:" + message.content.substring(9))
  message.reply("Your suggestion has been sent!")
}
if (message.content.startsWith(prefix + "banne")) {
  if (message.mentions.members.size < 1) {
      message.channel.send("u cannot banne no users");
  }
  else if (message.mentions.members.size > 1) {
      message.channel.send("u can only banne one user")
  }
  else {
     message.channel.send("**" + message.mentions.members.first().displayName + "** has ben banne ✨")
  }
}
if (message.content.startsWith(prefix + "speech")) {
  message.channel.send(message.get(message.content.substring(7)).content)
  //make this work later or some shit
}
})
//Token
client.login(config.token);
