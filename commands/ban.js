exports.run = async (bot,message,args) => {
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You are not a staff to ban a person Dumbo")
    let member = message.mentions.members.first() || message.guild.member.cache.get(args[0])
    if(!member) return message.channel.send("Invalid Member Given");
    if(member.roles.highest.position > message.member.roles.highest.position) return message.channel.send("You cannot Ban a Person who oversees you, you Baldo")
    let reason = args.slice(1).join(' ');
    if(!reason) {reason = 'No Reason Provided'}
    member.ban({reason: reason, days: 7})
    message.channel.send(`${member.user.tag} has been kicked for ${reason}`)

       
}

exports.help = {
name:'ban'
}