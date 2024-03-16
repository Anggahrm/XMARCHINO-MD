/*let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Linknya Mana?...\n*Contoh :* ${usedPrefix}${command} https://www.facebook.com/reel/2783610791780195/?mibextid=rS40aB7S9Ucbxw6v`
    try {
    var api = await fetch(`https://api.botcahx.live/api/dowloader/fbdown?url=${args[0]}&apikey=${global.btc}`)
    conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
var dor = await api.json()
var { status, url } = dor.result
for (var array of url.urls) {
conn.sendFile(m.chat, array.hd, 't.mp4', `*FACEBOOK DOWNLOADER*`, m)
  break;
}
  } catch (e) {
		console.log(e)
		m.reply(`*Sistem YuLa ERROR*`)
	}
}
handler.help = ['facebook'].map(v => v + ' url')
handler.tags = ['downloader']

handler.command = /^(fb|facebook|fbdl?)$/i
handler.register = false
handler.limit = 5

module.exports = handler*/

let { fbdl } = require('api-dylux')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Linknya Mana?...\n*Contoh :* ${usedPrefix}${command} https://www.facebook.com/100034398106754/posts/pfbid02LRjmLBf4PfbUJ67TNWGY8oZwmPJg18BmBK3E9sZ6Hup6jhAZJoHVRWkRGdPUuPMUl/?app=fbl`
    try {
    var api = await fbdl(args[0])
    conn.sendMessage(m.chat, {
		react: {
			text: '⏳',
			key: m.key,
		}
	})
conn.sendFile(m.chat, api.videoUrl, 't.mp4', '*FACEBOOK DOWNLOADER*\n\n_Reso : HD_', m)
//conn.sendFile(m.chat, api.result.sd_q, 't.mp4', '*FACEBOOK DOWNLOADER*\n\n_Reso : SD_', m)
  } catch (e) {
		console.log(e)
		m.reply(`*Server YuLa Down*`)
	}
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(fb|facebook|fbdl?)$/i
handler.limit = true

module.exports = handler




/*const fetch = require('node-fetch');
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `Gunakan contoh ${usedPrefix}${command} https://www.facebook.com/100084756252836/videos/3391018171153874/?idorvanity=2765173437119338&mibextid=rS40aB7S9Ucbxw6v`;
    const res = await fetch(`https://api.botcahx.live/api/dowloader/fbdown?url=${args[0]}&apikey=${btc}`);
    const json = await res.json();
    let urls = json.result.url.urls;
    if (!Array.isArray(urls)) {
        throw `Tidak dapat mendapatkan URL video dari tautan yang diberikan`;
    }
    for (let url of urls) {
        if (url.sd) {
            conn.sendFile(m.chat, url.sd, 'fb.mp4', `*Facebook Downloader*`, m);
            break;
        }
    }
}
handler.help = ['fb'].map(v => v + ' <url>');
handler.tags = ['downloader'];
handler.command = /^(fb)$/i;
handler.limit = true;

module.exports = handler;

*/