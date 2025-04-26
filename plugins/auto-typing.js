//COD BY LOKU NIMA NIMA MD 1V 2025//
//MY CONTACT NO 94769091078,94760743488//



const fs = require('fs');
const path = require('path');
const config = require('../config')
const {cmd , commands} = require('../command')


// Composing (Auto Typing)
cmd({
    on: "body"
},    
async (conn, mek, m, { from, body, isOwner }) => {
    if (config.AUTO_TYPING === 'true') {
        await conn.sendPresenceUpdate('composing', from); // send typing 
    }
});
