<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
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
    <form action="site.php" method="post" enctype="multipart/form-data">
      <input type="file" name="img" class="row up">
      <input type="text" name="txt" class="row up" placeholder="описание" >
      <button class="btnrow up a" type="submit">загрузить</button>
    </form>
<?php
  $mysql = new mysqli('localhost', 'root', 'root', 'register');
  $cook = $_COOKIE['login'];
  $query = $mysql->query("SELECT * FROM `users` WHERE `login` = '$cook'");
  $row = $query->fetch_assoc();
  $Ppage = explode(" ",$row['Ppage']);
  foreach ($Ppage as $value){  
    $dm = $mysql->query("SELECT * FROM `photo` WHERE `id`= '$value'");
    $fw = $dm->fetch_assoc();
    if ( isset($fw['img']) ){
    $show_img = base64_encode($fw['img']);
    $Ttext = $fw['text'];?>
    <img class="ass" src="data:image/jpeg;base64, <?=$show_img ?>" alt="">
    <p class ="asst"><?=$Ttext?></p>
    <form action="del.php" method="post">
    <input type="hidden" name="del_photo" value="<?=$value ?>" />
    <button class="btnrow up a" type="submit" >удалить</button>
    </form>
  <?php } } ?>
  </section>

  <footer class="">

  </footer>
	 
</body>
</html>