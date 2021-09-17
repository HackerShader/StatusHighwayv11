const Discord = require('discord.js-selfbot-v11')
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}


module.exports = {
    name:"info",
    execute(bot, msg, args) {
        const embed_info = new Discord.RichEmbed()
			.setColor(randColor())
    			.setAuthor('StatusHighway', 'https://cdn.discordapp.com/attachments/717000793613664346/845632767777439754/lol.gif', 'https://discord.gg/mXjGBjqXcY')
    			.setTitle('**Thông tin về Highway của Server 2Y2C** \n\n')
    			.addField('**Highway**', 'là đường từ spawn (0; 0) cho tới rìa thế giới và được lấp bằng obsidian và rộng tối thiểu 3 blocks không tính cánh cao tốc')
    			.setURL('https://discord.gg/mXjGBjqXcY')
				.setTimestamp()
    			.setFooter(`Người sử dụng lệnh: ${msg.author.tag}`)
    		msg.reply(embed_info).then(msg => msg.delete(20000))
     }
}

