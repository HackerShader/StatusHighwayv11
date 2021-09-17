const superagent = require("superagent")
const util = require('minecraft-server-util');
const Discord = require('discord.js-selfbot-v11')
function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}

module.exports = {
    name:"queue",
    execute(bot, msg, args) {
            superagent.get("https://2b2t.io/api/queue?last=true").end((err, data) => {
                let bt = data.body[0][1];
                util.status('2y2c.org').then((response) => {
                    let yc = response.onlinePlayers - 100;
                    console.log(response.samplePlayers[2].name.split("§")[2])
                    let yct = parseInt(response.samplePlayers[2].name.split("§")[2].replace("l", "")) 
                    let ycq = parseInt(response.samplePlayers[1].name.split("§")[2].replace("l", "")) 
                    superagent.get("https://api.2b2t.dev/prioq").end((err, dataq) => {
                        var yqueue = ''
                        if (yct <= 2) {
                            yqueue = '💙 [■□□□□□]\n``Vắng, thậm chí có thể vô tức thì``'
                        }
                        if (yct > 2 && yct <= 10) {
                            yqueue = '💚 [■■□□□□]\n``Vắng, vẫn có thể vào nhưng phải chờ một chút``'
                        }
                        if (yct > 10 && yct <= 25) {
                            yqueue = '💛 [■■■□□□]\n``Hơi đông, phải chờ tầm 10-15 phút``'
                        }
                        if(yct > 25 && yct <= 40) {
                            yqueue = '🧡 [■■■■□□]\n``Mật độ trung bình, bắt đầu phải chờ 25 phút``'
                        }
                        if(yct > 40 && yct <= 70) {
                            yqueue = '❤  [■■■■■□]\n``Mật độ cao, chờ rất lâu để vô servers``'
                        }
                        if(yct > 70 && yct <= 75) {
                            yqueue = '💥 [■■■■■■]\n``Quá tải, hàng chờ đạt ngưỡng cao nhất``'
                        }
                        var ypqueue = ''
                        if (ycq <= 1) {
                            ypqueue = '❗ [■■□□□□]\n``Tức thì vì bạn là donator``'
                        }
                        if (ycq > 1 && ycq <= 4) {
                            ypqueue = '⭕ [■■■■□□]\n``Có một vài Donator đang vào, chờ tầm 5 phút``'
                        }
                        if (ycq > 4 && ycq <= 10) {
                            ypqueue = '⛔ [■■■■■■]\n``Servers bắt đầu đông donator, hãy chờ 10 phút``'
                        }
                        if (ycq > 10) {
                            ypqueue = '❕ Quá đông donator, bạn sẽ phải chờ'
                        }
                        var bqueue = ''
                        if(bt <= 10) {
                            bqueue = '💙 [■□□□□□]\n``Rất vắng, thậm chí có thể vô tức thì``'
                        }
                        if (bt > 10 && bt <= 75) {
                            bqueue = '💚 [■■□□□□]\n``Vắng, vẫn có thể vào nhưng phải chờ một chút``'
                        }
                        if (bt > 75 && bt <= 250 ) {
                            bqueue = '💛 [■■■□□□]\n``Hơi đông``'
                        }
                        if (bt > 250 && bt <= 450) {bqueue = '🧡 [■■■■□□]\n``Mật độ trung bình``'}
                        if (bt > 450 && bt <= 675) {bqueue = '``❤  [■■■■■□]\n``Mật độ cao, chờ rất lâu để vô servers``'}      
                        if (bt > 675) {bqueue = '💥 [■■■■■■]\n``Mật độ quá cao``'}   
                        var bpqueue = ''
                        if (dataq.body[1] <= 25) {
                            bpqueue = '❗ [■■□□□□]\n``Tức thì vì bạn là donator``'
                        }
                        if (dataq.body[1] > 25 && dataq.body[1] <= 75) {
                            bpqueue = '⭕ [■■■■□□]\n``Hơi đông``'
                        }
                        if (dataq.body[1] > 75) {
                            bpqueue = '⛔ Đông đúc, nhiều donator đang chờ'
                        }             
                        const embedq = new Discord.RichEmbed()
                        .setColor(randColor())
                        .setTitle('Hàng chờ')
                        .setDescription(`[2Y2C] Normal queues: ${yct}\n[2Y2C] Priority queues: ${ycq}\n[2B2T] Normal queues: ${bt}\n[2B2T] Priority queues: ${dataq.body[1]}\n[Code bay namanhishere#9333 and Moka Sakura#5864]`)
                        .addField('Mật độ hàng chờ', `\n| **Normal queues** |\n${yqueue}\n| **Normal queues** |\n${bqueue}`,true)
                        .addField('\u200b', `| **Priority queues** |\n${ypqueue}\n| **Priority queues** |\n${bpqueue}`,true)
                        msg.reply(embedq)
                    })
                })
            })
        }
    }
