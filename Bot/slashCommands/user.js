const Discord = require("discord.js")
const moment = require("moment")
module.exports = {
	name: "user",
	type: "CHAT_INPUT",
  options: [{
		name: "user",
		description: "User you want to show information about him",
		type: "USER",
		required: false
	}],
  description: "Show information of user",
	execute (interaction, client) {
		if (interaction.options.get("user")) {
			const user = interaction.options.get("user").user
			user.member = interaction.guild.members.cache.get(user.id)
      let embed = new Discord.MessageEmbed()
      .setTitle("User Info")
			.setDescription(`> **ID:**\n${user.id}
> **Joined Discord:**\n${moment(user.createdTimestamp).format("DD/MM/YYYY hh:mm")}
${moment(user.createdTimestamp).fromNow()}
> **Joined Server:**\n${moment(user.member.joinedTimestamp).format("DD/MM/YYYY hh:mm")}
${moment(user.member.joinedTimestamp).fromNow()}`)
			.setColor("BLACK")
      .setThumbnail(`${user.avatarURL()}`)

			interaction.reply({embeds: [embed]})
    } else {
			const user = interaction.user
			user.member = interaction.guild.members.cache.get(user.id)
      let embed = new Discord.MessageEmbed()
      .setTitle("User Info")
			.setDescription(`> **ID:**\n${user.id}
> **Joined Discord:**\n${moment(user.createdTimestamp).format("DD/MM/YYYY hh:mm")}
${moment(user.createdTimestamp).fromNow()}
> **Joined Server:**\n${moment(user.member.joinedTimestamp).format("DD/MM/YYYY hh:mm")}
${moment(user.member.joinedTimestamp).fromNow()}`)
        
			.setColor("BLACK")
      .setThumbnail(`${user.avatarURL()}`)

			interaction.reply({embeds: [embed]})
		}
	}
}