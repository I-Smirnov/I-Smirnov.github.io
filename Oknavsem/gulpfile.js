var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	rename 		= require('gulp-rename'),
	browserSync = require('browser-sync'),
	concat      = require('gulp-concat'),
    uglify      = require('gulp-uglifyjs'),
    del         = require('del'),
    autoprefixer = require('gulp-autoprefixer');


gulp.task('sass', function() {
    return gulp.src('app/sass/**/*.sass')
    .pipe(sass())
    // .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
    return gulp.src('app/js/**/*.js')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('code', function() {
    return gulp.src('app/*.html')
    .pipe(browserSync.reload({ stream: true }))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('watch', function() {
    gulp.watch('app/sass/**/*.sass', gulp.parallel('sass'));
    gulp.watch('app/*.html', gulp.parallel('code'));
    gulp.watch('app/js/**/*.js', gulp.parallel('scripts'));
});



gulp.task('clean', function() {
    return del.sync('dist');
});

gulp.task('prebuild', async function() {

    var buildCss = gulp.src('app/css/main.css')
    .pipe(gulp.dest('dist/css'))

    var buildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'))

    var buildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'))

    var buildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));

});

 gulp.task('default', gulp.parallel('sass', 'browser-sync', 'watch'));  

 gulp.task('build', gulp.parallel('prebuild', 'clean', 'sass', 'scripts')); 