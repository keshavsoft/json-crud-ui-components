import { locateSource } from "./htmlIdClick/steps/locateSource.js";
import { locateDestination } from "./htmlIdClick/steps/locateDestination.js";

import { createProject } from "./htmlIdClick/steps/createProject.js";
import { announce } from "./htmlIdClick/steps/announce.js";

import resolveFolderName from "./htmlIdClick/steps/resolveFolderName.js";
import checks from "./addListeners/steps/checks.js";

const defaultFolderName = "htmlId";
const fileNameToCheck = "hookAllListeners.js";

export default ({ folderName = "", toPath = process.cwd(), inAnnounce = true }) => {
    const fromChecks = checks({
        toPath, inAnnounce,
        inDefaultFolderName: defaultFolderName,
        inFileNameToCheck: fileNameToCheck
    });

    if (fromChecks) return false;

    const resolvedFolderName = resolveFolderName({
        name: folderName, inDefaultFolderName: defaultFolderName
    });

    const source = locateSource();
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createProject({ source, destination });

    if (inAnnounce) announce({ inResolvedFolderName: resolvedFolderName });
};