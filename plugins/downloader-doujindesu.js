/*let fetch = require('node-fetch')
let handler = async (m, {
	conn,
	args,
	usedPrefix,
	command
}) => {
if (!args[0]) throw `Masukan URL!\n\ncontoh:\n${usedPrefix + command} https://doujindesu.xxx/2021/01/18/queen-bee-chapter-33/`
   try {
 let tioxd = await fetch(`https://api.lolhuman.xyz/api/doujindesu?apikey=${global.lolkey}&url=${args[0]}`)
if (!tioxd.ok) throw await tioxd.text()
let tiodl = await tioxd.json()
if (!tiodl.status) throw tiodl
let { 
title, 
link_dl
} = tiodl.result
await conn.sendFile(m.chat, `https://telegra.ph/file/4f73516d85082d1f1fd61.jpg`, 'maximus.jpg', `*Title :* ${title}\n*Link Download :* ${link_dl}\n\n *Note :* Silahkan Pilih link mediafire dan salin linknya dan gunakan fitur *.mediafire* link`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
    } catch (e) {
		console.log(e)
		m.reply(`*Sistem YuLa ERROR*`)
	}
}
handler.help = ['doujindesu'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(doujindesu)$/i
handler.register = false
handler.limit = true

module.exports = handler*/