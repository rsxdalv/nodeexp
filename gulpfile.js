"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp = require("gulp");
const filter = require("gulp-filter");
const sourcemaps = require("gulp-sourcemaps");
const mocha = require("gulp-spawn-mocha");
const ts = require("gulp-typescript");
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

//# sourceMappingURL=gulpfile.js.map
