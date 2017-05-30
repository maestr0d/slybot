const commando = require('discord.js-commando');
var chalk = require('chalk');
const bot = new commando.Client({
  owner: '233159595261034497',
  commandPrefix: '-'
});

bot.registry.registerGroup('dev', 'Test');
bot.registry.registerGroup('fun', 'GoodBoy');
bot.registry.registerGroup('fun', 'Achoo');
bot.registry.registerGroup('fun', 'Hey');
bot.registry.registerGroup('fun', 'Joke');
bot.registry.registerGroup('fun', 'T');
bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('math', 'Solve');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");

//bot is online
bot.on('ready', () => {
  console.log(chalk.green('Hey, thats pretty good!'));
  bot.user.setGame('-help | SlyBot');
  process.stdout.write('\x07');
  //guild.guild.channels.find('name', 'general').sendMessage("I am back online, woof!");
});

//welcome new members
bot.on('guildMemberAdd', (guild) => {
  //log new member joins
  console.log(chalk.blue(guild.user.username) + " has joined the server.");
  var usrn = guild.user.id;
  //announce user join
  guild.guild.channels.find('name', 'general').sendMessage({embed: {
      color: 3447003,
      author: {
        name: guild.user.username,
        icon_url: guild.user.avatarURL
      },
      title: 'Welcome to ' + guild.guild.name + '!',
      description: "Don't forget to read the rules, and have fun!"
    }
  });
  //guild.guild.channels.find('name', 'general').sendMessage("Welcome " + "<@!" + usrn + ">" + " to the server, woof!");
  //send user basic info
  guild.user.sendMessage("Welcome to "
  + guild.guild.name
  + ", woof! Feel free to poke around unrestricted channels until one of the staff members assigns you a role!");
});

//sample message response

/*
bot.on('message', (message) =>{

  if(message.content=='bork'){
    message.reply('woof');
    //message.reply('pong');
    //message.channel.sendMessage("Current channel is: " + message.channel);
  }

});
*/

bot.login('MzE3MjQ5MTgzNjQ1OTU4MTQ2.DAhE2g.6YqCUwj8YS3Ekq-1gAvaROmmZVY');
