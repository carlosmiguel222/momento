const gulp = require('gulp');
const del = require('del');

const { paths, baseDir, version } = require('./utils.js');

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Clean
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('clean', () =>
  del.deleteAsync([
    `${baseDir}/${paths.style.dest}/**/*.*`,
    `${baseDir}/${paths.script.dest}/**/*.*`,
    `${baseDir}/**/*.html`,
  ])
);

gulp.task('clean:build', () => del.deleteAsync(paths.dir.prod));
gulp.task('clean:live', () => del.deleteAsync(`live/${version}`));
