import path from "path";
import fs from "fs";

const validate = ({ toPath, inDefaultFolderName, inFileNameToCheck }) => {
    const fileNameToCheck = inFileNameToCheck;

    const htmlPath = path.join(toPath, fileNameToCheck);
    const indexPath = path.join(toPath, inDefaultFolderName);

    if (!fs.existsSync(htmlPath)) {
        console.log(`${fileNameToCheck} not found`);

        return true;
    };

    if (fs.existsSync(indexPath)) {
        console.log(`${folderNameToCheck} folder found`);

        return true;
    };

    return false;
};

export default validate;