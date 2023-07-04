// 引入工具方法
import {resultType, SUCCESS} from "../utils";
// 引入数据源
import {InformationData, logoData} from "../model/DataBase";
// 引入日志输出工具
import {logger} from "../config/config.default";

/***************定义控制器方法*******************/
export const getInformationData = (req, res, next) => {
    try {
        res.send(resultType(SUCCESS, "获取成功！", InformationData));
    } catch (e) {
        next(e);
    }
}