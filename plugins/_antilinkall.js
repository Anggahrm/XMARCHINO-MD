let handler = m => m

const sleep = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

let linkRegex = /http|t.me|facebook.com|instagram.com|wa.me\/62/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)
  if (chat.antiLinkall && isGroupLink) {
    if (isAdmin) return
    if (!isBotAdmin) return m.reply(`*${global.namebot} is not an admin. how to delete someone message if ${global.namebot} is not admin*`)
    await conn.sendMessage(m.chat, { delete: m.key })
    await sleep(10000)
  }
  return true
}

module.exports = handler