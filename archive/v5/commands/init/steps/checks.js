import path from "path";
import fs from "fs";

const validate = ({ toPath }) => {
    const htmlPath = path.join(toPath, "index.html");
    const indexPath = path.join(toPath, "index");

    if (!fs.existsSync(htmlPath)) {
        console.log("index.html not found");

        return true;
    };

    if (fs.existsSync(indexPath)) {
        console.log("index folder found");

        return true;
    };

    return false;
};

export default validate;