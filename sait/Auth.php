<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width , initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Электронные Портфолио</title>
  <link rel="stylesheet" href="assets/stylesheets/main.css">
</head>
<body>

<?php
    if($_COOKIE['user'] == ''):
    setcookie('loginlogin', $user['login'], time() -3600 * 24, "/");
?>
      <header class="">
        <div class="block green">
          <h2 class="blockB green white"><img src="assets/images/moreman.png" >Вход не выполнен</h2>
          <h2 class="blockB green"><img src="assets/images/g.png" ><a href="index.php">Главная</a></h2>
          <h2 class="blockB green"><img src="assets/images/au.png" ><a href="Auth.php">Вход</a></h2>
          <h2 class="blockB green"><img src="assets/images/re.png" ><a href="Reg.php">Регистрация</a></h2>
        </div>
      </header>
        <?php else:?>
          <header class="">
            <div class="block green">
              <h2 class="blockB green white"><img src="assets/images/oneman.png" ><a class="red" href="Akk-red.php"><?=$_COOKIE['user']?></a></h2>
              <h2 class="blockB green"><img src="assets/images/g.png" ><a href="index.php">Главная</a></h2>
              <h2 class="blockB green"><img src="assets/images/au.png" ><a href="Auth.php">Вход</a></h2>
              <h2 class="blockB green"><img src="assets/images/re.png" ><a href="Reg.php">Регистрация</a></h2>
              <h2 class="blockB green"><img src="assets/images/ex.png" ><a href="exit.php">Выход</a></h2>
            </div>
          </header>
        <?php endif;?>

  <aside class="">
    <h1 class="colour">Электронные Портфолио</h1>
  </aside>

  <section class="back group">
    <form action="authphp.php" method="post">
      <input type="text" name="login" id="login" class="middleB" placeholder="Введите логин" >
      <input type="password" name="pass" id="pass" class="middleB" placeholder="Введите пароль" >
      <button class="btn h2 a" type="submit">войти</button>
    </form>
  </section>
  
  <footer class="">

  </footer>
	 
</body>
</html>