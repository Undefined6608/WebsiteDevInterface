// 引入工具方法
import {resultType, SUCCESS} from "../utils";
// 引入数据源
import {logoData} from "../model/DataBase";
// 引入日志输出工具
import {logger} from "../config/config.default";

/***************定义控制器方法*******************/
export const getContact = (req, res, next) => {
    try {
        res.send(resultType(SUCCESS,"获取成功！",{
            icon:logoData
        }))
    } catch (e) {
        next(e);
    }
}