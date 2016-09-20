// Smooth scroll inside the same page
$('a[href^="#"]').click(function(){
	var goToBottom = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(goToBottom).offset().top
	}, 750);

	return false;
});
