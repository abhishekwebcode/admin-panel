<?php
/**
 * Created by PhpStorm.
 */
require_once "autoload.php";
switch ($_POST["request"]) {
    case "users":
        $offset=0;
        $ans=select(
            "SELECT * from users LIMIT 10 OFFSET ?",
            array("i",$offset)
        );
        echo json_encode(
            array(
                "success"=>boolval($ans),
                "data"=>$ans
            )
        );
        break;
    case "videos_resume":
        $offset=0;
        $ans=select(
            "SELECT * from videos_resume LIMIT 10 OFFSET ?",
            array("i",$offset)
        );
        echo json_encode(
            array(
                "success"=>boolval($ans),
                "data"=>$ans
            )
        );
        break;
    case "videos_fun":
        $offset=0;
        $ans=select(
            "SELECT * from videos_fun LIMIT 10 OFFSET ?",
            array("i",$offset)
        );
        echo json_encode(
            array(
                "success"=>boolval($ans),
                "data"=>$ans
            )
        );
        break;
}