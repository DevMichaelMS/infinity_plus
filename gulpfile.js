const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

async function comprimeImagens() { 
    const imagemin = (await import('gulp-imagemin')).default;
    const imageminMozjpeg = (await import('imagemin-mozjpeg')).default;
    const imageminPngquant = (await import('imagemin-pngquant')).default;
    return gulp.src([
        './src/images/**/*.jpg',
        './src/images/**/*.jpeg',
        './src/images/**/*.png',
        './src/images/**/*.gif',
        './src/images/**/*.svg',
        './src/images/**/*.webp',
        './src/images/**/*.avif',
        './src/images/**/*.ico'
    ])
        .pipe(imagemin([
            imageminMozjpeg({ quality: 70 }),
            imageminPngquant({ quality: [0.6, 0.8] })
        ]))
        .pipe(gulp.dest('./dist/images'));
}

function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ style: 'compressed' }))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = gulp.parallel(styles, comprimeImagens);

exports.watch = function () {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}