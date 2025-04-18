import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Phone, ShoppingBag } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <span className="text-xl">云游书景文创集</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#project" className="text-sm font-medium hover:text-primary">
              项目介绍
            </Link>
            <Link href="#company" className="text-sm font-medium hover:text-primary">
              公司简介
            </Link>
            <Link href="#team" className="text-sm font-medium hover:text-primary">
              团队介绍
            </Link>
            <Link href="#works" className="text-sm font-medium hover:text-primary">
              文创作品
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              联系我们
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="flex h-9 w-9 items-center justify-center rounded-md border">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="project" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">云游书景文创集</h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    我们致力于将传统文化与现代创意相结合，打造独特的文创产品，让文化以新的形式焕发生机。
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#works"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    浏览作品
                  </Link>
                  <Link
                    href="#contact"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    联系我们
                  </Link>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="项目展示图"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        {/* Project Introduction */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">关于我们的项目</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  云游书景文创集是一个融合文学、艺术与设计的创意平台，我们希望通过独特的视角，将传统文化元素与现代审美相结合，创造出既有文化底蕴又符合当代人审美需求的文创产品。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/placeholder.svg?height=310&width=550"
                width={550}
                height={310}
                alt="项目理念图"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">文化传承</h3>
                      <p className="text-muted-foreground">
                        挖掘传统文化精髓，以现代方式呈现，让传统文化在新时代焕发活力。
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">创意设计</h3>
                      <p className="text-muted-foreground">
                        融合艺术与实用性，打造既美观又实用的文创产品，满足人们对美好生活的追求。
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">跨界合作</h3>
                      <p className="text-muted-foreground">
                        与不同领域的艺术家、设计师合作，碰撞出更多创意火花，拓展文创边界。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <section id="company" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">公司简介</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  云游书景传媒有限公司是一家专注于"文化+旅游+数字内容"创新融合的现代传媒企业。
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <p className="text-muted-foreground">
                  云游书景传媒有限公司是一家专注于"文化+旅游+数字内容"创新融合的现代传媒企业。公司以经典教材、文学名著、艺术名画为内容载体，通过"跟着名作去旅行"的核心产品理念，打造线上线下相结合的文旅新业态。
                </p>
                <div className="space-y-4 mt-4">
                  <h3 className="text-xl font-bold">核心业务模式：</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                        1
                      </span>
                      <span>数字内容生产：将经典作品中的场景进行影视化再现，制作高品质的短视频、纪录片及图文内容</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                        2
                      </span>
                      <span>新媒体矩阵运营：构建抖音、小红书、B站等多平台自媒体矩阵，实现文化内容的精准传播</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                        3
                      </span>
                      <span>文创产品开发：基于IP内容衍生开发"云游书景"系列文创产品，拓展商业变现渠道</span>
                    </li>
                  </ul>
                </div>
                <p className="text-muted-foreground mt-4">
                  公司致力于通过现代传媒技术，让经典文化以更生动的方式走进大众生活，推动文旅产业的内容升级与价值创新。
                </p>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                width={600}
                height={400}
                alt="公司简介图片"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">我们的团队</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  一群热爱文化、充满创意的年轻人，致力于传统文化的创新表达与传播。
                </p>
              </div>
            </div>

            {/* Team Overview */}
            <div className="mx-auto max-w-5xl py-12">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="flex flex-col justify-center space-y-4">
                  <h3 className="text-2xl font-bold">云游书景核心团队</h3>
                  <p className="text-muted-foreground">
                    云游书景汇聚了一支多学科融合的专业团队，成员来自汉语言文学、汉语国际教育、网络与新媒体、教育技术、财务会计教育、市场营销、环境艺术与设计、美术学、统计学等九大专业领域，共同构建"文化+旅游+数字媒体"的创新生态。
                  </p>
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="团队合影"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                />
              </div>
            </div>

            {/* Team Structure */}
            <div className="mx-auto max-w-5xl py-8">
              <h3 className="text-2xl font-bold mb-8 text-center">专业团队构成</h3>

              <div className="grid gap-8 md:grid-cols-3">
                {/* Content Creation Center */}
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                      ①
                    </span>
                    <h4 className="text-xl font-bold">内容创作中心</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex flex-col">
                      <span className="font-medium">汉语言文学团队</span>
                      <span className="text-sm text-muted-foreground">负责经典文本深度解读与文化价值挖掘</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium">汉语国际教育团队</span>
                      <span className="text-sm text-muted-foreground">提供跨文化传播视角，优化文本表达方式</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium">美术学与环境艺术设计团队</span>
                      <span className="text-sm text-muted-foreground">主导视觉艺术呈现与场景还原</span>
                    </li>
                  </ul>
                </div>

                {/* Digital Media Center */}
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                      ②
                    </span>
                    <h4 className="text-xl font-bold">数字媒体中心</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex flex-col">
                      <span className="font-medium">网络与新媒体专业团队</span>
                      <span className="text-sm text-muted-foreground">负责全媒体内容策划与平台运营</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium">教育技术团队</span>
                      <span className="text-sm text-muted-foreground">开发沉浸式数字体验产品</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium">统计学团队</span>
                      <span className="text-sm text-muted-foreground">构建数据分析模型，优化内容传播效果</span>
                    </li>
                  </ul>
                </div>

                {/* Business Operations Center */}
                <div className="rounded-lg border bg-background p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                      ③
                    </span>
                    <h4 className="text-xl font-bold">商业运营中心</h4>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex flex-col">
                      <span className="font-medium">市场营销团队</span>
                      <span className="text-sm text-muted-foreground">制定品牌推广与用户增长策略</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="font-medium">财务会计团队</span>
                      <span className="text-sm text-muted-foreground">把控财务健康与商业模型优化</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Team Advantages */}
            <div className="mx-auto max-w-5xl py-8">
              <h3 className="text-2xl font-bold mb-6 text-center">团队优势</h3>
              <div className="bg-muted rounded-lg p-6">
                <p className="mb-4 text-center">通过跨学科协作，我们实现了：</p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="flex flex-col items-center p-4 bg-background rounded-lg border">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold text-center">文化内涵的学术性保障</h4>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-background rounded-lg border">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                        <line x1="9" y1="9" x2="9.01" y2="9"></line>
                        <line x1="15" y1="9" x2="15.01" y2="9"></line>
                      </svg>
                    </div>
                    <h4 className="font-bold text-center">视觉呈现的艺术性表达</h4>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-background rounded-lg border">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                        <line x1="8" y1="21" x2="16" y2="21"></line>
                        <line x1="12" y1="17" x2="12" y2="21"></line>
                      </svg>
                    </div>
                    <h4 className="font-bold text-center">数字传播的技术性支撑</h4>
                  </div>
                  <div className="flex flex-col items-center p-4 bg-background rounded-lg border">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <h4 className="font-bold text-center">商业运营的科学性管理</h4>
                  </div>
                </div>
                <p className="mt-6 text-center text-muted-foreground">
                  这支复合型团队将持续以专业能力推动文化创意产业的创新发展。
                </p>
              </div>
            </div>

            {/* Team Stats */}
            <div className="mx-auto max-w-5xl mt-8">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <p className="text-center text-muted-foreground">专业团队成员</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="text-4xl font-bold text-primary">9+</div>
                  <p className="text-center text-muted-foreground">专业学科领域</p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                  <div className="text-4xl font-bold text-primary">3</div>
                  <p className="text-center text-muted-foreground">核心业务中心</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Works Section - Redesigned */}
        <section id="works" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">文创作品展示</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  我们的作品融合了传统文化元素与现代设计理念，每一件都承载着独特的文化故事。
                </p>
              </div>
            </div>

            {/* 千里江山图系列 */}
            <div className="mx-auto max-w-6xl py-12">
              <div className="flex flex-col space-y-6">
                <h3 className="text-2xl font-bold border-l-4 border-primary pl-4">《千里江山图》系列</h3>
                <p className="text-muted-foreground">
                  以北宋王希孟的传世名画《千里江山图》为灵感，将中国传统山水画的意境融入现代文创产品，让古典艺术走进日常生活。
                </p>
              </div>

              {/* 透卡 */}
              <div className="mt-12 bg-background rounded-xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-[85/108] rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=320"
                        fill
                        alt="千里江山图透卡"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-4">透卡</h4>
                      <p className="text-muted-foreground mb-6">
                        此款透卡，以照相机为蓝本，勾勒简洁明快之线条，于清新蓝白主调间，营造纯净雅致之境。
                      </p>
                      <p className="text-muted-foreground mb-6">
                        画面左侧下方，卡通人物形神兼备，背负行囊，似正踏入《千里江山图》之灵韵山水，探寻古韵幽情。底部山峦，撷取古画之精华片段，青绿之色层层晕染，尽显《千里江山图》之雄浑壮阔与细腻精妙，于光影交错间，展卷古韵风华，灵动而鲜活。
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">定价：</span>
                          <span>单张5元</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">规格：</span>
                          <span>85mm×108mm</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">材质：</span>
                          <span>选用优质透明PVC，兼具通透质感与耐用品质</span>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm italic">
                          此透卡乃传统艺术与现代设计交融之结晶，借由透卡独特透光特性，使千年古画之瑰丽山河，于咫尺之间鲜活再现。既具收藏赏鉴之价值，又能于日常之中，为观览者开启一扇通往古韵山水之窗，于光影流转间，寻得心灵之诗意栖居。
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                        <ShoppingBag className="h-4 w-4" />
                        <span>加入购物车</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 钥匙扣 */}
              <div className="mt-12 bg-background rounded-xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        fill
                        alt="千里江山图钥匙扣"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-4">钥匙扣</h4>
                      <p className="text-muted-foreground mb-6">
                        这款钥匙扣，卡通少年形象俏皮，背着行囊似要出游。背后画轴展现《千里江山图》山水，青绿之色，山峦隐约，浓缩古画神韵，古韵十足。
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">定价：</span>
                          <span>单个 8元/个</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">规格：</span>
                          <span>30mm×30mm</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">材质：</span>
                          <span>透明亚克力板</span>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm italic">
                          这款钥匙扣，将《千里江山图》的古韵与现代萌趣风格融合。可爱少年形象搭配画轴景致，把千里江山的秀丽浓缩于小巧物件，既具实用价值，又能让人们随时感受古画魅力，传承千年文化底蕴。
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                        <ShoppingBag className="h-4 w-4" />
                        <span>加入购物车</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 便利贴 */}
              <div className="mt-12 bg-background rounded-xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        fill
                        alt="千里江山图便利贴"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-4">便利贴</h4>
                      <p className="text-muted-foreground mb-6">
                        这款《千里江山图》明信片文创，以淡绿色为底色，清新雅致。左下角巧妙呈现《千里江山图》的青绿山峦，展现出原作的雄浑秀丽。"千里江山"四字与简约云纹增添古韵，既可供书写传情，也是承载千年山水意境的艺术小品，让古典之美融入日常。
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">定价：</span>
                          <span>单本 10元/本</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">规格：</span>
                          <span>30mm×30mm</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">材质：</span>
                          <span>优质书写纸、环保型合成胶水（粘合部分）</span>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm italic">
                          这款《千里江山图》便利贴文创，意义颇为深远。它撷取古画中的青绿山峦，搭配古朴文字，将《千里江山图》的恢宏意境浓缩于小小纸张。在日常使用中，它打破了艺术与生活的界限，让人们随时能与千年艺术瑰宝产生联结，满足实用需求。
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                        <ShoppingBag className="h-4 w-4" />
                        <span>加入购物车</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 帆布包 */}
              <div className="mt-12 bg-background rounded-xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-[7/8] rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=350"
                        fill
                        alt="千里江山图帆布包"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-4">帆布包</h4>
                      <p className="text-muted-foreground mb-6">
                        这款帆布包，以纯净白色为底色，简约大方。包身印着可爱的卡通少年形象，他背着行囊，俏皮又灵动。少年身后是一幅展现《千里江山图》山水景色的画轴，将古画的秀丽与雅致融入其中。帆布材质结实耐用，既适合日常出行装载物品，又能让你随时随地展示独特的艺术品味，把古典与时尚完美融合在每一次的出行中。
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">定价：</span>
                          <span>48元/件</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">规格：</span>
                          <span>35cm×40cm，容量适中，适合日常使用，可容纳书籍、笔记本电脑等物品</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">材质：</span>
                          <span>牛津布</span>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm italic">
                          此帆布包以简洁白色为底，绘有背着行囊的卡通少年，身后画轴呈现《千里江山图》景致，古韵与萌趣兼具。它不仅是实用好物，更具深意。让千年古画融入日常，打破艺术隔阂，使人们随时感受传统文化魅力。
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                        <ShoppingBag className="h-4 w-4" />
                        <span>加入购物车</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="#contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  了解更多产品
                </Link>
              </div>
            </div>

            {/* 红楼梦系列 */}
            <div className="mx-auto max-w-6xl py-12 mt-8">
              <div className="flex flex-col space-y-6">
                <h3 className="text-2xl font-bold border-l-4 border-primary pl-4">《红楼梦》系列</h3>
                <p className="text-muted-foreground">
                  以中国古典文学巅峰之作《红楼梦》为主题，将书中经典人物、场景与情节融入设计，让文学经典以新的形式被记忆与传承。
                </p>
              </div>

              {/* 便利贴 */}
              <div className="mt-12 bg-background rounded-xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 grid grid-cols-2 gap-4">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        fill
                        alt="红楼梦便利贴-粉色款"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        fill
                        alt="红楼梦便利贴-黄色款"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-4">便利贴</h4>
                      <p className="text-muted-foreground mb-6">
                        这两款《红楼梦》便利贴文创，大小适中（30mm×30mm），便于随身携带。每页印有贾宝玉、林黛玉等《红楼梦》经典人物插图，底图采用格纹设计，有粉、黄两种颜色可选。气泡样式的形状设计，仿若人物对话，充满童趣；中部大量留白，方便书写记录。
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">定价：</span>
                          <span>单本3元，两本5元</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">规格：</span>
                          <span>30mm×30mm</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">材质：</span>
                          <span>选用优质纸张与环保油墨制作，确保书写顺滑、色彩持久，且环保健康</span>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm italic">
                          适用于学习标记重点、办公记录灵感、家居日常备忘等多种场景。它以优质纸张和环保油墨为载体，将经典人物插画融入每一页，可撕式设计让使用与收藏兼得。无论是贴在书本、笔记本，还是办公桌、冰箱上，都能为日常生活增添红楼韵味，实现文化传承与现代生活的美妙结合，让《红楼梦》的美学在日常使用中自然绽放，成为人们感受古典文化的便捷媒介。
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                        <ShoppingBag className="h-4 w-4" />
                        <span>加入购物车</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 透卡 */}
              <div className="mt-12 bg-background rounded-xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 grid grid-cols-2 gap-4">
                    <div className="relative aspect-[85/108] rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=320"
                        fill
                        alt="红楼梦透卡-正面"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <div className="relative aspect-[85/108] rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=320"
                        fill
                        alt="红楼梦透卡-背面"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-4">透卡</h4>
                      <p className="text-muted-foreground mb-6">
                        此款透卡以ins发布页面为风格蓝本，巧妙融合新兴现代感与古典红楼元素，极具创意与趣味。这些透卡不仅设计精巧，而且制作工艺上乘确保画面的清晰度与透明度达到最佳效果。此外，透卡的便携性使其成为旅行、学习或工作间隙的理想伴侣，随时随地都可以拍照打卡，让用户在任何时候都能感受到《红楼梦》那份独特的文化韵味。
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">定价：</span>
                          <span>单张5元</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">规格：</span>
                          <span>85mm×108mm</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">材质：</span>
                          <span>
                            选用优质透明PVC材质，制作工艺上乘，确保画面清晰度与透明度达到最佳效果，质感通透且耐用
                          </span>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm italic">
                          无论是作为个人收藏，还是送给亲朋好友，这款透卡文创都是一份充满文化底蕴与情感温度的礼物，它不仅仅是一张卡片，更是一扇窗，透过它，可以窥见中国古典文化的深远与丰富，体验《红楼梦》那不朽的艺术魅力。
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                        <ShoppingBag className="h-4 w-4" />
                        <span>加入购物车</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 钥匙扣 */}
              <div className="mt-12 bg-background rounded-xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 grid grid-cols-2 gap-4">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        fill
                        alt="红楼梦钥匙扣-贾宝玉款"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        fill
                        alt="红楼梦钥匙扣-林黛玉款"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-4">钥匙扣</h4>
                      <p className="text-muted-foreground mb-6">
                        《红楼梦》文创钥匙扣采用精致工艺打造，小巧玲珑（30mm×30mm）。以书中经典人物贾宝玉、林黛玉为原型，通过优质金属与彩绘结合的方式，生动还原人物形象，色泽鲜艳且经久耐用，提供两种人物造型供消费者选择。两种人物造型可选，满足不同喜好，既可悬挂于钥匙，也可作为包包挂饰。随身携带，时刻感受红楼风情，为日常生活增添一抹古典雅趣。
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">定价：</span>
                          <span>8元/个</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">规格：</span>
                          <span>30mm×30mm</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">材质：</span>
                          <span>透明亚克力板</span>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm italic">
                          作为日常生活中的实用配饰，钥匙扣让用户在随身携带间，时刻感受红楼风情，为平淡的生活增添一抹古典雅趣。它以书中人物为原型，工艺精湛，将实用功能与文化传承完美结合，成为展现个人品味的时尚单品，让《红楼梦》的魅力在日常使用中闪耀，搭建起传统与现代的桥梁，让传统文化在现代生活中得以延续与传播。
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                        <ShoppingBag className="h-4 w-4" />
                        <span>加入购物车</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 毛绒徽章 */}
              <div className="mt-12 bg-background rounded-xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 grid grid-cols-2 gap-4">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        fill
                        alt="红楼梦毛绒徽章-正面"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        fill
                        alt="红楼梦毛绒徽章-背面"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-4">毛绒徽章</h4>
                      <p className="text-muted-foreground mb-6">
                        尺寸为58mm×58mm，小巧精致。以优良马口铁为基底，搭配高透塑料膜与优质别针，将《红楼梦》中经典场景、人物形象以立体毛绒工艺呈现，造型生动可爱，富有质感。
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">定价：</span>
                          <span>10元/个</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">规格：</span>
                          <span>58mm×58mm</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">材质：</span>
                          <span>
                            优良马口铁保证徽章的坚固性，高透塑料膜保护图案，优质别针方便佩戴；毛绒部分采用柔软舒适的材料
                          </span>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm italic">
                          《红楼梦》毛绒徽章以优良马口铁为基底，搭配高透塑料膜与优质别针，将书中经典人物形象以立体毛绒工艺呈现。其意义在于以小巧精致的载体，将红楼文化融入时尚配饰领域。无论是别在衣物、背包，还是作为收藏，都能成为展现个人独特品味的点睛之笔。它不仅是一枚装饰徽章，更是《红楼梦》艺术魅力的具象化延伸，让古典文化以柔软温暖的姿态贴近日常生活，在细微之处传递传统文化的深厚底蕴，成为连接古今美学的情感纽带。
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                        <ShoppingBag className="h-4 w-4" />
                        <span>加入购物车</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 冰箱贴 */}
              <div className="mt-12 bg-background rounded-xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 grid grid-cols-2 gap-4">
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        fill
                        alt="红楼梦冰箱贴-款式一"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                    <div className="relative aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=300"
                        fill
                        alt="红楼梦冰箱贴-款式二"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-4">冰箱贴</h4>
                      <p className="text-muted-foreground mb-6">
                        规格为40mm×40mm，小巧精致。采用橡胶软磁贴与透明亚克力材质，将《红楼梦》中经典建筑、诗意画面凝缩于方寸之间，画面清晰、色彩亮丽。
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">定价：</span>
                          <span>10元/个</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">规格：</span>
                          <span>40mm×40mm</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">材质：</span>
                          <span>橡胶软磁贴确保吸附力强且不伤金属表面，透明亚克力材质保证图案的清晰度与耐久性</span>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm italic">
                          这款《红楼梦》冰箱贴采用橡胶软磁贴与透明亚克力材质，将书中经典人物、诗意画面凝缩于方寸之间。其意义在于打破传统冰箱贴的单一装饰功能，赋予其深厚的文化内涵。当它吸附于冰箱、文件柜等金属表面时，瞬间为家居、办公空间增添一抹红楼雅韵。作为兼具实用性与艺术性的文创产品，它既是记录生活点滴的备忘录，也是承载红楼记忆的文化符号。无论是自用营造古典氛围，还是赠予亲友传递文化情谊，都能让《红楼梦》的艺术之美融入日常，成为传统文化在现代生活中鲜活存在的见证。
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                        <ShoppingBag className="h-4 w-4" />
                        <span>加入购物车</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 我与地坛系列 */}
            <div className="mx-auto max-w-6xl py-12 mt-8">
              <div className="flex flex-col space-y-6">
                <h3 className="text-2xl font-bold border-l-4 border-primary pl-4">《我与地坛》系列</h3>
                <p className="text-muted-foreground">
                  以史铁生的经典散文《我与地坛》为灵感，捕捉北京地坛公园的四季变化与人文情怀，传递生命的坚韧与对生活的热爱。
                </p>
              </div>

              {/* 明信片 */}
              <div className="mt-12 bg-background rounded-xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-[148/100] rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=300&width=450"
                        fill
                        alt="我与地坛明信片套组"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-4">明信片</h4>
                      <p className="text-muted-foreground mb-4">
                        蓝白配色，线条色块勾勒树木长椅。配文诗意，为画面注入灵动情思，风格清新文艺，展现自然与诗意交融之美。
                      </p>
                      <p className="text-muted-foreground mb-4">
                        冷色调，轮椅解构与地坛雪景相融。"我已不在地坛，地坛在我"，凝聚史铁生对生命的思索，风格冷峻内敛，引发对生命厚重与坚韧的探寻。
                      </p>
                      <p className="text-muted-foreground mb-4">
                        以蓝色调为主，描绘树木夹道与长椅的场景，营造出深邃、幽静氛围。英文标题"I AND THE TEMPLE OF
                        EARTH"增添了国际化与文艺感，整体风格静谧、深邃，给人遐想空间。
                      </p>
                      <p className="text-muted-foreground mb-6">
                        蓝白冷调，绘就雪地树木与轮椅之景。英文 "I am with the altar of earth" 与中文
                        "我与地坛""我已不在地坛，地坛在我"
                        呼应，借史铁生经历，凝聚对生命的深沉思索，风格冷峻而内省，引领人们探寻生命的坚韧与厚重，于无声处叩问心灵。
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">定价：</span>
                          <span>单张5元/张 套组19.9元/组</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">规格：</span>
                          <span>148mm×100mm</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">材质：</span>
                          <span>卡纸、哑粉纸、珠光纸</span>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm italic">
                          这组以《我与地坛》为灵感的明信片，将文学哲思与艺术设计深度融合，以蓝白主调、解构元素等视觉语言，搭配诗意文字与英文表达，实现文学可视化转译；以冷寂深邃风格引发对生命与自然的哲思共鸣，承载地坛人文内涵，传递精神力量，为观者提供心灵栖息空间，促进文化交流。
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                        <ShoppingBag className="h-4 w-4" />
                        <span>加入购物车</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 文创邮票/贴纸 */}
              <div className="mt-12 bg-background rounded-xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=400"
                        fill
                        alt="我与地坛文创邮票/贴纸"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-4">文创邮票/贴纸</h4>
                      <p className="text-muted-foreground mb-6">
                        以史铁生《我与地坛》为灵感源泉，选取轮椅、地坛雪景树木等标志性元素入画。采用简洁冷色调风格，轮椅图案运用蓝调，呈现冷静坚韧之感；雪景树木图案以黑白灰为主，营造深沉静谧氛围。邮票边缘设齿孔，遵循传统邮票形制，兼具实用性与观赏性。
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">定价：</span>
                          <span>单枚邮票定价5元，整套（3枚）售价12元；单张贴纸定价3元，整套（3张）售价8元</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">规格：</span>
                          <span>30mm×30mm</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">材质：</span>
                          <span>优质铜版纸（邮票）和纸 环保型合成胶水（贴纸）</span>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm italic">
                          这组《我与地坛》文创邮票/贴纸，是"云游书景"的生动诠释。以特色元素与冷色调，呈现书中地坛景致与生命哲思。无需实地踏访，方寸之间，即可"云游"书中意境，传承文学内涵，唤起情感共鸣，激励困境坚守，是联通文学与精神世界的精致桥梁。
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                        <ShoppingBag className="h-4 w-4" />
                        <span>加入购物车</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 帆布包与木质挂件 */}
              <div className="mt-12 bg-background rounded-xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-[7/8] rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=350"
                        fill
                        alt="我与地坛帆布包与木质挂件"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-4">帆布包与木质挂件</h4>
                      <p className="text-muted-foreground mb-3">
                        <span className="font-medium">帆布包：</span>
                        以《我与地坛》为灵感，包身主色调为素雅的白、灰，搭配清新蓝线条，营造出沉静氛围。印有地坛建筑的简约线条图案，彰显文学主题。包带选用蓝色，与包身图案相呼应。
                      </p>
                      <p className="text-muted-foreground mb-6">
                        <span className="font-medium">木制挂件：</span>
                        采用木质材料，呈矩形，边缘做精致打磨处理。正面镶嵌描绘地坛景致的画面，搭配古风镂空边框与灰色流苏，古典雅致，与帆布包风格统一，可作为包饰搭配使用。
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">定价：</span>
                          <span>帆布包：48元 木制挂件：28元 套组: 69元</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">规格：</span>
                          <span>帆布包：35cm×40cm；木制挂件：主体5cm×3cm，加上流苏总长度约12cm</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">材质：</span>
                          <span>帆布包：牛津布；木质挂件：胡桃木主体，亚克力板镶嵌部件，金属连接件，人造丝流苏</span>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm italic">
                          本套组以《我与地坛》为蓝本的木制挂件与帆布包，是"云游书景"的别致媒介。它们将书中地坛的意象化为可触可感的日常物件，以素雅色调与精巧设计，让人们无需实地探寻，便能随身携带书中景致，于生活点滴间"云游"文学意境。
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                        <ShoppingBag className="h-4 w-4" />
                        <span>加入购物车</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 投影透光卡/胶片拍立得 */}
              <div className="mt-12 bg-background rounded-xl overflow-hidden shadow-lg">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 flex items-center justify-center">
                    <div className="relative w-full max-w-md aspect-[86/108] rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=400&width=320"
                        fill
                        alt="我与地坛投影透光卡/胶片拍立得"
                        className="object-cover transition-all hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-between">
                    <div>
                      <h4 className="text-2xl font-bold mb-4">投影透光卡/胶片拍立得</h4>
                      <p className="text-muted-foreground mb-6">
                        以蓝白色调为主，展现雨中地坛树木夹道、长椅静立的景致，营造静谧深邃氛围。拍立得画面下方配英文"I
                        and the temple of earth"。
                      </p>
                      <div className="space-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">定价：</span>
                          <span>大尺寸拍立得：15元/张；小尺寸拍立得：10元/张</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">规格：</span>
                          <span>大尺寸拍立得：86mm×108mm；小尺寸拍立得：54mm×86mm</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">材质：</span>
                          <span>透明PVC（聚氯乙烯）优质白卡纸</span>
                        </div>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <p className="text-sm italic">
                          这套《我与地坛》胶片拍立得，是"云游书景"的生动诠释。它把书中抽象意象化为直观画面，实现文学与艺术交融。作为纪念品，承载读者情感，唤起对书中生命思索的回忆。其独特设计吸引爱好者，助力文化传播，让人们于方寸间"云游"文学盛景，感受作品魅力与价值。
                        </p>
                      </div>
                    </div>
                    <div className="mt-6 flex justify-end">
                      <button className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                        <ShoppingBag className="h-4 w-4" />
                        <span>加入购物车</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section - Updated */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">联系我们</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  欢迎通过以下方式与我们联系，了解更多产品信息或合作机会。
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl py-12">
              <div className="flex flex-col items-center justify-center gap-8">
                {/* Phone Number */}
                <div className="flex items-center gap-4">
                  <Phone className="h-10 w-10 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">联系方式</h3>
                    <p className="text-lg text-muted-foreground">17817964305</p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl mt-6">
                  {/* WeChat QR Code */}
                  <div className="flex flex-col items-center gap-4">
                    <h3 className="text-xl font-bold">微信公众号</h3>
                    <div className="border border-border p-4 rounded-lg bg-background">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="微信公众号二维码"
                        className="w-full max-w-[200px] h-auto"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">扫描上方二维码，关注我们的公众号</p>
                  </div>

                  {/* Douyin QR Code */}
                  <div className="flex flex-col items-center gap-4">
                    <h3 className="text-xl font-bold">抖音号</h3>
                    <div className="border border-border p-4 rounded-lg bg-background">
                      <Image
                        src="/placeholder.svg?height=200&width=200"
                        width={200}
                        height={200}
                        alt="抖音号二维码"
                        className="w-full max-w-[200px] h-auto"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground">扫描上方二维码，关注我们的抖音号</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 font-bold">
            <span>云游书景文创集</span>
          </div>
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} 云游书景文创集. 保留所有权利.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              隐私政策
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              使用条款
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
