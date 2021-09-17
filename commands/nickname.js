module.exports = {
    name:"nickname",
    execute(bot, msg, args) {
        if (msg.author.id === '485419430885457930') {
            const date = new Date()
	        var a = date.getHours() 
	        var b =	date.getMinutes()
	        var c = date.getSeconds()
            bot.guilds.get("625715711481741322").members.get("843425621060354110").setNickname(`[${a}:${b}] StatusHighway`)
            msg.reply('✅Đã thực hiện!')
        } else msg.reply('Lệnh đg đc thủ nghiệm')
    }
}