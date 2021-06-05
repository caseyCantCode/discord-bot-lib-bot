const client = require('discord-bot-lib');
const { blueBright, greenBright } = require('chalk');
const { readdirSync } = require('fs');
const bot = new client({
    token: "Your token here",
    prefix: "!!!"
});

for (const command of readdirSync(`./commands`))
    for (const folder of readdirSync(`./commands/${command}`).filter(file => file.endsWith('.js'))) {
        const currentCommand = require(`./commands/${command}/${folder}`);
        console.log(blueBright(`[Command]: Loading command "${currentCommand.config.name}"`));
        bot.command({
            run: currentCommand.run,
            name: folder.slice(0, -3),
            ...currentCommand.config
        });
    }

for (const file of readdirSync('./events').filter(file => file.endsWith('.js'))) {
    console.log(greenBright(`[Events]: Event "${file}" has loaded.`));
    const func = require(`./events/${file}`);
    bot.event(file.split(".")[0], data => func(bot, data));
}

bot.run();