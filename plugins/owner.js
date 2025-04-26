//COD BY LOKU NIMA NIMA MD 1V 2025//
//MY CONTACT NO 94769091078,94760743488//



const { cmd } = require('../command');
const config = require('../config');

cmd({
    pattern: "owner",
    react: "✅", 
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER; // Fetch owner number from config
        const ownerName = config.OWNER_NAME;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/60dfx8.jpg' }, // Image URL from your request
            caption: `╭━━〔 *NIMA MD 1V 🙃❤️* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃❯❯ *Here is the owner details*
┃◈┃❯❯ *Name* - ${ownerName}
┃◈┃❯❯ *Number* ${ownerNumber}
┃◈┃❯❯ *Version*: 2.0.0 Beta
┃◈└───────────┈⊷
╰──────────────┈⊷
> © POWERED BY LOKU NIMAH 🙃❤️`, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363357955960414@newsletter',
                    newsletterName: 'NIMA MD 1V',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

        // Send audio as per your request
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/8t0jlz.mp3' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
