module.exports = {
    config: {
        aliases: ["commands"]
    },
    run: async ctx => {
        await ctx.send(ctx.bot.cmds.map(x => `${ctx.bot.opt.prefix}${x.name}`).join(', '));
    }
};