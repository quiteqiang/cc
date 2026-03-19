import { Component as EtherealShadow } from "@/components/ui/etheral-shadow";
import DisplayCards from "@/components/ui/display-cards";
import { Sparkles, Zap, Shield, Globe, Bot, Brain, Workflow } from "lucide-react";

const featureCards = [
  {
    icon: <Bot className="size-4 text-blue-300" />,
    title: "AI 工作流",
    description: "Intelligent automation for your workflow",
    date: "Just now",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-500",
    className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Brain className="size-4 text-purple-300" />,
    title: "数据分析",
    description: "Advanced machine learning models",
    date: "2 days ago",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-500",
    className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Workflow className="size-4 text-green-300" />,
    title: "AI提效",
    description: "Streamline complex processes",
    date: "Today",
    iconClassName: "text-green-500",
    titleClassName: "text-green-500",
    className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section with Ethereal Shadow Background */}
      <section className="relative h-screen w-full">
        <EtherealShadow
          color="rgba(255, 255, 255, 0.35)"
          animation={{ scale: 100, speed: 90 }}
          noise={{ opacity: 0.1, scale: 100 }}
          sizing="fill"
          className="absolute inset-0"
        />

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6 lg:px-12">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            <span className="text-xl font-semibold tracking-tight">QWAI</span>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              AI
              <br />
              <span className="text-gray-500">PROFILE</span>
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-500 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Display Cards Feature Showcase */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              核心技能与优势
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              熟练应用国内外主流大模型（如 ChatGPT, Gemini 等） ，并曾利用 Google API 等自动化组件辅助完成开发与内容翻译
              拥有扎实的理工科背景，熟练运用 Python 处理、清洗和分析海量业务数据，能够为私域销售信息的梳理、分类及归档提供高效的技术支持。
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                  <span className="text-gray-300">Intelligent task automation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-gray-300">Real-time data processing</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-gray-300">AI-powered efficiency</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center lg:justify-end">
              <DisplayCards cards={featureCards} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 lg:py-32 px-6 lg:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Everything you need
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Powerful features designed to accelerate your productivity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="h-6 w-6" />}
              title="提效"
              description="Prompt 优化实现工作流自动化提效"
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="数据"
              description="私域销售信息的梳理、分类及归档提供高效的技术支持"
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="SOP文档"
              description="在过往研发经历中深度参与开发文档编写与跨部门协作，能精准输出产品手册与工作流 SOP"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">QwAI</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 QwAI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-colors">
      <div className="w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
