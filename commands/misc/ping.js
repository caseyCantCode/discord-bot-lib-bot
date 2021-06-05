module.exports = {
    config: {
        aliases: ["pong"]
    },
    run: async ctx => {
        await ctx.send('Pong!');
    }
};