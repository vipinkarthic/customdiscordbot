exports.run = async (bot,message,args) => {
    
        let member = message.mentions.members.first();
        if(!member) {message.channel.send('I am a simp of BOB');} else {
            message.channel.send(`I am a SIMP of ${member.user.tag}`)
        }
           
}
    
exports.help = {
    name:'hello'
}