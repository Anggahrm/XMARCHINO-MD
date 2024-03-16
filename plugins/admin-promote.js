let handler = async (m, { conn }) => {
  try {
  let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  if (!users) return
  await conn.groupParticipantsUpdate(m.chat, [users], 'promote')
  conn.sendMessage(m.chat, {
                text: `@${users.split`@`[0]} 𝙷𝚊𝚜 𝚋𝚎𝚎𝚗 𝚊𝚙𝚙𝚘𝚒𝚗𝚝𝚎𝚍 𝚊𝚜 𝚊𝚍𝚖𝚒𝚗.`,
                contextInfo: {
                    mentionedJid: [users],
                    externalAdReply: {
                        title: "A D M I N S  I N F O",
                        body: "𝙶𝚛𝚘𝚞𝚙 𝙽𝚘𝚝𝚒𝚏𝚒𝚌𝚊𝚝𝚒𝚘𝚗𝚜",
                        thumbnailUrl: global.thum,
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: false,
                        renderLargerThumbnail: true
                    }
                }
            })
            } catch (e) {
		console.log(e)
		m.reply(`Mana yang mau di jadikan *ADMIN* ?`)
	}
}

handler.help = ['promote'].map(v => v + ' <@user>')
handler.tags = ['admins']
handler.command = /^promote$/i
handler.group = true

handler.admin = true
handler.botAdmin = true

module.exports = handler
