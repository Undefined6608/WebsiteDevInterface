// 引入工具方法
import {resultType, SUCCESS} from "../utils";
// 引入数据源
import {ProductListData} from "../model/DataBase";
// 引入日志输出工具
import {logger} from "../config/config.default";

/***************定义控制器方法*******************/
// 产品列表
export const productList = (req, res, next) => {
    try {
        // 直接抛出数据
        res.send(resultType(SUCCESS, "获取成功！", ProductListData));
    } catch (e) {
        next(e);
    }
};