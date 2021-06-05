module.exports = (bot, msg) => {
    if (msg.author.bot) return; // not respond to bots (recommended)

    await bot.parseMessage(msg); // passes it to the command handler
};