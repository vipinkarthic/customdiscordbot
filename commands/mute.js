const ms = require("ms");

exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You are not a staff to Kick a user Brainy")
    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if(!member) return message.channel.send('Provide a Valid user Stoopid');
    let muteTime = args[1];
    if(!muteTime) return message.channel.send("No valid time given Idot");
    let msTime = ms(muteTime);
    let muteRole = message.guild.roles.cache.find(r => r.name == "Muted");
    if(!muteRole) return message.channel.send("No roles called Muted, check the code Dumbo");
    member.roles.add(muteRole);
    message.channel.send("Person has been muted, GG");

    setTimeout(() => {
        member.roles.remove(muteRole);
        message.channel.send("The time is up, the user is unmuted, GG")
    }, msTime)

}

exports.help = {
name:'mute'
}