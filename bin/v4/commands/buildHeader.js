import { locateSource } from "./buildHeader/steps/locateSource.js";
import { locateDestination } from "./buildHeader/steps/locateDestination.js";

import { createProject } from "./buildHeader/steps/createProject.js";
import { announce } from "./buildHeader/steps/announce.js";

import resolveFolderName from "./buildHeader/steps/resolveFolderName.js";

export default ({ folderName = "", toPath = process.cwd(), inAnnounce = true }) => {
    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createProject({ source, destination });

    if (inAnnounce) announce({ inResolvedFolderName: resolvedFolderName });
};