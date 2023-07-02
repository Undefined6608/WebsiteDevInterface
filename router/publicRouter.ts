// 引入express
const express = require('express');
// 创建router实例
const publicRouter = express.Router();
// 获取控制器
import {getBottomMsgList, getLogo, getNavList, getSubTitle, getTopImg} from "../controller/publicController";

/***************定义路由*****************/
//获取logo
publicRouter.get('/logo', getLogo);
// 获取副标题
publicRouter.get('/subTitle', getSubTitle);
// 获取头部跳转按钮列表
publicRouter.get('/navList', getNavList);
// 获取各个页面头部图片
publicRouter.get('/topImg', getTopImg);
// 获取页面底部信息列表
publicRouter.get('/bottomMsgList', getBottomMsgList);
/****************抛出路由***************/
export default publicRouter;