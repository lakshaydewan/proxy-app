import Link from "next/link"
import { Github } from "lucide-react"

export default async function Page() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <nav className="w-full p-6">
        <div className="flex justify-end gap-6 items-center max-w-7xl mx-auto">
          <Link href="/docs" className="text-sm hover:text-gray-300 transition-colors">
            <span className="flex items-center gap-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              Docs
            </span>
          </Link>
          <Link href="/pricing" className="text-sm hover:text-gray-300 transition-colors">
            <span className="flex items-center gap-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              Pricing
            </span>
          </Link>
          <Link href="/updates" className="text-sm hover:text-gray-300 transition-colors">
            <span className="flex items-center gap-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9" />
              </svg>
              Get Updates
            </span>
          </Link>
          <Link href="/discord" className="text-sm hover:text-gray-300 transition-colors">
            <span className="flex items-center gap-1">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-4 h-4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 4a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3Z" />
                <path d="M6 4a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V7a3 3 0 0 0-3-3Z" />
                <path d="M18 7v10c0 .667-.333 1-1 1H7c-.667 0-1-.333-1-1V7" />
                <path d="M18 7c0 2.333-3 3-3 3H9s-3-.667-3-3" />
                <path d="M9 17v3" />
                <path d="M15 17v3" />
              </svg>
              Join Discord
            </span>
          </Link>
        </div>
      </nav>
      <main className="flex-1 flex flex-col items-center justify-center px-4 text-center max-w-7xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl lg:text-4xl font-mono font-semibold mb-6">data that speaks your language 🔗</h1>
        <div className="bg-[#111111] rounded-2xl p-6 md:p-8 max-w-3xl mb-12">
          <p className="text-sm md:text-lg leading-relaxed font-mono font-light">
            ProxyAI translates data from any system into exactly the format you need. It&apos;s an open source proxy
            that automatically extracts, maps and transforms data so developers don&apos;t have to write and maintain
            complex integration code.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Link
            href="/dashboard"
            className="bg-white hover:-translate-y-1 text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-500 ease-out"
          >
            Try Now
          </Link>
          <Link
            href="/dashboard"
            className="border hover:-translate-y-1 border-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-all duration-500 ease-out"
          >
            Book Demo
          </Link>
          <Link
            href="https://github.com/lakshaydewan/proxy-app"
            className="border hover:-translate-y-1 border-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition-all duration-500 ease-out flex items-center gap-2"
          >
            <Github className="w-5 h-5" />
            GitHub
          </Link>
        </div>
      </main>
      <footer className="w-full p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/imprint" className="text-sm text-gray-400 hover:text-white transition-colors">
              Imprint
            </Link>
          </div>
          <Link href="/" className="text-2xl font-bold font-mono">
            ProxyAI
          </Link>
        </div>
      </footer>
    </div>
  )
}

