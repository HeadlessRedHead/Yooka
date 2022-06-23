const Discord = require("discord.js")
const intents= new Discord.Intents();
const client = new Discord.Client({intents: 131071})

//const {MessageEmbed} = require("discord.js")


client.on("ready",()=>{
  console.log("Happi Dei!")  ;
})

const fs = require('fs')
let {readdirSync} = require("fs")
client.commands=new Discord.Collection();

const commandFiles = fs.readdirSync('./comandos').filter(file=>file.endsWith('.js'));

for(const file of commandFiles) {
    const command = require (`./comandos/${file}`);
    client.commands.set(command.name,command)
    console.log(`Comando creado: ${file}`)
}

client.on('messageCreate', async message=>{

    const prefix="%"

    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;

    let usuario = message.mentions.members.first()|| message.member;
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    //Maniobrador

    let cmd = client.commands.find((c)=> c.name=== command || c.alias && c.alias.includes(command));
    if(cmd){
        cmd.execute(client, message, args)
    }


});

client.login("Aqui va el token ese- ya no el otro")