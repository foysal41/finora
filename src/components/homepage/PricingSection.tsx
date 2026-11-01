export default function PricingSection() {
  return (
    <section id="pricing" className="py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">Simple & Transparent</span>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-emerald-950">
            Predictable plans for every stage of growth
          </h2>
          <p className="text-slate-600 text-lg">
            No hidden fees, no wire markups, no minimum balance penalties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-emerald-950">Starter</h3>
                <p className="text-slate-500 text-sm mt-1">For early-stage startups and lean teams.</p>
              </div>
              <div className="text-5xl font-extrabold text-emerald-950 tabular-nums">
                $0 <span className="text-base font-normal text-slate-500">/ month</span>
              </div>
              <ul className="space-y-3.5 text-sm text-slate-600 pt-6 border-t border-slate-100">
                <li className="flex items-center gap-2">✓ Multi-currency accounts (USD, EUR)</li>
                <li className="flex items-center gap-2">✓ Up to 5 virtual corporate cards</li>
                <li className="flex items-center gap-2">✓ Automated expense tracking</li>
                <li className="flex items-center gap-2">✓ Standard transfer speeds</li>
              </ul>
            </div>
            <button className="mt-10 w-full py-4 bg-slate-100 hover:bg-slate-200 text-emerald-950 rounded-full font-semibold transition-all text-sm">
              Get Started Free
            </button>
          </div>

          <div className="bg-emerald-950 text-white p-10 rounded-3xl shadow-2xl relative transform lg:-translate-y-2">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
              Most Popular
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">Growth</h3>
                <p className="text-emerald-300 text-sm mt-1">For scaling teams expanding cash flow globally.</p>
              </div>
              <div className="text-5xl font-extrabold text-white tabular-nums">
                $49 <span className="text-base font-normal text-emerald-300">/ month</span>
              </div>
              <ul className="space-y-3.5 text-sm text-emerald-100 pt-6 border-t border-emerald-900">
                <li className="flex items-center gap-2">✓ Everything in Starter</li>
                <li className="flex items-center gap-2">✓ Automated daily treasury yield sweeps</li>
                <li className="flex items-center gap-2">✓ Unlimited virtual & physical cards</li>
                <li className="flex items-center gap-2">✓ Direct QuickBooks & Xero sync</li>
              </ul>
            </div>
            <button className="mt-10 w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-semibold transition-all text-sm shadow-lg shadow-emerald-600/30">
              Start 30-Day Free Trial
            </button>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-emerald-950">Enterprise</h3>
                <p className="text-slate-500 text-sm mt-1">For global multi-entity balance sheets.</p>
              </div>
              <div className="text-5xl font-extrabold text-emerald-950 tabular-nums">
                Custom
              </div>
              <ul className="space-y-3.5 text-sm text-slate-600 pt-6 border-t border-slate-100">
                <li className="flex items-center gap-2">✓ Dedicated treasury manager</li>
                <li className="flex items-center gap-2">✓ Custom institutional FX pricing</li>
                <li className="flex items-center gap-2">✓ Multi-entity approval workflows</li>
                <li className="flex items-center gap-2">✓ 24/7 priority SLA support</li>
              </ul>
            </div>
            <button className="mt-10 w-full py-4 bg-slate-100 hover:bg-slate-200 text-emerald-950 rounded-full font-semibold transition-all text-sm">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
