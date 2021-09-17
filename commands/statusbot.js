const Discord = require('discord.js-selfbot-v11')
const os = require('os')
const prettyms = require("pretty-ms");
const { hrtime } = require('process');

function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}

module.exports = {
    name:"statusbot",
    execute(bot, msg, args) {
        const embed_status = new Discord.RichEmbed()
				.setColor(randColor())
    			.setTitle('Xin chờ đợi...')
    			msg.reply(embed_status).then((msg1) => {
    			const ping = msg1.createdTimestamp - msg.createdTimestamp;
    			var ping_perm = ''
    			if(ping < 500) {
    				ping_perm = '​🟢​ Ổn định, nhanh'
    			}
    			if(ping > 500 && ping <= 1000) {
    				ping_perm = '​🟡​ Khá ổn định, hơi chậm'
    			}
    			if(ping > 1000 && ping <= 7500) {
    				ping_perm = '​🟠​ Không ổn định, chậm'
    			}
    			if(ping > 7500) {
    				ping_perm = '​🔴​ Không ổn định, rất chậm'
    			}
				/*let updays = (bot.uptime / 86400000);
    			let uphours = (bot.uptime / 3600000) % 24;
    			let upminutes = (bot.uptime / 60000) % 60;
    			let upseconds = (bot.uptime / 1000) % 60;*/
				var uptime = prettyms(bot.uptime)
				var freemem = (os.freemem/1024/1024/1024).toFixed(2)
				var mbfreemem = (os.freemem/1024/1024).toFixed(0)
				var totalmem =(os.totalmem/1024/1024/1024).toFixed(2)
				var mbtotalmem = (os.totalmem/1024/1024).toFixed(0)
				var usedmem = (totalmem - freemem).toFixed(2)
				var mbusedmem = (mbtotalmem - mbfreemem).toFixed(0)
				var perusedmem = (usedmem/totalmem*100).toFixed(0)
				var perfreemem = 100 - perusedmem
				var ostype = os.type()
				var ostime = prettyms(os.uptime())
				var osver = os.version()
				var osbit = os.arch()
				var osplat = os.platform()
				var ospre = os.release() 
				var usedmem_perm = ''
    			if(usedmem < 1.50 || freemem > 2.50)  {
    				usedmem_perm = '​🟢​'
    			}
    			if(usedmem > 1.50 && usedmem <= 2.00 || freemem <= 2.50 && freemem > 2.00) {
    				usedmem_perm = '​🟡​'
    			}
    			if(usedmem > 2.00 && usedmem <= 2.50 || freemem <= 2.00 && freemem > 1.50) {
    				usedmem_perm = '​🟠​'
    			}
    			if(usedmem > 2.50 || freemem < 1.50) {
    				usedmem_perm = '​🔴​'
    			}
    			const embed_status1 = new Discord.RichEmbed()
					.setColor(randColor())
    				.setAuthor('StatusHighway', 'https://cdn.discordapp.com/attachments/717000793613664346/845632767777439754/lol.gif', 'https://discord.gg/mXjGBjqXcY')
    				.setTitle('**Status Bot StatusHighway 2Y2C** \n\n')
    				.addField('**Status**', '🟢 Đang hoạt động')
    				.addField('**Độ trễ của bot**', `${ping} ms \n(${ping_perm})`, true)
					.addField('**Bot đã hoạt động trong**', `${uptime}`, true)
					.addField('Thông số máy tính', `${usedmem_perm}Free RAM: ${freemem} GB (${mbfreemem} MB) ${perfreemem}%\n${usedmem_perm}Used RAM: ${usedmem} GB (${mbusedmem} MB) ${perusedmem}%\n💻Total RAM: ${totalmem} GB (${mbtotalmem} MB)\n🔒Hệ điều hành: ${ostype} (${osver}, ${ospre}, ${osbit}, ${osplat})\n⏱Máy đã hoạt động được: ${ostime}`)
    				.setURL('https://discord.gg/mXjGBjqXcY')
					.setTimestamp()
    				.setFooter(`Người sử dụng lệnh: ${msg.author.tag}`)
  				msg1.edit(embed_status1).then(msg => msg.delete(20000))
			})
     }	
}

