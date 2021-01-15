var responses = require('../responses.js');
module.exports = {
    name: 'sell_or_short',
    description: 'this shell or short command',
    execute(message, command){

        if(command.length > 1){
            if((command[1].length < 6) && (command[1].length > 2)){
                message.channel.send("<@" + message.author.id + ">" +"```" + responses.data.sellcoinResponse(command[1]) + "```");
            }
            else{
                message.channel.send("<@" + message.author.id + ">" +'```'+ responses.data.sellResponse() +  '```');
            }
        }
        else{
                message.channel.send("<@" + message.author.id + ">" +'```'+ responses.data.sellResponse() +  '```');
        }         
    }
}

