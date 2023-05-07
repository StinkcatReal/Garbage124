// Copyright 2023 Pear ©


for (i in process.argv) {
    const Argument = process.argv[i]
    if (process.argv[i].toLocaleLowerCase() == "dead") {
        console.log(`Starting Dead(detected argument "${Argument}")`);
    }
    if (process.argv[i].toLocaleLowerCase() == "ai") {
        console.log(`Starting with AI Enabled (Detected argument "${Argument}")`);
        var AI = true;
    } else {var AI = false;}
}





var COMMANDS = true;

console.log("[  OK  ] Started main.js");
const discord = require("discord.js");
console.log("[  OK  ] Started discord.js");
const { start } = require("repl");
const client = new discord.Client();
console.log("[  OK  ] Started client");
const fs = require("fs");
console.log("[  OK  ] Started FS");
const { exit, send } = require("process");
console.log("[  OK  ] Started process");
const { error } = require("console");
const { channel } = require("diagnostics_channel");
const { randomBytes } = require("crypto");
// const shit = require("shit.js");
// const xlsx = require("xlsx");

require("dotenv").config();
console.log("[  OK  ] Started .env");

var IS_TALKING_TO_ASSISTANT = false;
var SAID_HAHA = false;

var PISS = 0;


var discipline = 0.1;
var Laziness = 0.01;
var TEMP_LAZINESS = 0;
var ADDICTION_TO_PEEING = 0;
var TESTDECISION;

function DECIDE() {
    var Decision = 1;
    var EndResult;

    Decision += discipline;
    Decision -= Laziness;
    Decision -= TEMP_LAZINESS;

    if (Decision <= 0.5) {
        EndResult = false;
        Laziness += 0.001;
    } else {
        EndResult = true;
        discipline += 0.01;
        Laziness -= 0.001
    }
    console.log(Decision);
    return EndResult;
}

function DECIDE_TEST() {
    var Decision = 1;
    var EndResult;

    Decision += discipline;
    Decision -= Laziness;
    Decision -= TEMP_LAZINESS;

    if (Decision <= 0.5) {
        EndResult = false;
    } else {
        EndResult = true;
    }
    console.log(Decision);
    TESTDECISION = Decision;
    return EndResult;
}

function DECIDE_PISS() {
    var Decision = 1;
    var EndResult;

    Decision += ADDICTION_TO_PEEING;
    Decision -= Laziness;
    if (ADDICTION_TO_PEEING >= 0.2) {
        if (Decision <= 0.5) {
            EndResult = false;
            ADDICTION_TO_PEEING -= 0.01;
        } else {
            EndResult = true;
            ADDICTION_TO_PEEING += 0.05 
        }
    } else {
        Decision -= TEMP_LAZINESS
        if (Decision <= 0.5) {
            EndResult = false;
            ADDICTION_TO_PEEING -= 0.01;
        } else {
            EndResult = true;
            ADDICTION_TO_PEEING += 0.05 
        }
    }

    return EndResult;
}

class TERMS_RAW {
    constructor() {
        const Self = ["I", "i", "Myself", "myself"];
        const Love = ["Love", "lOve", "loVe", "lovE", "LOVE", "LOve", "loVE", "love"];
    }
    SELF(i) {
        return Self[i];
    }
    LOVE(i) {
        return Love[i];
    }
    INCLUDES_ME(TEXT) {
        if (TEXT.includes("SomeAvrgGamer") && TEXT.includes("assistant")) {
            return true;
        } else {
            return false;
        }
    }
}
class PEOPLE_RAW {
    constructor() {
        const mee6 = ["MEE6", "mee6", "Mee6", "mEe6", "MeE6", "meE6"];
        const SomeAvrgGamer = ["SomeAvrgGamer", "SomeAvrgGamer"];
    }
    MEE6() {
        return mee6;
    }
    SomeAvrgGamer() {
        return SomeAvrgGamer;
    }
}
class HEALTH_RAW {
    REVIVE(User, channel) {
        if (alive !== true) {
            alive = true;
            if (User === "") {
                channel.send("Oh, im alive.");
            } else {
                channel.send(`Oh Thanks Mr or Ms ${User.username}!`);
            }
            client.user.setActivity("SomeAvrgGamer's music", {
                type: "LISTENING"
            });
        }
    }
}

