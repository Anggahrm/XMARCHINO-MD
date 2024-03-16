(async() => {
require('./config')
const { default:
useSingleFileAuthState,
useMultiFileAuthState,
makeCacheableSignalKeyStore,
PHONENUMBER_MCC,
makeInMemoryStore,
makeWALegacySocket,
msgRetryCounterMap,
DisconnectReason
} = require('@adiwajshing/baileys')
const WebSocket = require('ws')
const path = require('path')
const pino = require('pino')
const fs = require('fs')
const yargs = require('yargs/yargs')
const cp = require('child_process')
const _ = require('lodash')
const syntaxerror = require('syntax-error')
const chalk = require("chalk");
const sleep = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
const os = require('os')
const moment = require("moment-timezone")
const time = moment.tz('Asia/Jakarta').format("HH:mm:ss")
const { color } = require('./lib/color')
let simple = require('./lib/simple')
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')
}
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')

const pairingCode = process.argv.includes("--pairing");


API = (name, path = '/', query = {}, apikeyqueryname) => (name in APIs ? APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: APIKeys[name in APIs ? APIs[name] : name] } : {}) })) : '')
// global.Fn = function functionCallBack(fn, ...args) { return fn.call(global.conn, ...args) }
timestamp = {
start: new Date
}

const PORT = process.env.PORT || 3000

opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
prefix = new RegExp('^[' + (opts['prefix'] || 'â€ŽxzXZ/i!#$%+Â£Â¢â‚¬Â¥^Â°=Â¶âˆ†Ã—Ã·Ï€âˆšâœ“Â©Â�?:;?&.\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')


db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/i.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`${opts._[0] ? opts._[0] + '_' : ''}database.json`)
)

//db = new Low(new mongoDB('mongodb+srv://botnet:kuku4040@cluster0.hhvuaus.mongodb.net/?retryWrites=true&w=majority'))

DATABASE = db // Backwards Compatibility
loadDatabase = async function loadDatabase() {
if (db.READ) return new Promise((resolve) => setInterval(function () { (!db.READ ? (clearInterval(this), resolve(db.data == null ? loadDatabase() : db.data)) : null) }, 1 * 1000))
if (db.data !== null) return
db.READ = true
await db.read()
db.READ = false
db.data = {
users: {},
chats: {},
stats: {},
msgs: {},
banned: {},
sticker: {},
settings: {},
...(db.data || {})
}
db.chain = _.chain(db.data)
}
loadDatabase()

const authFolder = `${opts._[0] || 'sessions'}`
const { state, saveCreds } = await useMultiFileAuthState(authFolder)

//const logger = pino({
//transport: {
//target: 'pino-pretty',
//options: {
//colorize: true,
//levelFirst: true, 
//ignore: 'hostname', 
//translateTime: true
//}
//}
//}).child({ class: 'baileys'})

const connectionOptions = {
version: [2, 2329, 8],
logger: pino({ level: 'silent' }),
browser: [ "Ubuntu", "Chrome", "20.0.04" ],
printQRInTerminal: !pairingCode,
auth: {
creds: state.creds,
keys: makeCacheableSignalKeyStore(
state.keys, pino().child({
level: 'silent',
stream: 'store'
}))
},
downloadHistory: false,
markOnlineOnConnect: true,
defaultQueryTimeoutMs: undefined,
generateHightQualityLinkPreview: true,
getMessage: async (key) => (store.loadMessage(key.remoteJid, key.id) || store.loadMessage(key.id) || {}).message,
patchMessageBeforeSending: (message) => {
const requiresPatch = !!(
message.buttonsMessage 
|| message.templateMessage
|| message.listMessage
);
if (requiresPatch) {
message = {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {},
},
...message,
},
},
};
}
return message;
},
defaultQueryTimeoutMs: undefined,
}

global.conn = simple.makeWASocket(connectionOptions)

conn.isInit = false
if (!opts['test']) {
if (db) setInterval(async () => {
if (global.db.data) await db.write()
if (opts['autocleartmp'] && (support || {}).find) (tmp = [os.tmpdir(), 'tmp'], tmp.forEach(filename => cp.spawn('find', [filename, '-amin', '3', '-type', 'f', '-delete'])))
}, 30 * 1000)
}
if (opts['server']) require('./server')(conn, PORT)

