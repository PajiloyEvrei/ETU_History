<?php
	$mysql = new mysqli('localhost', 'root', 'root', 'register');
	$img_type = substr($_FILES['img']['type'], 0, 5);
	$img_size = 2*1024*1024;
	if(!empty($_FILES['img']['tmp_name']) and $img_type === 'image' and $_FILES['img']['size'] <= $img_size) {
        $img = addslashes(file_get_contents($_FILES['img']['tmp_name']));
        $txt = filter_var(trim($_POST ['txt']), FILTER_SANITIZE_STRING);
        if (mb_strlen($txt) < 0 || mb_strlen($txt) > 1000) {
            echo "Недопустимая длина описания";
            exit();
        }
            $mysql->query("INSERT INTO `photo` (`text`, `img`) VALUES ( '$txt', '$img')");
            $cook = $_COOKIE['login'];
            $id = $mysql->query("SELECT `id` FROM `photo` WHERE `img` = '$img' AND `text` = '$txt'");
            $DoPpage = $mysql->query("SELECT `Ppage` FROM `users` WHERE `login` = '$cook'");
            $la = $id->fetch_assoc();
            $lae = $DoPpage->fetch_assoc();
            $sym = $lae['Ppage'] . " " . $la['id']; 
            $mysql->query("UPDATE `users` SET `Ppage` = '$sym' WHERE `login` = '$cook'");
    }
	$mysql->close();

	header('Location: /Akk-red.php');
?>