let handler = async (m, { conn, text }) => {
  let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
  let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
  let teks = text ? text : cc.text
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${groups.length} grup_`, m)
  for (let id of groups) await conn.copyNForward(id, conn.cMods(m.chat, cc, /bc|broadcast/i.test(teks) ? teks : teks ), true).catch(_ => _)
        await delay(7000)
        
  m.reply('Selesai Broadcast All Group :)')
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast|bc)(group|grup|gc)$/i

handler.owner = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



/*let handler = async (m, { conn, isROwner, text }) => {
    const delay = time => new Promise(res => setTimeout(res, time))
    let getGroups = await conn.groupFetchAllParticipating()
    let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
    let anu = groups.map(v => v.id)
    var pesan = m.quoted && m.quoted.text ? m.quoted.text : text
    if(!pesan) throw 'teksnya?'
    m.reply(`Mengirim Broadcast Ke ${anu.length} Chat, Waktu Selesai ${anu.length * 0.5 } detik`)
    for (let i of anu) {
    await delay(500)
    conn.relayMessage(, 
{ liveLocationMessage: {
  degreesLatitude: 42.923901,
  degreesLongitude: 143.196106,
  accuracyInMeters: 0,
degreesClockwiseFromMagneticNorth: 2,
caption: pesan + ' \n\n「Broadcast Group」' ,
sequenceNumber: 2,
timeOffset: 3,
contextInfo: m,
}}, {}).catch(_ => _)
    }
  m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
handler.help = ['bcgcbot <teks>']
handler.tags = ['owner']
handler.command = /^((broadcastgc|bcgc)bot)$/i

handler.owner = true

module.exports = handler*/