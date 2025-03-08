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
    <h1 class="colour">Электронные Портфолио</h1><h1 class="red"><p class="invis">ddddddd</p><?=$_COOKIE['loginlogin'] ?></h1>
  </aside>

  <section class="back group">
      <?php
    $mysql = new mysqli('localhost', 'root', 'root', 'register');
    $cook = $_COOKIE['loginlogin'];
    $query = $mysql->query("SELECT * FROM `users` WHERE `name` = '$cook'");
    $row = $query->fetch_assoc();
    $Ppage = explode(" ",$row['Ppage']);
    foreach ($Ppage as $value){  
    $dm = $mysql->query("SELECT * FROM `photo` WHERE `id`= '$value'");
    $fw = $dm->fetch_assoc();
    if ( isset($fw['img']) ){
      $show_img = base64_encode($fw['img']);
      $Ttext = $fw['text'];?>
      <img class="ass" src="data:image/jpeg;base64, <?=$show_img ?>" alt="">
      <p class="asst"><?=$Ttext?></p> 
    <?php }}  ?>
  </section>
  
  <footer class="">

  </footer>
	 
</body>
</html>