$(document).ready(function(){

//it puts the lotion on the query

$('.box').each(function(){
	var color = this.dataset.color;
	$(this).append('<div class="color"></div>')
	$(this).children('.color').append(color);
	$(this).attr('title',color);
	$(this).css('background',color);
});

});