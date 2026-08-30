const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "NIMA~MD&KnightBot!H4sIAAAAAAAAA5VU247bNhD9lYCvNrK6WbIMLBBJli35Ll9XbvJAS7RMrSzJJGVbDvYhQFH0FxzA/5CHFgnapN/kTyjkveWhTbcQMCCH1MyZwzPzHsQJpqiNclB7D1KCt5ChYsnyFIEa0LPlEhFQBj5kENQA1ORgU5c241alV+mFNz7ri2QxWexR6KnqpnUo+d0BzubaTfca3JVBmi0i7P0g4E6056hpN0rDsaNtskNmRuHaEzuhML7qUrZK16bEFm5j1CgCFhEhJjgOzHSF1ojAqI3yAcTkZfBxJzKadcg2bWEkO8lBCRhJ+6FRctmmkcy7jcQyu2g6XQnOy+BXXUvlD8q4Yq7E5krf3LSuUrm/OxC+Mriq6/C2mi9jJGt+QO/hUxzEyLd9FDPM8hfz3m33p2i0EgWU6lXcgJoTt9UhHCJlT6KW7HakcdZpTtfzifcy4BTh+QC1E8PcZkNnk/dtbA7THVwMAmWWzuRS7vobHHPxkPse+IA8auX2//AeGDvNHciq6imEosbksJ45to64qCkNfEU6II+0V5o5NGP6MvibvaPmkr61RiN3NqoObY3bXw1nMizlxKqvb/rtndEbjhVvrD3DhywjPyTZM+Gq3SNJ9dCrNKqmeKMQtb9VTT20Ytl0BbFnodlQ385om+Y7nVrddSr4A8+pqlZpsjXmXVl1Db5u0njYnjVUvEhXzvWloluU2z6o8XdlQFCAKSOQ4SQufAKvlgH0tyPkEcQu9AIymJn6OumbtC+EW1FK1Q2HYefAC6ELdV4d8+mknpOOhNxrUAYpSTxEKfItTFlC8i6iFAaIgtpP78ogRnt2/3BFOpEvgyUmlE3iLI0S6D++6uMh9Lwki9kojz2jWCACatyzGzGG44AWPGYxJN4Kb5GxgoyC2hJGFD1ViAjyQY2RDD11rZH4BfHKqDkVOkoXlMH68iDYBzWgSkqV52SxUq3U5Df09a4ICtP0dYwYKIMYFnfB+XT8dj4dv5xPx6/n0/HT+XT8/OrV+XT8/WH39eH0z/Pp46+v3sbn0/Gvwn785bL+drG/XTwf3sbFV1x+vnf843L289PZ/R9fLvbrxX662M+gDKILcl7i5IogypwiqzLP1+Q3hf/uibOiRB8xiCMKasBoG0GCpLrZEacH1Wk2NTPQjEADzxw/ivVeDIbdmyueNbBiVwxxWGoG2gg1Z+FmF6cuP17U+5P9esRQZXZ7/Q9BQA1wQwcvdF706l0/vb0yIuJPXae64ESpY0v2rkMzt+XYk4mwkTKFbnZzKtjeEoaVOWdYmWPVs3Gzww3ZwRErsQWz2WSvBddFNh9tsYe+T2bO09urjuy4cXwTu2GXW4zx3hlSEVm2P96X5mG1dWhyB2EsmBPW9iu21IxmgdcSptZikqRBXV+ueT7nBk1mNEq9rupsQ+2+jS5tHD2MT3wReKGeYrvE6DKNHnTyH2q6h11InrsrfxfhYbr9y4TQHVyfIVE/7CtCT5KSq1WimfEqSmTakme9ibA7RN35LbnJpim4u3tXBmkE2TIh62LkrhcQlAFJsqKB7HiZ/CCTodm2GQR2UXQEKdOem3KM14gyuE5BjVeqVU6pKlX57m/zKsZWygcAAA==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || ".𝗦𝗘𝗘𝗡 𝗬𝗢𝗨𝗥 𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗬 𝗡𝗜𝗠𝗔 𝗠𝗗🔄",
// set the auto reply massage on status reply  
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true"
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/n8o8py.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "NIMA-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "NIMA-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "+94760743488",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "LOKU NIMA",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© POWERED BY LOKU NIMAH🔄*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/n8o8py.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> *YES AIM NIMA MD ALIVE LOKU NIMA-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "true",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "true",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "true",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94760743488",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "true"
// make it true for auto recoding 
}
