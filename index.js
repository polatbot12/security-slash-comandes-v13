process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});
process.on("unhandledRejection", error => {
  return;
});
const Discord = require("discord.js");
const Intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents: Intents})
const { Collection, Permissions, MessageEmbed } = require("discord.js")
const slashCommands = new Collection()
const commands = new Collection()
module.exports = {
  slashCommands: slashCommands,
  client: client,
  commands: commands
}
const tempDatabase = {};
//----- Run Functions -----//
require("./Functions/server.js")(client)
require("./Functions/slashCommandsLoader.js").run(client)
require("./Functions/commandsLoader.js").run(client)
require("./Functions/eventsLoader.js").run(client, tempDatabase)
//----- Premium Area -----//

client.on("messageCreate", message => {
  if (message.content.startsWith("+leave")) {
    if (message.author.id !== "") return message.reply("****")
    const guild = client.guilds.cache.get(message.content.split(" ")[1])
    if (!guild) return message.reply("****")
    message.reply(`****`)
    guild.leave()
  }
})

const owners = ["", "", ""]

client.on("messageCreate", message => {
  if (message.content.startsWith("+servers")) {
    if (!owners.includes(message.author.id)) return message.reply("****")
    const guilds = client.guilds.cache.map(g => `${g.name}`).join("\n")
    const { Util } = require("discord.js")
    const [first, ...rest] = Util.splitMessage(guilds, { maxLength: 2000 })
    if (!rest.length) return message.reply(first)
    else {
      for (const text of rest) {
        message.reply(text)
      }
    }
  }
})

const Topgg = require("@top-gg/sdk")
const app = require("express")()
const webhook = new Topgg.Webhook("qxOfpiVeJB9aWCyqMqBdLRpUfTIXk3SfSr5uK")

app.post("/dblwebhook", webhook.listener(vote => {
   let user = client.users.cache.get(vote.user)
   console.log(vote)
})) 

		

const prefix = '+' 
const translaater = require('@iamtraction/google-translate');
client.on('messageCreate', async message => {
        if (!message.guild || message.author.bot) return;
        let args = message.content.split(' ');
        if (message.content.startsWith(prefix + 'translate')) {
try {
                if (!args[1] || !args[2] || !args.slice(3)) return message.reply({ content: `${prefix}translate en ar hello` })
                translaater(args.slice(3).join(' '), { from: `${args[1]}`, to: `${args[2]}` }).then(async r => {
                        var embed = new MessageEmbed()
                                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
                                .setDescription(`${r.text}`)
                                .setColor('BLUE')
                                .setFooter(`${args[1]} ➔ ${args[2]}`, client.user.displayAvatarURL({ dynamic: true, format: 'png' }));
                        message.reply({ embeds: [embed] });
                })
        } catch (error) {
        message.reply({ embeds:[new MessageEmbed().setDescription(String(error)) ] })
        }
        }
})



client.on("messageCreate", message => {
  if (message.content == "+test-help-2") {
    if (message.author.id !== "") return;
    let { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js")
    let embed = new MessageEmbed()
      .setDescription(`**[Invite](https://discord.com/oauth2/authorize?client_id=806779133023223860&permissions=8&scope=bot%20applications.commands) | [Vote]() | [Support]()\nSecurityBot is the special protection bot .. bot includes alot of commands you can explore them in this menu , Enjoy !!**`)
      .setImage("")
      .setColor("RED")

    let row = new MessageActionRow()

      .addComponents(
        new MessageSelectMenu()
          .setCustomId('help-selects')
          .setPlaceholder('Select Category')
          .addOptions([
            {
              label: 'Public Commands',
              description: 'Display public commands.',
              value: 'public',
              emoji: ""
            },
            {
              label: 'Close Menu',
              description: 'Delete help menu.',
              value: 'cancel',
              emoji: ""
            },
          ]),
      )
    message.reply({ embeds: [embed], components: [row] })
    client.on("interactionCreate", interaction => {

      if (interaction.customId == "help-selects") {

        if (interaction.user.id !== message.author.id) return;

        if (interaction.values[0] === "cancel") interaction.message.delete()

        if (interaction.values[0] === "public") interaction.message.edit({ content: "0", embeds: [] })
      }

    })
  }
})

client.login("p")
