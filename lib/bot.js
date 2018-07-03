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
var point = '';
var fireworks, food, navy, freedom, revolution, america;
var messageName, messageUId;
var timeOutText = 0;
const g0 = /27754904/;
const g1 = /41279538/;
const g2 = /40252839/;
const g3 = /41673683/;
/** MASTER DEV PLAN
 * Seperate values for different groups     -COMPLETE-
 * Holiday stories                          -COMPLETE-
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

            Jacob = result.rows[0].jacob;
            River = result.rows[0].river;
            Lauren = result.rows[0].lauren;
            Kristen = result.rows[0].kristen;

            fireworks = result.rows[0].fireworks;
            food = result.rows[0].food;
            navy = result.rows[0].navy;
            freedom = result.rows[0].freedom;
            revolution = result.rows[0].revolution;
            america = result.rows[0].america;




            console.log('s loaded '+s+' '+s1+' '+s2);
            console.log('i loaded '+i+' '+i1+' '+i2);
            console.log('t loaded '+t+' '+t1+''+t2);
            console.log('time loaded '+timeout+' '+timeout1+' '+timeout2);
            console.log('toc loaded '+toc+' '+toc1+' '+toc2);
            console.log('day loaded '+day+' '+day1+' '+day2);
            console.log('d2 = '+d2+' '+d21+' '+d22);
            console.log('month = '+month+' '+month1+' '+month2);

            console.log('Jacob\'s score\: '+Jacob);
            console.log('River\'s score\: '+River);
            console.log('Lauren\'s score\: '+Lauren);
            console.log('Kristen\'s score\: '+Kristen);

            console.log('fireworks loaded '+fireworks);
            console.log('food loaded '+food);
            console.log('navy loaded '+navy);
            console.log('freedom loaded '+freedom);
            console.log('revolution '+revolution);
            console.log('america loaded '+america);

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
    static saveJuly() {
        const con = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: true,
        });
        con.connect();
        var sqlm = 'update counters set fireworks = '+fireworks+', food = '+food+', navy = '+navy+', freedom = '+freedom+', revolution = '+revolution+', america = '+america+'\;';
        con.query(sqlm, function(err) {
            if (err) throw err;
            console.log('saved July');
            con.end();
        })
    }
/**    static saveid() {
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
    */
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
    static easteregg(messageid) {
        const jacobex = /26997134/;
        const riverex = /33073287/;
        const laurenex = /29962743/;
        const kristenex = /48138508/;

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
        /** 4TH OF JULY
         * need score counters for players                      -COMPLETE-
         * need a story arch for gerald and 4th of july         -COMPLETE-
         * need a list of expressions to look for               -COMPLETE-
         * need a story for each expression                     -COMPLETE-
         * need a reward for winner                             
         * impliment a way to send hints to sepcific players    -REMOVED-
         * need hints for future expressions                    -COMPLETE-
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
        const kindex = /kind/i;
        const everyoneex = /everyone/i;

        const diaryex = /diary/i;
        const journalex = /journal/i;
        const ghosthouseex = /ghost house/i;

        const fireworkex = /firework/i;
        const beerex = /beer/i;
        const foodex = /food/i;
        const britishex = /british/i;
        const navyex = /navy/i;
        const shipex = /ship/i;
        const freedomex = /freedom/i;
        const revolutionex = /revolution/i;
        const redWhiteBlueex = /red/i;
        const americaex = /america$/i;
        const scoreex = /score/i;
        const rulesex = /rules/i;
        const playex = /play/i;

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
        if (g3.test(groupid)) {
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
                // July Trigger Section --------------------------------------------------------------------------------------------------------------------------------------
                if (fireworkex.test(messageText)) {
                    if (fireworks == 0) {
                        Functions.easteregg(messageUId);
                        fireworks = 1;
                    }
                    var fireS = "Fireworks? I remember... explosions! Canons shooting from every which way. We had just left china with the rarest of materials- gun powder. The best on the globe. We traveled 3 continents for this stuff but we were about to lose it all to these terrible Canadians. You may think they are friendly now but back then they were like a moose after you just interrupted their mating ritual. They started boarding us, all but 3 of us, including Big Hat Matt were captured! They started searching floor by floor so we scurried down to the bottom level. It seemed like all was lost. Suddenly a canon flew into our ship! A great big hole with water gaping in. Big Hat Matt started to plug it but I stopped him. I grabbed a spare barrel of powder, swam through the hole right to the bottom of their ship. I grabbed my knife and my trusty pocket watch. I opened the barrel and struck my watch.";
                    var fireworkP = point + fireS;
                    return fireS.toString();
                }
                if (beerex.test(messageText) || foodex.test(messageText)) {
                    if (food == 0) {
                        Functions.easteregg(messageUId);
                        food = 1;
                    }
                    var foodS = "Food.. Drink… I remember hunger. When I awoke from the black, I felt wet sand cradling my body. Slowly I arose to find only myself. I grabbed a nearby stick to help walk inland. I eventually came to a tree with fruit around it. I grabbed one and smacked it against the tree. I heard a lot of cracking, looked up, and just barely missed a fruit coming right for me. I thought for a second blood was dripping on my foot, but it was just the fruit. Just as I started to take a drink, voices echoed, branches moved, I held my stick up, and out emerged Big Hat Matt! “Captain! You’re alive!”. I started to smile but restrained myself. I stiffened and asked if they had a camp ready. He confirmed and led my there. I got a brace on my leg but there was still no food. “The ship destroyed, no weapons, how long can we last like this?” I thought. But then… something… something saved us... or took us. I can't remember.";
                    var foodP = point + foodS;
                    return foodP.toString();
                }
                if (britishex.test(messageText) || navyex.test(messageText) || shipex.test(messageText)) {
                    if (navy == 0) {
                        Functions.easteregg(messageUId);
                        navy = 1;
                    }
                    var navyS = 'British Navy… I remember we were starved half to death, covered in bug bites, unable to find anything to hunt. We moved to the beach for the breeze to save us from the god forsaken heat. So hot. So humid. Just when everything seemed lost, we saw a ship. With what little energy we had, we started to burn. Down the trees. We figured anything was better than here, and we still had some rum to trade for passage. I guess the ship noticed us because it turned and anchored. A row boat came to shore and it was at that moment, admittedly too late, that we realized it was a British Navy ship. We were all too sickly to be able to flea, and with a heavy head we surrendered, turning over the rum and our hands to their shackles. Once we were on the ship they locked us in cages. Oh how I just wished for freedom…';
                    var navyP = point + navyS;
                    return navyP.toString();
                }
                if (freedomex.test(messageText)) {
                    if (freedom == 0) {
                        Functions.easteregg(messageUId);
                        freedom = 1;
                    }
                    var freedomS = 'Freedom? I remember being stuck on that god forsaken ship. The crew told us it was only weeks but it felt like an eternity, caged in shackles. Eventually, the ship came to a stop. “Must be making port” said Matt. He wasn’t wearing his hat anymore. After a few hours there was a lot of yelling from up above. A lot of commotion. Then a canon ball burst through the wall, blasting open one of the cell doors. John, who was celled with Matt, pushed open the gate, found a bar and pried my cell open. I looked around, but Matt was gone. That’s when I noticed the blood. I followed it until I saw the upper half of Matt. John crouched down, angry, hurt. He grabbed Matt’s limp hand. I whipped John back to his feet. “We have to go. NOW!” And pushed him towards the exit. I took one last glance at Big Hat Matt. He’s wearing hats in heaven now. When we got to the surface we saw the Spaniards taking over the ship. John and I stole some swords and started fight the British along side the Spaniards. When the fight was done, they thanked us and realized who we were. We released what was left of our crew. They offered us a ship in exchange for helping this new “America” fight against Britain. Having just suffered at their hand, we agreed, boarded a ship, and headed towards the new land. I could feel it in the air… a war was coming…';
                    var freedomP = point + freedomS;
                    return freedomP.toString();
                }
                if (revolutionex.test(messageText)) {
                    if (revolution == 0) {
                        Functions.easteregg(messageUId);
                        revolution = 1;
                    }
                    var revS = 'Revolution… a deathly war. When we finally arrived, there were ships everywhere, but the British were surrounded. Ships blocking the bay, presumably Americans pushing in from the west. Just after a few minutes 3 of the Spanish ships were destroyed, we were taking heavy damage. “Everyone ready on port side!” I spun the ship, whipping across their defenses. “FIRE!” I yelled. Canons roared, walls crumbled, but suddenly the wood all around us cracked and splintered into the air. Our ship was rammed by a Spanish ship, its crew all but obliterated. I tumbled and fell into the water. I arrived at the surface, fire, and bodies engulfed the water. I swam towards the British defenses. I snuck into one of the buildings, then onto the roof of what I thought was a weapon cache, I jumped down and was face to face with… with… something… colorful...';
                    var revP = point + revS;
                    return revP.toString();
                }
                if (americaex.test(messageText) || redWhiteBlueex.test(messageText)) {
                    if (america == 0) {
                        Functions.easteregg(messageUId);
                        america = 1;
                    }
                    var amerS = 'Those colors.. Red, white, and blue. I remember seeing them inland. The colors of America I think. Also the colors the brute I saw before me when I jumped down. About 3 times my size. What I thought was a weapons cache was actually the commanding outpost! He took a swing at me and I rolled to the right. I ran around to the right, grabbing a spare rifle on the table. I turned around, aimed and pulled the trigger. “Click.” I looked down in confusion then up just in time to dodge a have swing. He knocked the post right out from under the roof. A little bit of dust fell and the wood creaked. I hit him in the face as hard as I could. I just laughed and took another swing. In the corner of my eye, I noticed the commander drawing his weapon, and I noticed a pistol holstered in the brutes side. I dashed to another pole, and rolled as he swung. I grabbed his pistol and jumped out of the way as the roof caved in on him. Then I looked up and shot, half blind towards the commander. A moment of silence followed and when the dust has cleared, the commander was dead. Another commander came running in and I held him at gun point. Eventually the Americans pushed through and they took him into custody. I was later told that the commander was Cornwallis. The Americans and Spanish thanked me. They tried to pay us, but I only asked for a ship and the freedom to sail the seas of the Caribbean. They agreed and we went our separate ways. The last thing I remember is setting out to sea, wondering what was next.';
                    var amerP = point + amerS;
                    return amerP.toString();
                }
                
                console.log('bot triggered');
                // Sacrifice Section -----------------------------------------------------------------------------------------------------------------------------------------
                if (botRegex1.test(messageText))
                {
                    if (kindex.test(messageText)) {
                        return "A HUMAN SACRIFICE! HAHAHA!";
                    }
                    if (everyoneex.test(messageText)) {
                        return "Um... no."
                    }
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
                        return "Really?? 5 people?? That's insane! What's next, you'll sacrifice 30 people? I already told you, I don't tell stories for sacrifices!!";
                    }
                    if (s>=5 && s<29)
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
                    if (s == 29)
                    {
                        s++;
                        return "FOR THE LOVE OF GOD STOP! It's getting crowded in here!!! Here's a damn story: Why did the chicken cross the road? To get out of the growing pool of blood. Happy??? If I weren't dead, I would come down there and kill you all myself! You think plates are infinite up here? Well, they're not, and Matilda never washes her dishes! I've had it!";
                    }
                    if (s>29)
                    {
                        s++;
                        return s.toString();
                    }
                }
                // Story Section ------------------------------------------------------------------------------------------------------------------------------------
                if (botRegex.test(messageText) || botRegex2.test(messageText) || botRegex3.test(messageText))
                {
                    Functions.timeout();
                    if (thanks.test(messageText)) {
                        return 'NoooOOOo proOooOoblem!';
                    }
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
                        // Misc --------------------------------------------------------------------------------------------------------------------------------------
                        console.log('timeOutText = '+timeOutText);
                        if (timeOutText != 0) {
                            console.log('started timeout');
                            return timeOutText;
                        }
                        if (manyex.test(messageText)) {
                            var howmany = i+' stories and '+s+' sacrificies.'
                            return howmany.toString();
                        }
                        if (rulesex.test(messageText) || playex.test(messageText)) {
                            return 'You must find all the easteregg keywords to win! Once a keyword has been discovered, the person who discovered it will receive a point, a chapter to a tale will be given, and that word will no longer give out points. You can ask me for the score to get a live count. Remember, it\'s holiday themed!';
                        }
                        if (scoreex.test(messageText)) {
                            return 'River: '+River+', Lauren: '+Lauren+', Jacob: '+Jacob+', Kristen: '+Kristen+'';
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
        Functions.saveScores();
        Functions.saveJuly();
        tc = 0;
        point = '';
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
