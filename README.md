# NodeExp (Node.js Regular Expressions)

A simple command line tool for replacing text in files using regular expressions. 

## Requirements
- Node.js 
- yarn

## Installation
1. Clone this repository to your local machine
2. Navigate to the root directory of the cloned repository
3. Run `yarn install` to install the necessary dependencies

## Usage
The tool can be run by executing the following command in the terminal:
`./replace-in-files <regexp> <replace> <files...>`

where `<regexp>` is the regular expression pattern to match, `<replace>` is the text to replace the matches with, and `<files...>` is a list of file paths to process.

## Examples
`./replace-in-files "world" "universe" file1.txt file2.txt`

This command will replace all occurrences of "world" with "universe" in the files `file1.txt` and `file2.txt`.
