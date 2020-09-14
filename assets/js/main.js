$(window).on("load",function() {
	$(window).scroll(function() {
    	var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    	$(".fade").each(function() {
      		/* Check the location of the top each desired element */
      		var objectTop = $(this).offset().top;
      
     		 /* If the element is completely within bounds of the window, fade it in */
      		if (objectTop < windowBottom) { //object comes into view (scrolling down)
      			if ($(this).css("opacity")==0) {
      				$(this).fadeTo(1750,1);
      			}
      		} 
    	});
	}).scroll(); //invoke scroll-handler on page-load
});

$(document).ready(function() {

	//Set the albums to automatically scroll every 3 seconds
	setInterval(function(){
		const maxWidth = 3645; //Each album is 405 pixels wide, and there are 9 of them. If more albums are added, this needs to be adjusted
		let width = document.getElementsByClassName("music-wrap")[0].offsetWidth;
		let timesToScroll = (maxWidth - width)/405; //Make it dynamic, so if the page shrinks we can adjust
		let albumContainer = $(".music-container").scrollLeft();

		if (albumContainer < (405 * timesToScroll)) {
			$(".music-container").animate({
				scrollLeft: "+=405px"
			}, 300);
		}
		if(albumContainer >= ((405 * timesToScroll)-30)){
			$(".music-container").delay(400).animate({
				scrollLeft: 0
			}, 300);
		}
	}, 3000);
});