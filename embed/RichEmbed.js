const Discord = require('discord.js');
const bot = new Discord.Client();
const cfg = require('../index.json');
const prefix = ("/");

bot.on('ready', function () {
    console.log("RichEmbed ready")
});
function couleur(){
    return  "#" + Math.floor(Math.random()*16777215).toString(16);
}

bot.on('message', function(msg){
        const args = msg.content.slice(prefix.length).split(' ');
        const command = args.shift().toLocaleLowerCase();
        if(command === "embed"){
            if(!args.length) return msg.reply("Oublie pas l'objet à mettre")

            var RichEmbed = new Discord.RichEmbed()
                .setTitle("La chaîne youtube :")
                .setAuthor("Demande bien reçu")
                .setDescription("La demande est : " + args.join(" "))
                .setColor(couleur())
                //.setImage('https://cdn.pixabay.com/photo/2016/06/18/17/42/image-1465348_960_720.jpg')
                .setThumbnail('https://yt3.ggpht.com/-izK19l8SYSQ/AAAAAAAAAAI/AAAAAAAAAVo/JQJ6p9FPYz4/s288-mo-c-c0xffffffff-rj-k-no/photo.jpg')
                .setURL('https://www.youtube.com/c/alexpgm')
                .setTimestamp()
                .setFooter("Si il change de nom :" + msg.author.tag ,msg.author.displayAvatarURL);
                msg.channel.send(RichEmbed);
                
        }

});



bot.login(cfg.token);