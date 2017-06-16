/// <reference types="node" />
import * as fs from "fs";
import * as gulp from "gulp";
import * as filter from "gulp-filter";
import * as sourcemaps from "gulp-sourcemaps";
import * as mocha from "gulp-spawn-mocha";
import * as ts from "gulp-typescript";

const paths = [
    "src/**/*.ts",
    "gulpfile.ts",
];

const tsProject = ts.createProject("./tsconfig.json");

gulp.task("tsc", () => {
    const testFiles = filter("**/*.test.js");
    const stream = gulp.src(paths, { base: "./" })
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write("./", null))
        .pipe(gulp.dest("./"))
        .pipe(testFiles)
        .pipe(mocha({
            R: process.env.MOCHA_MIN ? "min" : null,
            require: "./utils/mocha.js",
        }, null));
    return stream;
});

gulp.task("watch", ["compile"], () => {
    gulp.watch(paths, ["tsc"]);
});

gulp.task("compile", ["tsc"]);

gulp.task("default", ["watch"]);
