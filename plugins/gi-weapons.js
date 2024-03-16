let genshindb = require('genshin-db')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	if (!text) throw `Example : *${usedPrefix + command} temptation*`
	try {
		let anu = await genshindb.weapons(text)
		let ini_txt = `_${anu.description}_\n\n`
		ini_txt += `*${anu.name}*\n\n`
		ini_txt += `*Base ATK :* ${anu.baseatk}\n`
		ini_txt += `*Substat :* ${anu.substat}\n`
		ini_txt += `*Weapontype :* ${anu.weapontype}\n`
		ini_txt += `*Rarity :* ⭐ ${anu.rarity}\n\n`
		ini_txt += `*Refine 1 :* ${anu.r1}\n`
		ini_txt += `*Refine 2 :* ${anu.r2}\n`
		ini_txt += `*Refine 3 :* ${anu.r3}\n`
		ini_txt += `*Refine 4 :* ${anu.r4}\n`
		ini_txt += `*Refine 5 :* ${anu.r5}\n\n`
		ini_txt += `*Effect :* ${anu.effect}\n`
		conn.sendMessage(m.chat, {
                text: ini_txt,
                contextInfo: {
                    externalAdReply: {
                        title: "Genshin Weapons",
                        body: "Powered by Assisten YuLa💕",
                        thumbnailUrl: anu.images.awakenicon,
                        sourceUrl: "",
                        mediaType: 1,
                        showAdAttribution: true,
                        renderLargerThumbnail: true
                    }
                }
            }, { quoted: m })
	} catch (e) {
		console.log(e)
		let anu2 = await genshindb.weapons(`names`, { matchCategories: true })
		m.reply(`*Not Found*\n\n*Available characters is :*\n${anu2.join(", ")}`)
	}
}

handler.help = ['giweapons'].map(v => v + ' <query>')
handler.tags = ['gi']
handler.command = /^gi(weapons|wp)$/i

handler.group = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)