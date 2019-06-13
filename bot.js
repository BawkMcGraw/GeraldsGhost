const https = require('https');
const { Pool, Client } = require('pg');
var gTest = [/27754904/,/41279538/];
var g;
var t,timeout;

// REGEX
// BASIC
const taleex = /tale/i;
const geraldex = /gerald/i;
const ghostex = /ghost/i;
const nameex = /Gerald\'s Ghost/;
const thankex = /thank/i;
const helpex = /help/i;

// RULES
const scoreex = /score/i;
const rulesex = /rules/i;
const playex = /play/i;

// PLAYERS
const jacobex = /26997134/;
const riverex = /33073287/;
const laurenex = /29962743/;
const kristenex = /48138508/;


/** MASTER DEV PLAN
 * fucking rewrite this colossal heap of shit   --IN PROGRESS-- --90%--
 */

class Functions {
    static Story() {
        var array = [];
        var x,a,b,c;
        for (x=0; x<3; x++)
        {
            array.push(Math.floor(Math.random()*Math.floor(4)));
        }
        a = ["I remember this one time we sailed right up to a shore none of us had ever seen before. Large Hat Matt, they called him that on the account of his large hat; he stepped out there and suddenly ",
            "We had just made port when a gentlemen walked up to me with a glimmer of evil in his eye; I knew who he was though I knew not his name, but I still let him talk to me, lord knows why. After some drinks he led me to the other side of the island when out of nowhere ",
            "I remember one time we were all drinking on the ship, the whole crew was plastered; had someone fired on us, their canons would have never pierced through our singing... and this thing... and then... um... anyways ",
            "I just left the SeaMart with a large bucket of kale for Tony, he's vegetarian, when I felt something against my back. Just as the door dinged and shut, I heard someone speaking. 'What?' I said, 'I didn't hear you over the bell.' He said 'One more word and I'll cut your--' and spontaneously "];
        
        b = ["a great big whale just flew right out of the water! I stood in awe and terror at the beast's magnitude blocking out the sun. It was coming right for us! but just before it hit us a loud roar erupted ",
            "a flying ship swooped down from the sky! I couldn't believe it! Skeletons started tumbling out and falling everywhere, dancing as they fell! There was a marimba playing too! It looked like they were all starting to get up ",
            "there was a Costco right over the hill! I don't know why, but our ship can hold over 700 pounds of peg legs! We had just loaded it into our ship ",
            "a giant red crab climbed right next to us! I didn't say anything and kept perfectly still. It turned to us, and everyone but me ran. I must have been thinking of those dinosaurs we saw a couple years before because the crab cut me right in half. I started to scream bloody murder "];
        
        c = ["and the whole thing blew up! KABOOM! we were never heard from again... until later that week when we saw Ms. Darla. Oh gosh, I can smell those delicious pies even now.",
            "and then... I think something... about a marshmellow. No wait! It was a pineapple! No, that's not it either. Hm...",
            "and you would not believe the look on the crews face when we realized it was actually just a ponzie scheme! I swear we lost every last bit of gold. Haha. I was mutinied shortly after.",
            "and then with a bright flash of light, it was all gone. There I was... standing before a strange yet, powerful being. I could tell it was powerful because it was drinking mountain dew. After that things got a little fuzzy and juggy. Something about my outfit I think..."];
        
        return 'stooOOOoory? ' + a[array[0]] + b[array[1]] + c[array[2]];
    }
    static load(groupid) {
        console.log('starting load');
        for (var i = 0; i < gTest.length; i++) {
            if (gTest[i].test(groupid)) {
                g = i;
            }
        }
        const con = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
        con.connect();
        var sqlm = 'select * from counters order by g\;'
        con.query(sqlm, function(err, result) {
            if (err) throw err;

            // SQL RETURN
            t = result.rows[g].t;
            timeout = result.rows[g].timeout;
            s = result.rows[g].s;

            // PLAYER SCORE LOGS
            /**
            * Jacob = result.rows[0].Jacob;
            * River = result.rows[0].River;
            * Lauren = result.rows[0].Lauren;
            * Kristen = result.rows[0].Kristen;
            */

            con.end();
        });
    }
    static save() {
        // Connect
        const con = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
        con.connect();
        // Gather save data
        var sqlm = 'update counters set s = '+s+', t = '+t+', timeout = '+timeout+', where g = '+g+'\;';

        // Send server save info
        con.query(sqlm, function(err, result) {
            if (err) throw err;
            console.log('updated sql');
            con.end();
        });
    }
    static saveScores() {
        const con = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
        con.connect();
        var sqlm = 'update counters set River = '+River+', Jacob = '+Jacob+', Lauren = '+Lauren+', Kristen = '+Kristen+' where g = 0\;';
        con.query(sqlm, function(err) {
            if (err) throw err;
            console.log('saved scores');
            con.end();
        })
    }

