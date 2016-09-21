//gallery trie 
////////////////////////////////

//https://www.grafikart.fr/tutoriels/jquery/fuzzy-search-314

//////////////////////////////////////
//varriable
var 
tableauTitreVal,//input value
span,//title of item
regexp,// regExp
result,// result of the match of the regex
//string,// string match regex to add hilighted
galleryContentItemLinkHref,
galleryContent = $( "#gallery__content" ),
galleryContentItem = $( "#gallery__content li" ),
galleryContentItemLink = $( "#gallery__content a" ),
galleryContentItemTitle = $( "#gallery__content span" ),
tableauFilter = $( "#tableauFilter" );


	tableauFilter
  .keyup(function() {
    tableauTitreVal = $( this ).val();
     if (tableauTitreVal == '') {
     	galleryContentItem.show();
     	//galleryContentItemTitle.removeClass('highlighted');
     	return true;

     }
       var regexp = '\\b(.*)';
       for(var i in tableauTitreVal){
       	regexp += '('+tableauTitreVal[i]+')(.*)'
       }
       regexp +='\\b';
      galleryContentItem.show();
     galleryContent.find('a>span').each(function() {
     	var span = $(this);

     	//console.log(span);
     	 var result = span.text().match(new RegExp(regexp,'i'));
     	 //console.log(result);
     	 if (result) {
     	 // 	var string = '';
     	 // 	for (var i in result) {
     	 // 		if (i > 0) {
     	 // 			if (i%2 == 0) {
     	 // 				string += '<span class="highlighted">'+ result[i] + '</span>'
     	 // 			}
     	 // 			else{
     	 // 				string += result[i];
     	 // 			}
     	 			
     	 // 		}
     	 // 	}//forend
     	 // span.empty().append(string);
     	 }//if end
     	 else{
     	 	span.parent().parent().hide();
     	 }

     });//eachend

  });//keyUpend


galleryContentItemLink.click(function(event) {
	event.preventDefault();
	galleryContentItemLinkHref =  $(this).attr('href');
	console.log(galleryContentItemLinkHref);
	
});
