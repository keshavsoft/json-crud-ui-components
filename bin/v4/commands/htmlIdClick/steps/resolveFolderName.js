import fs from "fs";

export default function resolveFolderName({ name, inDefaultFolderName = "<htmlId>" }) {
    if (name === null) {
        name = inDefaultFolderName;
    };

    // case 2: user provided → strict
    if (fs.existsSync(name)) {
        throw new Error(`Folder already exists: ${name}`);
    };

    return name;
};