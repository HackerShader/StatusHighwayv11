const Discord = require('discord.js-selfbot-v11')
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}
module.exports = {
    name:"help", 
    execute(bot, msg, args) {
                const embed_help = new Discord.RichEmbed()
                        .setColor(randColor())
                        .setAuthor('StatusHighway', 'https://cdn.discordapp.com/attachments/717000793613664346/845632767777439754/lol.gif', 'https://discord.gg/mXjGBjqXcY')
                        .setTitle('**Lệnh bot StatusHighway** \n\n')
                        .setURL('https://discord.gg/mXjGBjqXcY')
                        .addField('```$help```', 'Hiện các lệnh của bot.',true)
                        .addField('```$queue```', 'Hàng chờ của 2y2c',true)
                        .addField('```$invite```' , 'Cho link Invite vào server Đội Đào Đường.', true)
                        .addField('```$info```', 'Info về Highway.', true)
                        .addField('```$calc```', 'Tính toán quãng đường',true)
                        .addField('```$time```', 'Thời gian hiện tại.',true)
                        .addField('```$credits```', 'Bảng ghi lại những người đã đóng góp vào bot.',true)
                        .addField('```$say [câu]```', 'Cho bot nói *[câu]*.',true)
                        .addField('```$statusbot```', 'Status của bot.', true)
                        .addField('```status-straight```', 'Status của các Highway Thẳng',true)
                        .addField('```status-diagonal```', 'Status của các Highway Chéo ',true)
                        .addField('\u200b','**Admin commands**')
                        .addField('```$update [hướng Highway] [chiều dài (blocks)]```', 'Cập nhật chiều dài của Highway')
                        .addField('```$nickname```', 'Cập nhật nickname thời gian',true)
                        .addField('```$restart```', 'Restart khẩn cấp, joke',true)
                        .addField('```$spam```', 'sPaM',true)
                        .setTimestamp()
                        .setFooter(`Người sử dụng lệnh: ${msg.author.tag} | Code bay cart#1778`)
                    msg.reply(embed_help).then(msg => msg.delete(20000))
	            
       }
}