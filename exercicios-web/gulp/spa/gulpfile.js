const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/deps')
require('./gulpTasks/app')
require('./gulpTasks/servidor')

gulp.task('default', () => {
	if(util.env.production) {
		sequence('deps', 'app')
	} else {
		sequence('deps', 'app', 'servidor')
		// gulp.start('deps', 'app', 'servidor')
	}
})