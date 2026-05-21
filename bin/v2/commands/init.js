import { locateSource } from "./init/steps/locateSource.js";
import { locateDestination } from "./init/steps/locateDestination.js";

import { createProject } from "./init/steps/createProject.js";
import { announce } from "./init/steps/announce.js";

import resolveFolderName from "./init/steps/resolveFolderName.js";

export default ({ folderName = "", toPath = process.cwd(), inAnnounce = true }) => {
    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createProject({ source, destination });

    if (inAnnounce) announce({ inResolvedFolderName: resolvedFolderName });

    console.log("aaaaaaaaa ", folderName, toPath, resolvedFolderName);
};