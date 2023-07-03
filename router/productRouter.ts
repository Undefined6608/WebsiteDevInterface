// 引入express
const express = require('express');
// 创建router实例
const productRouter = express.Router();
// 引入控制器
import {productList} from "../controller/productController";

/***************定义路由*****************/
productRouter.get('/productList', productList);

/****************抛出路由***************/
export default productRouter;