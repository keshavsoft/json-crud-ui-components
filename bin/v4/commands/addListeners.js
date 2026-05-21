import { locateSource } from "./addListeners/steps/locateSource.js";
import { locateDestination } from "./addListeners/steps/locateDestination.js";

import { createProject } from "./addListeners/steps/createProject.js";
import { announce } from "./addListeners/steps/announce.js";

import resolveFolderName from "./addListeners/steps/resolveFolderName.js";
import checks from "./addListeners/steps/checks.js";

const defaultFolderName = "AddListeners";
const fileNameToCheck = "runAfterDomLoad.js";

export default ({ folderName = "", toPath = process.cwd(), inAnnounce = true }) => {
    const fromChecks = checks({
        toPath, inAnnounce,
        inDefaultFolderName: defaultFolderName,
        inFileNameToCheck: fileNameToCheck
    });

    if (fromChecks) return false;

    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createProject({ source, destination });

    if (inAnnounce) announce({ inResolvedFolderName: resolvedFolderName });
};