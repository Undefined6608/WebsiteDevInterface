// 引入express
const express = require('express');
// 创建router实例
const aboutRouter = express.Router();
// 引入控制器
import {getAbout} from "../controller/aboutController";

/***************定义路由*****************/
aboutRouter.get('/logo', getAbout);

/****************抛出路由***************/
export default aboutRouter;