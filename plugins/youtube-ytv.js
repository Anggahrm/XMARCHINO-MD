let { ytmp4 } = require("api-dylux")

let handler = async (m, { conn, args, usedPrefix, command }) => {
  
if (!args[0]) throw `example: *${usedPrefix}${command}* https://www.youtube.com/watch?v=K9_VFxzCuQ0`
if (!args[0].match(/youtu/)) throw `URL Yang Tuan Berikan *Salah!!!*`
m.reply(wait)
    try {
    let data = await ytmp4(args[0])
    
      conn.sendFile(m.chat, data.dl_url, "mtype.mp4", null, m)
      } catch (e) {
		console.log(e)
		m.reply(`Sistem Yula *Error*`)
	}
}
handler.help = ["ytmp4 <url>"]
handler.tags = ["downloader"];
handler.command = /^(yt(v|mp4))$/i;

handler.register = false
handler.premium = false
handler.limit = true

module.exports = handler