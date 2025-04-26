//COD BY LOKU NIMA NIMA MD 1V 2025//
//MY CONTACT NO 94769091078,94760743488//



const { cmd } = require("../command");  
const { sleep } = require("../lib/functions");  

cmd({  
    pattern: "restart",  
    desc: "Restart NIMA-MD",  
    category: "owner",  
    filename: __filename  
},  
async (conn, mek, m, { reply, isCreator }) => {  
    try {  
        if (!isCreator) {  
            return reply("Only the bot owner can use this command.");  
        }  

        const { exec } = require("child_process");  
        reply("Restarting...");  
        await sleep(1500);  
        exec("pm2 restart all");  
    } catch (e) {  
        console.error(e);  
        reply(`${e}`);  
    }  
});
