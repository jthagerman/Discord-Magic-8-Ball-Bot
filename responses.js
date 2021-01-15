
var methods = {
    genericResponse: function (){
        var responseArray = ["As I see it, yes."," Ask again later.","Better luck next time","Better not tell you now."," Cannot predict now.",
            "Concentrate and ask again.", "Don’t count on it.","No, not in a million years","It is certain.","It is decidedly so.","Most likely.", 
            "My reply is no.","Ha Funny! Are you kidding me?","IDK why are you asking me?","like i know the answer","My sources say no.","Outlook not so good.", "Outlook good.","Reply hazy, try again.",
            "Signs point to yes.","Very doubtful.","Without a doubt.","Yes."," Yes – definitely."," You may rely on it."];

        var responseIndex = Math.floor(Math.random() * responseArray.length)
        return responseArray[responseIndex];
    },
    bullResponse: function (){
        var responseArray = ["Bogdanoff called and he said, no"," Ask again later.","Better not tell you now."," Cannot predict now.",
            "My charts say no", "The cloud is hazy ask again later","Never have seen a sicker bull in my life.","The bears got this one","We are most likely bullish.", 
            "I think i saw a dead bear today","Bullish? Even Satoshi is shorting this","Bull Outlook not so good.", "It's Bull Season","Charts are hazy, try again.",
            "Just got off the phone with the Bogdanoffs, they say pump it","My indicators say very doubtful.","Without a doubt bullish","Yes."," Yes – definitely bullish"," You may rely on it, bull season!"];
    
        var responseIndex = Math.floor(Math.random() * responseArray.length)
        return responseArray[responseIndex];
    },
    bullcoinResponse: function (coin){
        coin = coin.toUpperCase();
        var responseArray = ["Bogdanoff called about " + coin + " and he said, no", coin + "? Ask again later.",coin + "? Ha! Better not tell you now.",
            coin + "? Cannot predict now.", coin + "'s charts say no", "The cloud is hazy on " + coin + " ask again later", "The " + coin + " bulls have never been sicker.",
            "The " + coin + " bears got this one", "We are most likely bullish on " + coin + ".", "I think i saw a dead " + coin + " bear today",
            "Bullish? Even Satoshi is shorting " + coin + ".", "Bull Outlook on " + coin + " not so good.", "It's " + coin + " Bull Season",
            coin + " charts are hazy, try again.", "Just got off the phone with the Bogdanoffs, they are pumping " + coin, "My indicators on " + coin + " say very doubtful.",
            "Without a doubt bullish on " + coin, "Yes.", " Yes – definitely bullish on " + coin," You may rely on it, it's " + coin + " bull season!"];
    var responseIndex = Math.floor(Math.random() * responseArray.length)
    return responseArray[responseIndex];
    },
    buyResponse: function(){
        var responseArray = ["I wouldn't buy if i was paid to"," Now is the time to buy","Its up to you to DYOR"," Buy into the market, eh I cannot predict now.",
            "All signs point to a crash, dont buy now", "Just checked with the Winklevoss Twins they say buy","The bogdanoffs say buy now get rekt","Most likely is the time to buy.", 
            "My reply is no, don't buy.","My TA says no.","Oof buying outlook not so good."," I totally would go all in right now", "what you are not all in already?", "The bulls say to buy","Indicators are hazy, try again.",
            "Buy now to defeat the bears","Very doubtful it would be smart to do that.","Buy now and I will pull the rug","Buy now, without a doubt.","Yes buy","Yes let the bears feel more pain","no u"];

        var responseIndex = Math.floor(Math.random() * responseArray.length)
        return responseArray[responseIndex];
    },
    sellcoinResponse: function(coin){     
        coin = coin.toUpperCase();
        var responseArray = ["I wouldn't sell my " + coin + " if i was paid to"," Now is the time to sell " + coin,"Its up to you to DYOR"," Sell " + coin + ", eh I cannot predict if that's wise now.",
            "All signs point to " + coin + " moon, dont sell now", "Just checked with the Winklevoss Twins they are selling " + coin , "The bogdanoffs say sell " + coin + " now get rekt", "Most likely is the time to sell " + coin, 
            "My reply is no, don't sell " + coin + ".","My " + coin + " TA says no.","Oof " + coin + " outlook not so good.", "The " + coin + " bears say to sell","Indicators are hazy, try again.",
            "Sell " + coin + " now to defeat the bulls","Very doubtful it would be smart to sell " + coin,"Sell " + coin + " now, without a doubt.","Yes sell " + coin , "My inner bear says sell", "Yes let the " + coin + " bulls feel more pain"];
    
        var responseIndex = Math.floor(Math.random() * responseArray.length)
        return responseArray[responseIndex];
    },
    buycoinResponse: function(coin){     
        coin = coin.toUpperCase();
        var responseArray = ["I wouldn't buy " + coin + " if i was paid to"," Now is the time to buy " + coin,"Its up to you to DYOR"," Buy " + coin + ", eh I cannot predict if that's wise now.",
            "All signs point to " + coin + " crash, dont buy now", "Just checked with the Winklevoss Twins they are buying " + coin , "The bogdanoffs say buy " + coin + " now get rekt", "Most likely is the time to buy " + coin, 
            "My reply is no, don't buy " + coin + ".","My " + coin + " TA says no.","Oof " + coin + " outlook not so good.","Buy now and I will pull the rug", "The " + coin + " bulls say to buy","Indicators are hazy, try again.",
            "Buy " + coin + " now to defeat the bears","Very doubtful it would be smart to buy " + coin,"Buy " + coin + "now, without a doubt."," I totally would go all in" + coin + " right now", "what you are not all in " + coin + " already?",
            "Yes buy " + coin ,"Yes let the " + coin + " bears feel more pain"];
    
        var responseIndex = Math.floor(Math.random() * responseArray.length)
        return responseArray[responseIndex];
    },
    sellResponse: function() {
        var responseArray = ["I wouldn't sell if i was paid to; HODL"," Now is the time to sell","Its up to you to DYOR"," Sell into the market, eh I cannot predict now.",
            "All signs point to a crash, sell now", "Just checked with the Winklevoss Twins they say sell","The bogdanoffs say sell now get rekt","Most likely is the time to buy.", 
            "My reply is no, don't sell.","My TA says no.","Oof selling outlook not so good.",  "Sell now before we pull the rug", "The bears say to sell","Indicators are hazy, try again.",
            "Sell now to defeat the bulls","Very doubtful it would be smart to do that.","Sell now, without a doubt.","Yes Sell","Sell let the bulls feel more pain","no u"];

        var responseIndex = Math.floor(Math.random() * responseArray.length)
        return responseArray[responseIndex];
    },
    bearResponse: function(){
        var responseArray = ["Bogdanoff called and he said, no"," Ask again later.","Better not tell you now."," Cannot predict now.",
           "My charts say no", "The cloud is hazy ask again later","Never have seen a sicker bear in my life.","The bulls got this one","We are most likely bearish.", 
            "I think i saw a dead bull today","Bearish? Even Satoshi is longing this","Bear Outlook not so good.", "It's Bear Season","Charts are hazy, try again.",
            "Just got off the phone with the Bogdanoffs, they say dump it","My indicators say very doubtful.","Without a doubt bearish","Yes."," Yes – definitely bearish"," You may rely on it, bear season!"];
    
        var responseIndex = Math.floor(Math.random() * responseArray.length)
        return responseArray[responseIndex];
    },
    bearcoinResponse: function(coin){
   
        coin = coin.toUpperCase();
        console.log(coin)
        var responseArray = ["Bogdanoff called about " + coin + " and he said, no", coin + "? Ask again later.",coin + "? Ha! Better not tell you now.",
            coin + "? Cannot predict now.", coin + "'s charts say no", "The cloud is hazy on " + coin + " ask again later", "The " + coin + " bears have never been sicker.",
            "The " + coin + " bulls got this one", "We are most likely bearish on " + coin + ".", "I think i saw a dead " + coin + " bull today",
            "Bearish? Even Satoshi is longing " + coin + ".", "Bull Outlook on " + coin + " not so good.", "It's " + coin + " Bear Season",
            coin + " charts are hazy, try again.", "Just got off the phone with the Bogdanoffs, they are dumping " + coin, "My indicators on " + coin + " say very doubtful.",
            "Without a doubt bearish on " + coin, "Yes.", " Yes – definitely bearish on " + coin," You may rely on it, it's " + coin + " bear season!"];
    
        var responseIndex = Math.floor(Math.random() * responseArray.length)
        return responseArray[responseIndex];
    }
}

exports.data = methods;