const fs = require('fs')

//info id
global.owner = "6287872303819@s.whatsapp.net"
global.idch = "120363382099978847@newsletter"

 //jika bernilai "true" berarti aktif, dan sebaliknya kalau "false"
global.status = true
global.welcome = false
global.antispam = true

global.prefa = ['','!','.',',','🐤','🗿']

//sticker watermark
global.packname = ''
global.author = 'tt: @rudiisp'

//link group atau link channel WhatsApp
global.linkch = 'https://whatsapp.com/channel/0029Vb0rTBG0AgWCjANsxh2d'

//limit user premium dan bukan premium 
global.gcount = {
    prem : 500,
    user: 15
}

//limit
global.limitCount = 100,

//message 
global.mess = {
    group: "ngapain? khusus grup njrr",
    admin: "ngapain? khusus admin njrr",
    owner: "apalah, bukan owner",
    premium: "bukan user premium njrr",
    botadmin: "bot bukan admin"
}

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
