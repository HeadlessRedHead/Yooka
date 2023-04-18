const Discord=require('discord.js')
const {MessageEmbed} = require("discord.js")
const fs = require('fs');
const fetch = require ('node-fetch2');

module.exports = {
    name:"anime",
    alias: ["ani"],
    async execute(client,message,args){
        var texto="";
        var nombre="";
        if (args==""){
            
        const msgembed =  new MessageEmbed()
        
        .setColor('GREEN')
        
        .setTitle('Anilist - Error')
        .setDescription("Envia un nombre po wn")
        .setTimestamp()
        .setFooter(`Enviado por ${message.author.tag}`)

        message.channel.send({embeds: [msgembed]})

            
        }else{
            query = args.join(' ');
            try {
                const response = await fetch ('https://graphql.anilist.co', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    query: `
                      query ($search: String) {
                        Media(search: $search, type: ANIME) {
                          id
                          title {
                            romaji
                            english
                            native
                          }
                          description
                          popularity
                          status
                          episodes
                          startDate {
                            year
                            month
                            day
                          }
                          endDate {
                            year
                            month
                            day
                          }
                          genres
                          coverImage {
                            extraLarge
                          }
                          averageScore
                        }
                      }
                    `,
                    variables: {
                      search: query
                    }
                  })
                });

                
                
                const data = await response.json();
                const media = data.data.Media;

                //console.log(media);
                

                const coverResponse = await fetch(media.coverImage.extraLarge);
                const coverBuffer = await coverResponse.buffer();

                const msgembed =  new MessageEmbed()
                  .setColor('GREEN')
                  .setThumbnail('https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/AniList_logo.svg/240px-AniList_logo.svg.png')
                  .setTitle((media.title.english || media.title.romaji || media.title.native)+"\t📺")
                  .setURL(`https://anilist.co/anime/${media.id}`)
                  
                  .setDescription(`Desde Anilist\n**Descripción:**\n\`\`\`${media.description.replace(/<[^>]*>/g, '')}\`\`\``)
                  .setImage('attachment://cover.jpg')
                  .addFields(
                    
                    { name: 'Fecha de inicio:', value: `${media.startDate.year}-${media.startDate.month}-${media.startDate.day}`||'Desconocido', inline:true },
                    { name: 'Fecha de fin:', value: `${media.endDate.year}-${media.endDate.month}-${media.endDate.day}`||'Desconocido',inline:true },
                    { name: 'Episodios:', value: `${media.episodes}`||'Desconocido', inline: true },
                    { name: 'Popularidad:', value: `${media.popularity}`||'Desconocido', inline: true },
                    { name: 'Estado:', value: media.status ||'Desconocido', inline: true },
                    { name: 'Género', value: media.genres.join(', ') ||'Desconocido', inline: true },
                    { name: 'Puntuación', value: `${media.averageScore}`+'%' ||'Desconocido', inline: true },
                    
                    
                  );
                            
                //message.channel.send({embeds: [msgembed]});
                message.channel.send({embeds: [msgembed],files: [{attachment:coverBuffer, name: 'cover.jpg'}] });
              } catch (error) {
                console.error(error);
                message.channel.send('An error occurred while searching for the anime.');
              }
        }

        
    }
}