import {
    AboutDataType,
    BottomMsgListType, ContactDataType, HomeFourType, HomeImgType,
    HomeOneType, HomeThreeType, HomeTwoType, InformationDataType,
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
        name: "喜敷咨讯",
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
// 关于页面的数据
const AboutListData: AboutDataType = [
    {
        id: crypto.randomUUID(),
        title: "关于我们",
        subTitle: "ABOUT US",
        mainImg: "http://39.101.72.168:81/image/examination/project/about01.jpg",
        bgImg: "http://39.101.72.168:81/image/examination/project/bgImg01.jpg",
        context: [
            {
                id: crypto.randomUUID(),
                msg: "XIFU喜敷®是源自台湾的精品科学护肤品牌，创始人Jeff是一位突破性的皮肤科专家和配方师，曾在医美行业从事多年，深悉各类皮肤症状与相关药物成分的相辅性，而后游历于东南亚国家十余年积累了深厚的皮肤外用药的研发和生产经验。",
            }, {
                id: crypto.randomUUID(),
                msg: "在各种类别的护肤品应用中，Jeff觉得应当遵循科学的护理方式，理性护肤。"
            }, {
                id: crypto.randomUUID(),
                msg: "喜敷系列产品研发过程中，正是秉承Jeff先生这种“科学护肤”的理念，依托其多年的皮肤外用药研发和生产的经验，结合亚洲人皮肤特点，对研发产品的功能定位、核心成份、核心技术严格把关，不断对产品配方和工艺进行优化和改进，打造每一款产品最好的功效。",
            }, {
                id: crypto.randomUUID(),
                msg: "使用安全、有效的产品，是辅助皮肤护理的唯一科学选项！——Jeff"
            },
        ]
    }, {
        id: crypto.randomUUID(),
        title: "发展历程",
        subTitle: "COURSE",
        mainImg: "http://39.101.72.168:81/image/examination/project/about02.jpg",
        bgImg: "http://39.101.72.168:81/image/examination/project/bgImg01.jpg",
        context: [
            {
                id: crypto.randomUUID(),
                msg: "企业理念：诚信，创新，专业，务实。",
            }, {
                id: crypto.randomUUID(),
                msg: "企业精神：敢于担当，勇于创新，与时俱进。",
            }, {
                id: crypto.randomUUID(),
                msg: "企业价值观：追求不凡，创造完美。",
            }, {
                id: crypto.randomUUID(),
                msg: "企业愿景：让每个人更快乐，更美丽"
            },
        ]
    },
];
// 联系我们页面表单集合
const ContactFormList: Array<ContactDataType> = [];
// 喜敷资讯数据
const InformationData: InformationDataType = {
    title: "喜敷资讯",
    subTitle: "INFORMATION",
    list: [
        {
            id: crypto.randomUUID(),
            month:"2019/12",
            day:"21",
            title: "学术论坛 百花齐放——“第二届粤东皮肤科高峰论坛”",
            context: "2019年12月21日，“第二届粤东皮肤科高峰论坛”暨广东省继续教育项目《儿童皮肤科诊疗新进展学习班》，在汕头市盛大召开。本次学术活动邀请了多位国内知名的皮肤专家莅临汕头授课，交流皮肤科领域的最新诊疗技术、最新科研动态、最新临床指南、最新药..."
        }, {
            id: crypto.randomUUID(),
            month:"2019/11",
            day:"30",
            title: "中西医结合会议丨关于喜敷儿科产品近期实际应用与临床反馈结果展述",
            context: "由广东省中医药学会皮肤病专业委员会、广东省中西医结合学会皮肤性病专业委员会、广东省中医药学研究促进会皮肤性病学分会主办的：“2019年广东省中医中西医结合皮肤性病学术会议-第十五届全国中医中西医结合皮肤性病研究进展学习班”，于2019年11..."
        }, {
            id: crypto.randomUUID(),
            month:"2019/11",
            day:"29",
            title: "深圳健协皮肤科会议 | 如何科学护肤，新征途，喜敷与您携手共进",
            context: "为了进一步推动慢性病皮肤病的管理，由深圳健康管理协会皮肤科专委会承办的“皮肤科医生如何做好慢性皮肤病管理”会议，于..."
        },
    ]
}
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
    ProductListData,
    AboutListData,
    ContactFormList,
    InformationData
};