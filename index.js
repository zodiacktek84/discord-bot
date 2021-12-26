const Discord = require("discord.js");
const Bot = new Discord.Client({
    // intents: [ 
    //     Discord.Intents.FLAGS.GUILDS,
    //     Discord.Intents.FLAGS.GUILD_MEMBERS,
    //     Discord.Intents.FLAGS.GUILD_MESSAGES
    // ]
});

const prefix = "!";

Bot.on("ready", () => {
    console.log("Le bot marche");
});

Bot.on("guildMemberAdd", member => {
    console.log("Un membre est arrivé.");
    member.roles.add("923752022493265951");
});

Bot.on("guildMemberRemove", member => {
    console.log("Un membre à quitté le serveur.");
});


Bot.on("messageCreate", (message) => {
        if(message.content == prefix + "pret") {

            var embedpret = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Votre commande est prête !")
                .setAuthor("Secrétaire du Platinium VIP", "")
                .setDescription("Je reviens vers toi car votre véhicule commander est prêt ! Vous pouvez vous rendre au Platinium VIP l'orsque nous somme ouvert pour venir récupéré votre véhicule !")

            message.channel.send({embeds: [embedpret]});
        }

        if(message.content == prefix + "ouvert") {

            var embedopen = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Nous somme ouvert !")
                .setAuthor("Secrétaire du Platinium VIP", "")
                .setDescription("L'entreprise platinium VIP est ouverte n'hésitez pas à passer à l'entreprise !")

            message.channel.send({embeds: [embedopen]});
        }

        if(message.content == prefix + "fermer") {
            if(message.member.roles.cache.has("923754058416803930")){
                var embedclose = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setTitle("Nous somme fermer !")
                .setAuthor("Secrétaire du Platinium VIP", "")
                .setDescription("L'entreprise platinium VIP est fermer a la prochaine !")

            message.channel.send({embeds: [embedclose]});
            } else {
                message.reply("Tu n'a pas le rôle adéquat pour effectuer cette action !")
            }
        }

});

Bot.login(process.env.TOKEN);
