function randColor() {
	return Math.floor(Math.random()*16777215).toString(16);
}
module.exports = {
    name:"calc",
    execute(bot, msg, args) {        
        if (msg.content === '$calc') {
            return msg.reply('Hãy nhập số liệu tọa độ bắt đầu và tọa độ kết thúc (chỉ x hoặc z, không ghi cả tọa độ để bảo toàn tính mạng, không ghi dấu "-" vì bot sẽ tính sai, cái này do thằng devs ngu ok :))))\n| Cấu trúc: $calc (nơi bắt đầu) (nơi kết thúc) (tốc độ)\n| Ví dụ: $calc 60000 30000 20')
        }
        const date = new Date(Date.now()+25200000)
        const sec = date.getSeconds()
        const min = date.getMinutes()
        const hr = date.getHours() 
        var a = Number(args[0]);
        var b = Number(args[1]);
        var e = Number(args[2])
        var c = Number(b - a)
        if (msg.content === `$calc ${a} ${b} ${e}`) {
            const thoigian = parseInt(c / e)//giay
            const msthoigian = parseInt(thoigian * 1000)
            let updays = Math.floor(msthoigian / 86400000);
    		let uphours = Math.floor(msthoigian / 3600000) % 24;
    		let upminutes = Math.floor(msthoigian / 60000) % 60;
    		let upseconds = Math.floor(msthoigian / 1000) % 60;
            const thoigian_phut =(thoigian/60).toFixed(0)
            const thoigian_gio = (thoigian_phut/60).toFixed(2);
            const km = (c/1000).toFixed(2);
            const loi1  = parseInt(b - a);
            if (e <= 0 ) {
                return msg.reply('tốc độ = 0 hay âm tính làm cặc à?')
            } else if ( b < a ) {
                return msg.reply(`số liệu điểm kết thúc thấp hơn số liệu điểm bắt đầu, vui lòng kiểm tra lại\n| Tìm lỗi, số liệu bạn nhập $calc ${a} ${b}\n| Kết quả nhận được: ${loi1}`).then(msg => msg.delete(20000))
            } else if (a > 60000000 || b > 60000000) {
                return msg.reply('Số quá to so với thế giới minecraft, vui lòng kiểm tra lại').then(msg => msg.delete(20000))
            }else msg.reply(`thời gian ước tính chặng đường của bạn (${c}m) (${km}km): ${thoigian_phut} phút (${thoigian_gio} giờ)\nBây giờ là ${hr}:${min}:${sec}\nKhoảng thời gian dự tính: ${updays}, ${hr + uphours}:${min + upminutes}:${sec + upseconds} \n\n Code bay HackerShader#5959\nLệnh này đang đc code lại đừng phàn nàn vì sai số nhá`).then(msg => msg.delete(20000))

            
        } else msg.reply('Bạn đã nhập sai số liệu, vui lòng kiểm tra lại').then(msg => msg.delete(20000))
    } 
}
