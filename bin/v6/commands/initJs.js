import { locateSource } from "./initJs/steps/locateSource.js";
import { locateDestination } from "./initJs/steps/locateDestination.js";

import { createProject } from "./initJs/steps/createProject.js";
import { announce } from "./initJs/steps/announce.js";

import resolveFolderName from "./initJs/steps/resolveFolderName.js";
import checks from "./initJs/steps/checks.js";

export default ({ folderName = "", toPath = process.cwd(), inAnnounce = true }) => {
    const fromChecks = checks({ toPath, inAnnounce });

    if (fromChecks) return false;

    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createProject({ source, destination });

    if (inAnnounce) announce({ inResolvedFolderName: resolvedFolderName });
};