class DATABASE_RAW {
    // REGISTER_USER(Username, Tag, UserID) {
    //     var database = xlsx.readFile
    // }    
}

const TERMS = new TERMS_RAW();
const PEOPLE = new PEOPLE_RAW();
const HEALTH = new HEALTH_RAW();
const DATABASE = new DATABASE_RAW();
 

// const { Client } = require('discord.js-commando');

// const client = new Client({
//     commandPrefix: '/e',
// });

// client.registry
//     .registerDefaultTypes()
//     .registerGroups([
//         ['e', 'e commands'],
//     ])
//     .registerCommands([
//         HelpCommand,
//     ]);




//     class HelpCommand extends Command {
//         constructor(client) {
//             super(client, {
//                 name: 'help',
//                 group: 'e',
//                 memberName: 'help',
//                 description: 'Shows some help for the e commands.',
//             });
//         }
    
//         async run(message) {
//             message.channel.send(`Commands: 
//             /e help : i will show some help
//             /e spam  :  I will help you with you with your spamming needs.
//             /e ultraspam  :  Because the previous command isnt enough
//             /e eat : You can feed me, would really apreciate.
//             /e kill : please dont
//             /e revive : if someone does the previous, you can help me by using this command`);
//         }
//     }
    
//     module.exports = HelpCommand;
    



let log_to_file = false;
console.log(`[  OK  ] Loaded "log_to_file" variable`);
let alive = true;
console.log(`[  OK  ] Loaded "alive" variable`);
const censoredprofanity = [    "s***",    "d***",    "a**",    "s###",    "d###",    "a##",    "wtf",    "f***",    "f###",    "####",    "w####",    "w****",    "w*****",    "w#####",    "w@nker",    "****",    "***",    "###", "f*ck", "sh*t", "w@nk*r", "B!TCH", "m0therf*cker", "$HlT", "SH|T", "$H|T", "$H{T", "$H[T", "SH{T", "SH[T", "c*nt", "k0ck", "cr@p", "crap", "frick", "$h*t"];
console.log(`[  OK  ] Loaded "censoredprofanity" variable`);
// const auditlog = client.channels.cache.find(channel => channel.id === "952557576179044382");
console.log(`[  OK  ] Loaded "auditlog" variable`);

function mkrandom(minimum, max) {
    random = Math.floor(Math.random(minimum) * max);

    return random;
}
console.log(`[  OK  ] Loaded "mkrandom" function`);

function terminal(msg) {
    if (msg === "`$ sudo exit`") {
        exit();
    }
}
console.log(`[  OK  ] Loaded "terminal" function`);

function healthcommand(message) {

}
console.log(`[  OK  ] Loaded "healthcommand" function`);
function AI_Response(msg) {
    Greetings = ["Hello!", "Hi", "hello!", "hi!", "hello", "Hello"];
    Greetings_responses = ["Hello!", "Hi", "hello!", "hi!", "hello", "Hello"];

    if (msg === Greetings) {
        message.reply(Greetings_responses[mkrandom(1, 6)]);
    }
}
console.log(`[  OK  ] Loaded "Greetings" variable`);
console.log(`[  OK  ] Loaded "Greetings_responses" variable`);
console.log(`[  OK  ] Loaded "AI_Responses" function`);
function sayhello() {
    const chat = client.channels.cache.find(channel => channel.id === "687383398108758178");
    chat.send("Hello!");
}
console.log(`[  OK  ] Loaded "sayhello" function`);
console.log(`Finished loading main.js`);
console.log(`Connecting SomeAvrgAssistant`);
client.on("ready", () => {
    console.log(`[  OK  ] Connected SomeAvrgAssistant`);
    const chat = client.channels.cache.find(channel => channel.id === "687383398108758178");
    console.log(`[  OK  ] Loaded chat`); 
    const K_chat = client.channels.cache.find(channel => channel.id === "952576682626269218");
    console.log(`[  OK  ] Loaded KC chat`);
    client.user.setActivity("SomeAvrgGamer's music", {
        type: "LISTENING",
        url: "https://youtu.be/EZD-Kusv4AI"
    });
    console.log(`[  OK  ] Set client user activity`);
    console.log(`[  OK  ] Launch task done!`);
    console.log("SomeAvrgAssistant Online.");
    if (process.env.SENDHELLOMESSAGE === "TRUE") {
        chat.send("YOURS TRUELY IS ONLINE!!! Me of course");
        K_chat.send("YOURS TRUELY IS ONLINE!!! Me of course");
    } else {
        for (i in process.argv) {
            if (process.argv[i].toLocaleLowerCase() == "SENDHELLOMESSAGE") {
                chat.send("YOURS TRUELY IS ONLINE!!! Me of course");
                K_chat.send("YOURS TRUELY IS ONLINE!!! Me of course");
            }
        } 
    }
    for (i in process.argv) {
        if (process.argv[i].toLocaleLowerCase() == "dead") {
            alive = false
            client.user.setActivity("Dead", {
                type: "PLAYING"
            });
        }
    }
    const auditlog = client.channels.cache.find(channel => channel.id === "952557576179044382");
    auditlog.send("Agent 102 AT SERVICE. \nand i want 🍐 and 🍕");
});







