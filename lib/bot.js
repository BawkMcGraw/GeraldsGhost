'use strict';
require('dotenv').config();
const { Client } = require('pg');
const https = require('https');
console.log(process.env.BOT_ID);
console.log(process.env.BOT_ID1)
var groupid;
var i, s, t, tc, toc, timeout, day, d2, month;
var timeOutText = 0;

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
            story = a[an] + b[bn] + c[cn];
            return 'stooOOOoory? ' + story;

            
        }
        return StoryF();
    }
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
            s = result.rows[0].s;
            i = result.rows[0].i;
            t = result.rows[0].t;
            timeout = result.rows[0].time;
            toc = result.rows[0].toc;
            day = result.rows[0].day;
            d2 = result.rows[0].d2;
            month = result.rows[0].month;
            console.log('s loaded '+s);
            console.log('i loaded '+i);
            console.log('t loaded '+t);
            console.log('time loaded '+timeout);
            console.log('toc loaded '+toc);
            console.log('day loaded '+day);
            console.log('d2 = '+d2);
            console.log('month = '+month);
            con.end();
        });
    }
    static save() {
        const con = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
        con.connect ()
        var sqlm = 'update counters set s = '+s+', i = '+i+', t = '+t+', time = '+timeout+', toc = '+toc+', day = '+day+', d2 = '+d2+', month = '+month+'\;';
        con.query(sqlm, function(err, result) {
            if (err) throw err;
            console.log('updated variables');
            con.end();
        }); 
    }
    static timeout() {
        console.log('ran timeout function')
        var date = new Date();
        var timer = date.getTime();
        var timen = parseInt(timer, 10);
        var time = timen - 1529000000000;
        if (t === undefined) {
            console.log('t was undefined');
            t = 0;
        }
        console.log('time = '+time);
        console.log('timeout = '+timeout);
        if (timeout == undefined) {
            timeout = time + 10000;
            console.log('set timeout '+timeout);
        }
        if (time >= timeout) {
            console.log('time >= timeout');
            t = 0;
            toc = 0;
            timeOutText = 0;
            timeout = time + 10000;
        }
        if (t < 3) {
            console.log('t < 3');
            t++;
            timeOutText = 0;
            console.log('t++ '+t);
        }
        if (t == 3) {
            console.log('t = 3');
            t = 4;
            tc = 1;
            timeOutText = 'YooOOoou have bothered me tooOOo much! Ask me later!'
            if (toc == 0) {
                console.log("toc == 4");
                timeout = time + 30000;
                toc = 1;
            }
        }
        if (t == 4 && tc == 0) {
            console.log('t == 5');
            console.log('timeOutText = null');
            timeOutText = null;
        }
    }
    static dailyStory() {
        console.log('loading diary...');
        daily = [
            'Day 1. Upon my departure from this world, I reawoke from the black to see the interior of a house. Abandoned, dusty, faded-white cloths cover antique furniture. I pull a sheet off of the piano and dust flies through the air, blinding me. After a moment it fades and in its place, a ghost. I said "get out of here you stupid ghost." It just looked at me with its stupid ghost face and ghost eyes.',
            'Day 2 in the ghost house. I saw a spooky ghost with a sexy ghost butt. Why are ghost butts so sexy.',
            'Day 3 in the ghost house. Fuckin\' ghost horses everywhere with their weird ghost horse faces and sexy ghost horse butts. "Stop it! Stop making me look!"',
            'Day 4 in the ghost house. I\'ve joined the ghosts. What if I was a ghost all along? My butt is so sexy, and my face... is so stupid. Oh shiiit.'
        ]
        var date = new Date();
        var dayr = parseInt(date.getDay);
        console.log('dayr = '+dayr);
        var monthr = parseInt(date.getMonth);
        console.log('monthr = '+monthr);
        var d1 = 0;
        if (monthr >= month) {
            month = monthr + 1;
            day = 1;
        }
        if (dayr >= day) {
            d1 = 1;
            d2++;
            day = dayr + 1;
        }
        if (d1 == 1) {
            return daily[d2];
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
        const diaryex = /diary/i;
        const journalex = /journal/i;
        const ghosthouseex = /ghost house/i;

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
                    if (diaryex.test(messageText) || journalex.test(messageText) || ghosthouseex.test(messageText)) {
                        console.log('diary, journal, ghost house');
                        return Functions.dailyStory();
                    }
                    if (i == 0 || i == undefined)
                    {
                        console.log('i = 0');
                        i = 1;
                        return "oooOOOOoOOoo You have disturbed my slumber! What is it that you want? ANOTHER story?? If that's what you wish, I require a sacrifice!";
                    }
                    else
                    {
                        console.log('timeOutText = '+timeOutText);
                        if (timeOutText != 0) {
                            console.log('started timeout');
                            return timeOutText;
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
        tc = 0;
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
