# NodeExp (Node.js Regular Expressions)

A simple command line tool for replacing text in files using regular expressions. 

## Requirements
- Node.js 
- yarn

## Installation
`npx @rsxlv/nodeexp`
`npm install @rsxlv/nodeexp`
`yarn add @rsxlv/nodeexp`

## Usage
The tool can be run by executing the following command in the terminal:
`./npx <regexp> <replace> <files...>`

where `<regexp>` is the regular expression pattern to match, `<replace>` is the text to replace the matches with, and `<files...>` is a list of file paths to process.

## Examples
`npx @rsxlv/nodeexp "world" "universe" file1.txt file2.txt`

This command will replace all occurrences of "world" with "universe" in the files `file1.txt` and `file2.txt`.

## As a library
To import the replaceInFiles function from this project, you can use the following syntax:
```js
import { replaceInFiles } from "@rsxlv/nodeexp/dist";

replaceInFiles(regexp, newString, files);
```