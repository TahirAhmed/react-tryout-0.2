var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = require('browser-sync').reload;
var concat = require('gulp-concat');
var watchify = require('watchify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var assign = require('lodash.assign');
var browserify = require('browserify');
var gutil = require('gulp-util');

gulp.task('dev:html', function() {
	return gulp.src('./app/src/*.html').pipe(gulp.dest('./app/dist')).pipe(reload({stream: true}));
});

gulp.task('dev:css', function() {
	return gulp.src('./app/src/css/*.css').pipe(concat('app.css')).pipe(gulp.dest('./app/dist/css')).pipe(reload({stream: true}));
});

gulp.task('dev:js', function() {

	var customOpts = { entries: ['./app/src/js/main.js'], debug: true };
	var opts = assign({}, watchify.args, customOpts);
	var b = watchify(browserify(opts));

	b.transform([reactify]);

	b.on('update', bundle);
	b.on('log', gutil.log);

	function bundle() {
		return b.bundle()
		.on('error', function(err) {
			delete err.stream;
			console.log(err);
		})
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(gulp.dest('./app/dist/js'))
		.pipe(browserSync.stream());
	}

	bundle();
});

gulp.task('browserSync', function() {
	browserSync({
		open: false,
		port: 3031,
		minify: false,
		server: {
			baseDir: './app/dist'
		}
	});

	gulp.watch(['./app/src/css/*.css'], ['dev:css']);
	gulp.watch(['./app/src/*.html'], ['dev:html']);
});

gulp.task('default', ['browserSync','dev:js','dev:html','dev:css']);