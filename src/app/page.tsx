import { Component as EtherealShadow } from "@/components/ui/etheral-shadow";
import { ArrowRight, Sparkles, Zap, Shield, Globe } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section with Ethereal Shadow Background */}
      <section className="relative h-screen w-full">
        <EtherealShadow
          color="rgba(20, 20, 20, 0.15)"
          animation={{ scale: 80, speed: 70 }}
          noise={{ opacity: 0.8, scale: 1.2 }}
          sizing="fill"
          className="absolute inset-0"
        />

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-6 lg:px-12">
          <div className="flex items-center gap-2">
            <Sparkles className="h-6 w-6" />
            <span className="text-xl font-semibold tracking-tight">AuraAI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:opacity-60 transition-opacity">Features</a>
            <a href="#pricing" className="text-sm font-medium hover:opacity-60 transition-opacity">Pricing</a>
            <a href="#about" className="text-sm font-medium hover:opacity-60 transition-opacity">About</a>
          </div>
          <button className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
            Get Started
          </button>
        </nav>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              Intelligence
              <br />
              <span className="text-gray-400">Reimagined</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Harness the power of AI to transform your workflow.
              Built for teams who demand excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group bg-black text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-800 transition-all flex items-center gap-2">
                Start Free Trial
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-full text-base font-medium border border-gray-300 hover:border-gray-400 transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gray-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
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
              title="Lightning Fast"
              description="Process millions of data points in seconds with our optimized AI engine."
            />
            <FeatureCard
              icon={<Shield className="h-6 w-6" />}
              title="Enterprise Secure"
              description="Bank-level encryption and compliance standards to keep your data safe."
            />
            <FeatureCard
              icon={<Globe className="h-6 w-6" />}
              title="Global Scale"
              description="Deploy across 50+ regions with automatic scaling and 99.99% uptime."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to get started?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
            Join thousands of teams already using AuraAI to transform their workflows.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full text-base font-medium hover:bg-gray-100 transition-colors">
            Get Started for Free
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">AuraAI</span>
          </div>
          <p className="text-sm text-gray-500">
            © 2024 AuraAI. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gray-100 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}
