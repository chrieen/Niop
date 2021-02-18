const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  if(!args[0] || !message.guild.emojis.find(a => a.name === args[0])) return message.reply('Bir emoji adı girmelisin!');
  message.channel.send({file: message.guild.emojis.find(a => a.name === args[0]).url});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['emojiresmi'],
  permLevel: 0
};
exports.help = {
  name: 'emoji-foto',
  description: 'Adı girilen emojinin resmini atar.',
  usage: 'emoji-foto',
  kategori: 'kullanıcı'
};
