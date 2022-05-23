const Database = require("st.db");
require("discord-reply")
const { Util } = require("discord.js")
const db1 = new Database("./Database/database.json")
module.exports = {
	name: "whitelists",
	description: "Show users of whitelist",
	execute (interaction, client) {
		if (!db1.get({key: `${interaction.guild.id}_CONTROLUSERS`})) {
			db1.set({
				key: `${interaction.guild.id}_CONTROLUSERS`,
				value: []
			})
		}
	 if (!db1.get({key: `${interaction.guild.id}_CONTROLUSERS`}).includes(interaction.user.id) && interaction.user.id !== interaction.guild.ownerId) return interaction.reply({content: '**❌ Only Ownership And Control Users Can Use This Command**', ephemeral: true})

		let array = db1.get({key: `${interaction.guild.id}_WHITELISTS`})
		if (!array) {
      db1.set({
				key: `${interaction.guild.id}_WHITELIST`,
				value: []
			})
		}
		let users = []

		for (let i = 0; i < array.length; i++) {
			const user = client.users.cache.get(array[i])
			if (!user) continue;
			users.push(`**${1 + i} )** ${user} ( ${user.username} )\n( ${user.id} )`)
			
		}
		const map = users.join("\n")
		const [first, ...rest] = Util.splitMessage(map, { maxlength: 2000 })
		interaction.reply({content: `**__[!] There Is __\`${users.length}\`__ In Whitelist__**\n-\n${first}`})
	},
}