const commando = require('discord.js-commando');
var oneLinerJoke = require('one-liner-joke');
var chalk = require('chalk');

class JokeCommand extends commando.Command{
  constructor(client){
    super(client, {
      name: 'joke',
      group: 'fun',
      memberName: 'joke',
      description: 'Get a random one-liner joke'
    });
  }

  async run(message, args){
    //log command users
    console.log(chalk.blue(message.author.username)
    + '(' + chalk.green(message.member.guild.name) + ')'
    + ' said: ' + chalk.yellow(message.content));
    //console.log(message.author.username + " said: " + message.content);
    //execute command
    var getRandomJoke = oneLinerJoke.getRandomJoke();
    message.reply(getRandomJoke.body + " woof :3");
  }
}

module.exports = JokeCommand;
//node --harmony .
