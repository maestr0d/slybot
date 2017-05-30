const commando = require('discord.js-commando');
var chalk = require('chalk');
const Cleverbot = require('cleverbot');

  let clev = new Cleverbot({
    key: 'CC2fxKibdlSZ9n1AcO33Ua2NMyQ' // Can be obtained at http://cleverbot.com/api
  });

class TCommand extends commando.Command{
  constructor(client){
    super(client, {
      name: 't',
      group: 'dev',
      memberName: 't',
      description: 'Talk with me!'
    });
  }

  async run(message, args){
    clev.query(args)
    .then(function (response) {
      //console.log(args);
      //log command users
      console.log(chalk.blue(message.author.username)
      + '(' + chalk.green(message.member.guild.name) + ')'
      + ' said: ' + chalk.yellow(message.content));
      //execute command
      message.reply(response.output);
      //console.log(response.output); //=> Livin' in a lonely world!
        /*
        clev.query(response.output, {
          cs: response.cs
        })
        .then(function (response2) {
          console.log(response2.output); //=> She took the midnight train going anywhere.
        });
        */

    });
  }
}

module.exports = TCommand;
//node --harmony .