//function clearTmp() {
//const tmp = [os.tmpdir(), path.join(__dirname, './tmp')]
//const filename = []
//tmp.forEach(dirname => fs.readdirSync(dirname).forEach(file => filename.push(path.join(dirname, file))))
//filename.map(file => (
//stats = fs.statSync(file),
//stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 3) ?
//fs.unlinkSync(file) :
//null))
//}

//function clearSessions(folder = 'sessions') {
//	let filename = []
//	readdirSync(folder).forEach(file => filename.push(join(folder, file)))
//	return filename.map(file => {
//		let stats = statSync(file)
//		if (stats.isFile() && (Date.now() - stats.mtimeMs >= 1000 * 60 * 120)) { // 1 hours
//			console.log('Deleted sessions', file)
//			return unlinkSync(file)
//		}
//		return false
//	})
//}

async function connectionUpdate(update) {
const { connection, lastDisconnect, isNewLogin } = update
if (isNewLogin) conn.isInit = true
if (lastDisconnect && lastDisconnect.error && lastDisconnect.error.output && lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut && conn.ws.readyState !== WebSocket.CONNECTING) {
console.log(reloadHandler(true))
timestamp.connect = new Date
}
if (global.db.data == null) await loadDatabase()
console.log(JSON.stringify(update, null, 4))
if (update.receivedPendingNotifications) console.log("Berhasil Tersambung!")
}


process.on('uncaughtException', console.error)
let isInit = true, handler = require('./handler')
reloadHandler = function (restatConn) {
let Handler = require('./handler')
if (Object.keys(Handler || {}).length) handler = Handler
if (restatConn) {
try { conn.ws.close() } catch { }
conn = {
...conn, ...simple.makeWASocket(connectionOptions)
}
}
if (!isInit) {
conn.ev.off('messages.upsert', conn.handler)
conn.ev.off('group-participants.update', conn.onParticipantsUpdate)
conn.ev.off('message.delete', conn.onDelete)
conn.ev.off('connection.update', conn.connectionUpdate)
conn.ev.off('creds.update', conn.credsUpdate)
}

conn.welcome = '*@user*\n*𝚑𝚊𝚜 𝚓𝚘𝚒𝚗𝚎𝚍 𝚝𝚑𝚎 𝚐𝚛𝚘𝚞𝚙*\n\n𝙱𝚎𝚏𝚘𝚛𝚎 𝚝𝚑𝚊𝚝, 𝚍𝚘𝚗𝚝 𝚏𝚘𝚛𝚐𝚎𝚝 𝚝𝚘 𝚛𝚎𝚊𝚍 𝚝𝚑𝚎 𝚐𝚛𝚘𝚞𝚙 𝚛𝚞𝚕𝚎𝚜'
conn.bye = '*@user* *𝚑𝚊𝚜 𝚕𝚎𝚏𝚝 𝚝𝚑𝚎 𝚐𝚛𝚘𝚞𝚙*'
conn.spromote = '@user sekarang admin!'
conn.sdemote = '@user sekarang bukan admin!'
conn.handler = handler.handler.bind(conn)
conn.onParticipantsUpdate = handler.participantsUpdate.bind(conn)
conn.onDelete = handler.delete.bind(conn)
conn.connectionUpdate = connectionUpdate.bind(conn)
conn.credsUpdate = saveCreds.bind(conn)

conn.ev.on('messages.upsert', conn.handler)
conn.ev.on('group-participants.update', conn.onParticipantsUpdate)
conn.ev.on('message.delete', conn.onDelete)
conn.ev.on('connection.update', conn.connectionUpdate)
conn.ev.on('creds.update', conn.credsUpdate)
isInit = false
return true
}

