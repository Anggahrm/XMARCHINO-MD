let handler = m => m

const sleep = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLinkkick && isGroupLink) {
    if (isAdmin) return
    if (!isBotAdmin) return m.reply(`*${global.namebot} is not admin!!!, how does ${global.namebot} kick people?😠`)
    let linkGC = ('https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat))
    let isLinkconnGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkconnGc.test(m.text)
    if (isgclink) return
    await conn.sendMessage(m.chat, { delete: m.key })
    await sleep(5000)
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
  }
  return true
}

module.exports = handler