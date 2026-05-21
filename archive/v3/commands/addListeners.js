import { locateSource } from "./addListeners/steps/locateSource.js";
import { locateDestination } from "./addListeners/steps/locateDestination.js";

import { createProject } from "./addListeners/steps/createProject.js";
import { announce } from "./addListeners/steps/announce.js";

import resolveFolderName from "./addListeners/steps/resolveFolderName.js";

export default ({ folderName = "", toPath = process.cwd(), inAnnounce = true }) => {
    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createProject({ source, destination });

    if (inAnnounce) announce({ inResolvedFolderName: resolvedFolderName });
};