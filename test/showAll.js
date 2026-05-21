import getLatestVersion from "../bin/core/getLatestVersion.js";

const commandToSend = "ShowAll";

const load = async (cmd) => {
    const v = getLatestVersion();

    // return (await import(`../bin/${v}/commands/exportCommands/${cmd}/index.js`)).default;
    // return (await import(`../bin/${v}/commands/loadCommand.js`)).default;
    // return (await import(`../bin/${v}/commands/exportCommands/${cmd}.js`)).default;

    return (await import(`../bin/${v}/tasks/actions/EndPointsJs/index.js`)).default;
};

const startFunc = async () => {
    const func = await load("endPointsJs");

    // console.log(typeof func);

    func({
        action: commandToSend,
        toPath: process.cwd()
    });
};

startFunc().then();