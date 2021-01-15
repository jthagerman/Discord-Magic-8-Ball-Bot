var responses = require('../responses.js');
module.exports = {
    name: 'buy_or_long',
    description: 'this is the buy or long command',
    execute(message, command){

        if(command.length > 1){
            if((command[1].length < 6) && (command[1].length > 2)){
                message.channel.send("<@" + message.author.id + ">" +"```" + responses.data.buycoinResponse(command[1]) + "```");
            }
            else{
                message.channel.send("<@" + message.author.id + ">" +'```'+ responses.data.buyResponse() +  '```');
            }
        }
        else{
            message.channel.send("<@" + message.author.id + ">" +'```'+ responses.data.buyResponse() +  '```');
        }
    }
}
