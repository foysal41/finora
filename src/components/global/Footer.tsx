import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-emerald-950 text-slate-400 py-20 border-t border-emerald-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-emerald-950 font-bold text-sm">
                F
              </div>
              <span className="text-2xl font-bold text-white tracking-tighter">Finora</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Financial infrastructure and multi-currency treasury management for forward-thinking enterprises.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Product</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#features" className="hover:text-white transition-colors">Multi-Currency Vaults</Link></li>
              <li><Link href="#features" className="hover:text-white transition-colors">Automated Treasury Yield</Link></li>
              <li><Link href="#features" className="hover:text-white transition-colors">Corporate Cards</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Security</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#security" className="hover:text-white transition-colors">SOC-2 Type II Compliance</Link></li>
              <li><Link href="#security" className="hover:text-white transition-colors">FDIC Partner Coverage</Link></li>
              <li><Link href="#security" className="hover:text-white transition-colors">AES-256 Encryption</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/legal" className="hover:text-white transition-colors">Legal & Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-emerald-900/80 pt-10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Finora Technologies Inc. All rights reserved.</p>
          <p className="text-center md:text-right">Banking services provided by partner banks, Members FDIC.</p>
        </div>
      </div>
    </footer>
  );
}
