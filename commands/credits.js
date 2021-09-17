const Discord = require('discord.js-selfbot-v11')
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}
module.exports = {
    name:"credits",
    execute(bot, msg, args) {
            const embed_credits = new Discord.RichEmbed()
    			.setColor(randColor())
    			.setAuthor('StatusHighway', 'https://cdn.discordapp.com/attachments/717000793613664346/845632767777439754/lol.gif', 'https://discord.gg/mXjGBjqXcY')
    			.setTitle('**Credits** \n\n')
    			.setURL('https://discord.gg/mXjGBjqXcY')
    			.setDescription('***Những thằng tự kỉ đóng góp vào bot***')
    			.addField('**Code/Embed**', 'cart#1776', false)
    			.addField('**Code/Handle**', 'HackerShader#5959', false)
    			.setTimestamp()
    			.setFooter(`Người sử dụng lệnh: ${msg.author.tag}`)
    		msg.reply(embed_credits).then(msg => msg.delete(20000))

        }
    }
