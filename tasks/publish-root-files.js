const gulp = require('gulp');

const rootSources = ['./src/*.html'];

let publishRootFiles = (destinationDir) => {
    gulp.src(rootSources).pipe(gulp.dest(destinationDir))
};

module.exports = publishRootFiles;