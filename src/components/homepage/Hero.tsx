export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-32 gradient-mesh">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <span>Introducing Finora OS 3.0</span>
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-emerald-950 leading-[1.08]">
            Financial clarity for the <span className="text-emerald-600">new era</span>.
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-normal">
            Secure multi-currency vaults, automated treasury yields, and global settlements. Build your business future on a foundation of absolute trust.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all text-base">
              Get started today
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-emerald-950 border border-slate-200 rounded-full font-semibold transition-all text-base shadow-sm">
              Request interactive demo
            </button>
          </div>
        </div>

        {/* Affirm-inspired high-fidelity product interface preview card */}
        <div className="mt-20 relative max-w-5xl mx-auto">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative glass-card p-6 lg:p-10 rounded-3xl glow-emerald shadow-2xl border border-white/80">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Live Treasury Overview</span>
                <h3 className="text-3xl font-bold text-emerald-950 mt-1 tabular-nums">$14,829,450.00</h3>
                <p className="text-sm text-emerald-600 font-medium mt-1">↑ +14.8% yield generated this quarter</p>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-xl text-xs font-semibold">USD Vault</span>
                <span className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-xl text-xs font-semibold">EUR Treasury</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">Active Yield Rate</p>
                <p className="text-2xl font-bold text-emerald-950 mt-2 tabular-nums">5.35% APY</p>
                <div className="w-full bg-slate-200 h-2 rounded-full mt-4 overflow-hidden">
                  <div className="bg-emerald-600 h-full rounded-full w-4/5"></div>
                </div>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">Global Settlements</p>
                <p className="text-2xl font-bold text-emerald-950 mt-2 tabular-nums">Instant (0.1s)</p>
                <p className="text-xs text-emerald-600 font-medium mt-3">Zero wire fees worldwide</p>
              </div>
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <p className="text-xs text-slate-500 font-medium">Corporate Cards</p>
                <p className="text-2xl font-bold text-emerald-950 mt-2 tabular-nums">32 Active</p>
                <p className="text-xs text-slate-500 font-medium mt-3">Automated receipt matching</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
