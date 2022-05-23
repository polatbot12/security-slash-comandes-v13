const { MessageEmbed } = require("discord.js")
const ytsr = require("ytsr")
module.exports = {
	name: "youtube-search",
  options: [{
		name: "search",
		description: "Type anything you want to search on it",
		type: "STRING",
		required: true
	}],
	description: "Search about anything on YouTube",
  async execute (interaction, client) {
		interaction.reply("🔎 Searching ..")
		const query = interaction.options.getString("search")

		const res = await ytsr(query)

		if (!res) return interaction.editReply({content: `**❌ There isn't any results**`, ephemeral: true})
	
		const video = res.items.filter(i => i.type == "video")[0]

		if (!video) return interaction.editReply({content: `**❌ There isn't any results**`, ephemeral: true})
		
			let embed = new MessageEmbed()
	    .setTitle(video.title)
	  	.setColor("RED")
      .setURL(`${video.url}`)
		  .setImage(video.bestThumbnail.url)
	  	.addField(`Views`, `${video.views}`, true)
      .addField(`Duration`, `${video.duration}`, true) 
		  .setAuthor(video.author.name)

	  	try { await interaction.editReply({content: ` `,embeds: [embed]}) } catch(err) { console.log(err) }

	},
}