    static timeout() {
        var time = new Date();
        var minute = time.getMinutes();
        var hour = time.getHours()*100;
        var day = time.getDate()*10000;
        var month = time.getMonth()*1000000;
        var year = (time.getFullYear()-2000)*100000000;
        var ttime = minute + hour + day + month + year;
        if (timeout >= ttime) {
            timeout = 0;
            t = 0;
            return 0;
        }
        else {
            if (t < 3) {
                t++;
                timeout = ttime + 5;
                return 0;
            }
            if (t == 3) {
                t++;
                return 1;
            }
            if (t > 3) {
                return null;
            }
        }

    }

    static easteregg(messageid) {
        if (riverex.test(messageid)) {
            River++;
            point = 'River got a point! '
        }
        if (laurenex.test(messageid)) {
            Lauren++;
            point = 'Lauren got a point! '
        }
        if (kristenex.test(messageid)) {
            Kristen++;
            point = 'Kristen got a point! '
        }
        if (jacobex.test(messageid)) {
            Jacob++;
            point = 'Jacob got a point! '
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
        var mText = message.text;
        var mName = message.name;
        var UID = message.user_id;

        if (nameex.test(mName)) {
            return null;
        }
        else {
            if (taleex.test(mText) || geraldex.test(mText) || ghostex.test(mText) || sacex.test(mText)) {
                Functions.timeout();
                if (Functions.timeout() == 0) {
                    if (helpex.test(mText)) {
                        return 'YoooOOOou can just ask for stories. Some of the triggers are a secret. If you\'re talking about the easteregg hunt, I\'ll tell more when I know more!'
                    }
                    else {
                        return Functions.Story();
                    }
                }
                if (Functions.timeout() == 1) {
                    return 'You have asked for TooOOOoo many stories! I must rest!';
                }
                else {
                    return null;
                }
            }
        }
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

        const botid0 = "9e5b4c453857bf5478df24d842";
        const botid1 = "85b8f1df02628b05226c8f7b3e";

        if (g = 0) {
            botId = botid0;
        }
        if (g = 1) {
            botId = botid1;
        }
        const options = {
            hostname: 'api.groupme.com',
            path: '/v3/bots/post',
            method: 'POST'
        };
       var loop;
       var mtch = messageText.match(/.{1,1000}/g);
        for (loop = -0; loop <= mtch.length; loop++) {
            function tick(loop) {
                const body = {
                    bot_id: botId,
                    text: mtch[loop]
                };

                const botReq = https.request(options, function(res) {
                    if (res.statusCode !== 202) {
                        console.log('Bad status' + res.statusCode);
                    }
                });

                botReq.on('error', function(err) {
                    console.log('Error ' + JSON.stringify(err));
                });

                // On timeout
                botReq.on('timeout', function(err) {
                    console.log('Timeout ' + JSON.stringify(err));
                });

                botReq.end(JSON.stringify(body));
            }
            setTimeout(tick(loop), 500 * loop);
        }
    }
};
module.exports = {Bot:Bot, Functions:Functions}
