const { CommandoClient } = require("discord.js-commando");
const path = require("path");

const client = new CommandoClient({
    commandPrefix: "-",
    owner: "410082684677783562",
    invite: "https://discord.gg/NPGaGJzZ"
});

client.registry
    .registerDefaultTypes()
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerGroup("music", "Music")
    .registerCommandsIn(path.join(__dirname, "commands"));

client.once("ready", () => {
    console.log(`bot operationnel chacal en tant que ${client.user.tag} - (${client.user.id})`);
})

client.on("error", (error) => console.error(error));

client.login("OTcwMjkzNDk1ODU0MTcwMTgy.Ym52PA.kMsRyJqM7FfrA6wyGTfzOvDRjNc");