let pluginFolder = path.join(__dirname, 'plugins')
let pluginFilter = filename => /\.js$/.test(filename)
plugins = {}
for (let filename of fs.readdirSync(pluginFolder).filter(pluginFilter)) {
try {
plugins[filename] = require(path.join(pluginFolder, filename))
} catch (e) {
conn.logger.error(e)
delete plugins[filename]
}
}
console.log(Object.keys(plugins))
reload = (_ev, filename) => {
if (pluginFilter(filename)) {
let dir = path.join(pluginFolder, filename)
if (dir in require.cache) {
delete require.cache[dir]
if (fs.existsSync(dir)) conn.logger.info(`re - require plugin '${filename}'`)
else {
conn.logger.warn(`deleted plugin '${filename}'`)
return delete plugins[filename]
}
} else conn.logger.info(`requiring new plugin '${filename}'`)
let err = syntaxerror(fs.readFileSync(dir), filename)
if (err) conn.logger.error(`syntax error while loading '${filename}'\n${err}`)
else try {
plugins[filename] = require(dir)
} catch (e) {
conn.logger.error(`error require plugin '${filename}\n${e}'`)
} finally {
plugins = Object.fromEntries(Object.entries(plugins).sort(([a], [b]) => a.localeCompare(b)))
}
}
}
Object.freeze(reload)
fs.watch(path.join(__dirname, 'plugins'), reload)
reloadHandler()

// Quick Test
async function _quickTest() {
let test = await Promise.all([
cp.spawn('ffmpeg'),
cp.spawn('ffprobe'),
cp.spawn('ffmpeg', ['-hide_banner', '-loglevel', 'error', '-filter_complex', 'color', '-frames:v', '1', '-f', 'webp', '-']),
cp.spawn('convert'),
cp.spawn('magick'),
cp.spawn('gm'),
cp.spawn('find', ['--version'])
].map(p => {
return Promise.race([
new Promise(resolve => {
p.on('close', code => {
resolve(code !== 127)
})
}),
new Promise(resolve => {
p.on('error', _ => resolve(false))
})
])
}))
let [ffmpeg, ffprobe, ffmpegWebp, convert, magick, gm, find] = test
console.log(test)
let s = support = {
ffmpeg,
ffprobe,
ffmpegWebp,
convert,
magick,
gm,
find
}
// require('./lib/sticker').support = s
Object.freeze(support)

if (!s.ffmpeg) conn.logger.warn('Please install ffmpeg for sending videos (pkg install ffmpeg)')
if (s.ffmpeg && !s.ffmpegWebp) conn.logger.warn('Stickers may not animated without libwebp on ffmpeg (--enable-ibwebp while compiling ffmpeg)')
if (!s.convert && !s.magick && !s.gm) conn.logger.warn('Stickers may not work without imagemagick if libwebp on ffmpeg doesnt isntalled (pkg install imagemagick)')
}

_quickTest()
.then(() => conn.logger.info('Quick Test Done'))
.catch(console.error)

console.log(color(time,"white"),color("[STATUS]","green"),color("Connecting...","aqua"))
if (pairingCode && !conn.authState.creds.registered) {
const argIndex = process.argv.indexOf('--pairing');
const _number = argIndex !== -1 ? process.argv[argIndex + 1] : false;
if (!_number) {
console.log(chalk.bold.red(`KALAU ANDA INGIN MENGHUBUNGKAN BOT DENGAN METHODE PAIRING, ANDA HARUS MEMASUKAN NOMOR TELEPON UNTUK DIKONEKSIKAN!!\n\n`), chalk.bold.blue(`Contoh :\n`), chalk.bold.green(`node index.js --pairing 6281283516246`))
await sleep(2000)
process.exit()
}
if (_number) {
let number = _number.replace(/[^0-9]/g, '')
await sleep(2000)
console.clear()
await sleep(1000)
console.log(chalk.green("⌛ - REQUEST PAIRING CODE TO NUMBER"), chalk.bold.yellow(`${number}`))
await sleep(3000)
let code = await conn.requestPairingCode(number)
code = code?.match(/.{1,4}/g)?.join("-") || code
console.log(chalk.bold.blue(`Code for Your Number :\n`), chalk.red(">"), chalk.bold.white(code))
}
}
})()