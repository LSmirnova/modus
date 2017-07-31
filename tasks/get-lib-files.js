const gulp = require('gulp');


let GetLibFales = () => {
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/slick-carousel/slick/slick.min.js',
        './node_modules/css-reset-and-normalize-sass/css/reset-and-normalize.min.css',
        './node_modules/slick-carousel/slick/slick.sass',
        './node_modules/font-awesome/css/font-awesome.min.css'
    ])
        .pipe(gulp.dest('./src/assets/lib'));
};

module.exports = GetLibFales;