import { locateSource } from "./htmlIdClick/steps/locateSource.js";
import { locateDestination } from "./htmlIdClick/steps/locateDestination.js";

import { createProject } from "./htmlIdClick/steps/createProject.js";
import { announce } from "./htmlIdClick/steps/announce.js";

import resolveFolderName from "./htmlIdClick/steps/resolveFolderName.js";

export default ({ folderName = "", toPath = process.cwd(), inAnnounce = true }) => {
    const resolvedFolderName = resolveFolderName({
        name: folderName
    });

    const source = locateSource();
    const destination = locateDestination({ inResolvedFolderName: resolvedFolderName });

    createProject({ source, destination });

    if (inAnnounce) announce({ inResolvedFolderName: resolvedFolderName });
};