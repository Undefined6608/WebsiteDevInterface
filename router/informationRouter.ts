// 引入express
const express = require('express');
// 创建router实例
const informationRouter = express.Router();
// 引入控制器
import {getInformationData} from "../controller/informationController";

/***************定义路由*****************/
informationRouter.get('/getInformationData', getInformationData);

/****************抛出路由***************/
export default informationRouter;