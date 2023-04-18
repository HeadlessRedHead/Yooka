const Discord=require('discord.js')
const {MessageEmbed} = require("discord.js")



module.exports = {
    name:"rember",
    alias: [],
    execute(client,message,args){

        const msgembed =  new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Rember 🌻')
        .setDescription('pls rember that wen u feel scare or frigten'+ "\n"+
            'never forget ttimes wen u feeled happy' + "\n" +
            'wen day is dark alway rember happy day')
        .setImage("https://cdn.discordapp.com/avatars/733843873352384624/4e7fbff5e5e4e16e5ef30324f1cef4ac.webp?size=1024")
        .setTimestamp()
        .setFooter(`Enviado para ${message.author.tag}`)

        message.channel.send({embeds: [msgembed]})

        //message.reply(`💥 Que pingeai flaco ${client.ws.ping}ms`)
    }
}