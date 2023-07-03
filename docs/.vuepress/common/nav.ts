// nav
// @ts-ignore
import javaNav from '../nav/javaNav'
// @ts-ignore
import databaseNav from '../nav/databaseNav'
// @ts-ignore
import frameNav from '../nav/frameNav'
// @ts-ignore
import springNav from '../nav/springNav'
// @ts-ignore
import developer from '../nav/developer'
// 微服务统一放在框架里
// import cloudNav from '../nav/cloudNav'
// @ts-ignore
import toolNav from '../nav/toolNav'
// @ts-ignore
import frontEnd from '../nav/frontEnd'
// @ts-ignore
import indexNav from '../nav/indexNav'
// @ts-ignore
import moreNav from '../nav/moreNav'

export default [
  {
    text: '首页', link: '/'
  },
  javaNav,   //Java导航
  databaseNav,  // 数据库导航
  frameNav,   // 框架导航
  springNav,  // Spring生态导航
  developer,
  // cloudNav,  // 微服务导航
  toolNav,  // 工具导航
  frontEnd,  // 前端导航
  moreNav,   // 更多导航
  indexNav,   //索引导航
]
