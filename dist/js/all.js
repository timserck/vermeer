//galery trie 

//varrable
var 
tableauTitreVal ,
tableauTitreInput = $( "#tableauTitre" );


var getTitreInput = function(){
	tableauTitreInput
  .keyup(function() {
    tableauTitreVal = $( this ).val();
      console.log(tableauTitreVal);
  });

}

var ShowImg = function(tableauTitreVal){

}


getTitreInput();



// Smooth scroll inside the same page
$('a[href^="#"]').click(function(){
	var goToBottom = $(this).attr("href");

	$('html, body').animate({
		scrollTop:$(goToBottom).offset().top
	}, 750);

	return false;
});
