const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys')

// === Owner's WhatsApp Number ===
const OWNER_NUMBER = '94760743488@s.whatsapp.net'  // Replace with the owner's WhatsApp number

// === Start Bot Function ===
async function startBot() {
    const { state, saveCreds } = await useMultiFileAuthState('auth_info')
    const sock = makeWASocket({ auth: state })

    sock.ev.on('creds.update', saveCreds)

    sock.ev.on('connection.update', ({ connection }) => {
        if (connection === 'open') {
            console.log('✅ Bot Connected!')
            sendOwnerMessage(sock)  // Send message to owner
            joinGroup(sock)         // Join WhatsApp group automatically
        } else if (connection === 'close') {
            console.log('❌ Connection closed, reconnecting...')
            startBot()
        }
    })
}

// === Function to send a message to the bot owner ===
async function sendOwnerMessage(sock) {
    const message = '✅ Bot Connected Successfully!'
    await sock.sendMessage(OWNER_NUMBER, { text: message })
    console.log('Message sent to owner!')
}

// === Function to join a WhatsApp Group automatically ===
async function joinGroup(sock) {
    const groupInviteLink = 'https://whatsapp.com/channel/0029VazajdIIt5rrYdTBSc0P'  // Replace with your WhatsApp group invite link
    await sock.groupAcceptInvite(groupInviteLink)
    console.log('✅ Bot joined the group!')
}

startBot()
