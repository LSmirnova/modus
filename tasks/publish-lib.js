const gulp = require('gulp');

const libSources = './src/assets/lib/**/*';

let publishLib = (destinationDir) => {
    gulp.src(libSources).pipe(gulp.dest(destinationDir +'assets/lib'))
};

module.exports = publishLib;
