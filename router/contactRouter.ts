// 引入express
const express = require('express');
// 创建router实例
const contactRouter = express.Router();
// 引入控制器
import {getContact} from "../controller/contactController";

/***************定义路由*****************/
contactRouter.get('/logo', getContact);

/****************抛出路由***************/
export default contactRouter;