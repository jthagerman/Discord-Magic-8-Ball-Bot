var responses = require('../responses.js');

module.exports = {
    name: 'should_buy_sell',
    description: 'this is the should buy/sell command',
    execute(message, command){
        if((command[2] === "buy") || (command[2] === "long")){
            if(command.length > 3){
                if((command[3].length < 6) && (command[3].length > 2)){
                    message.channel.send("<@" + message.author.id + ">" +"```" + responses.data.buycoinResponse(command[3]) + "```");
                }
                else{
                    message.channel.send("<@" + message.author.id + ">" +'```'+ responses.data.buyResponse() +  '```');
                }
            }
            else{
                message.channel.send("<@" + message.author.id + ">" +'```'+ responses.data.buyResponse() +  '```');
            }         
        }
        else if((command[2] === "sell") || (command[2] === "short")){
            if(command.length > 3){
                if((command[3].length < 6) && (command[3].length > 2)){
                    message.channel.send("<@" + message.author.id + ">" +"```" + responses.data.sellcoinResponse(command[3]) + "```");
                }
                else{
                    message.channel.send("<@" + message.author.id + ">" +'```'+ responses.data.sellResponse() +  '```');
                }
            }
            else{
                message.channel.send("<@" + message.author.id + ">" +'```'+ responses.data.sellResponse() +  '```');
            }         
        }
        else{
            message.channel.send("<@" + message.author.id + ">" +"```" + responses.data.genericResponse() + "```");
        }    
    }
}





