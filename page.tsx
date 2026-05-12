import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navbar Section */}
      <nav className="bg-[#0f172a] text-white px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-bold tracking-tight text-white flex items-center">
             <span className="text-emerald-400 mr-2">⬡</span> VerifiedHire
          </div>
          <div className="hidden md:flex space-x-6 text-sm font-medium text-slate-300">
            <Link href="#" className="hover:text-white transition">Home</Link>
            <Link href="#" className="hover:text-white transition">About</Link>
            <Link href="#" className="hover:text-white transition">How It Works</Link>
            <Link href="#" className="hover:text-white transition">Pricing</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-sm font-medium text-slate-300 hover:text-white transition">
            Log In
          </Link>
          <Link href="#" className="bg-[#6366f1] hover:bg-[#4f46e5] text-white text-sm font-medium py-2 px-5 rounded transition">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 pt-28 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.15]">
          Hire with confidence,<br />not guesswork.
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Every candidate on VerifiedHire is identity-verified, credential-checked, 
          and employment-confirmed — so recruiters move from search to 
          shortlist in hours, not weeks.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="#" className="w-full sm:w-auto bg-[#0d9488] hover:bg-[#0f766e] text-white font-semibold py-3 px-8 rounded shadow-sm transition">
            I want to get verified
          </Link>
          <Link href="#" className="w-full sm:w-auto bg-white border-2 border-slate-900 text-slate-900 font-semibold py-3 px-8 rounded hover:bg-slate-50 transition">
            I am hunting for verified profiles
          </Link>
        </div>
      </main>

      {/* Trusted By Section */}
      <section className="py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <span className="text-sm text-slate-400 font-medium">Trusted by teams at</span>
          <div className="flex flex-wrap justify-center gap-6 text-lg font-bold text-slate-800">
            <span>Northwind</span>
            <span>Helix Labs</span>
            <span>Veritas.io</span>
            <span>Lintel Bank</span>
            <span>Orbital</span>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 mt-8">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Metric 1 */}
          <div>
            <div className="text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">94%</div>
            <div className="text-sm text-slate-500 leading-snug font-medium">
              Reduction in time-to-shortlist vs.<br/>traditional sourcing
            </div>
          </div>
          {/* Metric 2 */}
          <div>
            <div className="text-5xl font-extrabold text-slate-400 mb-3 tracking-tight">48,200</div>
            <div className="text-sm text-slate-500 leading-snug font-medium">
              Pre-verified candidate profiles<br/>available today
            </div>
          </div>
          {/* Metric 3 */}
          <div>
            <div className="text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">100%</div>
            <div className="text-sm text-slate-500 leading-snug font-medium">
              Documents reviewed by trained<br/>human verifiers
            </div>
          </div>
          {/* Metric 4 */}
          <div>
            <div className="text-5xl font-extrabold text-slate-400 mb-3 tracking-tight">2.1 days</div>
            <div className="text-sm text-slate-500 leading-snug font-medium">
              Average verification turnaround<br/>for candidates
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}