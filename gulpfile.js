let gulp = require('gulp')
let browserify = require('browserify')
let babel = require('gulp-babel')
let del = require('del')
let source = require('vinyl-source-stream')
let buffer = require('vinyl-buffer')
let liveserver = require('gulp-live-server')

gulp.task('clean', [], () => del('dist'))

gulp.task('build', () => {
    gulp.start('clean')
    gulp.start('build-js')
    gulp.start('build-html')
})

gulp.task('build-js', [], () => {
    return browserify({
        entries: './app/main.js'
    })
    .transform('babelify', {presets: ["es2015"]})
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist'))
})

gulp.task('build-html', [], () => {
    return gulp.src('./app/index.html')
        .pipe(gulp.dest('./dist'))
})


gulp.task('serve', [], () => liveserver.static('./dist').start())

gulp.task('watch', ['build'], () => {
    gulp.watch(['app/**/*.html'], ['build-html'])
    gulp.watch(['app/**/*.js'], ['build-js'])
})

gulp.task('dev', ['serve', 'watch'])

gulp.task('default', ['dev'])