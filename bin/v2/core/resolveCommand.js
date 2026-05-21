import init from "../commands/init.js";
import addListeners from "../commands/addListeners.js";
import htmlIdClick from "../commands/htmlIdClick.js";
import buildHeader from "../commands/buildHeader.js";

// resolveCommand.js
const map = {
    init,
    addListeners,
    htmlIdClick,
    buildHeader
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};