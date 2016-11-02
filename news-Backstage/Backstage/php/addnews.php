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
	$result = mysql_query("SELECT * FROM news_surface where newsid=$cellid");

if($result){
	$news=array();
	$i=0;



//遍历数据得到值返回给ajax
while($row = mysql_fetch_array($result)){
  	$news['newsid']=urlencode($row['newsid']);
  	$news['newstite']=urlencode($row['newstite']);
  	$news['newsname']=urlencode($row['newsname']);
  	$news['newsfl']=urlencode($row['newsfl']);
  	$news['newsdate']=urlencode($row['newsdate']);
    $news['newscontent']=urldecode($row['newscontent']);
 $i++;
  }
echo urldecode(json_encode($news));
// echo ($textnews);
}
// echo urldecode(json_encode($textnews));

mysql_close($con);
?>