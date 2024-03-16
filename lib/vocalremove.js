const Axios = require('axios');
const FormData = require('form-data');
const fetch = require('node-fetch');
const qs = require('querystring')

async function nama() {
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let filename = '';

  for (let i = 0; i < 10; i++) {
    filename += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return filename + '.mp3';
}


async function vocalremove(buffer) {
    return new Promise(async (resolve, reject) => {
          const names = await nama();
          const bodyForm = new FormData()
          bodyForm.append('fileName', buffer, { filename: names, contentType: 'audio/mpeg' })
          Axios({
               method: 'post',
               url: 'https://aivocalremover.com/api/v2/FileUpload',
               data: bodyForm,
               headers: {
                    'Content-Type': `multipart/form-data; boundary=${bodyForm._boundary}`
               }
          }).then(({ data }) => {
               // console.log(data)
               Axios({
                    method: 'post',
                    url: 'https://aivocalremover.com/api/v2/ProcessFile',
                    data: qs.stringify({
                         file_name: data.file_name,
                         action: 'watermark_video',
                         key: 'X9QXlU9PaCqGWpnP1Q4IzgXoKinMsKvMuMn3RYXnKHFqju8VfScRmLnIGQsJBnbZFdcKyzeCDOcnJ3StBmtT9nDEXJn',
                         web: 'web'
                    }),
                    headers: {
                         'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
                    }
               }).then(({ data }) => {
                    resolve(data)
               })
                    .catch(reject)
          })
               .catch(reject)
     })
}

module.exports = { vocalremove }

