//COD BY LOKU NIMA NIMA MD 1V 2025//
//MY CONTACT NO 94769091078,94760743488//





const axios = require('axios');
const config = require('../config');
const fs = require('fs');
const path = require('path');
const {cmd , commands} = require('../command')


// Replace this with your actual GitHub RAW JSON URL
const GITHUB_RAW_URL = 'https://github.com/Nimsara0000/NIMA-MD-GITPT-1V-/blob/main/data/autoreply.json';

cmd({
  on: "body"
},
async (conn, mek, m, { body }) => {
  try {
    const res = await axios.get(GITHUB_RAW_URL);
    const data = res.data;

    for (const text in data) {
      if (body.toLowerCase() === text.toLowerCase()) {
        if (config.AUTO_REPLY === 'true') {
          await m.reply(data[text]);
        }
        break;
      }
    }
  } catch (err) {
    console.error('Auto-reply fetch error:', err.message);
  }
});
