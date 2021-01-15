module.exports = {
    name: 'moro',
    description: 'this is a moro command',
    execute(message, args){
        message.channel.send('```I love you <3```');
    }
}