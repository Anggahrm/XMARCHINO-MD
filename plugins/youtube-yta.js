let { 
    youtubedl,
    youtubedlv2 
} = require('@bochilteam/scraper')

const sleep = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

var handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Urlnya Mana Banh? >:('
  m.reply(wait)
  let q = '128kbps'
  let v = args[0]

  // Ambil info dari video
  const yt = await youtubedl(v).catch(async () => await  youtubedlv2(v))
  const dl_url = await yt.audio[q].download()
  const ttl = await yt.title
  const size = await yt.audio[q].fileSizeH
  const info = `*F I L E  T Y P E*
• Judul: ${ttl}
• Ukuran: ${size}`
  conn.sendMessage(m.chat, {
    document: { url: dl_url }, 
    mimetype: 'audio/mpeg', 
    fileName: `${ttl}.mp3`,
    caption: info
  }, {quoted: m})
  await sleep(2000)
  if (await yt.audio[q].fileSize > 15000) return m.reply(`SizeFile: ${size}\nTidak dapat mengirim Voice Note. Silahkan ambil music yang bertype File`)
  conn.sendFile(m.chat, dl_url, 'kasar.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.help = ['ytmp3 <url>']
handler.tags = ['downloader']
handler.command = /^(yt(a(udio)?|mp3))$/i

handler.premium = false
handler.limit = true

module.exports = handler


 