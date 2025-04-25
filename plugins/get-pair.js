// FIXED VERSION BY LOKU NIMA - NIMA MD 1V 2025

const fetch = require("node-fetch"); // Make sure this line is active
const { cmd } = require("../command");

cmd({
    pattern: "pair",
    alias: ["getpair", "clonebot"],
    react: "✅",
    desc: "Pairing code",
    category: "download",
    use: ".pair +9476074XXX",
    filename: __filename
}, 
async (conn, mek, m, { from, prefix, quoted, q, reply }) => {
    try {
        // Delay helper
        const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        // Check for input
        if (!q) {
            return await reply("*Example:* .pair +947607434XX");
        }

        // Fetch from API
        const response = await fetch(`https://nima-web-pair-2-3.onrender.com/pair?phone=${q}`);
        const pair = await response.json();

        // Validate response
        if (!pair || !pair.code) {
            return await reply("Failed to retrieve pairing code. Please check the phone number and try again.");
        }

        // Send success response
        const pairingCode = pair.code;
        await reply(`> *NIMA-MD PAIR COMPLETED*\n\n*Your pairing code is:* ${pairingCode}`);

        await sleep(2000); // Wait 2 seconds

        await reply(`${pairingCode}`);
    } catch (error) {
        console.error("Pairing Error:", error);
        await reply(`*Error:* ${error.message || error}`);
    }
});
