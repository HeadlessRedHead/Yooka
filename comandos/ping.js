const Discord=require('discord.js')
const {MessageEmbed} = require("discord.js")



module.exports = {
    name:"ping",
    alias: ["p"],
    execute(client,message,args){

        const msgembed =  new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Ping!')
        .setDescription(`💥 Que pingeai flaco || ${client.ws.ping}ms`)
        .setImage("https://cdn.discordapp.com/avatars/733843873352384624/4e7fbff5e5e4e16e5ef30324f1cef4ac.webp?size=1024")
        .setTimestamp()
        .setFooter(`Enviado por ${message.author.tag}`)

        message.channel.send({embeds: [msgembed]})

        //message.reply(`💥 Que pingeai flaco ${client.ws.ping}ms`)
    }
}