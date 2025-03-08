<?php 
	setcookie('user', $user['name'], time() -3600 * 24, "/");
	setcookie('login', $user['login'], time() -3600 * 24, "/");
	setcookie('loginlogin', $user['login'], time() -3600 * 24, "/");
    header('Location: /');
?>