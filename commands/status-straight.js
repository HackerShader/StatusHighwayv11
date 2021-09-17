const Discord = require('discord.js-selfbot-v11')
const fs = require('fs')
const req_status = fs.readFileSync('./status.json', 'utf8')
var status = JSON.parse(req_status)
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}
const board = {
	"X+": "0",
	"X-": "0",
	"Z+": "0",
	"Z-": "0",
	"X+Z+": "0",
	"X+Z-": "0",
	"X-Z+": "0",
	"X-Z-": "0"
}
function update(direction, distance) {
	try {
		board[direction] = distance
		fs.writeFile('./status.json', JSON.stringify(board), (err) => { if(err) { console.log(err) } })
	} catch(err) {console.log(err)}
}
module.exports = {
    name:"status-straight",
    execute(bot, msg, args) {
            const embed_straight = new Discord.RichEmbed()
    			.setColor(randColor())
    			.setAuthor('StatusHighway', 'https://cdn.discordapp.com/attachments/717000793613664346/845632767777439754/lol.gif', 'https://discord.gg/mXjGBjqXcY')
    			.setTitle('**Status Highway hiện tại của 2Y2C.org** \n\n')
    			.setURL('https://discord.gg/mXjGBjqXcY')
    			.setDescription('***Highway Thẳng***')
    			.addField('**X+**', status['X+'])
    			.addField('**X-**', status['X-'])
    			.addField('**Z+**', status['Z+'])
    			.addField('**Z-**', status['Z-'])
    			.setTimestamp()
    			.setFooter(`Người sử dụng lệnh: ${msg.author.tag}`)
    		msg.reply(embed_straight).then(msg => msg.delete(20000))

        
    }
}