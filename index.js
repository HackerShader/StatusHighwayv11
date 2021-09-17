const Discord = require('discord.js-selfbot-v11')
const fs = require('fs')
const mineflayer = require('mineflayer')
const tps = require('mineflayer-tps')(mineflayer)
const chalk = require('chalk')
const bot = new Discord.Client()
const config = require('./config.json')
const prefix = config.prefix
var pin_bot_mc = config.pin
const superagent = require("superagent")
const util = require('minecraft-server-util');




bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js')); 

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
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

function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}

function update(direction, distance) {
	try {
		board[direction] = distance
		fs.writeFile('./status.json', JSON.stringify(board), (err) => { if(err) { console.log(err) } })
	} catch(err) {console.log(err)}
}



//Bot Discord

bot.on('ready', () => {
    console.log(`${bot.user.tag} is online!`)
	const date = new Date(Date.now()+25200000)
	var a = date.getHours() 
	var b =	date.getMinutes()
	var c = date.getSeconds()
	var channel_id = '625715711481741324'
	var channel = bot.channels.get(channel_id)
	if (a == 7 && b == 15 && c == 0) {
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C sẽ restart sau 15 phút nữa...```")
		}, 0);
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C sẽ restart sau 10 phút nữa...```")
		}, 300000);
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C sẽ restart sau 5 phút nữa...```")
		}, 600000);
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C bắt đầu restart!!\nXin chờ đợi...```")
		}, 900000);
	}
	else if (a == 14 && b == 15 && c == 0) {
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C sẽ restart sau 15 phút nữa...```")
		}, 0);
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C sẽ restart sau 10 phút nữa...```")
		}, 300000);
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C sẽ restart sau 5 phút nữa...```")
		}, 600000);
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C bắt đầu restart!!\nXin chờ đợi...```")
		}, 900000);
	}
	else if (a == 21 && b == 30 && c == 0) {
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C sẽ restart sau 15 phút nữa...```")
		}, 0);
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C sẽ restart sau 10 phút nữa...```")
		}, 300000);
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C sẽ restart sau 5 phút nữa...```")
		}, 600000);
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C bắt đầu restart!!\nXin chờ đợi...```")
		}, 900000);
	}
	else if (a == 0 && b == 15 && c == 0) {
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C sẽ restart sau 15 phút nữa...```")
		}, 0);
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C sẽ restart sau 10 phút nữa...```")
		}, 300000);
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C sẽ restart sau 5 phút nữa...```")
		}, 600000);
		setTimeout(() => {
			channel.send("```[Schedule Restart] 2Y2C bắt đầu restart!!\nXin chờ đợi...```")
		}, 900000);
	}
	setInterval(() => {
		superagent.get("https://2b2t.io/api/queue?last=true").end((err, data) => {
		util.status('2y2c.org').then((response) => {
			superagent.get("https://api.2b2t.dev/prioq").end((err, dataq) => {
				let yct = parseInt(response.samplePlayers[2].name.split("§")[2].replace("l", ""))
				let ycp = parseInt(response.samplePlayers[1].name.split("§")[2].replace("l", ""))
				bot.user.setPresence({
					game: {
						name: `2y2c queues: ${yct}, prio queue: ${ycp}, ${prefix}help để xem lệnh`,
						type: "WATCHING"
					}
				})
			})
		})
	})
}, 30000);
setInterval(() => {
	const date = new Date(Date.now()+25200000)
	var hrclock = date.getHours() 
	var minclock =	date.getMinutes()
	var seclock = date.getSeconds()
	bot.guilds.get("625715711481741322").members.get("843425621060354110").setNickname(`[${hrclock}:${minclock}] StatusHighway`)
	}, 30000);
});



bot.on('message', msg => {
	if(msg.author.bot|| !msg.content.startsWith(prefix) || msg.author == bot.user) return;
	const args = msg.toString().slice(prefix.length).split(/ /)
    const commandName = args.shift().toLowerCase();
	if (!bot.commands.has(commandName)) return;
			
	try {
		bot.commands.get(commandName).execute(bot, msg, args)
	} catch (error) {
		console.error(error);
		const erembed = new Discord.RichEmbed()
			.setColor(randColor())
			.setTitle('⚠ Đã có lỗi xảy ra trong khi thực hiện câu lệnh này!!!')
			.setDescription('Lệnh này đang trong quá trình cập nhật\n Liên hệ: @HackerShader#5959 để biết báo cáo lỗi')
			.setTimestamp()
    		.setFooter(`Người sử dụng lệnh: ${msg.author.tag}`)
		msg.reply(erembed);
	}
})
bot.login(config.token)



	