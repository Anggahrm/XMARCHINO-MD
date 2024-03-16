/*const fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `*Contoh:* ${usedPrefix}${command} https://www.instagram.com/p/ByxKbUSnubS/?utm_source=ig_web_copy_link`
    try {
        const api = await fetch(`https://api.botcahx.live/api/dowloader/igdowloader?url=${args[0]}&apikey=${global.btc}`)
    conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
        const res = await api.json()

        for (let i of res.result) {
            conn.sendFile(m.chat, i.url, null, `*Instagram Downloader*`, m)
        }
    } catch (e) {
        throw `*Server Down!*`
    }
}

handler.help = ['instagram2'].map(v => v + ' url')
handler.tags = ['downloader']
handler.command = /^(ig2|instagram2|igdl2|instagramdl2|igstroy2)$/i
handler.premium = false
handler.register = false
handler.limit = 5

module.exports = handler


let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Linknya Mana?...\n*Contoh :* ${usedPrefix}${command} https://www.instagram.com/reel/CyYyAZVvPXI/?igshid=NTc4MTIwNjQ2YQ==`
       try {
    var api = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${global.lolkey}&url=${args[0]}`)
    conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
var dor = await api.json()
for (var array of dor.result) {
conn.sendFile(m.chat, array, 't.mp4', '*(IGTV, POST, VIDEO, REEL, ETC)*', m)
}
  } catch (e) {
		console.log(e)
		m.reply(`*Sistem YuLa ERROR*`)
	}
}
handler.help = ['instagram'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig|instagram(dl)?)$/i
handler.register = false
handler.limit = 5

module.exports = handler*/

let { instagram } = require("betabotz-tools")

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Linknya Mana?...\n*Contoh :* ${usedPrefix}${command} https://www.instagram.com/reel/CvYLRDVx9cY/?igshid=NTc4MTIwNjQ2YQ==`
       try {
    var api = await instagram(args[0])
    conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
for (var array of api.result) {
conn.sendFile(m.chat, array._url, 't.mp4', '*(IGTV, POST, VIDEO, REEL, ETC)*', m)
}
  } catch (e) {
		console.log(e)
		m.reply(`*Sistem YuLa ERROR*`)
	}
}
handler.help = ['instagram'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig|instagram(dl)?)$/i
handler.register = false
handler.limit = true

module.exports = handler