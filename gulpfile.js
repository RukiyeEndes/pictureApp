const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const minifyJS = require('gulp-uglify');
const minifyCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

// sass dosyalarını sıkıstırıp css olarak kaydet
gulp.task('sass',()=>{
    return gulp.src('./src/sass/**/*.scss')
    .pipe(sass())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./src/css/'))
})

// css dosyalarını sıkıstırıp diste kaydet
gulp.task('css',()=>{
    return gulp.src('./src/css/**/*.css')
    .pipe(gulp.dest('./dist/css/'))
})

// js dosyalarını sıkıstırıp diste kaydet
gulp.task('js',()=>{
    return gulp.src('./src/js/**/*.js')
    .pipe(gulp.dest('./dist/js/'))
})

// html dosyalarını minify etmeden diste kaydet
gulp.task('html',()=>{
    return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./dist/'))
})

// resimleri minimize et
gulp.task('image',()=>{
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images/'))
})

// bütün taskleri otomatık calıstır
gulp.task('watch',()=>{
    gulp.watch('src/**/*.html',gulp.series('html'))
    gulp.watch('src/js/**/*.js', gulp.series('js'))
    gulp.watch('src/css/**/*.css', gulp.series('css'))
    gulp.watch('src/sass/**/*.scss', gulp.series('sass'))
    gulp.watch('src/images/**/*', gulp.series('image'))
})