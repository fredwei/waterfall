var gulp = require('gulp');
//- 删除文件
var clean = require('gulp-clean');

// 处理html等视图文件
var usemin = require('gulp-usemin');
// 压缩js
var uglify = require('gulp-uglify');
//- 压缩CSS为一行
var minifyCss = require('gulp-minify-css');
// 压缩html
var minifyHtml = require('gulp-minify-html');

//- 同步执行任务
var runSequence = require('run-sequence');


//删除掉上一次构建时创建的资源
gulp.task('clean',function () {
    return gulp.src(['dist'])
    .pipe(clean());
});

// 构建视图文件，同时处理相应的css及js
gulp.task('usemin', function(cb) {
    gulp.src('app/*.html')
    .pipe(usemin({
      css: [ minifyCss()],
      js: [ uglify({
        preserveComments: 'some'
      }) ],
      html: [ minifyHtml({ empty: true }) ],
      inlinejs: [ uglify() ],
      inlinecss: [ minifyCss(), 'concat' ]
    }))
    .pipe(gulp.dest('dist/'))
    .on('end', cb)
});



//构建总入口
gulp.task('default', function(callback) {
    runSequence(
        'clean',
        'usemin',
        callback
    );
});