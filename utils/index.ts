export const SUCCESS = 200;
export const FAIL = 400;

export const resultType = (code: 200 | 400, msg: string, data: object | null) => {
    return {
        code: code,
        msg: msg,
        data: data
    }
}