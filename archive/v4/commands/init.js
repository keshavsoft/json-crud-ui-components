import { locateSource } from "./init/steps/locateSource.js";
import { locateDestination } from "./init/steps/locateDestination.js";

import { createProject } from "./init/steps/createProject.js";
import { announce } from "./init/steps/announce.js";

import resolveFolderName from "./init/steps/resolveFolderName.js";
import checks from "./init/steps/checks.js";

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