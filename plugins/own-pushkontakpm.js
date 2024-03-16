let handler = async (m, {
    conn,
    usedPrefix,
    command,
    isGroup,
    groupMetadata,
    text
}) => {
    if (!text || !text.includes("|")) {
        return conn.reply(m.chat, `Penggunaan salah, silahkan gunakan command seperti ini\n${usedPrefix}${command} id|tekspushkontak\n\n Jika tidak mengetahui Id grup, ketik .idgroup`, m)
    }
    const metadata2 = await conn.groupMetadata(text.split("|")[0])
    const halss = metadata2.participants
    for (let mem of halss) {
    await sleep(5000)
   conn.sendMessage(`${mem.id.split('@')[0]}@s.whatsapp.net`, { text: text.split("|")[1] })
    }
    return conn.reply(m.chat, "Done", m)
}

handler.command = ['etc1']
handler.tags = ['owner']
handler.owner = true
handler.group = false

module.exports = handler;

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}