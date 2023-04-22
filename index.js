const Discord = require("discord.js")
const intents= new Discord.Intents();
const client = new Discord.Client({intents: 131071})

//const {MessageEmbed} = require("discord.js")
//Nuevo cod porque lol
const fetch = require ('node-fetch2');





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

//fetch para mantener viva la peticion
setInterval(async ()=> {
    
    await fetch('https://yooka-discord.glitch.me').then(console.log('Bip'))
    
  }, 240000)



client.login(process.env.TOKEN);


var cont=0;

setInterval(() => {
    var d = new Date().toLocaleString('en-US', {timeZone: 'America/Guayaquil'});
    cont=cont+1;
    const canal = client.channels.cache.get(`1097118619806212207`); // Cambia "ID del canal" por el ID del canal donde quieres enviar el mensaje
    canal.send('Poi '+cont+" veces || "+ d); // Cambia "Mensaje automático cada 4 minutos" por el mensaje que quieres enviar
}, 240000);

setInterval(async ()=> {
    
    await fetch('https://seen-acoustic-satellite.glitch.me').then(console.log('Bopin'))
    
  }, 42840000)