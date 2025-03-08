<?php
  $mysql = new mysqli('localhost', 'root', 'root', 'register');
  $user = filter_var(trim($_POST ['username']),FILTER_SANITIZE_STRING);
  $query = $mysql->query("SELECT * FROM `users` WHERE `name` = '$user'");
  if ($query != ''){
    $row = $query->fetch_assoc();
    setcookie('loginlogin', $row['name'], time() + 3600 * 24, "/");
    header('Location: Akk.php');
    }
  else {
    header('Location: /');
  }
?>
