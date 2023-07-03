// 引入工具方法
import {resultType, SUCCESS} from "../utils";
// 引入数据源
import {HomeFourData, HomeImgList, HomeOneData, HomeThreeData, HomeTwoData, logoData} from "../model/DataBase";
// 引入日志输出工具
import {logger} from "../config/config.default";

/***************定义控制器方法*******************/
// 首页第一个模块数据控制器
export const getHomeOne = (req, res, next) => {
    try {
        // 直接抛出数据
        res.send(resultType(SUCCESS, "获取成功！", HomeOneData));
    } catch (e) {
        next(e);
    }
};
// 获取首页图片集合
export const getHomeImgList = (req, res, next) => {
    try {
        // 直接抛出图片数据
        res.send(resultType(SUCCESS, "获取成功！", HomeImgList));
    } catch (e) {
        next(e);
    }
};
// 首页第二个模块数据控制器
export const getHomeTwo = (req, res, next) => {
    try {
        // 直接抛出数据
        res.send(resultType(SUCCESS, "获取成功！", HomeTwoData));
    } catch (e) {
        next(e);
    }
};
// 首页第三个模块数据控制器
export const getHomeThree = (req, res, next) => {
    try {
        // 直接抛出数据
        res.send(resultType(SUCCESS, "获取成功！", HomeThreeData));
    } catch (e) {
        next(e);
    }
};
// 首页第四个模块数据控制器
export const getHomeFour = (req, res, next) => {
    try {
        // 直接抛出数据
        res.send(resultType(SUCCESS, "获取成功！", HomeFourData));
    } catch (e) {
        next(e);
    }
};