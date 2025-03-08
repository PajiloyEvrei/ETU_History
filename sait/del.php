<?php 
  $Del = $_POST ['del_photo'];

  $mysql = new mysqli('localhost', 'root', 'root', 'register');

  $mysql->query("DELETE FROM `photo` WHERE `id` = '$Del'"); 

  header('Location: /Akk-red.php');
  ?>
