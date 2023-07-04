// 引入express
const express = require('express');
// 创建router实例
const aboutRouter = express.Router();
// 引入控制器
import {getAboutList} from "../controller/aboutController";

/***************定义路由*****************/
aboutRouter.get('/getAboutList', getAboutList);
/****************抛出路由***************/
export default aboutRouter;