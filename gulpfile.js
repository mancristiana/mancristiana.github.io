const browserSync = require("browser-sync");
const gulp = require("gulp");
const { watch, parallel } = gulp;
const gulpSass = require("gulp-sass");
gulpSass.compiler = require("sass");

function startBrowserSync() {
    browserSync({
        server: {
            baseDir: "src",
        },
    });
}

function transpileScss() {
    return gulp
        .src("src/scss/**/*.scss")
        .pipe(gulpSass().on("error", gulpSass.logError))
        .pipe(gulp.dest("src/css"))
        .pipe(
            browserSync.reload({
                stream: true,
            })
        );
}

function watchAll() {
    watch("src/**/*.scss", transpileScss);
    watch("src/*.html", browserSync.reload);
    watch("src/js/**/*.js", browserSync.reload);
}

exports.default = parallel(startBrowserSync, watchAll);
