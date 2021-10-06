module.exports = {
    config: {
        aliases: ["owo"],
        cooldown: 1,
        onCooldown: async ctx => {
            await ctx.send('Calm down, weeb!');
        }
    },
    run: async ctx => {
        await ctx.send('Null is a weeb!');
    }
};
