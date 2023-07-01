// 引入express
const express = require('express');
// 创建router实例
const homeRouter = express.Router();
// 获取控制器
import {getLogo} from "../controller/homeController";

/***************定义路由*****************/
//获取logo
homeRouter.get('/logo', getLogo);

/****************抛出路由***************/
export default homeRouter;