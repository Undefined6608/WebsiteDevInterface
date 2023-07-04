# 项目开发日志

## 23.7.1

### 一、创建项目

在`github`上创建`WebsiteDevInterface`仓库，

使用`git clone git@github.com:Undefined6608/WebsiteDevInterface.git`将其克隆到本地

### 二、初始化项目

使用`WebStorm`打开`WebsiteDevInterface`文件夹：

打开控制台运行以下命令，进行初始化项目：

```shell
npm init -y
```

创建项目所需文件，项目结构：

![](http://39.101.72.168:81/image/examination/log/Snipaste_2023-07-01_10-44-13.png)

### 三、导入/配置依赖

> 使用的依赖/框架：
>
> `express`：项目框架
>
> `cors`：跨域第三方依赖
>
> `typescript`，`ts-node`：引入ts
>
> `nodemon`：热启动依赖，
>
> `log4js`：日志依赖
>
> `morgan`：控制台输出请求调用情况

```shell
npm install express cors --save
npm install typescript ts-node nodemon --save-dev
npm install log4js
npm install morgan
```

编写`app.ts`：

```ts
// 引入express
const express = require('express');
// 引入cors
const cors = require('cors');
// 引入morgan
const morgan = require('morgan');
// 导入错误处理中间件
const errorHandler = require('./middleware/error-handler');

// 实例化express
const app = express();
// 定义监听端口
const port = process.env.PORT || 4000;

// 定义允许跨域请求的请求源地址列表
const allowedOrigins: string[] = [
    'http://192.168.126.1:3000',
    'http://localhost:3000'
];

// 添加中间件
// 挂载cors实现跨域
app.use(cors({
    origin: (origin: string, callback) => {
        // 检查请求的来源是否在允许的列表中
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('不允许的来源'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // 允许的请求方法
}));
//挂载morgan进行监听请求并输出
app.use(morgan('dev'));
// 配置和挂载解析body请求体方法
app.use(express.json());
app.use(express.urlencoded({extended: false, limit: '20mb'}));
// 挂载统一处理服务器错误的中间件
app.use(errorHandler());

// 添加路由和处理程序
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// 启动应用,开启端口监听
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
```

编写`tsconfig.json`：

```json
{
    "compilerOptions": {
        "lib": ["ES6"],
        "module": "commonjs",
        "moduleResolution": "node",
        "outDir": "dist",
        "target": "es6",
        "sourceMap": true,
        "allowSyntheticDefaultImports": true
    },
    "include": [
        "app.ts"
    ]
}
```

在`config`中创建`config.default.ts`文件:

```ts
// 导入log4js
const log4js = require("log4js");
// 配置log4js
log4js.configure({ // 复写配置信息
    appenders: { // 配置存储日志格式
        file: { // 配置存储类型
            type: 'file',// 配置存储类型为文件类型
            filename: 'logs/app.log', // 配置日志存储位置
            maxLogSize: 10 * 1024 * 1024, // 配置日志最大为10 MB
            backups: 3, // 超出最大大小，将保存备份，备份最大3个
            compress: true, // 启用Gzip压缩备份文件
            pattern: '-yyyy-MM-dd.log' // 保存日志写入时间戳
        },
        console: { // 配置控制台输出
            type: 'console', // 输出类型
        },
    },
    categories: { // 定义不同日志分类
        default: {appenders: ['file', 'console'], level: 'info'},// 配置默认分类
    }
});
// 实例化log4js对象
export const logger = log4js.getLogger();
```

在`middleware`文件夹中创建`error-handler.ts`文件,用于处理服务器错误:

```ts
import {logger} from '../config/config.default';

module.exports = () => {
    return (err, req, res, next) => {
        logger.error(err);
        res.status(500).json({
            error: "信息错误！"
        })
    }
}
```

### 四、创建路由

在`router`文件夹中创建`index.ts`：

```ts
// 引入express
const express  = require('express');
// 创建router实例
const router = express.Router();

// 挂载子路由

// 抛出路由
export default router;
```

在`app.ts`中挂载路由，**注意：路由一般在`app.ts`的最下面，在端口监听上面**

```ts
// 添加路由和处理程序
app.use('/api', router);
```

#### 创建子路由

在`router`文件夹中创建`publicRouter.ts`、`homeRouter.ts`、`aboutRouter.ts`、`productRouter.ts`、`informationRouter.ts`,`contactRouter.ts`

将子路由挂载到主路由上，在`router/index.ts`中：

```ts
// 引入express
const express = require('express');
// 创建router实例
const router = express.Router();
// 引入子路由
import publicRouter from "./publicRouter";
import homeRouter from "./homeRouter";
import aboutRouter from "./aboutRouter";
import productRouter from "./productRouter";
import informationRouter from "./informationRouter";
import contactRouter from "./contactRouter";

/***********************挂载子路由************************/
router.use('/public', publicRouter);
router.use('/home', homeRouter);
router.use('/about', aboutRouter);
router.use('/product', productRouter);
router.use('/information', informationRouter);
router.use('/contact', contactRouter);

/****************抛出路由***************/
export default router;
```

### 五、创建控制器

在`controller`文件夹中创建`publicController.ts`、`homeController.ts`、`aboutController.ts`、`productController.ts`、`informatonController.ts`、`contactController.ts`

### 六、创建本地数据库、泛型类、工具类

在`config`文件夹中创建`PublicInterface.ts`文件

在`model`文件夹中创建`DataBase.ts`文件

在`utils`文件夹中创建`index.ts`文件

### 七、开始编写后端项目

> 因为使用的为ts，并且数据库为本地文件，那么：
>
> 编写顺序为：
>
> 	- 先根据所需数据类型进行定义数据接口，规范类型
> 	- 定义所需数据，使用第一步规范好的类型作为泛型
> 	- 定义域控制器方法，进行数据的增删改查，并返回响应数据
> 	- 在路由中调取控制器方法，并规定网络接口地址

#### I、定义返回数据格式

在`publicInterface.ts`中编写：

```ts
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
    data: any
}
```

在`utils/index.ts`中编写：

```ts
import {FAILType, ResultTypeType, SUCCESSType} from "../config/PublicInterface";

export const SUCCESS: SUCCESSType = 200;
export const FAIL: FAILType = 400;

/**
 * 使用publicInterface里定义好的类型作为泛型
 * @param code 响应值
 * @param msg 响应信息
 * @param data 响应数据
 */
export const resultType = (code: SUCCESSType | FAILType, msg: string, data: any): ResultTypeType => {
    return {
        code: code,
        msg: msg,
        data: data
    }
}
```

#### II、编写公共组件数据

##### 1、顶部logo

在`publicInterface.ts`中：

```ts
// logo的类型
export type LogoDataType = string;
```

在`DataBase.ts`中：

```ts
// 网站logo
const logoData: LogoDataType = "http://39.101.72.168:81/image/examination/project/logo.png";
```

在`publicController.ts`中：

```ts
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
```

在`publicRouter.ts`中：

```ts
//获取logo
publicRouter.get('/logo', getLogo);
```

##### 2、顶部副标题

在`publicInterface.ts`中：

```ts
// 副标题的类型
export type SubTitleType = string;
```

在`DataBase.ts`中：
```ts
// 网站副标题
const subTitle: SubTitleType = "-喜于心 敷于形";
```

在`publicController.ts`中：
```ts
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
```

在`publicRouter.ts`中：
```ts
// 获取副标题
publicRouter.get('/subTitle',getSubTitle);
```



##### 3、导航列表

在`publicInterface.ts`中：

```ts
// 导航按钮类型
export type NavItemType = {
    id: string,
    name: string,
    subName: string,
    url: string
}
```

在`DataBase.ts`中：

```ts
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
```

在`publicController.ts`中：

```ts
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
```

在`publicRouter.ts`中：

```ts
// 获取头部跳转按钮列表
publicRouter.get('/navList',getNavList);
```



##### 4、页面头部图片

在`publicInterface.ts`中：

```ts
// 页面图片类型
export type PageTopImg = {
    id: string,
    imgUrl: string,
    alt: string
}
```

在`DataBase.ts`中：

> 让图片的id和页面id一致，用于查询图片

```ts
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
```

在`publicController.ts`中：

```ts
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
        res.send(resultType(FAIL,"图片不存在！"));
        // 直接抛出logo地址
        res.send(resultType(SUCCESS, "获取成功！", {
            list: navList
        }))
    } catch (e) {
        next(e);
    }
}
```

在`publicRouter.ts`中：

```ts
// 获取各个页面头部图片
publicRouter.get('/topImg',getTopImg);
```



##### 5、底部信息列表

在`publicInterface.ts`中：

```ts
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
```

在`DataBase.ts`中：

```ts
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
```

在`publicController.ts`中：

```ts
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
```

在`publicRouter.ts`中：

```ts
// 获取页面底部信息列表
publicRouter.get('/bottomMsgList', getBottomMsgList);
```

## 23.7.3

### 一、继续编写

#### I、编写首页数据接口

##### 1、编写首页第一个模块数据

在`publicInterface.ts`中：

```ts
// 主页第一个模块数据类型
export type HomeOneType = {
    title: string,
    subTitle: string,
    imgUrl: string,
    context: string[],
    btnMsg: string,
    link: string
};
```

在`DataBase.ts`中：

```ts
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
}
```

在`homeController.ts`中：

```ts
// 首页第一个模块数据控制器
export const getHomeOne = (req, res, next) => {
    try {
        // 直接抛出数据
        res.send(resultType(SUCCESS, "获取成功！", HomeOneData));
    } catch (e) {
        next(e);
    }
};
```

在`homeRouter.ts`中：

```ts
//首页第一个模块数据路由
homeRouter.get('/homeOne', getHomeOne);
```

##### 2、编写首页图片列表数据

在`publicInterface.ts`中：

```ts
// 主页图片列表类型
export type HomeImgType = {
    imgUrl: string[]
};
```

在`DataBase.ts`中：

```ts
// 主页上的图片集合
const HomeImgList: HomeImgType = {
    imgUrl:[
        "http://39.101.72.168:81/image/examination/project/HomeImg01.jpg",
        "http://39.101.72.168:81/image/examination/project/homeImg02.jpg"
    ]
}
```

在`homeController.ts`中：

```ts
// 获取首页图片集合
export const getHomeImgList = (req, res, next) => {
    try {
        // 直接抛出图片数据
        res.send(resultType(SUCCESS, "获取成功！", HomeImgList));
    } catch (e) {
        next(e);
    }
};
```

在`homeRouter.ts`中：

```ts
// 首页图片集合
homeRouter.get('/getHomeImgList',getHomeImgList);
```

##### 3、编写首页第二个模块数据

在`publicInterface.ts`中：

```ts
// 主页第二个模块数据类型
export type HomeTwoType = {
    title: string,
    subTitle: string,
    type:Array<{
        id:string,
        name:string
    }>,
    productList:Array<{
        id:string,
        typeId:string,
        itemImg:string,
        name:string
    }>
}
```

在`DataBase.ts`中：

```ts
// 主页第二个模块数据
const HomeTwoData: HomeTwoType = {
    title: "产品中心",
    subTitle: "PRODUCT CENTER",
    type: [
        {
            id:'p1',
            name:"喜敷 | 成人护理系列"
        }
    ],
    productList: [
        {
            id: crypto.randomUUID(),
            typeId:'p1',
            itemImg: "http://39.101.72.168:81/image/examination/project/product1.jpg",
            name: "XIFU 红豚护理软膏"
        }, {
            id: crypto.randomUUID(),
            typeId:'p1',
            itemImg: "http://39.101.72.168:81/image/examination/project/product2.jpg",
            name: "XIFU喜敷 水杨酸焕颜面膜 100g"
        }, {
            id: crypto.randomUUID(),
            typeId:'p1',
            itemImg: "http://39.101.72.168:81/image/examination/project/product3.jpg",
            name: "XIFU喜敷 氨基酸洁面慕斯 100ml"
        }, {
            id: crypto.randomUUID(),
            typeId:'p1',
            itemImg: "http://39.101.72.168:81/image/examination/project/product4.jpg",
            name: "XIFU医用冷敷贴膜5片/盒"
        }, {
            id: crypto.randomUUID(),
            typeId:'p1',
            itemImg: "http://39.101.72.168:81/image/examination/project/product5.jpg",
            name: "XIFU 喜敷 医用多肽水凝胶 100ml"
        }, {
            id: crypto.randomUUID(),
            typeId:'p1',
            itemImg: "http://39.101.72.168:81/image/examination/project/product6.jpg",
            name: "XIFU 喜敷 清痘冷敷凝胶  15g"
        }
    ]
}
```

在`homeController.ts`中：

```ts
// 首页第二个模块数据控制器
export const getHomeTwo = (req, res, next) => {
    try {
        // 直接抛出数据
        res.send(resultType(SUCCESS, "获取成功！", HomeTwoData));
    } catch (e) {
        next(e);
    }
};
```

在`homeRouter.ts`中：

```ts
//首页第二个模块数据路由
homeRouter.get('/homeOne', getHomeTwo);
```

##### 4、编写首页第三个模块数据

在`publicInterface.ts`中：

```ts
// 主页第三个模块数据类型
export type HomeThreeType = {
    oneTitle: string,
    oneSubTitle: string,
    twoTitle: string,
    twoSubTitle: string
};
```

在`DataBase.ts`中：

```ts
// 主页第二个模块数据
const HomeThreeData: HomeThreeType = {
    oneTitle: "XIFU  喜敷",
    oneSubTitle: "----- 源自台湾知名化工专家深耕多年的精心之作 -----",
    twoTitle: "【专业科学护肤品牌】",
    twoSubTitle: "专注问题肌肤的护理探研  |  引领专业成就科技之美  |  打造护肤新势力"
}
```

在`homeController.ts`中：

```ts
// 首页第三个模块数据控制器
export const getHomeThree = (req, res, next) => {
    try {
        // 直接抛出数据
        res.send(resultType(SUCCESS, "获取成功！", HomeThreeData));
    } catch (e) {
        next(e);
    }
};
```

在`homeRouter.ts`中：

```ts
//首页第三个模块数据路由
homeRouter.get('/homeThree', getHomeThree);
```

##### 5、编写首页第四个模块数据

在`publicInterface.ts`中：

```ts
// 主页第四个模块数据类型
export type HomeFourType = {
    title: string,
    subTitle: string,
    list: Array<{
        id: string
        icon: string,
        mtd: string,
        val: string
    }>
};
```

在`DataBase.ts`中：

```ts
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
```

在`homeController.ts`中：

```ts
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
```

在`homeRouter.ts`中：

```ts
//首页第四个模块数据路由
homeRouter.get('/homeFour', getHomeFour);
```

#### II、编写产品中心数据接口

在`DataBase.ts`中：

```ts
// 产品页面数据
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
```

在`productController.ts`中：

```ts
// 引入工具方法
import {resultType, SUCCESS} from "../utils";
// 引入数据源
import {ProductListData} from "../model/DataBase";
// 引入日志输出工具
import {logger} from "../config/config.default";

/***************定义控制器方法*******************/
// 产品列表
export const productList = (req, res, next) => {
    try {
        // 直接抛出数据
        res.send(resultType(SUCCESS, "获取成功！", ProductListData));
    } catch (e) {
        next(e);
    }
};
```

在`productRouter.ts`中：

```ts
// 引入express
const express = require('express');
// 创建router实例
const productRouter = express.Router();
// 引入控制器
import {productList} from "../controller/productController";

/***************定义路由*****************/
productRouter.get('/productList', productList);

/****************抛出路由***************/
export default productRouter;
```

## 23.7.4

### 一、继续编写

#### I、编写关于喜敷页面接口

在`publicInterface.ts`中：

```ts
// 关于页面数据类型
export type AboutDataType = Array<{
    id: string,
    title: string,
    subTitle: string,
    mainImg: string,
    bgImg: string,
    context: Array<{
        id: string,
        msg: string
    }>
}>;
```

在`DataBase.ts`中：

```ts
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
```

在`aboutController.ts`中：

```ts
// 引入工具方法
import {resultType, SUCCESS} from "../utils";
// 引入数据源
import {AboutListData, logoData} from "../model/DataBase";
// 引入日志输出工具
import {logger} from "../config/config.default";

/***************定义控制器方法*******************/
export const getAboutList = (req, res, next) => {
    try {
        res.send(resultType(SUCCESS, "获取成功！", {
            list: AboutListData
        }))
    } catch (e) {
        next(e);
    }
}
```

在`aboutRouter.ts`中：

```ts
// 引入express
const express = require('express');
// 创建router实例
const aboutRouter = express.Router();
// 引入控制器
import {getAboutList} from "../controller/aboutController";

/***************定义路由*****************/
aboutRouter.get('/getAboutList', getAboutList);
/****************抛出路由***************/
export default aboutRouter;
```

#### II、编写联系我们页面接口

在`publicInterface.ts`中：

```ts
// 联系我们表单数据类型
export type ContactDataType = {
    id: string,
    name: string,
    context: string,
    phone: string,
    email: string
}
```

在`DataBase.ts`中：

```ts
// 联系我们页面表单集合
const ContactFormList: Array<ContactDataType> = [];
```

在`contactController.ts`中：

```ts
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
```

在`contactRouter.ts`中：

```ts
// 引入express
const express = require('express');
// 创建router实例
const contactRouter = express.Router();
// 引入控制器
import {pushForm} from "../controller/contactController";

/***************定义路由*****************/
contactRouter.post('/pushForm', pushForm);

/****************抛出路由***************/
export default contactRouter;
```

#### III、编写喜敷新闻资讯接口

在`publicInterface.ts`中：

```ts
// 喜敷资讯数据类型
export type InformationDataType = {
    title: string,
    subTitle: string,
    list: Array<{
        id: string,
        month: string,
        day: string,
        title: string,
        context: string
    }>
};
```

在`DataBase.ts`中：

```ts
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
};
```

在`informationController.ts`中：

```ts
// 引入工具方法
import {resultType, SUCCESS} from "../utils";
// 引入数据源
import {InformationData, logoData} from "../model/DataBase";
// 引入日志输出工具
import {logger} from "../config/config.default";

/***************定义控制器方法*******************/
export const getInformationData = (req, res, next) => {
    try {
        res.send(resultType(SUCCESS, "获取成功！", InformationData));
    } catch (e) {
        next(e);
    }
}
```

在`informationRouter.ts`中：

```ts
// 引入express
const express = require('express');
// 创建router实例
const informationRouter = express.Router();
// 引入控制器
import {getInformationData} from "../controller/informationController";

/***************定义路由*****************/
informationRouter.get('/getInformationData', getInformationData);

/****************抛出路由***************/
export default informationRouter;
```

