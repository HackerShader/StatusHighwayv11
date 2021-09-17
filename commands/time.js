const Discord = require('discord.js-selfbot-v11')
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}

module.exports = {
    name:"time",
    execute(bot, msg, args) {
        if (msg.content === `$time`) {
            const timetext = new Discord.RichEmbed()
            .setColor(randColor())
            .setTitle('Time Commands')
            .setDescription('Vietnamese: Xem thời gian (có hỗ trợ timezone)\nEnglish: Watch time (support timezone)')
            .addField('**Cú pháp/Syntax**','$time [timezone]')
            return msg.reply(timetext)
        }
        if (msg.content === `$time GMT+0`) {
            const dategmt0 = new Date()
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} hours ${dategmt0.getMinutes()} Minutes ${dategmt0.getSeconds()} Seconds (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        } else if (msg.content === `$time GMT+1`) {
            const dategmt0 = new Date(Date.now()+3600000)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} hours ${dategmt0.getMinutes()} Minutes ${dategmt0.getSeconds()} Seconds (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT+2`) {
            const dategmt0 = new Date(Date.now()+3600000*2)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} hours ${dategmt0.getMinutes()} Minutes ${dategmt0.getSeconds()} Seconds (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT+3`) {
            const dategmt0 = new Date(Date.now()+3600000*3)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} hours ${dategmt0.getMinutes()} Minutes ${dategmt0.getSeconds()} Seconds (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT+4`) {
            const dategmt0 = new Date(Date.now()+3600000*4)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} hours ${dategmt0.getMinutes()} Minutes ${dategmt0.getSeconds()} Seconds (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT+5`) {
            const dategmt0 = new Date(Date.now()+3600000*5)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} hours ${dategmt0.getMinutes()} Minutes ${dategmt0.getSeconds()} Seconds (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT+6`) {
            const dategmt0 = new Date(Date.now()+3600000*6)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} hours ${dategmt0.getMinutes()} Minutes ${dategmt0.getSeconds()} Seconds (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT+7`) {
            const dategmt0 = new Date(Date.now()+3600000*7)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} hours ${dategmt0.getMinutes()} Minutes ${dategmt0.getSeconds()} Seconds (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT+8`) {
            const dategmt0 = new Date(Date.now()+3600000*8)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} giờ ${dategmt0.getMinutes()} phút ${dategmt0.getSeconds()} giây (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT+9`) {
            const dategmt0 = new Date(Date.now()+3600000*9)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} giờ ${dategmt0.getMinutes()} phút ${dategmt0.getSeconds()} giây (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT+10`) {
            const dategmt0 = new Date(Date.now()+3600000*10)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} giờ ${dategmt0.getMinutes()} phút ${dategmt0.getSeconds()} giây (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT+11`) {
            const dategmt0 = new Date(Date.now()+3600000*11)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} giờ ${dategmt0.getMinutes()} phút ${dategmt0.getSeconds()} giây (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT+12`) {
            const dategmt0 = new Date(Date.now()+3600000*12)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} giờ ${dategmt0.getMinutes()} phút ${dategmt0.getSeconds()} giây (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT-1`) {
            const dategmt0 = new Date(Date.now()-3600000)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} hours ${dategmt0.getMinutes()} Minutes ${dategmt0.getSeconds()} Seconds (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT-2`) {
            const dategmt0 = new Date(Date.now()-3600000*2)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} hours ${dategmt0.getMinutes()} Minutes ${dategmt0.getSeconds()} Seconds (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT-3`) {
            const dategmt0 = new Date(Date.now()-3600000*3)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} hours ${dategmt0.getMinutes()} Minutes ${dategmt0.getSeconds()} Seconds (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT-4`) {
            const dategmt0 = new Date(Date.now()-3600000*4)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} hours ${dategmt0.getMinutes()} Minutes ${dategmt0.getSeconds()} Seconds (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT-5`) {
            const dategmt0 = new Date(Date.now()-3600000*5)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} hours ${dategmt0.getMinutes()} Minutes ${dategmt0.getSeconds()} Seconds (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT-6`) {
            const dategmt0 = new Date(Date.now()-3600000*6)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} hours ${dategmt0.getMinutes()} Minutes ${dategmt0.getSeconds()} Seconds (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT-7`) {
            const dategmt0 = new Date(Date.now()-3600000*7)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} hours ${dategmt0.getMinutes()} Minutes ${dategmt0.getSeconds()} Seconds (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT-8`) {
            const dategmt0 = new Date(Date.now()-3600000*8)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} giờ ${dategmt0.getMinutes()} phút ${dategmt0.getSeconds()} giây (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT-9`) {
            const dategmt0 = new Date(Date.now()-3600000*9)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} giờ ${dategmt0.getMinutes()} phút ${dategmt0.getSeconds()} giây (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT-10`) {
            const dategmt0 = new Date(Date.now()-3600000*10)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} giờ ${dategmt0.getMinutes()} phút ${dategmt0.getSeconds()} giây (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT-11`) {
            const dategmt0 = new Date(Date.now()-3600000*11)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} giờ ${dategmt0.getMinutes()} phút ${dategmt0.getSeconds()} giây (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else if (msg.content === `$time GMT-12`) {
            const dategmt0 = new Date(Date.now()-3600000*12)
            msg.reply(`\n\nNow, it's at: ${dategmt0.getHours()} giờ ${dategmt0.getMinutes()} phút ${dategmt0.getSeconds()} giây (${dategmt0.getDate()}/${dategmt0.getMonth()}/${dategmt0.getFullYear()})`)
        }else msg.reply('Somethings went wrong, please check again\nCó lỗi đã xảy ra, hãy kiểm tra lại')
    }        
}
