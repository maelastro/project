import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="flex flex-col items-center">
        <nav className="mt-6 bg-black rounded-full px-6 py-3 flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-black text-xl font-bold">O</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="text-white text-sm flex items-center gap-1 hover:text-gray-300 transition">
              Features
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-white text-sm flex items-center gap-1 hover:text-gray-300 transition">
              Why
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="text-white text-sm hover:text-gray-300 transition">
              Blog
            </button>
            <button className="text-white text-sm hover:text-gray-300 transition">
              Docs
            </button>
            <button className="text-white text-sm hover:text-gray-300 transition">
              Login
            </button>
          </div>

          <Button className="bg-[#8B7FF4] hover:bg-[#7B6FE4] text-white rounded-full px-6 h-9">
            Register
          </Button>
        </nav>

        <main className="flex flex-col items-center text-center px-4 mt-20">
          <p className="text-[#9CA3AF] text-base mb-8">
            An alternative to <span className="text-[#6B7280] font-medium">Fathom</span>
          </p>

          <h1 className="text-[64px] leading-[1.1] font-normal text-black max-w-5xl mb-6">
            Fast, private, realtime<br />web analytics
          </h1>

          <p className="text-[#6B7280] text-lg max-w-2xl mb-10">
            Understand your visitors and how they engage with<br />
            your website or product in realtime.
          </p>

          <div className="flex items-center gap-4 mb-4">
            <Button className="bg-[#8B7FF4] hover:bg-[#7B6FE4] text-white rounded-full px-8 h-12 text-base">
              Start 14 day free trial
            </Button>
            <Button variant="ghost" className="text-[#6B7280] hover:text-black rounded-full px-8 h-12 text-base">
              See demo
            </Button>
          </div>

          <p className="text-[#9CA3AF] text-sm">
            No credit card required
          </p>
        </main>
      </div>
    </div>
  );
}
