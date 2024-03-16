let fetch = require('node-fetch');

let handler = async (m, { conn, command, args }) => {
   if (!args[0]) return conn.reply(m.chat, 'Linknya Mana Kak', m)
        
let api = await fetch(`https://screenia.best/api/screenshot?url=${args[0]}`)
let data = await api.buffer()

   conn.sendMessage(m.chat, { image: data, caption: 'Here' }, { quoted: m })
}
handler.help = ['ssweb <url>']
handler.tags = ['tools']
handler.command = /^(ssweb|ss)$/i

handler.limit = true
handler.fail = null

module.exports = handler