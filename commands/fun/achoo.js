const commando = require('discord.js-commando');
var chalk = require('chalk');

class SneezeCommand extends commando.Command{
  constructor(client){
    super(client, {
      name: 'achoo',
      group: 'fun',
      memberName: 'achoo',
      description: 'Bless you!'
    });
  }

  async run(message, args){
    //log command users
    console.log(chalk.blue(message.author.username)
    + '(' + chalk.green(message.member.guild.name) + ')'
    + ' said: ' + chalk.yellow(message.content));
    //execute command
    message.reply("Bless you!" + " woof :3");
    //message.reply(message.author);
  }
}

module.exports = SneezeCommand;
//node --harmony .
