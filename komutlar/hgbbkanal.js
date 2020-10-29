const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {
 let kanal = message.mentions.channels.first()
if (!kanal) return message.channel.send('Lütfen hgbb Kanalını Etiketlermisin?')
   
  db.set(`hgbbkanal_${message.guild.id}`, kanal.id)

 
  message.channel.send(`Kayıt Kanalı Başarıyla Ayarlandı; **${kanal}**`)
 };

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 3,
kategori:"yetkili"
};

exports.help = {
 name: 'hgbb-kanal-ayarla',
 description: 'hgbb mesajını gönderecek kanalı ayarlarsınız',
 usage: 'hgbb-kanal <#kanal>'
};