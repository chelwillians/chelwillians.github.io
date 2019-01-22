'use strict';

//DEPENDENCIAS
var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var wait = require('gulp-wait');

sass.compiler = require('node-sass');

//TAREFAS
gulp.task('sass', function () {
	return gulp.src('./resources/sass/style.scss')
		//Envia para publica
		.pipe(wait(500))
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'))

		//Comprime e envia para publica
		.pipe(sass().on('error', sass.logError))
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(rename({ extname: '.min.css' }))
		.pipe(gulp.dest('./css'));
});

gulp.task('js', function () {
	return gulp.src('./resources/js/**/*.js')
		//Junta tudo em um arquivo na pasta publica
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./js/'))

		//Junta tudo em um arquivo minificado na pasta publica
		.pipe(uglify())
		.pipe(rename({ basename: 'all.min' }))
		.pipe(gulp.dest('./js'));
});

//Módulo Watch 
gulp.task('sass:watch', function () {
	gulp.watch('./resources/sass/**/*.scss', gulp.series('sass'));
});

gulp.task('all:watch', function () {
	gulp.watch('./resources/sass/**/*.scss', gulp.series('sass'));
	gulp.watch('./resources/js/**/*.js', gulp.series('js'));
});