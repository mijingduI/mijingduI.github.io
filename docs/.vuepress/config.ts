import { resolve } from 'path'
import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
// @ts-ignore
import dayjs from 'dayjs'
import baiduCode from './config/baiduCode' // 百度统计hm码
import htmlModules from './config/htmlModules' // 自定义插入的html块
// @ts-ignore
import plugins from "./config/plugins";
// @ts-ignore
import head from "./config/head";
// @ts-ignore
import themeConfig from "./config/themeConfig";
import { penName, title } from "./common/info";


export default defineConfig4CustomTheme({
  theme: "vdoing", // 使用npm包主题
  // 如果使用 locales 的 title 和 description，则下方的 title 和 description 失效
  // title: penName + title,
  // description: 'Young Kbt个人博客, VuePress搭建, 使用了 Vdoing 主题, 学习Java, Web, 框架, 微服务, 工具, 前端等相关知识, 记录生活和技术路程, 同时分享编程技巧。',
  // lang: 'zh-CN',
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 显示代码块的行号
    extractHeaders: ["h2", "h3", "h4"], // 支持 h2、h3、h4 标题
  },
  // 多语言支持
  locales: {
    "/": {
      lang: "zh-CN",
      title: penName + title,
      description:
          "互联网技术博客，包含Java、C#、Golang、易语言、游戏逆向、汇编等技术文章。",
    },
    // '/en/': {
    //   lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
    //   title: penName + title,
    //   description: 'Young Kbt personal blog, built by vuepress, uses the vdoing theme to learn Java, web, framework, microservices, tools, front-end and other related knowledge, record life and technology journey, and share programming skills at the same time'
    // }
  },
  // 监听文件变化并重新构建
  extraWatchFiles: [".vuepress/config.ts"],
  themeConfig,
  head,
  plugins,
});



