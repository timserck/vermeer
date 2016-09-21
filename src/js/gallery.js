//gallery trie 
////////////////////////////////

//https://www.grafikart.fr/tutoriels/jquery/fuzzy-search-314

//////////////////////////////////////
//varriable
var 
tableauTitreVal,//input value
figcaption,//title of item
regexp,// regExp
result,// result of the match of the regex
//string,// string match regex to add hilighted
galleryContent = $( "#gallery__content" ),
galleryContentItem = $( "#gallery__content li" ),
galleryContentItemTitle = $( "#gallery__content figcaption" ),
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
     galleryContent.find('figure>figcaption').each(function() {
     	var figcaption = $(this);

     	//console.log(figcaption);
     	 var result = figcaption.text().match(new RegExp(regexp,'i'));
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
     	 // figcaption.empty().append(string);
     	 }//if end
     	 else{
     	 	figcaption.parent().parent().hide();
     	 }

     });//eachend

  });//keyUpend






