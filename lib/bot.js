'use strict';
require('dotenv').config();
const { Client } = require('pg');
const https = require('https');
console.log(process.env.BOT_ID);
console.log(process.env.BOT_ID1);
console.log(process.env.BOT_ID2);
console.log(process.env.BOT_ID3);
var groupid;
var i, s, t, tc, toc, timeout, day, d2, month;
var i1, s1, t1, toc1, timeout1, day1, d21, month1;
var i2, s2, t2, toc2, timeout2, day2, d22, month2;
var i3, s3, t3, toc3, timeout3, day3, d23, month3;
var Jacob, River, Lauren, Kristen;
var messageName, messageUId;
var timeOutText = 0;
const g0 = /27754904/;
const g1 = /41279538/;
const g2 = /40252839/;
const g3 = /41673683/;
/** MASTER DEV PLAN
 * Seperate values for different groups     -COMPLETE-
 * Holiday stories
 * How many?                                -COMPLETE-
 * journal entries                          -COMPLETE-
 */

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
        var sqlm = 'select * from counters order by g\;'
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
            s1 = result.rows[1].s;
            i1 = result.rows[1].i;
            t1 = result.rows[1].t;
            timeout1 = result.rows[1].time;
            toc1 = result.rows[1].toc;
            day1 = result.rows[1].day;
            d21 = result.rows[1].d2;
            month1 = result.rows[1].month;
            s2 = result.rows[2].s;
            i2 = result.rows[2].i;
            t2 = result.rows[2].t;
            timeout2 = result.rows[2].time;
            toc2 = result.rows[2].toc;
            day2 = result.rows[2].day;
            d22 = result.rows[2].d2;
            month2 = result.rows[2].month;
            s3 = result.rows[3].s;
            i3 = result.rows[3].i;
            t3 = result.rows[3].t;
            timeout3 = result.rows[3].time;
            toc3 = result.rows[3].toc;
            day3 = result.rows[3].day;
            d23 = result.rows[3].d2;
            month3 = result.rows[3].month;
            /*
            Jacob = result.rows[0].Jacob;
            River = result.rows[0].River;
            Lauren = result.rows[0].Lauren;
            Kristen = result.rows[0].Kristen;
            */
            console.log('s loaded '+s+' '+s1+' '+s2);
            console.log('i loaded '+i+' '+i1+' '+i2);
            console.log('t loaded '+t+' '+t1+''+t2);
            console.log('time loaded '+timeout+' '+timeout1+' '+timeout2);
            console.log('toc loaded '+toc+' '+toc1+' '+toc2);
            console.log('day loaded '+day+' '+day1+' '+day2);
            console.log('d2 = '+d2+' '+d21+' '+d22);
            console.log('month = '+month+' '+month1+' '+month2);
            /*
            console.log('Jacob\'s score\: '+Jacob);
            console.log('River\'s score\: '+River);
            console.log('Lauren\'s score\: '+Lauren);
            console.log('Kristen\'s score\: '+Kristen);
            */
            con.end();
        });
    }
    static save() {
        const con = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
        con.connect();
        var sqlm = 'update counters set s = '+s+', i = '+i+', t = '+t+', time = '+timeout+', toc = '+toc+', day = '+day+', d2 = '+d2+', month = '+month+' where g = 0\;';
        if (g1.test(groupid)) {
            sqlm = 'update counters set s = '+s+', i = '+i+', t = '+t+', time = '+timeout+', toc = '+toc+', day = '+day+', d2 = '+d2+', month = '+month+' where g = 1\;';
        }
        if (g2.test(groupid)) {
            sqlm = 'update counters set s = '+s+', i = '+i+', t = '+t+', time = '+timeout+', toc = '+toc+', day = '+day+', d2 = '+d2+', month = '+month+' where g = 2\;';
        }
        if (g3.test(groupid)) {
            sqlm = 'update counters set s = '+s+', i = '+i+', t = '+t+', time = '+timeout+', toc = '+toc+', day = '+day+', d2 = '+d2+', month = '+month+' where g = 3\;';
        }
        con.query(sqlm, function(err, result) {
            if (err) throw err;
            console.log('updated variables');
            con.end();
        }); 
    }
    static saveid() {
        const con = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
        con.connect();
        var sqlm = 'insert into counters (name, uid, g) values (\''+messageName+'\', '+messageUId+', 5)\;';
        con.query(sqlm, function(err, result) {
            if (err) throw err;
            console.log('logged trigger info');
            con.end();
        })
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
        var daily = [
            '',
            'Day 1. Upon my departure from this world, I reawoke from the black to see the interior of a house. Abandoned, dusty, faded-white cloths cover antique furniture. I pull a sheet off of the piano and dust flies through the air, blinding me. After a moment it fades and in its place, a ghost. I said "get out of here you stupid ghost." It just looked at me with its stupid ghost face and ghost eyes.',
            'Day 2 in the ghost house. I saw a spooky ghost with a sexy ghost butt. Why are ghost butts so sexy.',
            'Day 3 in the ghost house. Fuckin\' ghost horses everywhere with their weird ghost horse faces and sexy ghost horse butts. "Stop it! Stop making me look!"',
            'Day 4 in the ghost house. I\'ve joined the ghosts. What if I was a ghost all along? My butt is so sexy, and my face... is so stupid. Oh shiiit.',
            'Day 5 in the ghost house. The ghosts are growing jealous of my sexy ghost butt. When I went into the kitchen all the ghosts stopped whispering and stared at me with their stupid ghost faces.',
            'Day 6 in the ghost house. All of the ghosts are gone. I didn\'t even know a ghost house could feel more lonely and dead.',
            'Day 7 in the ghost house. All of the ghosts are back. They\'re dancing, shaking their sexy sexy ghost butts. But now, I am gone. Oh shiiit.',
            'Day 8 in the ghost world. After being kicked out I wondered aimlessly in this ghost world and fell into a deep depression. I joined a gang of ghost bums, and we sat around ghost fires. How does that even work?',
            'Day 9 in the ghost world. I woke up to another group of ghost bums trying to steal our fire. One of my ghost friends grabbed a lead pipe and killed their ghost leader. This raises so many questions. Where did he go? Why is his ghost body still here?'
        ]
        var date = new Date();
        var dayr = parseInt(date.getDate());
        console.log('dayr = '+dayr);
        var monthr = parseInt(date.getMonth());
        console.log('monthr = '+monthr);
        if (monthr >= month) {
            month = monthr + 1;
            if (month >= 11) {
                month = 0;
            }
            day = 0;
        }
        if (dayr >= day) {
            d2++;
            day = dayr + 1;
        }
        return daily[d2];
    }
    static easteregg() {
        /** 4TH OF JULY
         * need score counters for players                      -COMPLETE-
         * need a story arch for gerald and 4th of july
         * need a list of expressions to look for
         * need a story for each expression
         * need a reward for winner
         * impliment a way to send hints to sepcific players
         * need hints for future expressions
         */
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
        messageName = message.name;
        messageUId = message.user_id;
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
        const manyex = /many/i;

        const diaryex = /diary/i;
        const journalex = /journal/i;
        const ghosthouseex = /ghost house/i;

        const jacobex = /26997134/;
        const riverex = /33073287/;
        const laurenex = /29962743/;
        const kristenex = /48138508/;

        console.log('name = '+messageName);
        console.log('UId = '+messageUId);

        if (g1.test(groupid)) {
            s = s1;
            i = i1;
            t = t1;
            timeout = timeout1;
            toc = toc1;
            day = day1;
            d2 = d21;
            month = month1;
        }
        if (g2.test(groupid)) {
            s = s2;
            i = i2;
            t = t2;
            timeout = timeout2;
            toc = toc2;
            day = day2;
            d2 = d22;
            month = month2;
        }
        if (g2.test(groupid)) {
            s = s3;
            i = i3;
            t = t3;
            timeout = timeout3;
            toc = toc3;
            day = day3;
            d2 = d23;
            month = month3;
        }


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
                        if (manyex.test(messageText)) {
                            var howmany = i+' stories and '+s+' sacrificies.'
                            return string(howmany);
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
        const botid2 = process.env.BOT_ID2;
        const botid3 = process.env.BOT_ID3;

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
        if (g2.test(groupid)) {
            botId = botid2;
        }
        if (g3.test(groupid)) {
            botId = botid3;
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
