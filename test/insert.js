import getLatestVersion from "../bin/core/getLatestVersion.js";

const commandToSend = "Insert";

const load = async (cmd) => {
    const v = getLatestVersion();

    return (await import(`../bin/${v}/tasks/actions/EndPointsJs/index.js`)).default;
};

const startFunc = async () => {
    const func = await load("endPointsJs");

    func({
        action: commandToSend,
        toPath: process.cwd()
    });
};

startFunc().then();