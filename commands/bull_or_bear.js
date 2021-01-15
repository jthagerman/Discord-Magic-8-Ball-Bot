var responses = require('../responses.js');
module.exports = {
    name: 'bull_or_bear',
    description: 'this is the bull or command',
    execute(message, command){

        if(command[2] == "bullish" || command[2] == "bull" ){        
            if( command[3] == 'on' && command.length > 4 ){
                if((command[4].length < 6) && (command[4].length > 2) ){
                    message.channel.send("<@" + message.author.id + ">" +"```" + responses.data.bullcoinResponse(command[4]) + "```");                
                }
                else{ 
                    message.channel.send("<@" + message.author.id + ">" +"```" + responses.data.bullResponse() + "```");
                }
            }
            else{
                message.channel.send("<@" + message.author.id + ">" +"```" + responses.data.bullResponse() + "```");
            }
        }
        else if((command[2] == "bear" || command[2] == "bearish" )){
            if( command[3] == 'on' && command.length > 4 ){
                if((command[4].length < 6) && (command[4].length > 2) ){
                    message.channel.send("<@" + message.author.id + ">" +"```" + responses.data.bearcoinResponse(command[4]) + "```");
                }
                else{ 
                    message.channel.send("<@" + message.author.id + ">" +"```" + responses.data.bearResponse() + "```");
                }
            }
            else{
                message.channel.send("<@" + message.author.id + ">" +"```" + responses.data.bearResponse() + "```");
            }
        }
        else{
            message.channel.send("<@" + message.author.id + ">" +"```" + responses.data.genericResponse() + "```");
        }
    }     
}
