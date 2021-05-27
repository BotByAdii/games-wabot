let handler = function (m) {
  this.sendContact(m.chat, '0', 'MARK', m)
  //plsss do not change this, jika mau add boleh tapi jangan rubah
  this.sendContact(m.chat, '6289504585790', 'Owner kuu><', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
