import {
    BottomMsgListType, HomeFourType, HomeImgType,
    HomeOneType, HomeThreeType, HomeTwoType,
    LogoDataType,
    NavItemType,
    PageTopImg,
    SubTitleType
} from "../config/PublicInterface";
import * as crypto from "crypto";

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
];
// 页面顶部图片列表
const pageTopList: Array<PageTopImg> = [
    // region
    {
        id: 'a',
        imgUrl: "http://39.101.72.168:81/image/examination/project/homeTop.jpg",
        alt: "首页"
    }, {
        id: 'b',
        imgUrl: "http://39.101.72.168:81/image/examination/project/aboutTop.jpg",
        alt: "关于我们"
    }, {
        id: 'c',
        imgUrl: "http://39.101.72.168:81/image/examination/project/productTop.jpg",
        alt: "产品"
    }, {
        id: 'd',
        imgUrl: "http://39.101.72.168:81/image/examination/project/informationTop.jpg",
        alt: "信息"
    }, {
        id: 'e',
        imgUrl: "http://39.101.72.168:81/image/examination/project/contactTop.jpg",
        alt: "联系我们"
    },
    // endregion
];
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
};
// 主页第一个模块数据
const HomeOneData: HomeOneType = {
    title: "喜敷-专业科学护肤品牌",
    subTitle: "XIFU- professional scientific skin care brand",
    imgUrl: "http://39.101.72.168:81/image/examination/project/homeOneImg.jpg",
    context: [
        "传统护肤品配方，更多的是迎合大众速效的心理或追求产品营销卖点为目的，过于追求产品的使用效果，而降低产品本身对安全性的要求。常见于过度添加功效性成分甚至违规添加激素辅助等，极大增加了护肤使用造成的不良反应风险系数。",
        "护肤品领域，历经多个时代变迁，伴随着各种技术的更新和成熟的背后是吸取了无数的案例验证和教训！而今我们面对未来，护肤需要更加科学、更加安全与可靠的方式进行。",
        "喜敷-专业科学护肤品牌   专注问题肌肤的护理探研-引领专业成就科技之美 -打造护肤新势力",
        "XIFU喜敷® 源自于台湾，依托台湾皮肤科专家游历东南亚国家积累十余年皮肤外用药研发和生产的经验，结合亚洲人皮肤特点，对研发产品的功能定位、功效、核心成份、核心技术严格把关，不断对产品配方工艺进行优化和改进，开发出效果、安全、肤感多兼顾的产品。"
    ],
    btnMsg: "查看更多",
    link: "/about"
};
// 主页上的图片集合
const HomeImgList: HomeImgType = {
    imgUrl: [
        "http://39.101.72.168:81/image/examination/project/HomeImg01.jpg",
        "http://39.101.72.168:81/image/examination/project/homeImg02.jpg"
    ]
};
// 主页第二个模块数据
const HomeTwoData: HomeTwoType = {
    title: "产品中心",
    subTitle: "PRODUCT CENTER",
    type: [
        {
            id: 'p1',
            name: "喜敷 | 成人护理系列"
        }
    ],
    productList: [
        {
            id: crypto.randomUUID(),
            typeId: 'p1',
            itemImg: "http://39.101.72.168:81/image/examination/project/product1.jpg",
            name: "XIFU 红豚护理软膏"
        }, {
            id: crypto.randomUUID(),
            typeId: 'p1',
            itemImg: "http://39.101.72.168:81/image/examination/project/product2.jpg",
            name: "XIFU喜敷 水杨酸焕颜面膜 100g"
        }, {
            id: crypto.randomUUID(),
            typeId: 'p1',
            itemImg: "http://39.101.72.168:81/image/examination/project/product3.jpg",
            name: "XIFU喜敷 氨基酸洁面慕斯 100ml"
        }, {
            id: crypto.randomUUID(),
            typeId: 'p1',
            itemImg: "http://39.101.72.168:81/image/examination/project/product4.jpg",
            name: "XIFU医用冷敷贴膜5片/盒"
        }, {
            id: crypto.randomUUID(),
            typeId: 'p1',
            itemImg: "http://39.101.72.168:81/image/examination/project/product5.jpg",
            name: "XIFU 喜敷 医用多肽水凝胶 100ml"
        }, {
            id: crypto.randomUUID(),
            typeId: 'p1',
            itemImg: "http://39.101.72.168:81/image/examination/project/product6.jpg",
            name: "XIFU 喜敷 清痘冷敷凝胶  15g"
        }
    ]
};
// 主页第三个模块数据
const HomeThreeData: HomeThreeType = {
    oneTitle: "XIFU  喜敷",
    oneSubTitle: "----- 源自台湾知名化工专家深耕多年的精心之作 -----",
    twoTitle: "【专业科学护肤品牌】",
    twoSubTitle: "专注问题肌肤的护理探研  |  引领专业成就科技之美  |  打造护肤新势力"
};
// 主页第四个模块数据
const HomeFourData: HomeFourType = {
    title: "联系我们",
    subTitle: "CONTACT US",
    list: [
        {
            id: crypto.randomUUID(),
            icon: "http://39.101.72.168:81/image/examination/project/contact1.jpg",
            mtd: "联系邮箱",
            val: "hi_xifu@163.com"
        }, {
            id: crypto.randomUUID(),
            icon: "http://39.101.72.168:81/image/examination/project/contact2.jpg",
            mtd: "联系电话",
            val: "020-31523984"
        }, {
            id: crypto.randomUUID(),
            icon: "http://39.101.72.168:81/image/examination/project/contact3.jpg",
            mtd: "联系地址",
            val: "广东省广州市白云区石厦路榕溪工业大街新创展大厦605房"
        },
    ]
};
// 主页第二个模块数据
const ProductListData: HomeTwoType = {
    title: "产品中心",
    subTitle: "PRODUCT CENTER",
    type: [
        {
            id: 'p1',
            name: "喜敷 | 成人护理系列"
        }, {
            id: 'p2',
            name: "喜敷 | 婴幼儿系列"
        }, {
            id: 'p3',
            name: "沐儿洁灵 | 儿童洗护系列"
        },
    ],
    productList: [
        {
            id: crypto.randomUUID(),
            typeId: 'p1',
            itemImg: "http://39.101.72.168:81/image/examination/project/product1.jpg",
            name: "XIFU 红豚护理软膏"
        }, {
            id: crypto.randomUUID(),
            typeId: 'p1',
            itemImg: "http://39.101.72.168:81/image/examination/project/product2.jpg",
            name: "XIFU喜敷 水杨酸焕颜面膜 100g"
        }, {
            id: crypto.randomUUID(),
            typeId: 'p1',
            itemImg: "http://39.101.72.168:81/image/examination/project/product3.jpg",
            name: "XIFU喜敷 氨基酸洁面慕斯 100ml"
        }
    ]
};

export {
    logoData,
    subTitle,
    navList,
    pageTopList,
    bottomMsgList,
    HomeOneData,
    HomeImgList,
    HomeTwoData,
    HomeThreeData,
    HomeFourData,
    ProductListData
};