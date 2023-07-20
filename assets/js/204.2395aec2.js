(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{536:function(t,a,i){"use strict";i.r(a);var r=i(7),v=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("笔记")]),t._v(" "),a("p",[t._v("欢迎来到 Nginx 的知识体系进行学习，本内容将介绍 Nginx 的来源、优点，功能等，请慢慢品用。")]),t._v(" "),a("div",{staticClass:"custom-block right"},[a("p",[t._v("2021-11-26 @Young Kbt")])])]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#背景介绍"}},[t._v("背景介绍")]),a("ul",[a("li",[a("a",{attrs:{href:"#名词解释"}},[t._v("名词解释")])])])]),a("li",[a("a",{attrs:{href:"#常见服务器对比"}},[t._v("常见服务器对比")]),a("ul",[a("li",[a("a",{attrs:{href:"#iis"}},[t._v("IIS")])]),a("li",[a("a",{attrs:{href:"#tomcat"}},[t._v("Tomcat")])]),a("li",[a("a",{attrs:{href:"#apache"}},[t._v("Apache")])]),a("li",[a("a",{attrs:{href:"#lighttpd"}},[t._v("Lighttpd")])]),a("li",[a("a",{attrs:{href:"#其他的服务器"}},[t._v("其他的服务器")])])])]),a("li",[a("a",{attrs:{href:"#nginx的优点"}},[t._v("Nginx的优点")]),a("ul",[a("li",[a("a",{attrs:{href:"#速度更快、并发更高"}},[t._v("速度更快、并发更高")])]),a("li",[a("a",{attrs:{href:"#配置简单-扩展性强"}},[t._v("配置简单，扩展性强")])]),a("li",[a("a",{attrs:{href:"#高可靠性"}},[t._v("高可靠性")])]),a("li",[a("a",{attrs:{href:"#热部署-核心"}},[t._v("热部署(核心)")])]),a("li",[a("a",{attrs:{href:"#成本低、bsd许可证"}},[t._v("成本低、BSD许可证")])])])]),a("li",[a("a",{attrs:{href:"#nginx的功能特性及常用功能"}},[t._v("Nginx的功能特性及常用功能")]),a("ul",[a("li",[a("a",{attrs:{href:"#基本http服务"}},[t._v("基本HTTP服务")])]),a("li",[a("a",{attrs:{href:"#高级http服务"}},[t._v("高级HTTP服务")])]),a("li",[a("a",{attrs:{href:"#邮件服务"}},[t._v("邮件服务")])]),a("li",[a("a",{attrs:{href:"#nginx常用的功能模块"}},[t._v("Nginx常用的功能模块")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"背景介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景介绍"}},[t._v("#")]),t._v(" 背景介绍")]),t._v(" "),a("p",[t._v("Nginx（engine x）一个具有高性能的【HTTP】和【反向代理】的【WEB 服务器】，同时也是一个【POP3/SMTP/IMAP 代理服务器】，是由伊戈尔·赛索耶夫(俄罗斯人)使用 C 语言编写的，Nginx 的第一个版本是 2004 年 10 月 4 号发布的 0.1.0 版本。另外值得一提的是伊戈尔·赛索耶夫将 Nginx 的源码进行了开源，这也为 Nginx 的发展提供了良好的保障。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/Nginx/20211125232114.png",alt:"1573470187616"}})]),t._v(" "),a("h3",{attrs:{id:"名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),a("ol",[a("li",[t._v("WEB 服务器")])]),t._v(" "),a("p",[t._v("WEB 服务器也叫网页服务器，英文名叫 Web Server，主要功能是为用户提供网上信息浏览服务。")]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("HTTP")])]),t._v(" "),a("p",[t._v("HTTP 是超文本传输协议的缩写，是用于从 WEB 服务器传输超文本到本地浏览器的传输协议，也是互联网上应用最为广泛的一种网络协议。HTTP 是一个客户端和服务器端请求和应答的标准，客户端是终端用户，服务端是网站，通过使用 Web 浏览器、网络爬虫或者其他工具，客户端发起一个到服务器上指定端口的 HTTP 请求。")]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("POP3/SMTP/IMAP")])]),t._v(" "),a("p",[t._v("POP3(Post Offic Protocol 3)邮局协议的第三个版本；")]),t._v(" "),a("p",[t._v("SMTP(Simple Mail Transfer Protocol)简单邮件传输协议；")]),t._v(" "),a("p",[t._v("IMAP(Internet Mail Access Protocol)交互式邮件存取协议；")]),t._v(" "),a("p",[t._v("通过上述名词的解释，我们可以了解到 Nginx 也可以作为电子邮件代理服务器。")]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[t._v("反向代理")])]),t._v(" "),a("p",[t._v("正向代理")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/Nginx/20211125233028.png",alt:"1573489359728"}})]),t._v(" "),a("p",[t._v("反向代理")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/Nginx/20211125233030.png",alt:"1573489653799"}})]),t._v(" "),a("p",[t._v("正向代理的 Proxy 是多对一，方向代理的 Proxy 是一对多。")]),t._v(" "),a("h2",{attrs:{id:"常见服务器对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见服务器对比"}},[t._v("#")]),t._v(" 常见服务器对比")]),t._v(" "),a("p",[t._v("在介绍这一节内容之前，我们先来认识一家公司叫 Netcraft。")]),t._v(" "),a("blockquote",[a("p",[t._v("Netcraft 公司于 1994 年底在英国成立，多年来一直致力于互联网市场以及在线安全方面的咨询服务，其中在国际上最具影响力的当属其针对网站服务器、SSL市场所做的客观严谨的分析研究，公司官网每月公布的调研数据（Web Server Survey）已成为当今人们了解全球网站数量以及服务器市场分额情况的主要参考依据，时常被诸如华尔街杂志，英国 BBC，Slashdot 等媒体报道或引用。")])]),t._v(" "),a("p",[t._v("我们先来看一组数据，我们先打开 Nginx 的官方网站  "),a("a",{attrs:{href:"http://nginx.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://nginx.org/"),a("OutboundLink")],1),t._v("，找到 Netcraft 公司公布的数据，对当前主流服务器产品进行介绍。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/Nginx/20211125233039.png",alt:"1581394945120"}})]),t._v(" "),a("p",[t._v("上面这张图展示了 2019 年全球主流 Web 服务器的市场情况，其中有 Apache、Microsoft-IIS、google Servers、Nginx、Tomcat 等，而我们在了解新事物的时候，往往习惯通过类比来帮助自己理解事物的概貌。可以看出绿色线的 nginx 在 2019 年已经领现全球了。")]),t._v(" "),a("p",[t._v("所以下面我们把几种常见的服务器来给大家简单介绍下：")]),t._v(" "),a("h3",{attrs:{id:"iis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iis"}},[t._v("#")]),t._v(" IIS")]),t._v(" "),a("p",[t._v("全称(Internet Information Services)即互联网信息服务，是由微软公司提供的基于 Windows 系统的互联网基本服务。Windows 作为服务器在稳定性与其他一些性能上都不如类 UNIX 操作系统，因此在需要高性能 Web 服务器的场合下，IIS 可能就会被「冷落」.")]),t._v(" "),a("h3",{attrs:{id:"tomcat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tomcat"}},[t._v("#")]),t._v(" Tomcat")]),t._v(" "),a("p",[t._v("Tomcat是一个运行 Servlet 和 JSP 的 Web 应用软件，Tomcat 技术先进、性能稳定而且开放源代码，因此深受 Java 爱好者的喜爱并得到了部分软件开发商的认可，成为目前比较流行的 Web 应用服务器。但是 Tomcat 天生是一个重量级的 Web 服务器，对静态文件和高并发的处理比较弱。")]),t._v(" "),a("h3",{attrs:{id:"apache"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#apache"}},[t._v("#")]),t._v(" Apache")]),t._v(" "),a("p",[t._v("Apache 的发展时期很长，同时也有过一段辉煌的业绩。从上图可以看出大概在 2014 年以前都是市场份额第一的服务器。Apache 有很多优点，如稳定、开源、跨平台等。但是它出现的时间太久了，在它兴起的年代，互联网的产业规模远远不如今天，所以它被设计成一个重量级的、不支持高并发的 Web 服务器。在 Apache 服务器上，如果有数以万计的并发 HTTP 请求同时访问，就会导致服务器上消耗大量能存，操作系统内核对成百上千的 Apache 进程做进程间切换也会消耗大量的 CPU 资源，并导致 HTTP 请求的平均响应速度降低，这些都决定了 Apache 不可能成为高性能的 Web 服务器。这也促使了 Lighttpd 和 Nginx 的出现。")]),t._v(" "),a("h3",{attrs:{id:"lighttpd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lighttpd"}},[t._v("#")]),t._v(" Lighttpd")]),t._v(" "),a("p",[t._v("Lighttpd 是德国的一个开源的 Web 服务器软件，它和 Nginx 一样，都是轻量级、高性能的 Web 服务器，欧美的业界开发者比较钟爱 Lighttpd，而国内的公司更多的青睐 Nginx，同时网上 Nginx 的资源要更丰富些。")]),t._v(" "),a("h3",{attrs:{id:"其他的服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他的服务器"}},[t._v("#")]),t._v(" 其他的服务器")]),t._v(" "),a("p",[t._v("Google Servers，Weblogic, Webshpere(IBM) ......")]),t._v(" "),a("p",[t._v("Google Servers 是闭源的，市面上很少看到。Weblogic 和 Webshpere(IBM) 使用起来都需要支付一定费用。")]),t._v(" "),a("p",[t._v("经过各个服务器的对比，种种迹象都表明，Nginx 将以性能为王。这也是我们为什么选择 Nginx 的理由。")]),t._v(" "),a("h2",{attrs:{id:"nginx的优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx的优点"}},[t._v("#")]),t._v(" Nginx的优点")]),t._v(" "),a("h3",{attrs:{id:"速度更快、并发更高"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#速度更快、并发更高"}},[t._v("#")]),t._v(" 速度更快、并发更高")]),t._v(" "),a("p",[t._v("单次请求或者高并发请求的环境下，Nginx 都会比其他 Web 服务器响应的速度更快。一方面在正常情况下，单次请求会得到更快的响应，另一方面，在高峰期(如有数以万计的并发请求)，Nginx 比其他 Web 服务器更快的响应请求。Nginx 之所以有这么高的并发处理能力和这么好的性能原因在于 Nginx 采用了多进程和 I/O 多路复用(epoll)的底层实现。")]),t._v(" "),a("h3",{attrs:{id:"配置简单-扩展性强"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置简单-扩展性强"}},[t._v("#")]),t._v(" 配置简单，扩展性强")]),t._v(" "),a("p",[t._v("Nginx 的设计极具扩展性，它本身就是由很多模块组成，这些模块的使用可以通过配置文件的配置来添加。这些模块有官方提供的也有第三方提供的模块，如果需要完全可以开发服务自己业务特性的定制模块。")]),t._v(" "),a("h3",{attrs:{id:"高可靠性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高可靠性"}},[t._v("#")]),t._v(" 高可靠性")]),t._v(" "),a("p",[t._v("Nginx 采用的是多进程模式运行，其中有一个 master 主进程和 N 多个 worker 进程，一个 master 管理多个 worker，worker 进程的数量我们可以手动设置，每个 worker 进程之间都是相互独立提供服务，并且 master 主进程可以在某一个 worker 进程出错时，快速去「拉起」新的 worker 进程提供服务。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/Nginx/20211125235339.png",alt:"image-20211125235334704"}})]),t._v(" "),a("h3",{attrs:{id:"热部署-核心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#热部署-核心"}},[t._v("#")]),t._v(" 热部署(核心)")]),t._v(" "),a("p",[t._v("现在互联网项目都要求以 7 * 24 小时进行服务的提供，针对于这一要求，Nginx 也提供了热部署功能，即可以在 Nginx 不停止的情况下，对 Nginx 进行文件升级、更新配置和更换日志文件等功能。")]),t._v(" "),a("h3",{attrs:{id:"成本低、bsd许可证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#成本低、bsd许可证"}},[t._v("#")]),t._v(" 成本低、BSD许可证")]),t._v(" "),a("p",[t._v("BSD 是一个开源的许可证，世界上的开源许可证有很多，现在比较流行的有六种分别是 GPL、BSD、MIT、Mozilla、Apache、LGPL。这六种的区别是什么，我们可以通过下面一张图来解释下：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.staticaly.com/gh/Kele-Bingtang/static@master/img/Nginx/20211125233042.png",alt:"1585139995444"}})]),t._v(" "),a("p",[t._v("Nginx 本身是开源的，我们不仅可以免费的将 Nginx 应用在商业领域，而且还可以在项目中直接修改 Nginx 的源码来定制自己的特殊要求。这些点也都是Nginx 为什么能吸引无数开发者继续为 Nginx 来贡献自己的智慧和青春。比如衍生的 OpenRestry『基于 Nginx + Lua』 和 Tengine「淘宝正在使用的服务器」。")]),t._v(" "),a("h2",{attrs:{id:"nginx的功能特性及常用功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx的功能特性及常用功能"}},[t._v("#")]),t._v(" Nginx的功能特性及常用功能")]),t._v(" "),a("p",[t._v("Nginx 提供的基本功能服务从大体上归纳为「基本 HTTP 服务」、「高级 HTTP 服务」和「邮件服务」等三大类。")]),t._v(" "),a("h3",{attrs:{id:"基本http服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本http服务"}},[t._v("#")]),t._v(" 基本HTTP服务")]),t._v(" "),a("p",[t._v("Nginx 可以提供基本 HTTP 服务，可以作为 HTTP 代理服务器和反向代理服务器，支持通过缓存加速访问，可以完成简单的负载均衡和容错，支持包过滤功能，支持 SSL 等。")]),t._v(" "),a("ul",[a("li",[t._v("处理静态文件、处理索引文件以及支持自动索引")]),t._v(" "),a("li",[t._v("提供反向代理服务器，并可以使用缓存加上反向代理，同时完成负载均衡和容错")]),t._v(" "),a("li",[t._v("提供对 FastCGI、memcached 等服务的缓存机制，，同时完成负载均衡和容错")]),t._v(" "),a("li",[t._v("使用 Nginx 的模块化特性提供过滤器功能。Nginx 基本过滤器包括 gzip 压缩、ranges 支持、chunked 响应、XSLT、SSI 以及图像缩放等。其中针对包含多个 SSI 的页面，经由 FastCGI 或反向代理，SSI 过滤器可以并行处理")]),t._v(" "),a("li",[t._v("支持 HTTP 下的安全套接层安全协议 SSL.")]),t._v(" "),a("li",[t._v("支持基于加权和依赖的优先权的 HTTP/2")])]),t._v(" "),a("h3",{attrs:{id:"高级http服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#高级http服务"}},[t._v("#")]),t._v(" 高级HTTP服务")]),t._v(" "),a("ul",[a("li",[t._v("支持基于名字和 IP 的虚拟主机设置")]),t._v(" "),a("li",[t._v("支持 HTTP/1.0 中的 KEEP-Alive 模式和管线(PipeLined)模型连接")]),t._v(" "),a("li",[t._v("自定义访问日志格式、带缓存的日志写操作以及快速日志轮转")]),t._v(" "),a("li",[t._v("提供 3xx~5xx 错误代码重定向功能")]),t._v(" "),a("li",[t._v("支持重写（Rewrite)模块扩展")]),t._v(" "),a("li",[t._v("支持重新加载配置以及在线升级时无需中断正在处理的请求")]),t._v(" "),a("li",[t._v("支持网络监控")]),t._v(" "),a("li",[t._v("支持 FLV 和 MP4 流媒体传输")])]),t._v(" "),a("h3",{attrs:{id:"邮件服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#邮件服务"}},[t._v("#")]),t._v(" 邮件服务")]),t._v(" "),a("p",[t._v("Nginx 提供邮件代理服务也是其基本开发需求之一，主要包含以下特性：")]),t._v(" "),a("ul",[a("li",[t._v("支持 IMPA/POP3 代理服务功能")]),t._v(" "),a("li",[t._v("支持内部 SMTP 代理服务功能")])]),t._v(" "),a("h3",{attrs:{id:"nginx常用的功能模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx常用的功能模块"}},[t._v("#")]),t._v(" Nginx常用的功能模块")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("静态资源部署：核心功能")])]),t._v(" "),a("li",[a("p",[t._v("Rewrite 地址重写：用到正则表达式")])]),t._v(" "),a("li",[a("p",[t._v("反向代理")])]),t._v(" "),a("li",[a("p",[t._v("负载均衡：轮询、加权轮询、ip_hash、url_hash、fair 等算法")])]),t._v(" "),a("li",[a("p",[t._v("Web 缓存")])]),t._v(" "),a("li",[a("p",[t._v("环境部署：搭建高可用的环境")])]),t._v(" "),a("li",[a("p",[t._v("用户认证模块 ...")])]),t._v(" "),a("li",[a("p",[t._v("Nginx 的核心组成")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("nginx 二进制可执行文件（启动、关闭、加载 Nginx）")])]),t._v(" "),a("li",[a("p",[t._v("nginx.conf 配置文件")])]),t._v(" "),a("li",[a("p",[t._v("error.log 错误的日志记录")])]),t._v(" "),a("li",[a("p",[t._v("access.log 访问日志记录")])])])])])])}),[],!1,null,null,null);a.default=v.exports}}]);