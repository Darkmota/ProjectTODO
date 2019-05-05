
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
- [x] 商讨header及子界面的内容呈现结构
- [ ] 商讨将子界面的数据结构和样式归一化，目的是增加页面的整齐度以及减少制作成品的工期
- [ ] 商讨静态数据/数据库可修改数据/废弃的数据的内容

### 谢强
- [x] 添加section分界栏
- [x] 目标区域添加蒙版
- [x] 添加页面移动动画
- [x] 首页serve区域
- [ ] 首页文化(blog)区域

- [x] 首页footer区域
- [x] map
- [x] header优化

### 徐鑫雨
- [x] 设置网页断点
- [x] 设计手机端、平板端样式
- [x] 添加手机端、平板端导航栏折叠按钮
- [x] 添加平板端header
- [ ] 优化平板端折叠菜单栏

## 2019-5-1
### 谢强
- [x] 首页布局
- [x] 首页文化(news/blog)区域
- [x] header优化,造作事件
- [x] 移动端适配

## 2019-5-1

### 徐鑫雨
- [x] 合并demo和断点测试代码
- [x] 添加手机端header
- [x] 优化手机端（<=760px）布局
- [x] 手机端将header的搜索、切换语言按钮收纳至折叠菜单
- [x] 优化footer在手机、pad端的样式
- [ ] 优化折叠菜单展开/收起的动画
- [ ] 实现手机、pad端折叠菜单内导航栏的点击事件
- [ ] 优化整个页面在手机、pad端的样式
  

## 2019-5-2
### 梅思远
- [x] 将目前制作的所有内容i18n化

### 谢强
- [x] 移动端适配
### 徐鑫雨

- [x] 添加二级菜单动画效果
- [x] 修改移动端布局
- [x] 二级菜单展开所有子元素时可滑动二级菜单
- [x] 手机端二级菜单添加搜索、切换语言按钮
- [x] 修改footer样式

## 2019-5-3

###谢强

- [x] 走马灯标语-手机-pad-PC