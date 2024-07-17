const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

app.post('/login', (req, res) => {
    // 检查用户名和密码
    const { username, password } = req.body;
    // 假设验证逻辑成功，生成 JWT
    const token = jwt.sign({ username }, 'wyy_secret_key');
    res.json({ token });
    console.log('收到登录');
});

app.get('/protected', verifyToken, (req, res) => {
    res.json({ message: '你的token我认可了' });
});

// JWT 验证中间件
function verifyToken(req, res, next) {
    // 从请求头中获取 JWT
    console.log('req', req);
    const token = req.headers['authorization'];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // 验证 JWT
    jwt.verify(token, 'wyy_secret_key', (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: 'Failed to authenticate token' });
        }
        // 将解码后的用户信息保存在请求对象中
        req.user = decoded;
        next();
    });
}

app.listen(3000, () => {
    console.log('端口3000打开服务器成功');
});

console.log('你好');