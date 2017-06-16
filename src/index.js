"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
const fs_1 = require("fs");
program
    .version("v1.0.0")
    .arguments("<regexp> <replace> <files...>")
    .action((regexp, newString, files) => {
    files.forEach(file => fs_1.readFile(file, "UTF-8", (err, data) => fs_1.writeFile(file, data.replace(new RegExp(regexp, "gim"), newString), (writeErr, writeData) => {
        if (writeErr) {
            console.error(writeErr);
        }
        else {
            console.log(writeData);
        }
    })));
})
    .parse(process.argv);

//# sourceMappingURL=index.js.map
