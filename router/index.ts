// 引入express
const express = require('express');
// 创建router实例
const router = express.Router();
// 引入子路由
import publicRouter from "./publicRouter";
import homeRouter from "./homeRouter";
import aboutRouter from "./aboutRouter";
import productRouter from "./productRouter";
import informationRouter from "./informationRouter";
import contactRouter from "./contactRouter";

/***********************挂载子路由************************/
router.use('/public', publicRouter);
router.use('/home', homeRouter);
router.use('/about', aboutRouter);
router.use('/product', productRouter);
router.use('/information', informationRouter);
router.use('/contact', contactRouter);

/****************抛出路由***************/
export default router;