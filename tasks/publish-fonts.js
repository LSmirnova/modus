const gulp = require('gulp');

const fontsSources = './src/assets/fonts/**/*';

let publishFonts = (destinationDir) => {
    gulp.src(fontsSources).pipe(gulp.dest(destinationDir +'assets/fonts'))
};

module.exports = publishFonts;