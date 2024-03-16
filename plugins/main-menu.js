const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
process.env.TZ = 'Asia/Jakarta'
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let levelling = require('../lib/levelling')
let tags = {
  'admins': '𝗔𝗗𝗠𝗜𝗡 𝗠𝗘𝗡𝗨',
  'group': '𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨',
  'store': '𝗦𝗧𝗢𝗥𝗘 𝗠𝗘𝗡𝗨',
  'gi': '𝗚𝗘𝗡𝗦𝗛𝗜𝗡',
  'hsr': '𝗛𝗢𝗡𝗞𝗔𝗜 𝗦𝗧𝗔𝗥 𝗥𝗔𝗜𝗟',
  'ai': '𝗔𝗜 𝗠𝗘𝗡𝗨',
  'downloader': '𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗𝗘𝗥 𝗠𝗘𝗡𝗨',
  'anime': '𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨',
  'nsfw': '𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨', 
  'sticker': '𝗦𝗧𝗜𝗖𝗞𝗘𝗥 𝗠𝗘𝗡𝗨',
  'fun': '𝗙𝗨𝗡 𝗠𝗘𝗡𝗨',
  'jadian': '𝗗𝗔𝗧𝗜𝗡𝗚 𝗠𝗘𝗡𝗨',
  'game': '𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨',
  'internet': '𝗜𝗡𝗧𝗘𝗥𝗡𝗘𝗧 𝗠𝗘𝗡𝗨',
  'islami' : '𝗜𝗦𝗟𝗔𝗠𝗜𝗖 𝗠𝗘𝗡𝗨',
  'tools': '𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨',
  'audio': '𝗔𝗨𝗗𝗜𝗢 𝗠𝗘𝗡𝗨',
  'rpg': '𝗥𝗣𝗚 𝗠𝗘𝗡𝗨',
  'main': '𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨',
  'owner': '𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨',
  'database': '𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗠𝗘𝗡𝗨',
  'info': '𝗜𝗡𝗙𝗢 𝗕𝗢𝗧'
}
const defaultMenu = {
  before: `Hi %name.\nMy name is ${global.namebot}. I am the Assistant for this Group. I'm here to help you with tasks like searching for information online, retrieving data, etc. By utilizing innovative features, I will help you to move more quickly and productively in completing your work.

*「 I N F O 」*
 •  *Your Premium :* %prem
 •  *Your Limits :* %limit
 •  *Versions :* %version
 •  *Today's request :* %totalreg 
 •  *Database :* mongoDB

%readmore
`.trimStart(),
  header: '*┌ •「 %category  」*',
  body: '*│ •* %cmd',
  footer: '*└* ',
  after: 'ɢᴇɴꜱʜɪɴ ɪᴍᴘᴀᴄᴛ ᴅɪꜱᴄᴜꜱꜱɪᴏɴ',
}
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, premium } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = `@${m.sender.split`@`[0]}`
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    const wib = moment.tz('Asia/Jakarta').format("HH:mm:ss")
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Powered by https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '*Ⓛ*' : '')
                .replace(/%isPremium/g, menu.premium ? '*Ⓟ*' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.getName(conn.user.jid),
      ucapan: ucapan(),
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      prem: premium ? 'Yes' : 'No',
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, wib, wit, wita, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
/*conn.sendMessage(m.chat, { video: { url: "https://telegra.ph/file/4e36d9178c7b893f5c4bd.mp4" }, gifPlayback: true, gifAttribution: ~~(Math.random() * 2), caption: text, contextInfo: { mentionedJid: [m.sender], externalAdReply: { showAdAttribution: false, title: 'ɢᴇɴꜱʜɪɴ ɪᴍᴘᴀᴄᴛ ᴅɪꜱᴄᴜꜱꜱɪᴏɴ', body: 'Jangan Lupa Sewa', thumbnailUrl: 'https://telegra.ph/file/6e6adaaeb9c70eb7d3464.jpg', mediaType: 1, sourceUrl: 'https://chat.whatsapp.com/LZCnnSQFPkF3C6zrDcH5n8', renderLargerThumbnail: false }}}, { quoted: m })*/
conn.sendMessage(m.chat, {
            text: text,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 1,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: '120363241570452835@newsletter',
                   serverMessageId: null,
                   newsletterName: 'Whatsapp Bot',
                   },
                   externalAdReply: {
                   title: global.namebot + `© 2024`,
                   body: `Powered By ${global.nameown}`,
                   thumbnailUrl: global.thum,
                   sourceUrl: pickRandom(["https://chat.whatsapp.com/LZCnnSQFPkF3C6zrDcH5n8","https://chat.whatsapp.com/EWxOwlaJXTsIhj706JsfmZ"]),
                   mediaType: 1,
                   renderLargerThumbnail: true
                   },
                },
            })
      /**const ftroli = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 9999999999999,
                            status: 1,
                            surface : 1,
                            message: wm,
                            orderTitle: 'MENU',
                            thumbnail: await (await fetch('https://telegra.ph/file/f4063ab3071f5c4af765a.png')).buffer(),
                            sellerJid: '0@s.whatsapp.net'
          
                          }
                        }
                      }
await conn.sendFile(m.chat, 'https://telegra.ph/file/dc5a67d724b016574129b.jpg', 'menu.jpg', text, ftroli)**/
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu']
handler.tags = ['main']
handler.command = /^(allmenu|menu|help|menunya)$/i

handler.exp = 3

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function ucapan() {
        const hour_now = moment.tz('Asia/Jakarta').format('HH')
        var ucapanWaktu = 'Pagi'
        if (hour_now >= '03' && hour_now <= '10') {
          ucapanWaktu = 'Selamat Pagi'
        } else if (hour_now >= '10' && hour_now <= '15') {
          ucapanWaktu = 'Selamat Siang'
        } else if (hour_now >= '15' && hour_now <= '18') {
          ucapanWaktu = 'Selamat Sore'
        } else if (hour_now >= '18' && hour_now <= '23') {
          ucapanWaktu = 'Selamat Malam'
        } else {
          ucapanWaktu = 'Selamat Malam'
        }	
        return ucapanWaktu
}

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const maximus = [
"https://telegra.ph/file/b4bd39a5262968e91f4f2.jpg",
"https://telegra.ph/file/ed5141806612a2465c3dd.jpg",
"https://telegra.ph/file/ba05549c0107d95989436.jpg",
"https://telegra.ph/file/395810b4e636dcd393d72.jpg",
"https://telegra.ph/file/fa58c93e4f05db98ae1b5.jpg",
"https://telegra.ph/file/1f09304f02f3469d0a41a.jpg",
"https://telegra.ph/file/8ad258b12a5de41220703.jpg"
]