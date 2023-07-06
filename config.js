import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['6282298627146', 'IzandXD', true]
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '6282298627146'
global.author = '© IzansXD'
global.namebot = '​Clara - MD'
global.wm = '© Clara By IzansXD'
global.stickpack = 'Clara - MD'
global.stickauth = '© IzansXD'
// Link Sosmed
global.sig = 'https://www.instagram.com/AfkLeeOfc'
global.sgh = 'https://github.com/IzansStore'
global.sgc = 'https://chat.whatsapp.com/EZz7IuEJnHX04TqqeRQm6V'
// Donasi
global.psaweria = 'https://saweria.co/HinataMd'
global.ptrakterr = '-'
global.povo = 0822-9862-7146'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.xyro = 'apikeylu'
// Website: https://api.xyroinee.xyz
// Daftar Ke Website Tersebut Untuk..
// Mendapatkan Apikey Kamu

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})

