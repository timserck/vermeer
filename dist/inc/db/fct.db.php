<?php
//
function nettoyage($value){
return trim(strip_tags($value));
}
function regex($subject, $pattern){
	preg_match($pattern, $subject);
}


function getTableaux($connexion){
$query = "SELECT * FROM tableaux" ;
$preparedStatement = $connexion->prepare($query);
$preparedStatement->execute();
return $result = $preparedStatement->fetchAll(PDO::FETCH_ASSOC);
}




