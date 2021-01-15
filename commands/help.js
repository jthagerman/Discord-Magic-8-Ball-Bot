module.exports = {
    name: 'help',
    description: 'this is a help command',
    execute(message, args){
        var helpStr = "Coded by Moro with love\n" +
        "Commands: ()- optional \n" +
        "magic 8 ball should i/we buy/long (coin)\n" +
        "magic 8 ball should i/we sell/short (coin)\n" +
        "magic 8 ball are you/we bull(ish)\n" +
        "magic 8 ball are you/we bear(ish)\n" +
        "magic 8 ball are you/we bull(ish) on coin\n" +
        "magic 8 ball are you/we bear(ish) on coin\n" +
        "magic 8 ball (any question goes here)" ;
        message.channel.send("<@" + message.author.id + ">" +'```' + helpStr + '```');
    }
}