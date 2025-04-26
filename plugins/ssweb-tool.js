//COD BY LOKU NIMA NIMA MD 1V 2025//
//MY CONTACT NO 94769091078,94760743488//




const axios = require("axios");
const config = require('../config');
const { cmd } = require('../command');

cmd({
  pattern: "sss",
  alias: ["ssweb"],
  react: "💫",
  desc: "Download screenshot of a given link.",
  category: "other",
  use: ".ss <link>",
  filename: __filename,
}, 
async (conn, mek, m, {
  from, l, quoted, body, isCmd, command, args, q, isGroup, sender, 
  senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, 
  groupMetadata, groupName, participants, isItzcp, groupAdmins, 
  isBotAdmins, isAdmins, reply 
}) => {
  if (!q) {
    return reply("Please provide a URL to capture a screenshot.");
  }

  try {
    // created by jawad tech 
    const response = await axios.get(`https://api.davidcyriltech.my.id/ssweb?url=${q}`);
    const screenshotUrl = response.data.screenshotUrl;

    // give credit and use
    const imageMessage = {
      image: { url: screenshotUrl },
      caption: "*WEB SS DOWNLOADER*\n\n> *© Powered By loku nima*",
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363357955960414@newsletter',
          newsletterName: "NIMA MD",
          serverMessageId: 143,
        },
      },
    };

    await conn.sendMessage(from, imageMessage, { quoted: m });
  } catch (error) {
    console.error(error);
    reply("Failed to capture the screenshot. Please try again.");
  }
});

// නිමා තමා කැරියා😒
