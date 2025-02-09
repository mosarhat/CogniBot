/* 
The SlashCommandBuilder Docs: https://discord.js.org/docs/packages/builders/1.10.0/SlashCommandBuilder:Class.

SlashCommandBuilder creates JSON data for slash commands.

This is an example command from: https://discordjs.guide/creating-your-bot/slash-commands.html#individual-command-files.
*/

const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Replies with Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!');
	},
};