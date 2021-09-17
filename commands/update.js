const Discord = require('discord.js-selfbot-v11')
const fs = require('fs')
const req_status = fs.readFileSync('./status.json', 'utf8')
var status = JSON.parse(req_status)
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}
const prefix = '$'
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
    name:"update",
    execute (bot, msg, args) {        
		if (msg.author.id === `485419430885457930` || msg.author.id === `453829936927735819`) {
		var m = msg.content.replace(`${prefix}update `, '').split(/ /)
    		if(m[0] === 'X+' || m[0] === 'X-' || m[0] === 'Z+' || m[0] === 'Z-' || m[0] === 'X+Z+' || m[0] === 'X+Z-' || m[0] === 'X-Z+' || m[0] === 'X-Z-') {
    			update(m[0], m[1])
    			console.log(m[0], m[1])
    			msg.channel.send(`<@!${msg.author.id}> \nĐã cập nhật hướng ${m[0]} với chiều dài là ${m[1]} block(s).`)
    		}
    		if(!m[0] === 'X+' || !m[0] === 'X-' || !m[0] === 'Z+' || !m[0] === 'Z-' || !m[0] === 'X+Z+' || !m[0] === 'X+Z-' || !m[0] === 'X-Z+' || !m[0] === 'X-Z-') {
    			msg.reply(`\nBạn đã nhập sai hướng. \nCác hướng hiện tại: X+, X-, Z+, Z-, X+Z+, X+Z-, X-Z+, X-Z-`)
    		}
		}else msg.reply('Bạn ko có quyền truy cập lệnh này	')
	}
}