export default function TrustMetrics() {
  return (
    <section className="bg-white py-14 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold text-slate-500 uppercase tracking-widest mb-8">
          Trusted by high-growth startups and global treasury teams
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center text-center">
          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-emerald-200 transition-all">
            <span className="text-3xl font-bold text-emerald-950 tabular-nums">SOC-2</span>
            <p className="text-xs font-medium text-slate-600 mt-1">Type II Certified Security</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-emerald-200 transition-all">
            <span className="text-3xl font-bold text-emerald-950 tabular-nums">$250K+</span>
            <p className="text-xs font-medium text-slate-600 mt-1">FDIC Insurance via Partners</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-emerald-200 transition-all">
            <span className="text-3xl font-bold text-emerald-950 tabular-nums">256-Bit</span>
            <p className="text-xs font-medium text-slate-600 mt-1">AES Bank-Grade Encryption</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-emerald-200 transition-all">
            <span className="text-3xl font-bold text-emerald-950 tabular-nums">99.99%</span>
            <p className="text-xs font-medium text-slate-600 mt-1">Guaranteed Uptime SLA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
