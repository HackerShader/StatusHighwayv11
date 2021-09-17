const Discord = require('discord.js-selfbot-v11')
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}
module.exports = {
    name:"invite",
    execute(bot, msg, args) {

        const embed_inv = new Discord.RichEmbed()
			.setColor(randColor())
    			.setAuthor('StatusHighway', 'https://cdn.discordapp.com/attachments/717000793613664346/845632767777439754/lol.gif', 'https://discord.gg/mXjGBjqXcY')
    			.setTitle('**Invite Server Đội Đào Đường của 2Y2C** \n\n')
    			.setURL('https://discord.gg/mXjGBjqXcY')
    			.addField('**Link Discord**', 'https://discord.gg/BTrqMds3Tn')
				.setTimestamp()
    			.setFooter(`Người sử dụng lệnh: ${msg.author.tag}`)
    		msg.reply(embed_inv).then(msg => msg.delete(20000))
    
        }
    }  
