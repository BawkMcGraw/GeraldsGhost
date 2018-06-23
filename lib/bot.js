'use strict';
require('dotenv').config();
const { Client } = require('pg');
const https = require('https');
console.log(process.env.BOT_ID);
console.log(process.env.BOT_ID1)
var groupid;
var i, s;
var timeouttext = undefined;

class Functions {
    static Story() {
        function StoryF() {
            var array = [];
            var x,a,b,c,an,bn,cn,story;
            for (x=0; x<3; x++)
            {
                function RNGf(max) {
                    return Math.floor(Math.random()*Math.floor(max));;
                }
                var RNG = RNGf(3)
                array.push(RNG);
            }
            a = ["I remember this one time we sailed right up to a shore none of us had ever seen before. Large Hat Matt, they called him that on the account of his large hat; he stepped out there and suddenly ","We had just made port when a gentlemen walked up to me with a glimmer of evil in his eye; I knew who he was though I knew not his name, but I still let him talk to me, lord knows why. After some drinks he led me to the other side of the island when out of nowhere ","I remember one time we were all drinking on the ship, the whole crew, had we been fired upon we probably would have never heard the blasts over our singing... and this thing... and then... um... anyways "];
            b = ["a great big whale just flew right out of the water! I stood in awe and terror at the beast's magnitude blocking out the sun. It was coming right for us! but just before it hit us a loud roar erupted ","a flying ship swooped down from the sky! I couldn't believe it! Skeletons started tumbling out and falling everywhere, dancing as they fell! There was a marimba playing too! It looked like they were all starting to get up ","there was a Costco right over the hill! I don't know why, but our ship can hold over 700 pounds of peg legs! We had just loaded it into our ship "];
            c = ["and the whole thing blew up! KABOOM! we were never heard from again... until later that week when we saw Ms. Darla. Oh gosh, I can smell those delicious pies even now.","and then... I think something... about a marshmellow. No wait! It was a pineapple! No, that's not it either. Hm...","and you would not believe the look on the crews face when we realized it was actually just a ponzie scheme! I swear we lost every last bit of gold. Haha. I was mutinied shortly after."]
            an = array[0];
            bn = array[1];
            cn = array[2];
            console.log(array);
            console.log(an);
            console.log(a[an]);
            story = a[an] + b[bn] + c[cn];
            return 'stooOOOoory? ' + story;

            
        }
        return StoryF();
    }
    /**
     * @static
     * @param {Object} message 
     * @return {string}
     */
    static load() {
        console.log('starting load')
        const con = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
        con.connect();
        var sqlm = 'select * from counters'
        con.query(sqlm, function(err, result) {
            if (err) throw err;
            console.log(result);
            console.log(result[0]);
            s = result.rows[0].s;
            i = result.rows[0].i;
            con.end();
        });
    }
    static save() {
        const con = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
        con.connect ()
        var sqlm = 'update counters set s = '+s+', i = '+i+'\;';
        con.query(sqlm, function(err, result) {
            if (err) throw err;
            console.log(result);
            con.end();
        }); 
    }
    static timeout() {
        console.log('ran timeout function')
        var x = 0;
        var date = new Date();
        var time = date.getTime();
        var timeout;
        if (time >= timeout || timeout === undefined) {
            timeout = time + 10000;
        }
        if (x < 4) {
            x++;
        }
        if (x = 4) {
            x = 5;
            timeouttext = 'YooOOoou have bothered me tooOOo much! Ask me later!'
        }
        if (x = 5) {
            if (time >= timeout) {
                x = 0;
            }
            else {
                timeouttext = null;
            }
        }
    }
}

