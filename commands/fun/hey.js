const commando = require('discord.js-commando');
var chalk = require('chalk');

class HeyCommand extends commando.Command{
  constructor(client){
    super(client, {
      name: 'hey',
      group: 'fun',
      memberName: 'hey',
      description: "That's pretty good!"
    });
  }

  async run(message, args){
    //log command users
    console.log(chalk.blue(message.author.username)
    + '(' + chalk.green(message.member.guild.name) + ')'
    + ' said: ' + chalk.yellow(message.content));
    //execute command
    message.reply("That's pretty good!" + " woof :3");
    //message.reply(message.author);
  }
}

module.exports = HeyCommand;
//node --harmony .
