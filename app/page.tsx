import type { Metadata } from "next";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "🛡️",
    title: "安全防护",
    description: "集成 WAF、CC 防护、Bot 管理，全面抵御 Web 攻击与恶意流量。",
  },
  {
    icon: "⚡",
    title: "DDoS 防御",
    description: "T 级清洗能力，实时检测并缓解大规模 DDoS 攻击，业务零中断。",
  },
  {
    icon: "🌐",
    title: "边缘加速",
    description: "全球 3200+ 节点，将内容缓存至距用户最近的边缘，毫秒级响应。",
  },
  {
    icon: "🔀",
    title: "智能路由",
    description: "基于实时网络质量探测，自动选择最优回源路径，降低延迟与丢包。",
  },
  {
    icon: "👨‍💻",
    title: "开发者友好",
    description: "支持 Edge Functions，可在边缘节点运行自定义逻辑，无需管理服务器。",
  },
  {
    icon: "📊",
    title: "可观测性",
    description: "实时日志、流量分析与告警，全链路可见，快速定位异常。",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          全球加速，极致安全
          <span className="text-blue-600 dark:text-blue-400"> EdgeOne</span>
        </h1>
        <p className="max-w-xl text-lg text-gray-600 dark:text-gray-400 mb-8">
          腾讯云边缘安全加速平台，集 DDoS 防护、WAF、CDN 加速与边缘函数于一体，为您的业务保驾护航。
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://edgeone.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
          >
            立即开始
          </a>
          <a
            href="https://edgeone.ai/document"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            查看文档 →
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-bold text-center mb-12">核心能力</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-sm text-gray-500 dark:text-gray-500">
        <p className="mb-2">
          © {new Date().getFullYear()} Tencent Cloud EdgeOne. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <a href="https://edgeone.ai/document" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">文档</a>
          <a href="https://console.tencentcloud.com/edgeone" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">控制台</a>
          <a href="https://edgeone.ai" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">官网</a>
        </div>
      </footer>
    </main>
  );
}
