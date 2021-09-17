const Discord = require('discord.js-selfbot-v11')
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}
module.exports = {
    name:"spam",
    execute(bot, msg, args) {
            if (msg.author.id === `485419430885457930`) {
                var id = 0
                var channel_id = '625715867526627328'
                var channel = bot.channels.get(channel_id)
		var channel_id2 = '625715867526627328'
		var channel2 = bot.channels.get(channel_id2)
                msg.reply('✅ Đã thực hiện tại <#748529588136837191>')
                setInterval(() => {
                
                channel.send(`=work`).then(msg => msg.delete(2000))
                }, 2000)
		setInterval(() => {
		channel2.send(`=pay 485419430885457930 7000`).then(msg => msg.delete(5000))
		}, 63000)

            }else return msg.reply('giỏi đấy nhưng mình đéo chấp nhận')        
	}	
}
