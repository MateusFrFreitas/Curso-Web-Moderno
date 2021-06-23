const gulp = require('gulp')

gulp.task('default', () => {	
	gulp.start('copiar', 'fim')
}) 

gulp.task('copiar', ['antes1', 'antes2'], () => {
	// gulp.src(['pastaA/*.txt'])
	gulp.src(['pastaA/**/*.txt']) // todas as pastas
		//.pipe(transformacao1())
		//.pipe(transformacao2())
		.pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
	console.log('Antes 1!!!')
})

gulp.task('antes2', () => {
	console.log('Antes 2!!!')
})

gulp.task('fim', ['fim1', 'fim2'])

gulp.task('fim1', () => {
	console.log('Fim 1!!!')
})

gulp.task('fim2', () => {
	console.log('Fim 2!!!')
})