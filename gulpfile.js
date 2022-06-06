// Html Task
const { src,dest,series,parallel,watch } = require('gulp');
const globs={
    html:"About/About.html",
    js:"./About/*.js",
    css:"./About/*.css",
    images:"./Images/*"
}
const htmlmin = require('gulp-htmlmin');
function htmlTask(){
    // read html files by src node stream
    return src(globs.html)
    // minify html
    .pipe(htmlmin({collapseWhitespace:true,removeComments:true}))
    // create new directory and copy the new minified file in it
    .pipe(dest("dist"))
}
exports.html=htmlTask

var concat = require('gulp-concat');

// JS Task
var jsMin=require('gulp-terser');
function jsTask(){
    return src(globs.js)
    .pipe(concat("allScript.js"))
    .pipe(jsMin()).pipe(dest("dist/assets"))
}
exports.js=jsTask

// CSS Task
const cssMin=require('gulp-clean-css')
function cssTask(){
    return src(globs.css)
    .pipe(concat("allStyle.css"))
    .pipe(cssMin()).pipe(dest("dist/assets"))
}
exports.css=cssTask

// Image Task
const imgMin=require("gulp-imagemin")
function imageTask(){
    return src(globs.images)
    .pipe(imgMin()).pipe(dest("dist/images"))
}
exports.img=imageTask

exports.default=series(parallel(htmlTask,jsTask,cssTask,imageTask) , watchTask)

function watchTask(){
    watch(globs.html,htmlTask)
    watch(globs.js,jsTask)
    watch(globs.css,cssTask)
    watch(globs.images,imageTask)
}