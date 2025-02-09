/*
Will serve as the server. Gateway Intents allow the bot to receive data based on what the bot needs to function.

GatewayIntentBits Docs: https://discordjs.guide/popular-topics/intents.html#enabling-intents

*/

const { Client, GatewayIntentBits } = require('discord.js');

// Set a Client class to variable 'client'

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
