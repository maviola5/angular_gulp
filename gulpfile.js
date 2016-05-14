/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

 // npm install --save-dev jshint gulp-jshint !!solves jshint dependency 

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del');

// Styles
gulp.task('css', function() {
  return sass('src/scss/app.scss', { style: 'expanded' })
    .pipe(autoprefixer({ 
      browsers: ['last 2 version'], 
      cascade: false })
    )
    .pipe(gulp.dest('dist/css'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'css task complete' }));
});

//Angular Partials
gulp.task('partials', function(){
  return gulp.src(['src/js/app/partials/*.html'])
    .pipe(gulp.dest('dist/js/app/partials'))
    .pipe(notify({ message : 'partials have been transported'}));
});

//Angular View
gulp.task('view', function(){
  return gulp.src('src/index.html')
    .pipe(gulp.dest('dist'))
    .pipe(notify({ message : 'the view has been updated!'}));
});

// Scripts
gulp.task('js', function() {
  return gulp.src(['src/js/app/app.js','src/js/app/controllers/*.js', 'src/js/app/directives/*.js',  'src/js/app/services/*.js'])
    // .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist/js/app'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js/app'))
    .pipe(notify({ message: 'js task complete' }));
});

// Images
gulp.task('img', function() {
  return gulp.src('src/img/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/img'))
    .pipe(notify({ message: 'img task complete' }));
});

//HTML
gulp.task('html',function(){
  return gulp.src('dist/templates')
    .pipe(notify({ message: 'template task complete'}));
});


// Clean
gulp.task('clean', function() {
  return del(['dist/css', 'dist/js', 'dist/img']);
});

// Default task
gulp.task('default', ['clean'], function() {
  gulp.start('css', 'js', 'img');
});

// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('src/scss/**/*.scss', ['css']);

  // Watch .js files
  gulp.watch('src/js/**/**/*.js', ['js']);

  //Watch partial .html files
  gulp.watch('src/js/app/partials/*.html', ['partials']);

  //Watch the view
  gulp.watch('src/index.html', ['view']);

  // Watch image files
  gulp.watch('src/img/**/*', ['img']);

  // Watch html templates
  gulp.watch('dist/templates/*.html');

  // Create LiveReload server
  livereload.listen(35729);

  // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', livereload.changed);

});