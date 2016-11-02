<?php

header("Content-type: application/json; charset=utf-8");
 header("Content-Type:text/html;charset=utf-8");
// 连接服务器和数据库
 $con = mysql_connect("localhost","root","");
 mysql_set_charset('utf8', $con);
	mysql_select_db("news", $con);
//接收ajax传递过来的数据
$cellid=$_REQUEST["cellid"];

// echo ($textnews);

// if(isset($_REQUEST["count"])){
// 	$sql="SELECT * FROM news_surface";
// }else{
// 	if($sort=="all"){
// 		$sql="SELECT * FROM news_surface order by 'newsid' limit $page,10";
// 	}else{
// 		$sql="SELECT * FROM news_surface where newsid' limit $page,10";
// 	};
// }
//查询数据表
mysql_query("DELETE FROM news_surface WHERE newsid=$cellid");

echo urldecode(json_encode("删除成功"));
// echo ($textnews);

// echo urldecode(json_encode($textnews));

mysql_close($con);
?>