const client = require(`discord-bot-lib`)
const fs = require(`fs`)
const bot = new client({
    token: "Your token here",
    prefix: "!!!"
})
const { blueBright, greenBright } = require(`chalk`)

const commands = fs.readdirSync(`./commands`)
for (const command of commands) {
    const currentFolder = fs.readdirSync(`./commands/${command}`);
    for (const folder of currentFolder) {
        const currentCommand = require(`./commands/${command}/${folder}`);
        console.log(blueBright(`[Command]: Loading command "${currentCommand.config.name}"`))
        bot.command({
            name: currentCommand.config.name,
            aliases: currentCommand.config.aliases,
            run: currentCommand.run
        })
    }
}

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(greenBright(`[Events]: Event "${file}" has loaded.`));
    const event = require(`./events/${file}`);
    bot.event(file.split(".")[0], event.bind(null, bot));
};

bot.run()