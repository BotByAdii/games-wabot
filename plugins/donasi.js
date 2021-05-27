let handler = async m => m.reply(`


╭─「 Donasi • Pulsa 」
│ • Pulsa [089504585790]
│ • Gopay [089504585790]
│ • Ovo [089504685295]
│ • Dana [089504685295]
╰────
╭─「 Hubungi 」
│ > Ingin Masukin Bot? wa.me/6289504585790
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler












