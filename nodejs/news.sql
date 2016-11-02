-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: 2016-09-29 08:23:29
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
(64, '港珠澳大桥贯通', '本地', ' 来源：新华网| ', 'F5EED7639266374C48B78A18602C5C9C.jpg', '港珠澳大桥的西人工岛（9月26日摄）。 9月27日，全球最长跨海大桥——港珠澳大桥主体桥梁正式贯通。此前几天，世界最大跨度公铁两用斜拉桥——沪通长江大桥28号主塔墩承台混凝土浇筑也完美收官。两座“世界之最”桥梁均进入新的建设阶段。', '0000-00-00'),
(84, '港珠澳大桥贯通 我国长大桥梁“引领世界”', '精选', ' 来源：新华网| ', 'F5EED7639266374C48B78A18602C5C9C.jpg', '港珠澳大桥的西人工岛（9月26日摄）。 9月27日，全球最长跨海大桥——港珠澳大桥主体桥梁正式贯通。此前几天，世界最大跨度公铁两用斜拉桥——沪通长江大桥28号主塔墩承台混凝土浇筑也完美收官。两座“世界之最”桥梁均进入新的建设阶段。', '0000-00-00'),
(89, '3元钱引发的悲剧 嫌疑人已自首事情正在进一步的调查中', '精选', '中国青年网', '22_125218_6139eb6a6bda36c.jpg', '这是一个因3元钱引发的悲剧，9月26日17点多，杨浦区惠民路上发生一起斗殴事件，导致一名男子不幸身亡。据悉，一男子购买了一把3元的猫粮，嫌少，又多抓一把，引发了店内老板张某的不满，发生口角争执及斗殴。记者了解到，双方从口角争执升级为打斗，张某在此过程中倒地头部着地受伤，不省人事，在送往医院途中不幸身亡。\n\n　　9月26日，下午17点多，杨浦区惠民路上发生一起斗殴事件，导致一名男子不幸身亡。一男子购买了一把3元的猫粮，嫌少，又多抓一把，引发了店内老板张某的不满，发生口角争执及斗殴，双方情绪失控，老板张某在此过程中倒地头部着地受伤，不省人事。\n\n　　目击者介绍：昨晚17点15分左右，52岁的上海人袁某来到惠民路上的这家猫粮店内，购买了一包3元钱的猫粮，袁某平时喜欢在隔壁的公园内喂养流浪猫，可能是觉得猫粮不够用，于是，他顺手从粮店内再抓了一把猫粮带走，这引发了粮店老板，43岁江苏籍男子张某的不满，双方于是发生口角争执。\n\n　　周边居民说：“他买猫粮到公园里去喂猫的，买了3块嫌少，抓他一把，抓了就吵起来了。”\n\n　　居民们介绍，这位不幸死亡的粮店老板平时口碑不错，不与人争执吵架、和气生财，平时做生意时还帮助居民把一包包大米扛上居民楼。不知为何，昨天却与袁某升级为打斗。', '0000-00-00'),
(90, ' 五城争做国家中心城市 地方开展城市能级大赛', '精选', '来源:21世纪经济报道', 'F5EED7639266374C48B78A18602C5C9C.jpg', '谁将是下一个国家中心城市？\n\n9月25日，河南省委常委、郑州市委书记马懿在郑州市第十一次党代会上明确提出，未来五年，郑州要向国家中心城市迈进。\n\n同一日，湖南省委常委、长沙市委书记易炼红在中共长沙市第十三次代表大会上称，未来五年，长沙将构建国家中心城市新格局。\n\n也是在25日，于沈阳举办的2016中国城市规划年会举办的“国家中心城市建设与创新发展”高端论坛上，沈阳市市长潘利国表示，沈阳以建设立足东北、服务全国、辐射东北亚的国家中心城市为总体目标。\n\n更早的时候，南京、武汉等地也提出了建设国家中心城市的定位。\n\n国家中心城市是国家城镇体系的最高层级。今年3月，有公开报道称，住建部正组织编制新一轮全国城镇体系规划，考虑设立一批总量10个左右的国家中心城市。\n\n有专家认为，地方“闻风而动”，或与此消息有关，竞争也将日趋激烈。\n\n目前，北京、上海、广州、重庆、天津已被定位为国家中心城市。 成都在前不久获批的成渝城市群规划中，被定位为“以建设国家中心城市为目标”。\n\n湖北社科院副院长秦尊文指出，各地争建国家中心城市，首先是要尽快聚集人口，成为特大城市，其次要发展高端产业，对周围产生辐射作用。\n\n“要成为国家中心城市，要对全国经济产生影响，否则只能叫区域中心城市。”他说。\n\n据统计数据，目前长沙、郑州还达不到特大城市标准（主城区人口500万到1000万）。武汉要成为城区人口1000万的超大城市，也需要尽快聚集人口。\n\n河南大学中原发展研究院院长耿明斋认为， 河南有1亿人口，郑州是河南唯一的要素、人口聚集地， 郑州具有成为超大城市的基础。\n\n中南大学商学院教授傅沂认为，要成为国家中心城市，除人口规模，传统的产业也要升级，比如像长沙的装备制造业，以及过去的动漫产业，还不能对周边产生辐射作用。\n\n21世纪经济报道获悉，2015年郑州、长沙经济总量分别为7000、8000多亿， 沈阳也有7000多亿，相比武汉、成都的1万亿的水平，还有距离。\n\n为此，长沙党代会提出，长沙建设国家中心城市，要着力打造“三个中心”（国家智能制造中心、国家创新创意中心、国家交通物流中心）；到2021年，长沙地区生产总值达14000亿元以上，财政总收入突破2000亿元。\n\n郑州则确定了“以先进制造业为支撑，以现代服务业为主导的现代产业体系”方向。要努力打造万亿级电子信息产业集群、5000亿级汽车与装备制造产业集群和一批千亿级产业集群。\n\n耿明斋认为，现在中部有三个城市定位打造国家中心城市，三城各有特点，武汉具有先天性优势，郑州、长沙则是改革开放以来快速成长起来的城市。\n\n“郑州应该围绕自己交通区位优势，对接一带一路、完善自贸区，建立开放高地和多层次的产品、要素市场。在这个层次上聚集先进的制造业，提升创新能力、高端服务能力。”耿明斋说。\n\n今年上半年获批的《成渝城市群发展规划》明确将成都定位为国家中心城市。成都也成为继北京、上海、天津、广州、重庆之后第六座被定位为国家中心城市的城市。\n\n对于中国而言，处在城市顶端的"国家中心城市"分别如何定位？具有哪些特征和内涵？本报梳理国务院批复中对六个城市的定位，管中窥豹，一瞥中国城市的格局。\n\n延伸阅读：从六大国家中心城市定位看中国顶尖城市格局来源：成都商报\n\n今年上半年获批的《成渝城市群发展规划》明确将成都定位为国家中心城市。成都也成为继北京、上海、天津、广州、重庆之后第六座被定位为国家中心城市的城市。\n\n对于中国而言，处在城市顶端的“国家中心城市”分别如何定位？具有哪些特征和内涵？本报梳理国务院批复中对六个城市的定位，管中窥豹，一瞥中国城市的格局。', '0000-00-00'),
(91, ' 葡萄牙艺术家用废品创作栩栩如生动物塑像(组图)', '百家', '国际在线', 'e80b3cb1-f4ff-4227-963f-48c111eccbe2_size123_w600_h400.jpg', '原标题：葡萄牙艺术家用废品创作栩栩如生动物塑像(组图)\n\n葡萄牙艺术家用废品创作栩栩如生动物塑像(组图)\n国际在线专稿：据Boredpanda网站9月27日报道，葡萄牙一位名叫阿尔都的艺术家竟能用垃圾在街头塑造出一座座栩栩如生的动物塑像。\n\n阿尔都的材料都是自己从垃圾堆收集而来的，并未花一分钱收购废品。烧坏的垃圾桶、废轮胎、汽车保险杠都成了他作品的主要材料。\n\n阿尔都表示，自己这么做是为了提高现代人保护环境的意识，提醒人们这些被他当成材料的垃圾无时无刻不对大自然产生灾害。\n\n据悉，阿尔都还在爱沙尼亚和美国展开了他的环保艺术活动。(曾抒羽）', '0000-00-00');

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
  MODIFY `newsid` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=103;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
