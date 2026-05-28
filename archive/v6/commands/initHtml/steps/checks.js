import path from "path";
import fs from "fs";

const validate = ({ toPath }) => {
    if (fs.existsSync(toPath)) {

        const files = fs.readdirSync(toPath);

        if (files.length > 0) {
            console.log("index folder should be empty");
            return true;
        };
    };

    return false;
};

export default validate;