const gulp = require('gulp');

const jsSources = './src/assets/script/**/*.js';

let publishJs = (destinationDir) => {
    gulp.src(jsSources).pipe(gulp.dest(destinationDir +'assets/script'))
};

module.exports = publishJs;
