const commando = require('discord.js-commando');
var chalk = require('chalk');

class TestCommand extends commando.Command{
  constructor(client){
    super(client, {
      name: 'test',
      group: 'dev',
      memberName: 'test',
      description: 'New commands are tested here, before being moved to separate file.'
    });
  }

  async run(message, args){
    //log command users
    console.log(chalk.blue(message.author.username)
    + '(' + chalk.green(message.member.guild.name) + ')'
    + ' said: ' + chalk.yellow(message.content));
    //execute command
    message.channel.sendMessage({embed: {
      color: 3447003,
      description: 'A very simple Embed!'
    }});
    //message.reply(message.author);
  }
}

module.exports = TestCommand;
//node --harmony .
