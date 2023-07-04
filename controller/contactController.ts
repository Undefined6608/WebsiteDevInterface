// 引入工具方法
import {FAIL, resultType, SUCCESS} from "../utils";
// 引入数据源
import {ContactFormList, logoData} from "../model/DataBase";
// 引入日志输出工具
import {logger} from "../config/config.default";
import * as crypto from "crypto";

/***************定义控制器方法*******************/
export const pushForm = (req, res, next) => {
    try {
        const body = req.body;
        if (!body.name || !body.email || !body.phone || !body.context) return res.send(resultType(FAIL, "参数错误!"));
        ContactFormList.push({
            id: crypto.randomUUID(),
            name: body.name,
            email: body.email,
            phone: body.phone,
            context: body.context
        });
        res.send(resultType(SUCCESS, "保存！"));
    } catch (e) {
        next(e);
    }
}