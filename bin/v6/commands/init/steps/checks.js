import fs from "fs";
import path from "path";

const validate = ({ toPath, inFolderName }) => {
    const files = fs.readdirSync(path.join(toPath, inFolderName));

    if (files.length > 0) {
        console.log("Folder should be empty");
        return true;
    };

    return false;
};

export default validate;