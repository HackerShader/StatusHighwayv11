const Discord = require('discord.js-selfbot-v11')

module.exports = {
    name:"restart",
    execute(bot, msg, args) {
            if (msg.author.id === `485419430885457930`) {
            var channel_id = '625715711481741324'
		    var channel = bot.channels.get(channel_id)
            msg.reply('Đã thực hiện!')
            setTimeout(() => {
                channel.send("```[Emergency Restart] 2Y2C sẽ restart sau 15 phút nữa...```")
            }, 0);
            setTimeout(() => {
                channel.send("```[Emergency Restart] 2Y2C sẽ restart sau 10 phút nữa...```")
            }, 300000);
            setTimeout(() => {
                channel.send("```[Emergency Restart] 2Y2C sẽ restart sau 5 phút nữa...```")
            }, 600000);
            setTimeout(() => {
                channel.send("```[Emergency Restart] 2Y2C bắt đầu restart!!\n Xin chờ đợi...```")
            }, 900000);
            }else msg.reply('bạn ko có quyền thực hiện điều này')
        } 
    }
