'use strict';

var gulp = require('gulp');

gulp.task('styles', function() {
	return gulp.src('src/styles/**')
		.pipe(gulp.dest('dist/styles'));
});

gulp.task('view', function() {
	return gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('build', ['styles', 'view']);
