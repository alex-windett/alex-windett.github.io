$(document).ready(function(){

	$('.projects article').hide();

    $('.item-wrap').mouseenter(function(){
    	$(this).children('article').show();
    }).mouseleave(function(){
    	$(this).children('article').hide();
    })


    // $('.nav__main--trigger').click(function(event){
    // 	event.preventDefault();
    // 	$('.nav__main').animate({width:'toggle'},350).toggleClass('triggered');;
    // 	$(this).toggleClass('triggered');
    // });
});