<?php
    $result = [
        "isSuccess"=> "",
        "errorMsg"=> ""
    ];

    // $_POST: 收到的東西都在這裡
    // print_r($_POST);  // 可以打開看看內容。只是會造成ajax錯誤，把錯誤訊息印出來即可

    $Clientid = $_POST["Clientid"];  // 前端送過來的
    $UserPermission = $_POST["UserPermission"];
    $Username = $_POST["Username"];
    $UserAcc = $_POST["UserAcc"];
    $UserPassword = $__POST["UserPassword"];
    $Email = $_POST["Email"];



    $result["isSuccess"] = true;
    $result["errorMsg"] = $Username;
    echo json_encode($result);   // 傳回前端。  object轉json字串