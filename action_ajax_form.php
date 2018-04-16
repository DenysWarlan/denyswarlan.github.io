<?php

if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["mes"]) ) {
    $to = 'denis.varla95@gmail.com';
    $subject ='Данные c контактной формой';
    $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST["email"].'</p>  
                        <p>Сообщение'.$_POST["mes"].'</p>                      
                    </body>
                </html>';
    $result = array(
    	'name' => $_POST["name"],
    	'email' => $_POST["email"]
    );

    mail($to, 'Re: Данные отправлены вашей контактной формой', $message);


    echo json_encode($result);
}

?>