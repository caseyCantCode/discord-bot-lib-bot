module.exports = {
    config: {
        name: "ping",
        aliases: ["pong"]
    },
    run: async ctx => {
        return await ctx.send(`Pong!`)
    }
}