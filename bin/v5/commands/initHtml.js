import { locateSource } from "./initHtml/steps/locateSource.js";

import { createProject } from "./initHtml/steps/createProject.js";
import { announce } from "./initHtml/steps/announce.js";

import resolveFolderName from "./initHtml/steps/resolveFolderName.js";
import checks from "./initHtml/steps/checks.js";

export default ({ folderName = "", toPath = process.cwd(), inAnnounce = true }) => {
    const fromChecks = checks({ toPath, inAnnounce });

    if (fromChecks) return false;

    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = resolvedFolderName;

    createProject({ source, destination });

    if (inAnnounce) announce({ inResolvedFolderName: resolvedFolderName });
};