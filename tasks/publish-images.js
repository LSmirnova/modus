const gulp = require('gulp');

const imagesSources = './src/assets/img/**/*';

let publishImages = (destinationDir) => {
    gulp.src(imagesSources).pipe(gulp.dest(destinationDir +'assets/img'))
};

module.exports = publishImages;