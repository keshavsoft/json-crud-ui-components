import getLatestVersion from "./bin/core/getLatestVersion.js";

const v = getLatestVersion();

export default (await import(`./bin/${v}/tasks/actions/EndPointsJs/index.js`)).default;