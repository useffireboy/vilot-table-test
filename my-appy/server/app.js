const express = require('express');
const { chromium } = require('playwright');
const data = require('./data');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const cron = require('node-cron');

const app = express();
const port = 3000;
let page = null;

app.use(express.static(path.join(__dirname, '../dist')))

app.use(express.json());
// 定义文件保存目录
const fileDir = path.join(__dirname, 'files');

// 确保文件目录存在
if (!fs.existsSync(fileDir)) {
  fs.mkdirSync(fileDir);
}

// 封装触发按钮点击并等待结果的方法
async function triggerButtonAndWait(data) {
  if (page) {
    // 将数据传递给页面
    await page.evaluate((data) => {
      window.renderERDiagram(data); // 假设页面上有一个渲染ER图的方法
    }, data);

    // 等待页面渲染完成并获取Base64图片数据
    const base64Image = await page.evaluate(() => {
      return window.getERDiagramAsBase64(); // 调用前端Promise方法
      // return new Promise((resolve) => {
      //   window.getERDiagramAsBase64((base64Imag) => {
      //     console.log("生成图片啦", base64Imag)
      //     resolve(base64Imag)
      //   })
      // });
    });

    return base64Image;
  } else {
    throw new Error('Page is not ready');
  }
}

// 定义API接口，当触发该接口时，执行页面上的按钮点击操作并等待结果
app.post('/click-button', async (req, res) => {
  try {
    const data = req.body;
    const base64Image = await triggerButtonAndWait(data);
    // 生成唯一文件名
    const fileName = `er_diagram_${uuidv4()}.txt`;
    const filePath = path.join(fileDir, fileName);
    fs.writeFileSync(filePath, base64Image, 'utf8');
    res.json({ filePath, fileName });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 定义API接口，当触发该接口时，执行页面上的按钮点击操作
app.get('/click-button_get', async (req, res) => {
  try {
    let data2 = data;
    const base64Image = await triggerButtonAndWait(data2);
    console.log('[ base64Image ]-75-「index」', base64Image);
    // 生成唯一文件名
    const fileName = `er_diagram_${uuidv4()}.txt`;
    const filePath = path.join(fileDir, fileName);
    fs.writeFileSync(filePath, base64Image, 'utf8');
    res.json({ filePath,fileName });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// 提供文件下载接口
app.get('/download', (req, res) => {
  const fileName = req.query.fileName;
  const filePath = path.join(fileDir, fileName);

  if (fs.existsSync(filePath)) {
    res.download(filePath, (err) => {
      if (err) {
        res.status(500).send('Error downloading file');
      }
    });
  } else {
    res.status(404).send('File not found');
  }
});

// 定期清理文件目录中的旧文件
cron.schedule('0 0 */5 * *', () => { //每5天检查一次
  const files = fs.readdirSync(fileDir);
  const now = Date.now();

  files.forEach(file => {
    const filePath = path.join(fileDir, file);
    const stats = fs.statSync(filePath);

    // 如果文件的创建时间超过半个月（15天），删除文件
    if (now - stats.birthtimeMs > 15 * 24 * 60 * 60 * 1000) { 
      fs.unlinkSync(filePath);
    }
  });

  console.log('Old files cleaned up');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// 启动Playwright浏览器并打开指定页面
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('http://localhost:3000');
  console.log('Browser opened and navigated to http://localhost:3000');
})();