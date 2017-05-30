const commando = require('discord.js-commando');
var chalk = require('chalk');

class RNGCommand extends commando.Command{
  constructor(client){
    super(client, {
      name: 'rng',
      group: 'random',
      memberName: 'rng',
      description: 'Generates a random number'
    });
  }

  async run(message, args){
    //log command users
    console.log(chalk.blue(message.author.username)
    + '(' + chalk.green(message.member.guild.name) + ')'
    + ' said: ' + chalk.yellow(message.content));
    //execute command
    var roll = Math.floor(Math.random()*9)+1;
    message.reply(roll + ", woof :3");
  }
}

module.exports = RNGCommand;
