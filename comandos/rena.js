const Discord=require('discord.js')
const {MessageEmbed} = require("discord.js")
const fs = require('fs');





module.exports = {
    name:"rena",
    alias: [],
    execute(client,message,args){
        
        var rena = fs.readFileSync('./comandos/media/rena.txt').toString().split("\n");
        var a= Math.floor(Math.random() * 19);  

        
        const msgembed =  new MessageEmbed()
        
        .setColor('GREEN')
        .setThumbnail('https://cdn.discordapp.com/attachments/989500632111153193/989500674544906310/thumnail_rena.jpg')
        .setTitle('Rena 🗡️')
        .setDescription('💞Omochikaeri!💞')
        .setImage(rena[a])
        .setTimestamp()
        .setFooter(`Enviado por ${message.author.tag}`)

        message.channel.send({embeds: [msgembed]})

        
    }
}