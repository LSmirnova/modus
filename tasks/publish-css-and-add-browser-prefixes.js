const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const cssnext = require('cssnext');
const cssnano = require('cssnano');
const sass = require('gulp-sass');


const stylesheetsSources = './src/assets/stylesheets/style.sass';
const sassOptions = {
    errLogToConsole: true,
    outputStyle: 'expanded'
};

let publishCssAndAddBrowserPrefixes = (destinationDir) => {
    let processors = [
        autoprefixer({
            remove: false
        }),
        cssnext,
        cssnano({
            discardUnused: {
                fontFace: false
            }
        }),
    ];

    return gulp.src(stylesheetsSources)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(destinationDir + '/assets/css'))
};

module.exports = {
    publishCssAndAddBrowserPrefixes,
    stylesheetsSources,
};