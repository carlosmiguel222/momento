const gulp = require("gulp"); // Keep CommonJS for gulp
const { deleteAsync } = require("del"); // Correct way to import deleteAsync
const { paths, baseDir, version } = require("./utils.js");

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Clean
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task("clean", () =>
  deleteAsync([
    `${baseDir}/${paths.style.dest}/**/*.*`,
    `${baseDir}/${paths.script.dest}/**/*.*`,
    `${baseDir}/**/*.html`,
  ])
);

gulp.task("clean:build", () => deleteAsync(paths.dir.prod));
gulp.task("clean:live", () => deleteAsync(`live/${version}`));
