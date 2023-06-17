const fs = require('fs');
// 生成路径
const outputDir = './dist';
// 图片base64url数组
const { urls } = require('./images.json');

for (let index = 0; index < urls.length; index++) {
    const url = urls[index];
    const imgPath = `${outputDir}/${index}.png`;
    const base64 = url.replace(/^data:image\/(png|jpg|jpeg);base64,/, '');
    const dataBuffer = new Buffer(base64, 'base64');
    fs.writeFileSync(imgPath, dataBuffer);
}
console.log(`${urls.length}张图片生成到[${outputDir}]目录完毕`);