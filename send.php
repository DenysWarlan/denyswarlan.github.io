<?php
if (isset($_POST['name'])) {
    $name = $_POST['name'];
    $a = mail('denis.varla95@gmail.com','Re: Данные отправлены вашей контактной формой','Имя: '.$name);
    if ($a) {
        echo 'Спасибо! Ваше сообщение успешно отправлено!';
    } else {
        echo 'Ваше сообщение не отправлено!';
    }
}
?>
