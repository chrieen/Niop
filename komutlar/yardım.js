const Discord = require ("discord.js");

exports.run = (client, message) => {
const lembed = new Discord.MessageEmbed()

.then;   
const mhelp = new Discord.MessageEmbed()
.setColor("BLACK")
.setAuthor(`${client.user.username} `, client.user.avatarURL)  
.setTitle("Lrows V12 MODERASYON")
.setThumbnail("https://cdn.discordapp.com/emojis/727894683061321759.gif?v=1")
    .setDescription(`


╔═════════════════════════════════════╗
║**MODERASYON KOMUTLARI**
║**!ban**   Sunucudan bir üyeyi yasaklar.
║**!unban** İstediğiniz kişinin banını kaldırır.
║**!kick**  Sunucudan bir üye kickler.
║**!jail**  Kişiyi jaile yollar.
║══════════════════════════════════════
║**SOHBET KOMUTLARI**
║**!sil**          Belirli bir kanaldaki mesajları siler.
║**!sohbet-kapat** Sohbeti Kapatır ve yazı yazılamaz.
║**!sohbet-aç**    Sohbeti Açar ve yazı yazılabilir.
║**!nuke**         Kanalı kapatır,mesajları siler ve tekrardan açar.
║**!mute**         Kişiye chat/voice mute atılır.
║══════════════════════════════════════
║**SESLİ KOMUTLARI**
║**!git**          Kişi onay verirse odasına gidersiniz.
║**!çek**          Kişi onay verirse odanıza gelir.
║**!mute**         Kişiye chat/voice mute atılır.
╚═════════════════════════════════════╝
`) 
       .addField(`» Lrows V12 MODERASYON`, `**[Destek Sunucusu](https://discord.gg/Qfj3FRM)**`)
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
message.channel.send(mhelp)
.then; const sembed = new Discord.MessageEmbed()

}; 
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ["yardım"], 
    permLevel: 0 
  };
 
  exports.help = {
    name: 'yardım', 
    description: '',
    usage: ''
  };