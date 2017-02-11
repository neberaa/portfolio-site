'use strict';

module.exports = function () {
	$.gulp.task('spritesmith', function () {
  		var spriteData = $.gulp.src('./source/images/sprite/*.png').pipe($.gp.spritesmith({
    	imgName: 'sprite.png',
    	cssName: 'sprite.scss',
    	algorithm: 'binary-tree',
    	padding: 10
  	}));
  		var imgStream = spriteData.img 
    		.pipe($.gulp.dest($.config.root + '/assets/img'));
  		var cssStream = spriteData.css
    		.pipe($.gulp.dest('./source/style/common'));
  return $.merge(imgStream, cssStream);
});
};