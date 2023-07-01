import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 4000;

// 定义允许跨域请求的请求源地址列表
const allowedOrigins: string[] = [
    'http://192.168.126.1:3000',
    'http://localhost:3000'
];

// 挂载cors实现跨域=
// 添加中间件
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
app.use(exports)
app.use(express.json());

// 添加路由和处理程序
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// 启动应用
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});