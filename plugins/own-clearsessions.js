const { readdirSync, statSync, unlinkSync } = require('fs');
const { join } = require('path');

const sleep = (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}

let handler = async (m, { conn, usedPrefix, args }) => {

  const sesi = ['./sessions'];
  const array = [];

  sesi.forEach(dirname => {
    readdirSync(dirname).forEach(file => {
      if (file !== 'creds.json') { 
        array.push(join(dirname, file));
      }
    });
  });

  const deletedFiles = [];

  array.forEach(file => {
    const stats = statSync(file);

    if (stats.isDirectory()) {
      console.log(`Skipping directory: ${file}`);
    } else {
      unlinkSync(file);
      deletedFiles.push(file);
    }
  });

  conn.reply(m.chat, 'Success!', m);
  await sleep(10000)
};

handler.help = ['clearsession'];
handler.tags = ['owner'];
handler.command = /^(clearsession|clearsessions)$/i;
handler.rowner = true;

module.exports = handler;