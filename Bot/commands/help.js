module.exports = {
	name: "help",
	description: "Help command",
  execute (message, client) {
		let { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")
    let embed = new MessageEmbed()
		.setAuthor(client.user.tag, client.user.avatarURL())
    .setColor("RANDOM")
    .setImage('') 
    .setTimestamp()
    .setDescription(`**🌍 | Public Commands**\n\`server,bot,youtube-search,ping,uptime,user,user-avatar\`\n**🛠️ | Moderation Commands**\n\`lock,find,unlock, hide,show\`\n**🛡️ | Protection Commands**\n\`antibots,antihacks,antilinks,limit-bans,limit-kicks,limit-ch-create,limit-ch-delete,limit-ro-create,limit-ro-delete,control-user,whitelist,control-users,whitelists,config,bots\``)

		let row = new MessageActionRow()
		.addComponents(
			new MessageButton()
			.setStyle("LINK")
      .setLabel("Add Bot")
      .setEmoji("") 
			.setURL("")
		)
		.addComponents(
			new MessageButton()
		  .setStyle("LINK")
      .setLabel("Support")
      .setEmoji("") 
			.setURL("")		
	
		)

		.addComponents(
	    new MessageButton()
		  .setStyle("DANGER")
			.setEmoji("")
      .setLabel("Report Problem")
			.setCustomId("report")		
			)
		.addComponents(
			new MessageButton()
		  .setStyle("LINK")
      .setLabel("Vote Top.gg")
      .setEmoji("") 
			.setURL("")
		)
		
		message.reply({embeds: [embed], components: [row], ephemeral: true})
 
	},
}
