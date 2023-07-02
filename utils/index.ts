import {FAILType, ResultTypeType, SUCCESSType} from "../config/PublicInterface";

export const SUCCESS: SUCCESSType = 200;
export const FAIL: FAILType = 400;

/**
 * 使用publicInterface里定义好的类型作为泛型
 * @param code 响应值
 * @param msg 响应信息
 * @param data 响应数据
 */
export const resultType = (code: SUCCESSType | FAILType, msg: string, data?: any | null): ResultTypeType => {
    return {
        code: code,
        msg: msg,
        data: data
    }
}