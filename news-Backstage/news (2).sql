-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-08-24 11:01:31
-- 服务器版本： 10.1.13-MariaDB
-- PHP Version: 5.6.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `news`
--

-- --------------------------------------------------------

--
-- 表的结构 `news_surface`
--

CREATE TABLE `news_surface` (
  `newsid` int(10) NOT NULL,
  `newstite` varchar(100) DEFAULT NULL,
  `newsfl` varchar(100) DEFAULT NULL,
  `newsname` varchar(20) DEFAULT NULL,
  `newsimg` varchar(200) DEFAULT NULL,
  `newscontent` text,
  `newsdate` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=gbk;

--
-- 转存表中的数据 `news_surface`
--

INSERT INTO `news_surface` (`newsid`, `newstite`, `newsfl`, `newsname`, `newsimg`, `newscontent`, `newsdate`) VALUES
(62, '意大利中部发生地震 房屋损毁严重', '精选', '转载', '20160824163429.png', '据路透社报道，北京时间24日上午9点36分（当地时间24日凌晨3点36分），意大利中部城市佩鲁贾东南76公里处发生6.2级地震，震源深度仅10千米。意大利首都罗马有震感。罗马网友ChrisBurns发文称，“我感觉房子在摇晃。”图为意大利中部小镇Amatrice房屋损毁严重。', '2016-08-24'),
(63, ' 三名北京奥运举重冠军药检阳性：刘春红陈燮霞曹磊', '奥运', '转载', '20160824164736.png', '大厦大厦大厦大厦大厦大厦大厦大厦大厦大厦大厦大厦原原本本木木木要', '2016-08-24'),
(64, '继软银后马云加入阿里减持行列：1年内将套现近60亿', '百家', '雷建平', 'c995d143ad4bd11327b7138b52afa40f4bfb0514.jpg', '在软银2016年5月宣布减持阿里巴巴价值100亿美元股权后，阿里巴巴集团创始人、董事会执行主席马云也加入了减持行列。\n\n阿里巴巴递交给SEC的文件显示，马云及其家族已依据美国证券交易法第10b5-1条例，开始了一项股票出售计划。\n\n这个计划允许马云及马云家族在未来1年时间出售990万股股票阿里巴巴股票，这股份股票相当于马云所持阿里巴巴集团股权的约5%。\n\n按照交易计划，此次出售计划将不按照固定的指令基于价格和交易量限制，由第三方经纪商来执行的交易时间。\n\n美国证券交易委员会规则的10b5-1允许企业管理人员和董事通过书面，预先安排的股票交易计划，以满足承诺和财富规划的需求，以减少对市场的影响。\n\n当前阿里巴巴股价为95.79美元一股，以当前股价计算，马云所出售这部分股票价值是8.62亿美元（近60亿元）。\n\n马云表示，主要用于履行公益捐款的承诺及更好地管理财富。\n\n早在阿里巴巴赴美IPO前的2014年4月25日，马云和蔡崇信一起宣布，将成立个人公益信托基金，基金将着力环境、医疗、教育和文化领域。\n\n该基金来源于他们在阿里巴巴集团拥有的期权，总体规模为阿里巴巴集团总股本的2%。\n\n在2016年6月，软银宣布，在之前公布的55亿美元强制性可转债（以下简称可转债）基础上，额外增加发行11亿美元，使总规模上升至66亿美元。\n\n除可转债形式外，软银还向阿里出售20亿美元阿里股票，向阿里合伙人出售4亿美元股票，向新加坡淡马锡和GIC各出售5亿美元股票，使得软银出售阿里股票规模增至100亿美元。', '2016-08-24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `news_surface`
--
ALTER TABLE `news_surface`
  ADD PRIMARY KEY (`newsid`),
  ADD KEY `newsid` (`newsid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `news_surface`
--
ALTER TABLE `news_surface`
  MODIFY `newsid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
