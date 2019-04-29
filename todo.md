
## 2019-4-25
### 梅思远
- [x] 建立本仓库，用于存储进度信息和代码草稿
- [x] 布置分别尝试制作demo的任务

### 谢强
- [x] 添加header
- [x] 添加carousel
- [x] 添加card部分

### 徐鑫雨
- [x] 头部导航栏制作。
- [x] 轮播图制作。
  - [x] 轮播图切换平滑化。
  - [x] 切换轮播图的tab。
- [x] bugfix: 导航栏与轮播图js产生冲突，只有先调用的js能生效。

## 2019-4-26
### 梅思远
- [x] 建立MySQL数据表草稿

### 谢强
- [x] 修改header
- [x] 修改carousel
- [x] 修改card部分
- [x] 添加footer

### 徐鑫雨
- [x] 使用Bootstrap框架重构了网页，实现响应式布局
- [x] 制作导航栏、搜索模块、轮播图、卡片、トピック模块以及footer

## 2019-4-27
### 梅思远
- [x] 申请bizplus.dynami.tech的https证书
- [x] 在服务器上使用git部署React应用框架
- [x] 配置nginx代理 https://bizplus.dynami.tech/ 部署方法如下
```sh
cd /home/uftp/Bizplus
npm run build
service nginx restart
```

### 谢强
- [x] 修改header
- [x] 修改carousel
- [x] 修改card部分
- [x] 添加news
- [x] 添加from
- [x] 添加footer

### 徐鑫雨
- [x] 增加语言切换按钮、新闻展示模块、返回页首按钮
- [x] 修复之前累计的bug

## 2019-4-28
### 梅思远、谢强、徐鑫雨
- [x] 重新商讨方案，确定设计风格，并使用同一个工程开始编码
- [ ] 制作header
  - [x] 制作桌面端header布局
  - [ ] 制作移动端header布局

## 2019-4-29
### 梅思远
- [x] 编写header所需要的三个i18n静态json
- [x] 实现网页加载时获取对应locale的json的逻辑
- [x] 实现更新locale函数
- [x] 为demo网站配置nginx代理， https://bizplus.dynami.tech/demo/index.html 部署方法如下
```sh
cd /home/uftp/ProjectTODO/
git pull
service nginx restart
```
- [x] 修改nginx实现本地测试json的跨域
- [x] 修改nginx取消网站缓存任何资源，预防网页缓存产生的测试问题
- [x] 修改ProjectTODO的结构，整合三个人之前的md变成新的todo.md，移除老md

### 谢强
- [x] 优化桌面端header的样式
- [x] 优化carousel的样式
- [x] 添加about us
- [x] 添加work-card

## 2019-4-30
### 梅思远
- [ ] 商讨header及子界面的内容呈现结构
- [ ] 商讨将子界面的数据结构和样式归一化，目的是增加页面的整齐度以及减少制作成品的工期
- [ ] 商讨静态数据/数据库可修改数据/废弃的数据的内容

### 谢强
- [x] 添加section分界栏
- [x] 目标区域添加蒙版
- [x] 添加页面移动动画
- [ ] 首页serve区域
- [ ] 首页文化(blog)区域
- [ ] 首页team区域 

### 徐鑫雨
