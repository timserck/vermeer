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


