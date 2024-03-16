let handler = async (m, { conn }) => {
  try {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  if (!users) return
  await conn.groupParticipantsUpdate(m.chat, [users], 'demote')
  conn.sendMessage(m.chat, {
                text: `@${users.split`@`[0]} 𝙷𝚊𝚜 𝚋𝚎𝚎𝚗 𝚖𝚊𝚍𝚎 𝚊 𝚖𝚎𝚖𝚋𝚎𝚛.`,
                contextInfo: {
                    mentionedJid: [users],
                    externalAdReply: {
                        title: "A D M I N S  I N F O",
                        body: "𝙶𝚛𝚘𝚞𝚙 𝙽𝚘𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚒𝚘𝚗𝚜",
                        thumbnailUrl: global.thum,
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
            } catch (e) {
		console.log(e)
		m.reply(`Mana yang mau di jadikan NPC?`)
	}
}

handler.help = ['demote'].map(v => v + ' <@user>')
handler.tags = ['admins']
handler.command = /^demote$/i
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
