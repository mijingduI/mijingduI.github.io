import { penName, footerTitle } from '../common/info'

interface Footer {
  createYear: number, // 博客创建年份
  copyrightInfo: string // 博客版权信息，支持 a 标签
}

export default <Footer> {
  // 页脚信息
  createYear: 2023,
  copyrightInfo:
    penName + ' | ' + footerTitle + '<br> <a href="https://github.com/mijingduI/mijingdui.github.io/blob/master/LICENSE" target="_blank">MIT License</a>',
}
