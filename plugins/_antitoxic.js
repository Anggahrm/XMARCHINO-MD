let handler = m => m

const sleep = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

let linkRegex = /(memek|mmk|kntl|kontol|ajg|anjing|anjg|tolol|bgst|bangsat|goblok|peler|jembut|tempik|ngentot|ngentod|yatim|y4tim|lonte|jancok)/i
handler.before = async function (m, { user, isBotAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupToxic = linkRegex.exec(m.text)
  if (chat.antiToxic && isGroupToxic) {
    if (!isBotAdmin) return m.reply(`*${global.namebot} is not an admin. how to delete someone message if ${global.namebot} is not admin*`)
    await conn.sendMessage(m.chat, { delete: m.key })
    await sleep(10000)
  }
  return true
}

module.exports = handler