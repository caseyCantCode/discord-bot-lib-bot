module.exports = (bot, msg) => {
    if (msg.author.bot)
		return false; // not respond to bots. returning false will not pass the message to the command handler.

};