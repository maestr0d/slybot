const commando = require('discord.js-commando');
var math = require('mathjs');
var chalk = require('chalk');

class SolveCommand extends commando.Command{
  constructor(client){
    super(client, {
      name: 'solve',
      group: 'math',
      memberName: 'solve',
      description: 'Solves a mathematical string'
    });
  }

  async run(message, args){
    //log command users
    console.log(chalk.blue(message.author.username)
    + '(' + chalk.green(message.member.guild.name) + ')'
    + ' said: ' + chalk.yellow(message.content));
    //execute command
    message.reply(math.eval(args) + ", woof :3");
  }
}

module.exports = SolveCommand;
