// 引入express
const express = require('express');
// 引入cors
const cors = require('cors');
// 引入morgan
const morgan = require('morgan');
// 导入错误处理中间件
const errorHandler = require('./middleware/error-handler');
// 引入日志配置文件
import {logger} from "./config/config.default";
// 引入路由
import router from './router';

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
    credentials: true // 允许携带凭证（如 Cookie）
}));
//挂载morgan进行监听请求并输出
app.use(morgan('dev'));
// 配置和挂载解析body请求体方法
app.use(express.json());
app.use(express.urlencoded({extended: false, limit: '20mb'}));
// 挂载统一处理服务器错误的中间件
app.use(errorHandler());

// 添加路由和处理程序
app.use('/api', router);

// 启动应用,开启端口监听
app.listen(port, () => {
    logger.warn(`Server is running on port ${port}`);
});