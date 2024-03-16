let handler = async (m, { conn, participants }) => {

	let now = new Date() * 1
	let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
    let txt = ''
    for (let [jid, chat] of Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats)) 
    txt += `${await conn.getName(jid)}\n${jid} [${chat?.metadata?.read_only ? 'Left' : 'Joined'}]\n\n`
    m.reply(`List Groups:
Total Group: ${groups.length}

${txt}

`.trim())

}

handler.help = ['idgroup']
handler.tags = ['owner']

handler.command = /^(idgroups|idgroup|idgc)$/i

module.exports = handler