const Discord = require('discord.js')
const client = new Discord.Client();
const prefix = 'magic 8 ball'
const key = "" //Put your own key here! 
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log("Moro Bot is online!")
});

client.on('message', message =>{
    client.user.setActivity("TYPE: magic 8 ball help"); 
   
    if(!message.content.toLowerCase().startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    args.shift();
    var command = []; 
    
    for(var i = 0; i < args.length; i++){
        command.push(args[i].toLowerCase());
    }
   
    if(command[command.length - 1].endsWith("?")){
        var lastString = command[command.length - 1]
        lastString = lastString.substring(0, lastString.length - 1);
        command[command.length - 1] = lastString; 
    }
    console.log(command);

    //SHOULD I/WE BUY/SELL COIN" 
    if((command[0] === "should") && ((command[1] === "i") || (command[1] === "we"))){
        client.commands.get('should_buy_sell').execute(message, command);    
    }

    //BUY/LONG COIN
    else if((command[0] === "buy") || (command[0] === "long")){
        client.commands.get('buy_or_long').execute(message, command);    
    }
               
    //SELL/SORT COIN
    else if((command[0] === "sell") || (command[0] === "short")){
        client.commands.get('sell_or_short').execute(message, command);    
    }
    
    //ARE YOU/WE BULLISH/BEARISH ON COIN
    else if((command[0] === "are") && ((command[1] === "you") || (command[1] === "we"))){
        client.commands.get('bull_or_bear').execute(message, command);    
    }

    //MORO
    else if(command[0] === 'moro'){
        client.commands.get('moro').execute(message, command);
    }

    //HELP
    else if(command[0] === 'help' && (command.length < 2)){
        client.commands.get('help').execute(message, args);
    }

    //GENERIC 8 BALL RESPONSES 
    else if (command[0] != 'undefined') {
        client.commands.get('generic_response').execute(message, args);
    }
});

client.login(key);
