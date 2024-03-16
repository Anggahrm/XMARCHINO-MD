/*let fetch = require('node-fetch')

let handler = async (m, { conn, text, command, usedPrefix }) => {
    if (m.isGroup && !db.data.chats[m.chat].nsfw) throw `Fitur *NSFW* BELUM AKTIF di grup ini\n\nAktifkan Fitur ini dengan menulis *.enable nsfw*`;
    let chat = db.data.chats[m.chat]
    let res = await fetch(`https://api.lolhuman.xyz/api/doujindesulatest?apikey=${global.lolkey}`)
    if (!res.ok) return await res.text()
    let json = await res.json()
    if (json.status != 200) throw json
    let capt = `
*Doujindesu Latest*

${json.result.map(v => `══【 Result 】══════════\n*Title:* ${v.title}\n*Episode:* ${v.episode}\n*Type:* ${v.type}\n\n*Link:* ${v.link}`).join`\n\n`}
    `.trim()
    conn.sendMessage(m.chat, {
                text: capt,
                contextInfo: {
                    externalAdReply: {
                        title: "Doujindesulatest",
                        body: "Powered by Maximus",
                        thumbnailUrl: "https://telegra.ph/file/2db6d9e185780b329144c.jpg",
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            })
}
handler.help = ['doujindesulatest'].map(v => v + ' <name>')
handler.tags = ['downloader']
handler.command = /^(doujindesulatest|ddl)$/i
handler.limit = true

module.exports = handler*/