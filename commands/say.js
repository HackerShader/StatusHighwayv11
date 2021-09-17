const Discord = require('discord.js-selfbot-v11')
function randColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}
const prefix = "$"
module.exports = {
    name:"say",
    execute(bot, msg, args) {
        if (msg.content === `$say`) {
            const sayembed = new Discord.RichEmbed()
                .setColor(randColor())    
                .setTitle('Lệnh $say')
                .setDescription('Sử dụng cú pháp "$say [câu nói của bạn]"\nVí dụ: $say 123')
                .setTimestamp()
    			.setFooter(`Người sử dụng lệnh: ${msg.author.tag}`)
            msg.channel.send(sayembed).then(msg => msg.delete(20000))
        }
        var uMsg = msg.content.replace(`${prefix}say `, '')
        var channel_id = '625715711481741324'
        var channel = bot.channels.get(channel_id)
            if (msg.content === `$say ${uMsg}`) {
    		if(msg.author.id === `485419430885457930`){
                msg.channel.send(`**[DEV]<@${msg.author.id}> | ${uMsg}**`)
            }
            else if(msg.author.id === `453829936927735819`){
                msg.channel.send(`**[Co-DEV]<@${msg.author.id}> | ${uMsg}**`)
            } else msg.channel.send(`<@${msg.author.id}> | ${uMsg}`)
        }
    }    
}
