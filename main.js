(function(_0x74059b,_0x244206){const _0x2cd983=_0x3ec5,_0x281502=_0x74059b();while(!![]){try{const _0x86a7c0=-parseInt(_0x2cd983(0xf7))/0x1+-parseInt(_0x2cd983(0xb5))/0x2+-parseInt(_0x2cd983(0xc8))/0x3+-parseInt(_0x2cd983(0xf4))/0x4+-parseInt(_0x2cd983(0x106))/0x5+parseInt(_0x2cd983(0x104))/0x6+parseInt(_0x2cd983(0xca))/0x7*(parseInt(_0x2cd983(0x93))/0x8);if(_0x86a7c0===_0x244206)break;else _0x281502['push'](_0x281502['shift']());}catch(_0x4ddebf){_0x281502['push'](_0x281502['shift']());}}}(_0xe353,0xd19aa),((async()=>{const _0x2fec62=_0x3ec5;require('./config');const {default:_0x306b18,useMultiFileAuthState:_0x1dcea1,makeCacheableSignalKeyStore:_0x1f7cad,PHONENUMBER_MCC:_0x26ee2d,makeInMemoryStore:_0x40d15b,makeWALegacySocket:_0x520b4d,msgRetryCounterMap:_0x553459,DisconnectReason:_0x8923d7}=require(_0x2fec62(0xee)),_0x43e509=require('ws'),_0x5a8a90=require('path'),_0x7f2d3e=require('pino'),_0x361820=require('fs'),_0x434fb5=require(_0x2fec62(0x109)),_0x4479a6=require('child_process'),_0xbd403a=require('lodash'),_0xc8d3a4=require(_0x2fec62(0xf8)),_0x2060bc=require('chalk'),_0x18e725=_0x334844=>{return new Promise(_0x4c62fd=>setTimeout(_0x4c62fd,_0x334844));},_0x2fa9a0=require('os'),_0x38f683=require('moment-timezone'),_0x47d121=_0x38f683['tz']('Asia/Jakarta')[_0x2fec62(0xac)](_0x2fec62(0xde)),{color:_0x1fc0d0}=require('./lib/color');let _0x355b46=require(_0x2fec62(0x8e));var _0x59d9cb;try{_0x59d9cb=require(_0x2fec62(0x10b));}catch(_0x540b51){_0x59d9cb=require('./lib/lowdb');}const {Low:_0x5492f9,JSONFile:_0x27baa9}=_0x59d9cb,_0x7c6675=require(_0x2fec62(0xdf)),_0x2cc016=process['argv'][_0x2fec62(0xc5)](_0x2fec62(0xd7));API=(_0x20f23c,_0x35f3d2='/',_0x184b42={},_0x97e520)=>(_0x20f23c in APIs?APIs[_0x20f23c]:_0x20f23c)+_0x35f3d2+(_0x184b42||_0x97e520?'?'+new URLSearchParams(Object[_0x2fec62(0xf3)]({..._0x184b42,..._0x97e520?{[_0x97e520]:APIKeys[_0x20f23c in APIs?APIs[_0x20f23c]:_0x20f23c]}:{}})):''),timestamp={'start':new Date()};const _0x7c3bd9=process[_0x2fec62(0x115)][_0x2fec62(0xf1)]||0xbb8;opts=new Object(_0x434fb5(process[_0x2fec62(0xbd)][_0x2fec62(0xc7)](0x2))[_0x2fec62(0x8f)](![])['parse']()),prefix=new RegExp('^['+(opts[_0x2fec62(0xa6)]||_0x2fec62(0xdb))[_0x2fec62(0xf9)](/[|\\{}()[\]^$+*?.\-\^]/g,_0x2fec62(0xa8))+']'),db=new _0x5492f9(/https?:\/\//[_0x2fec62(0xe3)](opts['db']||'')?new cloudDBAdapter(opts['db']):/mongodb/i[_0x2fec62(0xe3)](opts['db'])?new _0x7c6675(opts['db']):new _0x27baa9((opts['_'][0x0]?opts['_'][0x0]+'_':'')+_0x2fec62(0x111))),DATABASE=db,loadDatabase=async function _0x3a7929(){const _0x5955bb=_0x2fec62;if(db['READ'])return new Promise(_0x3b2641=>setInterval(function(){const _0x4011fc=_0x3ec5;!db[_0x4011fc(0xbb)]?(clearInterval(this),_0x3b2641(db['data']==null?_0x3a7929():db[_0x4011fc(0xe0)])):null;},0x1*0x3e8));if(db[_0x5955bb(0xe0)]!==null)return;db['READ']=!![],await db[_0x5955bb(0x102)](),db[_0x5955bb(0xbb)]=![],db[_0x5955bb(0xe0)]={'users':{},'chats':{},'stats':{},'msgs':{},'banned':{},'sticker':{},'settings':{},...db['data']||{}},db[_0x5955bb(0xb1)]=_0xbd403a[_0x5955bb(0xb1)](db[_0x5955bb(0xe0)]);},loadDatabase();const _0x569b19=''+(opts['_'][0x0]||'sessions'),{state:_0x10ccd6,saveCreds:_0x422122}=await _0x1dcea1(_0x569b19),_0x2c5aa6={'version':[0x2,0x919,0x8],'logger':_0x7f2d3e({'level':'silent'}),'browser':[_0x2fec62(0xdd),_0x2fec62(0xba),_0x2fec62(0x9d)],'printQRInTerminal':!_0x2cc016,'auth':{'creds':_0x10ccd6[_0x2fec62(0xea)],'keys':_0x1f7cad(_0x10ccd6[_0x2fec62(0xf2)],_0x7f2d3e()[_0x2fec62(0xc2)]({'level':_0x2fec62(0xd0),'stream':_0x2fec62(0xcc)}))},'downloadHistory':![],'markOnlineOnConnect':!![],'defaultQueryTimeoutMs':undefined,'generateHightQualityLinkPreview':!![],'getMessage':async _0x1d0c03=>(store[_0x2fec62(0xd9)](_0x1d0c03[_0x2fec62(0xd5)],_0x1d0c03['id'])||store['loadMessage'](_0x1d0c03['id'])||{})[_0x2fec62(0x114)],'patchMessageBeforeSending':_0x185d56=>{const _0x5d15e8=_0x2fec62,_0xc7b787=!!(_0x185d56[_0x5d15e8(0x98)]||_0x185d56[_0x5d15e8(0x107)]||_0x185d56[_0x5d15e8(0xef)]);return _0xc7b787&&(_0x185d56={'viewOnceMessage':{'message':{'messageContextInfo':{'deviceListMetadataVersion':0x2,'deviceListMetadata':{}},..._0x185d56}}}),_0x185d56;},'defaultQueryTimeoutMs':undefined};global[_0x2fec62(0x94)]=_0x355b46[_0x2fec62(0xd4)](_0x2c5aa6),conn[_0x2fec62(0xe8)]=![];if(!opts[_0x2fec62(0xe3)]){if(db)setInterval(async()=>{const _0x3be892=_0x2fec62;if(global['db']['data'])await db[_0x3be892(0x9c)]();if(opts[_0x3be892(0xf6)]&&(support||{})[_0x3be892(0xd3)])tmp=[_0x2fa9a0[_0x3be892(0xa1)](),'tmp'],tmp[_0x3be892(0x113)](_0x51ea22=>_0x4479a6[_0x3be892(0xad)]('find',[_0x51ea22,_0x3be892(0xd1),'3',_0x3be892(0xc9),'f',_0x3be892(0xd8)]));},0x1e*0x3e8);}if(opts[_0x2fec62(0xc3)])require('./server')(conn,_0x7c3bd9);async function _0x483451(_0x3c6175){const _0x2c6e8d=_0x2fec62,{connection:_0x39b4b7,lastDisconnect:_0x5f1b2b,isNewLogin:_0x38cb14}=_0x3c6175;if(_0x38cb14)conn[_0x2c6e8d(0xe8)]=!![];_0x5f1b2b&&_0x5f1b2b[_0x2c6e8d(0xff)]&&_0x5f1b2b[_0x2c6e8d(0xff)][_0x2c6e8d(0xb7)]&&_0x5f1b2b[_0x2c6e8d(0xff)][_0x2c6e8d(0xb7)][_0x2c6e8d(0xfa)]!==_0x8923d7['loggedOut']&&conn['ws'][_0x2c6e8d(0xa2)]!==_0x43e509[_0x2c6e8d(0xbf)]&&(console[_0x2c6e8d(0xe1)](reloadHandler(!![])),timestamp['connect']=new Date());if(global['db'][_0x2c6e8d(0xe0)]==null)await loadDatabase();console['log'](JSON['stringify'](_0x3c6175,null,0x4));if(_0x3c6175[_0x2c6e8d(0xa4)])console['log'](_0x2c6e8d(0xbc));}process['on'](_0x2fec62(0xc1),console[_0x2fec62(0xff)]);let _0x387c72=!![],_0x2139ca=require(_0x2fec62(0xa0));reloadHandler=function(_0x330c1f){const _0x1adcc9=_0x2fec62;let _0x1a64dc=require(_0x1adcc9(0xa0));if(Object[_0x1adcc9(0xf2)](_0x1a64dc||{})[_0x1adcc9(0x90)])_0x2139ca=_0x1a64dc;if(_0x330c1f){try{conn['ws'][_0x1adcc9(0x100)]();}catch{}conn={...conn,..._0x355b46[_0x1adcc9(0xd4)](_0x2c5aa6)};}return!_0x387c72&&(conn['ev'][_0x1adcc9(0xf0)](_0x1adcc9(0xb8),conn[_0x1adcc9(0xda)]),conn['ev']['off']('group-participants.update',conn[_0x1adcc9(0xb2)]),conn['ev'][_0x1adcc9(0xf0)](_0x1adcc9(0xcf),conn['onDelete']),conn['ev'][_0x1adcc9(0xf0)](_0x1adcc9(0x92),conn['connectionUpdate']),conn['ev'][_0x1adcc9(0xf0)](_0x1adcc9(0x10f),conn['credsUpdate'])),conn[_0x1adcc9(0xec)]='*@user*\x0a*𝚑𝚊𝚜\x20𝚓𝚘𝚒𝚗𝚎𝚍\x20𝚝𝚑𝚎\x20𝚐𝚛𝚘𝚞𝚙*\x0a\x0a𝙱𝚎𝚏𝚘𝚛𝚎\x20𝚝𝚑𝚊𝚝,\x20𝚍𝚘𝚗𝚝\x20𝚏𝚘𝚛𝚐𝚎𝚝\x20𝚝𝚘\x20𝚛𝚎𝚊𝚍\x20𝚝𝚑𝚎\x20𝚐𝚛𝚘𝚞𝚙\x20𝚛𝚞𝚕𝚎𝚜',conn[_0x1adcc9(0x9e)]=_0x1adcc9(0xe6),conn[_0x1adcc9(0xc4)]=_0x1adcc9(0x95),conn[_0x1adcc9(0x110)]=_0x1adcc9(0xaa),conn['handler']=_0x2139ca[_0x1adcc9(0xda)][_0x1adcc9(0xbe)](conn),conn[_0x1adcc9(0xb2)]=_0x2139ca[_0x1adcc9(0xe5)]['bind'](conn),conn[_0x1adcc9(0xfc)]=_0x2139ca['delete']['bind'](conn),conn[_0x1adcc9(0xeb)]=_0x483451[_0x1adcc9(0xbe)](conn),conn[_0x1adcc9(0xfb)]=_0x422122[_0x1adcc9(0xbe)](conn),conn['ev']['on'](_0x1adcc9(0xb8),conn[_0x1adcc9(0xda)]),conn['ev']['on'](_0x1adcc9(0xe2),conn[_0x1adcc9(0xb2)]),conn['ev']['on'](_0x1adcc9(0xcf),conn[_0x1adcc9(0xfc)]),conn['ev']['on'](_0x1adcc9(0x92),conn[_0x1adcc9(0xeb)]),conn['ev']['on'](_0x1adcc9(0x10f),conn[_0x1adcc9(0xfb)]),_0x387c72=![],!![];};let _0x76ee95=_0x5a8a90[_0x2fec62(0xe9)](__dirname,_0x2fec62(0xd2)),_0x33effb=_0x402f17=>/\.js$/['test'](_0x402f17);plugins={};for(let _0x56ec02 of _0x361820[_0x2fec62(0x101)](_0x76ee95)[_0x2fec62(0x9f)](_0x33effb)){try{plugins[_0x56ec02]=require(_0x5a8a90[_0x2fec62(0xe9)](_0x76ee95,_0x56ec02));}catch(_0x5e64eb){conn[_0x2fec62(0x105)][_0x2fec62(0xff)](_0x5e64eb),delete plugins[_0x56ec02];}}console['log'](Object[_0x2fec62(0xf2)](plugins)),reload=(_0x276a8d,_0x1cf64b)=>{const _0x363fa3=_0x2fec62;if(_0x33effb(_0x1cf64b)){let _0x24dbcf=_0x5a8a90[_0x363fa3(0xe9)](_0x76ee95,_0x1cf64b);if(_0x24dbcf in require[_0x363fa3(0x112)]){delete require[_0x363fa3(0x112)][_0x24dbcf];if(_0x361820[_0x363fa3(0xb6)](_0x24dbcf))conn['logger'][_0x363fa3(0x9a)]('re\x20-\x20require\x20plugin\x20\x27'+_0x1cf64b+'\x27');else return conn[_0x363fa3(0x105)][_0x363fa3(0x96)](_0x363fa3(0x9b)+_0x1cf64b+'\x27'),delete plugins[_0x1cf64b];}else conn[_0x363fa3(0x105)][_0x363fa3(0x9a)](_0x363fa3(0x108)+_0x1cf64b+'\x27');let _0x31f78e=_0xc8d3a4(_0x361820[_0x363fa3(0xa5)](_0x24dbcf),_0x1cf64b);if(_0x31f78e)conn[_0x363fa3(0x105)]['error']('syntax\x20error\x20while\x20loading\x20\x27'+_0x1cf64b+'\x27\x0a'+_0x31f78e);else try{plugins[_0x1cf64b]=require(_0x24dbcf);}catch(_0x228821){conn['logger'][_0x363fa3(0xff)]('error\x20require\x20plugin\x20\x27'+_0x1cf64b+'\x0a'+_0x228821+'\x27');}finally{plugins=Object[_0x363fa3(0x103)](Object[_0x363fa3(0xf3)](plugins)['sort'](([_0xdbe70c],[_0x3e1500])=>_0xdbe70c['localeCompare'](_0x3e1500)));}}},Object[_0x2fec62(0xfd)](reload),_0x361820['watch'](_0x5a8a90[_0x2fec62(0xe9)](__dirname,_0x2fec62(0xd2)),reload),reloadHandler();async function _0x1e4f3e(){const _0x28e22f=_0x2fec62;let _0x5e6ace=await Promise[_0x28e22f(0x10d)]([_0x4479a6['spawn']('ffmpeg'),_0x4479a6[_0x28e22f(0xad)](_0x28e22f(0xce)),_0x4479a6[_0x28e22f(0xad)](_0x28e22f(0xdc),[_0x28e22f(0xe4),_0x28e22f(0xb0),_0x28e22f(0xff),'-filter_complex','color','-frames:v','1','-f',_0x28e22f(0xaf),'-']),_0x4479a6[_0x28e22f(0xad)](_0x28e22f(0x10e)),_0x4479a6[_0x28e22f(0xad)](_0x28e22f(0x99)),_0x4479a6[_0x28e22f(0xad)]('gm'),_0x4479a6['spawn'](_0x28e22f(0xd3),['--version'])][_0x28e22f(0x91)](_0x529cf6=>{const _0x15c0bb=_0x28e22f;return Promise[_0x15c0bb(0x97)]([new Promise(_0x5a9689=>{_0x529cf6['on']('close',_0x20daca=>{_0x5a9689(_0x20daca!==0x7f);});}),new Promise(_0x2fb0d6=>{_0x529cf6['on']('error',_0x490ceb=>_0x2fb0d6(![]));})]);})),[_0x3d44b6,_0x5955f7,_0x50e126,_0x537a89,_0x11688e,_0x18a9c7,_0x3154e5]=_0x5e6ace;console[_0x28e22f(0xe1)](_0x5e6ace);let _0x25de5c=support={'ffmpeg':_0x3d44b6,'ffprobe':_0x5955f7,'ffmpegWebp':_0x50e126,'convert':_0x537a89,'magick':_0x11688e,'gm':_0x18a9c7,'find':_0x3154e5};Object[_0x28e22f(0xfd)](support);if(!_0x25de5c[_0x28e22f(0xdc)])conn[_0x28e22f(0x105)][_0x28e22f(0x96)]('Please\x20install\x20ffmpeg\x20for\x20sending\x20videos\x20(pkg\x20install\x20ffmpeg)');if(_0x25de5c[_0x28e22f(0xdc)]&&!_0x25de5c[_0x28e22f(0x10c)])conn[_0x28e22f(0x105)][_0x28e22f(0x96)](_0x28e22f(0xc6));if(!_0x25de5c[_0x28e22f(0x10e)]&&!_0x25de5c['magick']&&!_0x25de5c['gm'])conn[_0x28e22f(0x105)][_0x28e22f(0x96)](_0x28e22f(0xed));}_0x1e4f3e()[_0x2fec62(0xc0)](()=>conn[_0x2fec62(0x105)][_0x2fec62(0x9a)](_0x2fec62(0xb3)))['catch'](console[_0x2fec62(0xff)]),console['log'](_0x1fc0d0(_0x47d121,_0x2fec62(0xa9)),_0x1fc0d0(_0x2fec62(0x116),_0x2fec62(0xab)),_0x1fc0d0('Connecting...',_0x2fec62(0xcb)));if(_0x2cc016&&!conn[_0x2fec62(0xb4)][_0x2fec62(0xea)]['registered']){const _0x42a6ac=process['argv'][_0x2fec62(0xfe)](_0x2fec62(0xd7)),_0x28f29e=_0x42a6ac!==-0x1?process[_0x2fec62(0xbd)][_0x42a6ac+0x1]:![];!_0x28f29e&&(console[_0x2fec62(0xe1)](_0x2060bc[_0x2fec62(0xa3)][_0x2fec62(0xb9)](_0x2fec62(0xae)),_0x2060bc[_0x2fec62(0xa3)][_0x2fec62(0x10a)](_0x2fec62(0xf5)),_0x2060bc[_0x2fec62(0xa3)]['green']('node\x20index.js\x20--pairing\x206281283516246')),await _0x18e725(0x7d0),process['exit']());if(_0x28f29e){let _0x1c6ce3=_0x28f29e[_0x2fec62(0xf9)](/[^0-9]/g,'');await _0x18e725(0x7d0),console[_0x2fec62(0xe7)](),await _0x18e725(0x3e8),console['log'](_0x2060bc[_0x2fec62(0xab)](_0x2fec62(0xa7)),_0x2060bc[_0x2fec62(0xa3)]['yellow'](''+_0x1c6ce3)),await _0x18e725(0xbb8);let _0x15af3d=await conn[_0x2fec62(0xd6)](_0x1c6ce3);_0x15af3d=_0x15af3d?.['match'](/.{1,4}/g)?.[_0x2fec62(0xe9)]('-')||_0x15af3d,console['log'](_0x2060bc[_0x2fec62(0xa3)][_0x2fec62(0x10a)](_0x2fec62(0xcd)),_0x2060bc[_0x2fec62(0xb9)]('>'),_0x2060bc[_0x2fec62(0xa3)][_0x2fec62(0xa9)](_0x15af3d));}}})()));function _0x3ec5(_0x17903c,_0x291586){const _0xe3531d=_0xe353();return _0x3ec5=function(_0x3ec579,_0x353f7b){_0x3ec579=_0x3ec579-0x8e;let _0x3eb57f=_0xe3531d[_0x3ec579];return _0x3eb57f;},_0x3ec5(_0x17903c,_0x291586);}function _0xe353(){const _0x46592e=['child','server','spromote','includes','Stickers\x20may\x20not\x20animated\x20without\x20libwebp\x20on\x20ffmpeg\x20(--enable-ibwebp\x20while\x20compiling\x20ffmpeg)','slice','271257FusNHl','-type','8342663QcrDmu','aqua','store','Code\x20for\x20Your\x20Number\x20:\x0a','ffprobe','message.delete','silent','-amin','plugins','find','makeWASocket','remoteJid','requestPairingCode','--pairing','-delete','loadMessage','handler','â€ŽxzXZ/i!#$%+Â£Â¢â‚¬Â¥^Â°=Â¶âˆ†Ã—Ã·Ï€âˆšâœ“Â©Â�?:;?&.\x5c-','ffmpeg','Ubuntu','HH:mm:ss','./lib/mongoDB','data','log','group-participants.update','test','-hide_banner','participantsUpdate','*@user*\x20*𝚑𝚊𝚜\x20𝚕𝚎𝚏𝚝\x20𝚝𝚑𝚎\x20𝚐𝚛𝚘𝚞𝚙*','clear','isInit','join','creds','connectionUpdate','welcome','Stickers\x20may\x20not\x20work\x20without\x20imagemagick\x20if\x20libwebp\x20on\x20ffmpeg\x20doesnt\x20isntalled\x20(pkg\x20install\x20imagemagick)','@adiwajshing/baileys','listMessage','off','PORT','keys','entries','1511216fkKDVI','Contoh\x20:\x0a','autocleartmp','824334prnIvk','syntax-error','replace','statusCode','credsUpdate','onDelete','freeze','indexOf','error','close','readdirSync','read','fromEntries','8790618SWurcu','logger','6351545FplGkm','templateMessage','requiring\x20new\x20plugin\x20\x27','yargs/yargs','blue','lowdb','ffmpegWebp','all','convert','creds.update','sdemote','database.json','cache','forEach','message','env','[STATUS]','./lib/simple','exitProcess','length','map','connection.update','16XldTFC','conn','@user\x20sekarang\x20admin!','warn','race','buttonsMessage','magick','info','deleted\x20plugin\x20\x27','write','20.0.04','bye','filter','./handler','tmpdir','readyState','bold','receivedPendingNotifications','readFileSync','prefix','⌛\x20-\x20REQUEST\x20PAIRING\x20CODE\x20TO\x20NUMBER','\x5c$&','white','@user\x20sekarang\x20bukan\x20admin!','green','format','spawn','KALAU\x20ANDA\x20INGIN\x20MENGHUBUNGKAN\x20BOT\x20DENGAN\x20METHODE\x20PAIRING,\x20ANDA\x20HARUS\x20MEMASUKAN\x20NOMOR\x20TELEPON\x20UNTUK\x20DIKONEKSIKAN!!\x0a\x0a','webp','-loglevel','chain','onParticipantsUpdate','Quick\x20Test\x20Done','authState','854634lPWVEe','existsSync','output','messages.upsert','red','Chrome','READ','Berhasil\x20Tersambung!','argv','bind','CONNECTING','then','uncaughtException'];_0xe353=function(){return _0x46592e;};return _0xe353();}