class Bot {
    /**
     * Called when the bot receives a message.
     *
     * @static
     * @param {Object} message The message data incoming from GroupMe
     * @return {string}
     */
    static checkMessage(message) {
        const messageText = message.text;
        const messageName = message.name;
        groupid = message.group_id;

        // Learn about regular expressions in JavaScript: https://developer.mozilla.org/docs/Web/JavaScript/Guide/Regular_Expressions
        const botRegex = /tale/i;
        const botRegex1 = /sacrifice/i;
        const botRegex2 = /gerald/i;
        const botRegex3 = /ghost/i;
        const andex = /and/gi;
        const comex = /,/gi;
        const nameex = /Gerald\'s Ghost/;
        const thanks = /thank/i;

        // Check if the GroupMe message has content and if the regex pattern is true
        if (messageText)
        {
            if (i == undefined)
            {
                i = 0;
                console.log('i updated');
            }
            if (s == undefined)
            {
                s = 0;
                console.log('s updated');
            }
            if (nameex.test(messageName))
            {
                console.log('bot triggered by bot, ignoring');
                return null;
            }
            else 
            {
                if (thanks.test(messageText)) {
                    return 'NoooOOOo proOooOoblem!';
                }
                console.log('bot triggered');
                if (botRegex1.test(messageText))
                {
                    console.log('sacrifice');
                    if (s == 0 || s == undefined)
                    {
                        s = 1;
                        return "What? I was just kidding! Why would you do that??? Who did you even kill?? Oh, hey Matilda.";
                    }
                    if (s == 1)
                    {
                        s++;
                        return "I said stop! You are a horrible person!!";
                    }
                    if (s>1 && s<4)
                    {
                        s++;
                        if(andex.test(messageText)) {
                            var annum = messageText.match(andex).length;
                            s = s + annum;
                        }
                        if(comex.test(messageText)) {
                            messageText.toString();
                            var comnum = messageText.match(comex).length;
                            s = s + comnum;
                        }
                        return s.toString() + '...';
                    }
                    if (s == 4)
                    {
                        s++;
                        if(andex.test(messageText)) {
                            messageText.toString();
                            var annum = messageText.match(andex).length;
                            s = s + annum;
                        }
                        if(comex.test(messageText)) {
                            messageText.toString();
                            var comnum = messageText.match(comex).length;
                            s = s + comnum;
                        }
                        return "Really?? 5 people?? That's insane! What's next, you'll sacrifice 50 people? I already told you, I don't tell stories for sacrifices!!";
                    }
                    if (s>=5 && s<49)
                    {
                        s++;
                        if(andex.test(messageText)) {
                            messageText.toString();
                            var annum = messageText.match(andex).length;
                            s = s + annum;
                        }
                        if(comex.test(messageText)) {
                            messageText.toString();
                            var comnum = messageText.match(comex).length;
                            s = s + comnum;
                        }
                        return s.toString() + '...';
                    }
                    if (s == 49)
                    {
                        s++;
                        return "FOR THE LOVE OF GOD STOP! It's getting crowded in here!!! Here's a damn story: Why did the chicken cross the road? To get out of the growing pool of blood. Happy??? If I weren't dead, I would come down there and kill you all myself! You think plates are infinite up here? Well, they're not, and Matilda never washes her dishes! I've had it!";
                    }
                    if (s>49)
                    {
                        s++;
                        return s.toString();
                    }
                }
                if (botRegex.test(messageText) || botRegex2.test(messageText) || botRegex3.test(messageText))
                {
                    Functions.timeout();
                    console.log('tale, gerald, or ghost');
                    if (i == 0 || i == undefined)
                    {
                        i = 1;
                        return "oooOOOOoOOoo You have disturbed my slumber! What is it that you want? ANOTHER story?? If that's what you wish, I require a sacrifice!";
                    }
                    else
                    {
                        if (timeouttext != undefined) {
                            console.log('started timeout');
                            return timeouttext;
                        }
                        console.log('i > 0');
                        i++;
                        return Functions.Story();
                    }
                }
            }
        }
            return null;
    };
    /**
     * Sends a message to GroupMe with a POST request.
     *
     * @static
     * @param {string} messageText A message to send to chat
     * @return {undefined}
     */
    static sendMessage(messageText) {
        // Get the GroupMe bot id saved in `.env`
        Functions.save();
        var botId;
        const botid0 = process.env.BOT_ID;
        const botid1 = process.env.BOT_ID1;
        const g0 = /27754904/;
        const g1 = /41279538/;

        const options = {
            hostname: 'api.groupme.com',
            path: '/v3/bots/post',
            method: 'POST'
        };
        if (g0.test(groupid)) {
            botId = botid0;
        }
        if (g1.test(groupid)) {
            botId = botid1;
        }
        const body = {
            bot_id: botId,
            text: messageText
        };

        // Make the POST request to GroupMe with the http module
        const botRequest = https.request(options, function(response) {
            if (response.statusCode !== 202) {
                console.log('Rejecting bad status code ' + response.statusCode);
            }
        });

        // On error
        botRequest.on('error', function(error) {
            console.log('Error posting message ' + JSON.stringify(error));
        });

        // On timeout
        botRequest.on('timeout', function(error) {
            console.log('Timeout posting message ' + JSON.stringify(error));
        });

        // Finally, send the body to GroupMe as a string
        botRequest.end(JSON.stringify(body));
    };
};
module.exports = {Bot:Bot, Functions:Functions}
