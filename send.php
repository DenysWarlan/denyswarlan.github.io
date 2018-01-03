<?php
/**
 * Created by PhpStorm.
 * User: denis
 * Date: 03.01.18
 * Time: 12:03
 */
$to = "denis.varal95@gmail.com";
$name = $_POST['name'];
$mail = $_POST['email'];
$mes = $_POST['mes'];
mail($to,"$name",$mail ,$mes);
echo "Ваше сообщение с темой  $sub и текстом: $mes <br> отправлено<BR><center><a href='http://www.svoisait.ru/form/_post.shtml'>Отправить ещё</a>";
?>
