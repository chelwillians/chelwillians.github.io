'use strict';

//DEPENDENCIAS
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const pxtorem = require('gulp-pxtorem');
const rename = require("gulp-rename");
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');

//build
const buildSass = () => gulp.src('./src/sass/style.scss')
	.pipe(sourcemaps.init())
	.pipe(sass().on('error', sass.logError))
	.pipe(pxtorem())
	.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
	.pipe(rename({ basename: 'style.min' }))
	.pipe(autoprefixer())
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./dist/css'))

const buildJS = () => gulp.src('./src/js/**/*.js')
	.pipe(sourcemaps.init())
	.pipe(concat('main.js'))
	.pipe(uglify())
	.pipe(rename({ basename: 'main.min' }))
	.pipe(sourcemaps.write('.'))
	.pipe(gulp.dest('./dist/js'))

const watchSass = () => gulp.watch('./src/sass/**/*.scss', buildSass)
const watchJs = () => gulp.watch('./src/js/**/*.js', buildJS)
const watch = async () => {
	await watchJs();
	await watchSass();
}
// Comandos
gulp.task('sass', watchSass);
gulp.task('js', watchJs);
gulp.task('default', watch)