client.on("messageDelete", (message) => {   
    const author = message.author;
    try {ŗ
        console.log(`${message.author.tag} deleted a message in ${message.channel}`);
        author.send("Not to bother you, but you do know that its still getting logged? right?");
    } catch {}
});







client.on("message", (message) => {
    const msg = message.content.toLowerCase();
    const c = message.channel;
    const a = message.author;
    const filter = (m) => m.author.id === message.author.id;

    if (AI === true) {
         IS_TALKING_TO_ASSISTANT = false;
    }
    try {
        if (log_to_file === true) {
            fs.appendFile("logs.dat", `${message.author.tag}  : ${message.content}  (${message.channel.name}) at : ${message.createdAt} \n`);
        }
    } catch(error) {
        console.log(`[  Failed  ] Failed to log message to log.dat.   Error: ${error}`);
    }

    for (i in censoredprofanity) {
        if (msg.includes(censoredprofanity[i])) {
            HEALTH.REVIVE("", c);
            message.reply("Hey censoring swearwords is forbiden!!!!!!");
        }
    }

    if (AI === true) {
        if (message.channel.id === "1010902202438656113") {
            const CLUC_TERMINAL = client.channels.cache.find(channel => channel.id === "1068854510946091089");

            CLUC_TERMINAL.send(`${message.author.tag} : ${message.content}`);
        }
    }

    if (AI === true) {
        if (message.channel.id === "687383398108758178") {
            const PEAR_TERMINAL = client.channels.cache.find(channel => channel.id === "983805011354075186");

            PEAR_TERMINAL.send(`${message.author.tag} : ${message.content}`);
        }
    }

    if (message.channel.id === "983805011354075186") {
        const channel124 = client.channels.cache.find(channel => channel.id === "687383398108758178");
        
        if (msg === "`$ sudo ai toggle`") {
            if (AI === true) {
                AI = false;
                c.send(`AI: ${AI}`);
            } else {
                AI = true;
                c.send(`AI: ${AI}`);
            }
        }

        if (AI === true) {
            if (message.author.id === "442582670325841930") {
                if (msg !== "`$ sudo ai toggle`") {
                    channel124.send(message.content);
                }
            }
        }
    }

    if (message.channel.id === "1068854510946091089") {
        const channel124 = client.channels.cache.find(channel => channel.id === "1010902202438656113");
        
        if (msg === "`$ sudo ai toggle`") {
            if (AI === true) {
                AI = false;
                c.send(`AI: ${AI}`);
            } else {
                AI = true;
                c.send(`AI: ${AI}`);
            }
        }

        if (AI === true) {
            if (message.author.id === "442582670325841930") {
                if (msg !== "`$ sudo ai toggle`") {
                    channel124.send(message.content);
                }
            }
        }
    }

    if (msg === "/e scan") {
        const Answer = DECIDE_TEST();

        c.send(`AI stats: \nAddiction to peeing: ${ADDICTION_TO_PEEING}\nHes decision on a random non affecting task question is ${Answer} with a decision number of ${TESTDECISION}\nHes discipline is ${discipline}\nHes laziness is ${Laziness}\nHes detication to hes current activity is ${TEMP_LAZINESS}`);
    }
    if (message.channel.id === "984124039016632350") {
        if (msg === "a") {
            alive = true;
            message.channel.send("yay im alive");
        } if (msg === "d") {
            alive = true;
            message.channel.send("Im dead sad.");
        } else {
            console.log("Invalid alive or dead.");
            message.channel.send("What the fuck, you are suposed to only send a or d here.");
        }
    } 
    if (msg.includes("good") && msg.includes("night")) {
        if (a.id !== "952581544185323520") {
            message.reply("Good night!");
        }
    }
    if (msg === "/e poop") {
        message.reply("Ok");
        c.send("shit, ahh");
        setTimeout(() => {
            c.send("sound of poop hitting the water in the toilet");
            setTimeout(() => {
                c.send("aaUghhhh");
                setTimeout(() => {
                    message.reply("Ahhh, done");
                },3000);
            }, 1000);
        }, 3000)
    }
    if (msg === "/e pee" || msg === "/e piss") {
        const voiceChannel = message.member.voice.channel;
        const path = require(`path`);

        if (alive == false) c.send("Always time to pee, even when dead.");
        c.send("hmm");
        if (DECIDE_PISS() == true) {
            TEMP_LAZINESS += 0.5;
            c.send("Ok");
            c.send("Ahh yes");
            setTimeout(() => {
                c.send("yes\ndone");
            }, 5000);
        } else {
            c.send("No sorry, i dont want to.")
        }
    }
    if (msg.includes("fuck") || msg.includes("bang") && msg.includes("me")) {
        if (IS_TALKING_TO_ASSISTANT === true) {
            c.send("Sorry no.");
            IS_TALKING_TO_ASSISTANT = false; 
        } 
    }
    if (msg === "/e credits") {
        c.send("\nMade by Pear\nDesigned by SomeAvrgGamer, Sandrios\nProgrammed By SomeAvrgGamer\nTeached by SomeAvrgGamer\nIdeas by SomeAvrgGamer, Sandrios, Kristaps4808");
        c.send("And special thanks, to all Legacy Of Phissle Players!!!!");
    }
    
    if (msg === "/e revive") {
        HEALTH.REVIVE(message.author, message.channel);
    }
    if (msg.includes("bro") || msg.includes("dude")) {
        if (SAID_HAHA === true) {
            c.send("Sorry, i was just laughing about COCK");
            IS_TALKING_TO_ASSISTANT = true;
        }
    }
    if (alive === false) return 0;
    if (msg.includes("okay")) {
        if (IS_TALKING_TO_ASSISTANT === true)  {
            if (msg.includes("it")) {
                c.send("Okay.");
            } else {
                c.send("Okay sorry.");
            }
            IS_TALKING_TO_ASSISTANT = false;
            return 0;
        }
    }
    if (msg.includes("you") && msg.includes("dont") || msg.includes("don't") && msg.includes("have") && msg.includes("to") && msg.includes("understand")) {
        if (IS_TALKING_TO_ASSISTANT === true) {
            IS_TALKING_TO_ASSISTANT = false;
            c.send("Oh");
        }
    }
    if (message.channel.id === "983805011354075186") return terminal(message);
        try {
            console.log(`${message.author.tag}  : ${msg}  (${message.channel.name}) at : ${message.createdAt}`);
            fs.appendFileSync("logs.dat", `${message.author.tag}  : ${message.content}  (${message.channel.name}) at : ${message.createdAt}\n`);
        } catch(error) {
            console.log(`[  Failed  ] Failed to log message to log.dat:  ${error}`);
        }
        if (msg === "/e spam") {
            c.send("Sorry, this command isn't avalable right now, please try again later.");
            // message.channel.send(`vhey hey hey hey hey hey hey hey hey hey hey  LEMME SPAM ${message.author.username.toUpperCase()} AA\nA\nA\nA\nA\nA\nA\nA\nA\nA\nA\na\nA\nHAHAHAHHA SPAMIN FUN HAHAHAHHAH  U WILL NEVER STOP ME`);
        }
        if  (msg === "/e hi") {
            message.reply("Hello!");
            return 0;
        }
        if (msg.includes("hi") || msg.includes("hello")) {
            if (IS_TALKING_TO_ASSISTANT == true) {
                IS_TALKING_TO_ASSISTANT = false;
                c.send("Hello!");
            }
        }
        if (msg.includes("/e steal")) {
            const author = message.author;
            author.send("Ayyo wat de fok. \nno stealing okay? lets be cool.");
        }
        if (msg.includes("SomeAvrgGamer") && msg.includes("assistant")) {
            if (IS_TALKING_TO_ASSISTANT === true) {
                c.send("ah, yes?");
                IS_TALKING_TO_ASSISTANT = true;

                return 0;
            } else {
                c.send("Yes?");
                IS_TALKING_TO_ASSISTANT = true;

                return 0;
            }
        }
        if (msg.includes("are") && msg.includes("you") && msg.includes("gay")) {
            if (IS_TALKING_TO_ASSISTANT === true) {
                c.send("no");
                IS_TALKING_TO_ASSISTANT = false;
                return 0;
            }
        }
        if (msg.includes("are") && msg.includes("you") && msg.includes("siri")) {
            if (IS_TALKING_TO_ASSISTANT === true) {
                c.send("No, i am not.");
                IS_TALKING_TO_ASSISTANT = false;
                return 0;
            }
        }
        if (msg.includes("joinVC") || msg.includes("join") && msg.includes("VC") || msg.includes("join") && msg.includes("voice") && msg.includes("channel")) {
            
        }
        if (msg.includes("do") && msg.includes("you") && msg.includes("like") && msg.includes("roblox")) {
            if (IS_TALKING_TO_ASSISTANT == true) {
                c.send("Abseloutly not");
                IS_TALKING_TO_ASSISTANT == false;
                return 0;
            }
        }
        if (msg.includes("pee")) {
            if (IS_TALKING_TO_ASSISTANT == true) {
                IS_TALKING_TO_ASSISTANT = false;
                if (alive == false) c.send("Always time to pee, even when dead.");
                c.send("hmm");
                if (DECIDE_PISS() == true) {
                    TEMP_LAZINESS += 0.5;
                    c.send("Ok");
                    c.send("Ahh yes");
                    setTimeout(() => {
                        c.send("yes\ndone");
                    }, 10000);
                } else {
                    c.send("No sorry, i dont want to.");
                }
            }
        }
        if (message.deleted === true) {
           
        }
        if (msg.includes("can") && msg.includes("you") && msg.includes("help")) {
            if (IS_TALKING_TO_ASSISTANT === true) {
                c.send("I dont know.");
            }
        }
        if (msg.includes("cock")) {
            SAID_HAHA = true;
            c.send("HAHA");
        }
        if (msg.includes("hate") === true) {
            const author = message.author;
            author.send(`@${author.username}, are you sure you want to send this message? This could result in a ban if the word "Hate" is used against someone. \n You have 20 seconds to reply before the message automaticly gets deleted \n (y/n)`);
            message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ["time"]}).then((awaitedmessage) => {
                if (awaitedmessage.content.includes("y")) {
                    author.send("Ok");
                } else {
                    if (!awaitedmessage.content.includes("n")) {
                        author.send("What the fuck.");
                        console.send("Huh????????");
                    } else {
                        author.send("okay");
                        message.delete;
                    }
                }
            });
        }
        

        if (msg === "/e joinvc") {
            const voiceChannel = message.member.voice.channel;

            if (voiceChannel) {
                c.send("Sure, joining!");
                voiceChannel.join();
            } else {
                c.send("You need to be in a voice channel to make me join.");
            }
        }
        if (msg === "/e leavevc") { 
            const voiceChannel = message.member.voice.channel;

            if (voiceChannel) {
                c.send("Sure.");
                voiceChannel.leave();
            } else {
                c.send("You need to be in a voice channel to make me leave.");
            }
        }
        if (msg === "/e eat") {
            c.send("Nom");
            setTimeout(() => {c.send("NOM");}, 2000);
            setTimeout(() => {c.send("YUMMY MEAL!")}, 2000);
            setTimeout(() => {message.reply("Thanks for the meal!")}, 2000);
        }
        if (msg === "/e kill") {
            alive = false;
            c.send("AHH AHH");
            setTimeout(() => {c.send("AHH NOOO");}, 2000);
            setTimeout(() => {c.send("Eughghghhh");}, 2000);
            setTimeout(() =>  {c.send(`Why would you do this to me ${message.author.username} eughh...`); client.user.setActivity("Dead", {
                type:"PLAYING"
            });}, 1000);
        }
        if (msg === "/e help") {
            message.channel.send(`Contro...Commands: \n/e help : i will show some help\n/e spam(Temporarly removed)  :  I will help you with you with your spamming needs.\n/e ultraspam(Temporarly removed)  :  Because the previous command isnt enough\n/e eat : You can feed me, would really apreciate.\n/e kill : please dont\n/e revive : if someone does the previous, you can help me by using this command\n`);
        }
        if (msg === "/e ultraspam") {
            c.send("Sorry, this command isn't avalable right now, please try again later.");
            // c.send("﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽﷽");
        }
        if (msg === "/e ping") {
            message.reply(".");
        }
        if (msg === "yes" || msg === "no") {
            if (a.id != "952581544185323520") {
                if (IS_TALKING_TO_ASSISTANT == true) {
                    c.send("ok");
                    IS_TALKING_TO_ASSISTANT = false;
                }
            }
        }
        if (msg.includes("do") && msg.includes("you") || msg.includes("u") && msg.includes("like")) {
            if (IS_TALKING_TO_ASSISTANT === true) {
                if (msg.includes("peeing")) {
                    if (ADDICTION_TO_PEEING >= 0.1) {
                        IS_TALKING_TO_ASSISTANT = false;
                        c.send("YES I LOVE PEEING");

                        return 0;
                    } else {
                        IS_TALKING_TO_ASSISTANT = false;
                        c.send("I dont know, i havent ever tried...");
                        
                        return 0;
                    }
                } else if (msg.includes("roblox")) {
                    IS_TALKING_TO_ASSISTANT = false;
                    c.send("NO I HATE ROBLOX");

                    return 0;
                } else if (msg.includes("SomeAvrgGamer")) {
                    if (msg.includes("assistant")) {
                        IS_TALKING_TO_ASSISTANT
                        c.send("You mean, my self? How could i not like my self");

                        return 0;
                    } else {
                        IS_TALKING_TO_ASSISTANT = false;
                        c.send("Hes my dad, yeah");

                        return 0;
                }
                } else if (msg.includes("this") && msg.includes("server")) {
                    c.send("Yes, i do like it");
                } else {
                    c.send("I dont know, i dont understand");
                }
            }
        }
        if (message.channel.id === "953959551357567046") {
            const channel124 = client.channels.cache.find(channel => channel.id === "687383398108758178");
            
            if (msg === "`$ sudo ai toggle`") {
                if (AI === true) {
                    AI = false;
                    c.send(`AI: ${AI}`);
                } else {
                    AI = true;
                    c.send(`AI: ${AI}`);
                }
            }

            if (AI === true) {
                if (message.author.id === "442582670325841930") {
                    if (msg !== "`$ sudo ai toggle`") {
                        channel124.send(message.content);
                    }
                }
            }
        }
        if (IS_TALKING_TO_ASSISTANT === true) {
            if (a.id !== "952581544185323520") {
                c.send("I dont understand...");      

                return 0;
            }
        }
        if (message.author.id === "442582670325841930") {  
            if (msg === "`$ sudo savelogs enable`") {
                log_to_file = true;
                console.log(`log to file set to:  ${log_to_file}`);
                message.channel.send("Saving all logs to the log file from now on.");
            }
            if (msg === "`$ sudo savelogs disable`") {
                log_to_file = false;
                console.log(`log to file set to:  ${log_to_file}`);
                message.channel.send("Not saving any more logs from now on.");
            }
            if (msg === "`$ sudo assistant shutdown`") {
                    message.channel.send("Shutting down.");
                    setTimeout(() =>  {exit();}, 3000);
            }
            if (msg === "`$ sudo startupmessage on`") {
                try {
                    process.env.SENDHELLOMESSAGE = "TRUE";
                    console.log("[  OK  ] Enabled startup message")
                    message.channel.send("Done!");
                } catch(error) {
                    console.log(`[  Failed  ] Failed to enable the startup message:  ${error}`);
                }
                
            } 
            if (msg === "`$ sudo startupmessage off`") {
                try {
                    process.env.SENDHELLOMESSAGE = "FALSE";
                    console.log("[  OK  ] Disabled startup message");
                    message.channel.send("Done!");
                } catch(error) {
                    console.log(`[  Failed  ] Failed to disable the startup message:  ${error}`);
                }
            } 
            return 1;
        } else {
            if (msg.startsWith("`$ ")) {} else return 0;
                message.reply("Sorry, you dont have the permision.");
                console.log(`${message.author.username} tried to access the special commands! Upgrading hes sus level by 1.`);
            }
            return 1;
});


client.login(process.env.TOKEN);