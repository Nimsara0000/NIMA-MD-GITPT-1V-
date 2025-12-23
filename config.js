const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "NIMA~MD&starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUpyblhnQlVSZVozRmhUTDBhYWdkSm5aQmR5VUk3QnVIdm9rTFVqUE8ybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVFB2Tk5CRzZJMzVZVW9jM1Fub2FBeFEyN2gzY28wMVJ1VXh2dkovYU5rOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRUG5wclF3ZkhtOFdCTzZlSXROb0d5aE9kTXlWMys4Y2xXTzB0eGViMkgwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjSFNaWFNjWmd5SmJUeTBzM1NYQ3c4dkZKV2dzeHJkdW5XVVUyOGU2K2hnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNPWFFpc1JESklCdjh3WGNjYnRNTk1BeDg3bmxCMGYxWXRrQVBqemdaR2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhOL1NBNUo1b0NPc3BjcFNSdGNkUUIvMGc5SGZaZzlpZC9XOTdZR1R3Z0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUkxODNZZU9uOURlQ3N1WGdycG5XTHFiT2krZkM1UUlSQUc2YmNrUjcyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTVBNSGZNaFRjUGVyTWpIN2t2RWhocTMwUGFpclJYRGJIWEpzMjloTk5XUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl4dGNZTXNvSTRTQWdKakxZbWxmalR2c3B6MUhkUjIyakQ3d09xckd1OHd2Zlh5NkRaaVFWRDN1TlZJM3VJOVZOQWk0QnZkRDI0YnhXMkx3OVROT0JnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6IkJma3VBc3VRSVg5SzZBUFFaT3VIc0lyc0JVSUorS3dEWTJlWjZLQUZGN2c9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjA3NDM0ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTUxNjRENjI0MkFENDk2RkJGQzIxRkM3NDZFNTFDOTkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NjUxODk3OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjA3NDM0ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVEQkQ0Q0JGQUVDRDMwQzBENzkwOUI4NzU4QUM0MEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NjUxODk3OX0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjA3NDM0ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU2QzlBNTkwRUVDMTFDMDgyOUZDOTQ2QUFGODUzMUYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NjUxODk4MH0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NjA3NDM0ODhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU4MUQxMDlBRkJEQURBRTMxMENGRjgzOEYxN0U2NDQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NjUxODk4MX1dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoyLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZVVBSQURFViIsIm1lIjp7ImlkIjoiOTQ3NjA3NDM0ODg6MjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibmltYSIsImxpZCI6IjQyNTcyMzg2OTY3NzY3OjIzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnpDNDhvREVMTGhxOG9HR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNzhuWWNMVVNYOHExcnRNNjh4elUwVmxDWEI5VWsrcmVwOEwwNStKUmUzTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoidUxUdTBpQWE3Y2NNazZoWERHTVRiOXF2N2VoQWY5SUlyU0NPVjRtQ2Z6aHhjQ1hOR0tWbkdpY2YvYTRxQlh2bkZDMzl4SzdzT0ZoZmJNMnVMOEg1Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6InNCanluc0EveXgrOFRBMnlVV2t1ZU80OHB1R1Qya1oxcXdGTlZmZDJnN1NjNUFjZWRwaXR0SUZjTGtPZVZFTVlwK1VOUTVYcTd6aHFPWjk1aGs5QUFnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjA3NDM0ODg6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZS9KMkhDMUVsL0t0YTdUT3ZNYzFORlpRbHdmVkpQcTNxZkM5T2ZpVVh0eiJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FNSUN3Z0kifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzY2NTE4OTc2LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUxOYiJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || ".𝗦𝗘𝗘𝗡 𝗬𝗢𝗨𝗥 𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗬 𝗡𝗜𝗠𝗔 𝗠𝗗🔄",
// set the auto reply massage on status reply  
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "true",
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
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "true",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "true",
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
};
