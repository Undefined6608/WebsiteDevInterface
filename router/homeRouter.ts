// 引入express
const express = require('express');
// 创建router实例
const homeRouter = express.Router();
// 获取控制器
import {getHomeFour, getHomeImgList, getHomeOne, getHomeThree, getHomeTwo} from "../controller/homeController";

/***************定义路由*****************/
//首页第一个模块数据路由
homeRouter.get('/homeOne', getHomeOne);
// 首页图片集合
homeRouter.get('/getHomeImgList',getHomeImgList);
//首页第二个模块数据路由
homeRouter.get('/homeTwo', getHomeTwo);
//首页第三个模块数据路由
homeRouter.get('/homeThree', getHomeThree);
//首页第四个模块数据路由
homeRouter.get('/homeFour', getHomeFour);
/****************抛出路由***************/
export default homeRouter;