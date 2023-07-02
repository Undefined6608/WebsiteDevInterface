// 成功响应值
export type SUCCESSType = 200;
// 失败响应值
export type FAILType = 400;
// 响应数据类型
export type ResultTypeType = {
    // 响应值
    code: SUCCESSType | FAILType,
    // 响应信息
    msg: string,
    // 响应数据
    data: any | null
}
// logo的类型
export type LogoDataType = string;
// 副标题的类型
export type SubTitleType = string;
// 导航按钮类型
export type NavItemType = {
    id: string,
    name: string,
    subName: string,
    url: string
}
// 页面图片类型
export type PageTopImg = {
    id: string,
    imgUrl: string,
    alt: string
}
// 底部信息列表类型
export type BottomMsgListType = {
    topLeft: {
        one: string,
        two: string,
        three: string
    },
    topCenter: {
        title: string,
        phone: string,
        email: string
    },
    topRight: {
        QRCode: string,
        tip: string,
        end: string
    },
    bottom: {
        one: string,
        two: string
    }
}