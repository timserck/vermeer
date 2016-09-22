<?php
$host = 'localhost';
$dbname = 'vermeer';
$user = 'root';
$password = '';

try{
 $dsn = "mysql:host=$host;dbname=$dbname;charset=utf8";
 $connexion = new PDO($dsn, $user, $password);
}catch(PDOException $e){
 echo $e->getMessage();
}

