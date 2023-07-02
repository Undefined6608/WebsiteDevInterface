import {BottomMsgListType, LogoDataType, NavItemType, PageTopImg, SubTitleType} from "../config/PublicInterface";

/**
 * 仿数据库
 */

// 网站logo
const logoData: LogoDataType = "http://39.101.72.168:81/image/examination/project/logo.png";

// 网站副标题
const subTitle: SubTitleType = "-喜于心 敷于形";

// 导航按钮列表
const navList: Array<NavItemType> = [
    // region
    {
        id: 'a',
        name: "首页",
        subName: "Home",
        url: "/"
    }, {
        id: 'b',
        name: "了解喜敷",
        subName: "ABOUT US",
        url: "/about"
    }, {
        id: 'c',
        name: "产品中心",
        subName: "PRODUCT CENTER",
        url: "/product"
    }, {
        id: 'd',
        name: "喜敷咨询",
        subName: "INFORMATION",
        url: "/information"
    }, {
        id: 'e',
        name: "联系我们",
        subName: "CONTACT US",
        url: "/contact"
    }
    // endregion
]

// 页面顶部图片列表
const pageTopList: Array<PageTopImg> = [
    // region
    {
        id: 'a',
        imgUrl: "http://39.101.72.168:81/image/examination/project/homeTop.jpg",
        alt: ""
    }, {
        id: 'b',
        imgUrl: "http://39.101.72.168:81/image/examination/project/aboutTop.jpg",
        alt: ""
    }, {
        id: 'c',
        imgUrl: "http://39.101.72.168:81/image/examination/project/productTop.jpg",
        alt: ""
    }, {
        id: 'd',
        imgUrl: "http://39.101.72.168:81/image/examination/project/informationTop.jpg",
        alt: ""
    }, {
        id: 'e',
        imgUrl: "http://39.101.72.168:81/image/examination/project/contactTop.jpg",
        alt: ""
    },
    // endregion
]

// 页面底部信息列表
const bottomMsgList: BottomMsgListType = {
    topLeft: {
        one: "产品试用",
        two: "产品试用   |  产品反馈",
        three: "产品试用/反馈"
    },
    topCenter: {
        title: "联系方式",
        phone: "联系电话：020-31523984",
        email: "联系邮箱：hi_xifu@163.com"
    },
    topRight: {
        QRCode: "http://39.101.72.168:81/image/examination/project/QRCode.jpg",
        tip: "扫码关注喜敷",
        end: "参与免费领取试用活动"
    },
    bottom: {
        one: "©2023 广州喜敷医美生物科技有限公司 版权所有",
        two: "管理登录"
    }
}

export {
    logoData,
    subTitle,
    navList,
    pageTopList,
    bottomMsgList
}