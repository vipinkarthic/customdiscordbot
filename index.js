const Discord = require("discord.js")
const bot = new Discord.Client({ws: {intents: Discord.Intents.ALL}});
const fs = require("fs")
bot.commands = new Discord.Collection();

bot.on('ready', () => {
    console.log('Bot online')

    fs.readdir('./commands' , (err, files) =>{
        if(err) return console.log(err);
        let jsfile = files.filter(f => f.split(".").pop() == 'js')

        if(jsfile.length == 0) {return console.log("Could not find any commands")}

        jsfile.forEach(f => {
            let props = require(`./commands/${f}`)
            bot.commands.set(props.help.name, props)
        }) 
    })

})

bot.on('message', (message) => {
    if (message.author.bot) return;
    if (message.channel.type !== 'text') return;
    let prefix = 'cp!';
    // hello there 
    let MessageArray = message.content.split(' ')
    let cmd = MessageArray[0].slice(prefix.length) 
    let args = MessageArray.slice(1)

    if(!message.content.startsWith(prefix)) return;

    let commandfile = bot.commands.get(cmd);
    if(commandfile) {commandfile.run (bot,message,args)} 


}) 

bot.on('guildMemberAdd' ,(member) => { 
    let embed = new Discord.MessageEmbed()
    .setTitle('Welcome to Chill Paradise! ') 
    .setDescription(`**=> Current Member Count : ${member.guild.memberCount}**\n \n *=> Welcome to the server and Thank you for joining!*\n \n *=> Make sure to remain active and level up yourself for various fun and amazing roles* \n \n *=> Make sure to check out all the rules and get yourself the self roles!* \n \n  *=> Also check out our perks* \n \n *=> We are glad to have you and we hope that you enjoy your stay!* `)
    .setColor('#0099ff') 
    .setFooter('Bot Devoloped by Hardhacker17#0017')
    .setThumbnail(member.guild.iconURL());
    

    member.send(embed)
})



bot.login("process.env.token")
