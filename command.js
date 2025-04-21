conn.ev.on('messages.upsert', async ({ messages }) => {
    const m = messages[0];
    if (!m.message) return;

    const text =
        m.message?.conversation ||
        m.message?.extendedTextMessage?.text ||
        m.message?.imageMessage?.caption ||
        m.message?.videoMessage?.caption;

    if (!text) return;

    for (let cmd of commands) {
        const regex = new RegExp("^" + cmd.pattern, "i");
        if (regex.test(text)) {
            try {
                await cmd.function(conn, m, m, {
                    from: m.key.remoteJid,
                    body: text,
                    quoted: m.message?.extendedTextMessage?.contextInfo?.quotedMessage,
                    reply: (msg) => conn.sendMessage(m.key.remoteJid, { text: msg }, { quoted: m })
                });
            } catch (e) {
                console.error("Command error:", e);
            }
        }
    }
});
