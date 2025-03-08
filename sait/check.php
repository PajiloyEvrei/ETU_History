<?php 
	$login = filter_var(trim($_POST ['login']),
	FILTER_SANITIZE_STRING);
	$name = filter_var(trim($_POST ['name']),
	FILTER_SANITIZE_STRING);
	$pass = filter_var(trim($_POST ['pass']),
	FILTER_SANITIZE_STRING);

	$mysql = new mysqli('localhost', 'root', 'root', 'register');

	if(mb_strlen($login) < 2 || mb_strlen($login) > 90) {
		echo "Недопустимая длина логина";
		exit();
	} else if(mb_strlen($name) < 3 || mb_strlen($name) > 50) {
		echo "Недопустимая длина имени";
		exit();
	} else if(mb_strlen($pass) < 2 || mb_strlen($pass) > 10) {
		echo "Недопустимая длина пароля";
		exit();
	}
	$page = '';

	$mysql->query("INSERT INTO `users` (`login`, `pass`, `name`,`Ppage`) VALUES( '$login', '$pass', '$name','$page')");

	$mysql->close();
	header('Location: /');
?>