var responses = require('../responses.js');

module.exports = {
    name: 'generic_response',
    description: 'this is the generic magic 8 response file',
    execute(message, args){
        message.channel.send("<@" + message.author.id + ">" + "```" + responses.data.genericResponse() + "```");
    }
}
