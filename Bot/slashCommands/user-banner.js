const Discord = require("discord.js")
module.exports = {
  name: "user-banner",
  disabled: true,
  options: [{
		name: "user",
    type: "USER",
		required: false,
		description: "User you want to get his banner"
	}],
	description: "Get [server/user] banner",
	execute (interaction, client) {
		if (!interaction.options.get("user")){
      let user = interaction.user
      let embed = new Discord.MessageEmbed()
	    .setTitle("Banner Link")
      .setURL(user.bannerURL({format: "png", size: 2048, dynamic: true}))
      .setImage(user.bannerURL({format: "png", size: 2048, dynamic: true}))
	  	interaction.reply({embeds: [embed]})
		} else {
			let user = interaction.options.get("user").user
      let embed = new Discord.MessageEmbed()
	    .setTitle("Banner Link")
      .setURL(user.bannerURL({format: "png", size: 2048, dynamic: true}))
      .setImage(user.bannerURL({format: "png", size: 2048, dynamic: true}))
	  	interaction.reply({embeds: [embed]})
		}
	}
}