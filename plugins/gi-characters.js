let genshindb = require('genshin-db')

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
	if (!text) throw `Example : *${usedPrefix + command} Eula*`
	try {
		let anu = await genshindb.characters(text)
		let ini_txt = `_${anu.description}_\n\n`
		ini_txt += `*${anu.name}*\n\n`
		ini_txt += `*Title :* ${anu.title}\n`
		ini_txt += `*Element :* ${anu.element}\n`
		ini_txt += `*Weapon :* ${anu.weapontype}\n`
		ini_txt += `*Substat :* ${anu.substat}\n`
		ini_txt += `*Rarity :* ⭐ ${anu.rarity}\n\n`
		ini_txt += `*Gender :* ${anu.gender} ( ${anu.body} )\n`
		ini_txt += `*Birthday :* ${anu.birthday}\n`
		ini_txt += `*Constellation :* ${anu.constellation}\n`
		ini_txt += `*Association :* ${anu.association}\n`
		ini_txt += `*Region :* ${anu.region}\n`
		ini_txt += `*Characters Voice :*\n   *English:* ${anu.cv.english}\n   *Chinese:* ${anu.cv.chinese}\n   *Japanese:* ${anu.cv.japanese}\n   *Korean:* ${anu.cv.korean}\n`
		conn.sendFile(m.chat, anu.images.cover2, 'cover.png', ini_txt, m)
	} catch (e) {
		console.log(e)
		let anu2 = await genshindb.characters(`names`, { matchCategories: true })
		m.reply(`*Not Found*\n\n*Available characters is :*\n${anu2.join(", ")}`)
	}
}

handler.help = ['gichar'].map(v => v + ' <characters>')
handler.tags = ['gi']
handler.command = /^((gi|genshin)char?)$/i

handler.group = true
handler.limit = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)