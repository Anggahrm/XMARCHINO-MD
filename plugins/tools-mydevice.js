let { getDevice } = require('@adiwajshing/baileys');

let handler = async (m) => {
	m.reply(await getDevice(m.quoted ? m.quoted.id : m.key.id))
}

handler.help = ['mydevice']
handler.tags = ['tools']
handler.command = /^(mydevice)$/i

module.exports = handler