//COD BY LOKU NIMA NIMA MD 1V 2025//
//MY CONTACT NO 94769091078,94760743488//




const axios = require('axios');
const config = require('../config');
const { cmd } = require('../command');

cmd({
  on: 'body'
}, async (conn, mek, m, { from, body }) => {
  try {
    const jsonUrl = 'https://github.com/Nimsara0000/NIMA-MD-GITPT-1V-/blob/main/data/autosticker.json';
    const res = await axios.get(jsonUrl);
    const data = res.data;

    for (const keyword in data) {
      if (body.toLowerCase() === keyword.toLowerCase()) {
        if (config.AUTO_STICKER === 'true') {
          await conn.sendMessage(
            from,
            {
              sticker: { url: data[keyword] },
              package: 'NIMA-MD'
            },
            { quoted: mek }
          );
        }
      }
    }
  } catch (e) {
    console.error('AutoSticker error:', e);
  }
});
