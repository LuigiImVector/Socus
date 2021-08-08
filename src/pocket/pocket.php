<?php
    $url = "https://getpocket.com/v3/oauth/request";
    $tmp = file_get_contents("request.json");
    $array = json_decode($tmp, true);

    //var_dump($array);

    $ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $array);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $server_output = curl_exec($ch);
    $server_output = substr($server_output, 5);

    //curl_close ($ch);

    var_dump($server_output);


    $url = "https://getpocket.com/v3/oauth/authorize";
    $array = array(
        "consumer_key" => "98472-63caaa566692cbe6ef2fd6de",
        "code" => $server_output
    );
    var_dump($array);

    //$ch = curl_init();

    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $array);

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $server_output = curl_exec($ch);

    curl_close ($ch);

    var_dump($server_output);


    

?>