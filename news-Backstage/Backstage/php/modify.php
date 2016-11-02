<?php

header("Content-type: application/json; charset=utf-8");
 header("Content-Type:text/html;charset=utf-8");
// 连接服务器和数据库
 $con = mysql_connect("localhost","root","");
 mysql_set_charset('utf8', $con);
  mysql_select_db("news", $con);
//接收ajax传递过来的数据
// $page=$_REQUEST["page"];
// $textnews=urldecode(json_encode($_REQUEST["textnews"]));
// $sort=$_REQUEST["sort"];
$newsid=$_REQUEST["newsid"];
$newstite=addslashes(htmlspecialchars($_REQUEST["newstite"]));
$newsfl=$_REQUEST["newsfl"];
$newsname=$_REQUEST["newsname"];
$newsdate=$_REQUEST["newsdate"];
$newsimg=$_REQUEST["newsimg"];
$newscontent=addslashes(htmlspecialchars($_REQUEST["newscontent"]));


  mysql_query("UPDATE news_surface SET newstite ='$newstite' , newsname='$newsname' WHERE newsid=$newsid");
   mysql_query("UPDATE news_surface SET newsfl='$newsfl' , newsdate='$newsdate' WHERE newsid=$newsid");
   mysql_query("UPDATE news_surface SET newsimg='$newsimg' , newscontent='$newscontent' WHERE newsid=$newsid");
echo urldecode(json_encode($newstite));
// echo ($textnews);
// }
// echo urldecode(json_encode($textnews));

mysql_close($con);
?>