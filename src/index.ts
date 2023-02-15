#!/usr/bin/env node
/// <reference types="node" />
import * as chalk from "chalk";
import * as program from "commander";
import { readFile, writeFile } from "fs";

export function replaceInFiles(
  regexp: string | RegExp,
  newString: string,
  files: any[]
) {
  files.forEach((file: string) => {
    readFile(file, "UTF-8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      const result = data.replace(new RegExp(regexp, "gim"), newString);
      writeFile(file, result, (writeErr) => {
        if (writeErr) {
          console.error(writeErr);
          return;
        }
        console.log(chalk.green(`File "${file}" processed successfully`));
      });
    });
  });
}

program
  .version("v1.0.0")
  .arguments("<regexp> <replace> <files...>")
  .action(replaceInFiles)
  .parse(process.argv);
