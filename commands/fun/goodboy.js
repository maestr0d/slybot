const commando = require('discord.js-commando');
var chalk = require('chalk');

class GBCommand extends commando.Command{
  constructor(client){
    super(client, {
      name: 'goodboy',
      group: 'fun',
      memberName: 'goodboy',
      description: 'Who is a good boy?'
    });
  }

  async run(message, args){
    //log command users
    console.log(chalk.blue(message.author.username)
    + '(' + chalk.green(message.member.guild.name) + ')'
    + ' said: ' + chalk.yellow(message.content));
    //execute command
    message.channel.sendMessage("Bork, bork :3");
    //message.reply(message.author);
  }
}

module.exports = GBCommand;
//node --harmony .
