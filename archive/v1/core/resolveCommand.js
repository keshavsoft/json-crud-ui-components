import init from "../commands/init.js";
import addListeners from "../commands/addListeners.js";
import htmlIdClick from "../commands/htmlIdClick.js";

// resolveCommand.js
const map = {
    init,
    addListeners,
    htmlIdClick
};

export default function resolveCommand(cmd) {
    return map[cmd] || null;
};