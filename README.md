# 批量下载sam分割的图片
提供在sam demo上批量下载生成图片的方法。

# 依赖
nodejs v16+

# 步骤
1. 打开sam demo网址：https://segment-anything.com/demo，上传需要切图的图片。
2. 执行自动切图。
3. 查看切图结果。
4. 打开浏览器控制台，复制get_images_content.js中的脚本到控制台执行，并将执行结果拷贝到images.json中保存。
5. 执行```npm run start```，切图将生成到dist目录下。
<p float="left">
  <img src="assets/manual.png?raw=true" />
</p>
