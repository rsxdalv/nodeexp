/// <reference types="node" />
import * as chalk from "chalk";
import * as program from "commander";
import { readFile, writeFile } from "fs";

program
    .version("v1.0.0")
    .arguments("<regexp> <replace> <files...>")
    .action((regexp, newString, files) => {
        files.forEach(file =>
            readFile(file, "UTF-8", (err, data) =>
                writeFile(file,
                    data.replace(
                        new RegExp(regexp, "gim")
                        , newString),
                    (writeErr, writeData) => {
                        if (writeErr) {
                            console.error(writeErr);
                        } else {
                            console.log(writeData);
                        }
                    }),
            ),
        );
    })
    .parse(process.argv);

const stringDD = "asdds";

stringDD.replace(new RegExp("", "gim"), "adc");
