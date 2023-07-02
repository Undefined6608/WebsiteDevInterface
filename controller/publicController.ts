// 引入工具方法
import {FAIL, resultType, SUCCESS} from "../utils";
// 引入数据源
import {bottomMsgList, logoData, navList, pageTopList, subTitle} from "../model/DataBase";
// 引入日志输出工具
import {logger} from "../config/config.default";

/***************定义控制器方法*******************/
/**
 * 获取logo
 * @param req
 * @param res
 * @param next
 */
export const getLogo = (req, res, next) => {
    try {
        // 直接抛出logo地址
        res.send(resultType(SUCCESS, "获取成功！", {
            icon: logoData
        }))
    } catch (e) {
        next(e);
    }
}

/**
 * 获取副标题
 * @param req
 * @param res
 * @param next
 */
export const getSubTitle = (req, res, next) => {
    try {
        // 直接抛出logo地址
        res.send(resultType(SUCCESS, "获取成功！", {
            title: subTitle
        }))
    } catch (e) {
        next(e);
    }
}

/**
 * 获取导航条按钮列表
 * @param req
 * @param res
 * @param next
 */
export const getNavList = (req, res, next) => {
    try {
        // 直接抛出logo地址
        res.send(resultType(SUCCESS, "获取成功！", {
            list: navList
        }))
    } catch (e) {
        next(e);
    }
}

/**
 * 获取每个页面头部图片
 * @param req
 * @param res
 * @param next
 */
export const getTopImg = (req, res, next) => {
    try {
        // 获取传入的参数
        const query = req.query;
        // 参数为空
        if (!query.pageId) return res.send(resultType(FAIL, "参数错误！"));
        for (let item of pageTopList) {
            if (item.id === query.pageId) return res.send(resultType(SUCCESS, "查询成功", item));
        }
        res.send(resultType(FAIL, "图片不存在！"));
        // 直接抛出logo地址
        res.send(resultType(SUCCESS, "获取成功！", {
            list: navList
        }))
    } catch (e) {
        next(e);
    }
}

/**
 * 获取页面底部信息列表
 * @param req
 * @param res
 * @param next
 */
export const getBottomMsgList = (req, res, next) => {
    try {
        res.send(resultType(FAIL, "查询成功！", bottomMsgList));
    } catch (e) {
        next(e);
    }
}