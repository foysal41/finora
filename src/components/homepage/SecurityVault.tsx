export default function SecurityVault() {
  return (
    <section id="security" className="py-28 bg-emerald-950 text-white dark-mesh relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-widest px-3 py-1 bg-emerald-900/60 rounded-full border border-emerald-800/80">
              Bank-Grade Infrastructure
            </span>
            <h2 className="text-4xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white">
              Institutional-grade security for your balance sheet.
            </h2>
            <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              We protect your treasury assets with quantum-resistant cryptography, biometric MFA, and multi-party computation (MPC) keys.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-emerald-900/80">
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Fraud Protection</p>
                <p className="text-base font-semibold text-emerald-300">Real-Time AI Monitoring</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Auditability</p>
                <p className="text-base font-semibold text-emerald-300">Immutable Ledger Trail</p>
              </div>
              <div className="space-y-1">
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Governance</p>
                <p className="text-base font-semibold text-emerald-300">Multi-Sig Approvals</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="glass-card-dark p-8 rounded-3xl border border-emerald-800/60 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-emerald-900 pb-5">
                <div>
                  <h4 className="text-base font-semibold text-white">Vault Security Pulse</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Automated Risk Monitor</p>
                </div>
                <span className="flex items-center gap-2 px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  100% Protected
                </span>
              </div>

              <div className="space-y-4">
                <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-800/40 flex justify-between items-center text-sm">
                  <span className="text-slate-300">Key Infrastructure</span>
                  <span className="font-mono text-emerald-300 font-semibold">MPC Multi-Cloud</span>
                </div>
                <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-800/40 flex justify-between items-center text-sm">
                  <span className="text-slate-300">Encryption Level</span>
                  <span className="font-mono text-emerald-300 font-semibold">AES-256 GCM</span>
                </div>
                <div className="bg-emerald-900/40 p-4 rounded-xl border border-emerald-800/40 flex justify-between items-center text-sm">
                  <span className="text-slate-300">Compliance Audit</span>
                  <span className="font-mono text-emerald-300 font-semibold">SOC-2 Type II</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
