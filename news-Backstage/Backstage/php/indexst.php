<?php
header("Content-type: application/json; charset=utf-8");
 header("Content-Type:text/html;charset=utf-8");
$con = mysql_connect("localhost","root","");

if (!$con)
  {
  	
  die('Could not connect: ' . mysql_error());

  }
else{
if (mysql_query("CREATE DATABASE news",$con))
  {
  echo "Database created";
 
  
  }
// else
//   {
//   echo "Error creating database: " . mysql_error();
//   }

	
	mysql_set_charset('utf8', $con);
	mysql_select_db("news", $con);
	$sql = "CREATE TABLE news_surface 
	(
	newsid int(10) NOT NULL AUTO_INCREMENT primary key,
	newstite varchar(100),
	newsfl varchar(100),
	newsname varchar(20),
	newsimg varchar(200),
	newscontent text,
	newsdate date)";
	mysql_query($sql,$con);
	
	$newstite=addslashes(htmlspecialchars($_REQUEST['newstite']));
	$newsfl=$_REQUEST['newsfl'];
	$newsname=$_REQUEST['newsname'];
	$newsdate=$_REQUEST['newsdate'];
	$newscontent=addslashes(htmlspecialchars($_REQUEST['newscontent']));
	$newsimg=$_REQUEST['newsimg'];

	$sql="INSERT INTO news_surface (newstite, newsfl, newsname,newsimg,newscontent,newsdate)VALUES('$newstite','$newsfl','$newsname','$newsimg','$newscontent','$newsdate')";
	$newsid=mysql_insert_id();
	if (!mysql_query($sql,$con))
 	 {
 	 die('Error: ' . mysql_error());
 	 }
	

	}
	echo urldecode(json_encode("添加成功"));
	mysql_close($con);
?>