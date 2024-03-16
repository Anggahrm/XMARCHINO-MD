import fetch from 'node-fetch';

let handler = async (m, { conn, usedPrefix, command }) => {
	try {
   let maximus = `*RECODED BY MAXIMUS*

> https://github.com/XM4ZE/XMARCHINO-MD

_Don't forget to give me 5 Stars 🙂_`
		conn.sendMessage(m.chat, {
            text: maximus,
            contextInfo: {
                forwardingScore: 9999,
                isForwarded: true,
                   forwardedNewsletterMessageInfo: {
                   newsletterJid: '120363241570452835@newsletter',
                   serverMessageId: null,
                   newsletterName: 'Whatsapp Bot',
                   },
                   externalAdReply: {
                   title: global.info.namebot + `© 2024`,
                   body: 'Powered By' + global.nameown,
                   thumbnailUrl: global.thum,
                   sourceUrl: 'https://github.com/XM4ZE/XMARCHINO-MD',
                   mediaType: 1,
                   renderLargerThumbnail: true
                   },
                },
            }, { quoted: m })
	} catch (e) {
		console.log(e)
		throw `Fitur Error.`
	}
};

handler.command = /^(sc|script)$/i
handler.register = false;
handler.premium = false;

export default handler;