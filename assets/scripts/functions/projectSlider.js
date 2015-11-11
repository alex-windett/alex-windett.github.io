function projectSlider(){
    var projectItem 	= $('.block--grid li'),
        projectDetails	= $('article'),
        projectLogo		= $('.project--logo'),
        projectPreview	= $('.project--preview');

	projectItem.click(function(){

        projectItem.each(function() {
            $(this).css('left', '0')
        });

		if ( $(this).hasClass('active') ) {
    			$(this).removeClass('active').find(projectLogo).show();
            $(this).css('left', '0')

            $(this).find(projectDetails).hide();
            $(this).find(projectPreview).hide();

            $(this).find(projectLogo).show();

		} else {

            $(this).addClass('active');
            $(this).siblings().removeClass('active').find(projectPreview).hide();
            $(this).siblings().find(projectDetails).hide();
            $(this).siblings().find(projectLogo).show();

            function changeState() {
                $(this).find(projectLogo).hide();
                $(this).find(projectPreview).show();
                $(this).find(projectDetails).show();
            }

			var elementPositon  = $(this).position(),
				elementIndex	= $(this).index(),
                left            = $(this).position().left,
                itemWidth       = projectItem.width();

            if ( elementIndex == 0 || elementIndex % 3 === 0 ) {

                $(this).animate({
                    left: 0
                }, 'fast', function(){
                    changeState()
                });

            }  else if ( elementIndex == 1 || elementIndex % 4 === 0 ) {

                $(this).animate({
                    left: -Math.abs(left)
                }, 'fast', function(){
                    changeState()
                });
                $(this).prev().animate({
                    left: itemWidth + 13
                }, 'fast' );

            } else if ( elementIndex == 2 || elementIndex % 5 === 0 ) {

                $(this).animate({
                    left: -Math.abs(left)
                }, 'fast', function(){
                    changeState()
                });

                var siblingToMove = elementIndex - 1;

                $(".block--grid li:nth-child(" + siblingToMove + ")").animate({
                    left: left
                }, 'fast');

            } else {
                return
            }
      	}
    });
}
