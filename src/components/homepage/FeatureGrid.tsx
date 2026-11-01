export default function FeatureGrid() {
  return (
    <section id="features" className="py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">Engineered for Scale</span>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-emerald-950">
            Financial workflows redesigned from the ground up
          </h2>
          <p className="text-slate-600 text-lg">
            Everything your company needs to manage global cash flow, earn yield, and control spend with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                01
              </div>
              <h3 className="text-2xl font-bold text-emerald-950">Personal Digital Wallet</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Securely store your funds, manage digital assets, and access your money instantly from anywhere in the world.
              </p>
            </div>
            <div className="pt-8">
              <span className="text-emerald-600 font-semibold text-sm group-hover:underline">Explore wallet →</span>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                02
              </div>
              <h3 className="text-2xl font-bold text-emerald-950">Income & Expense</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Track every dollar coming in and going out with beautiful, real-time insights tailored to your personal habits.
              </p>
            </div>
            <div className="pt-8">
              <span className="text-emerald-600 font-semibold text-sm group-hover:underline">Track spending →</span>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                03
              </div>
              <h3 className="text-2xl font-bold text-emerald-950">Send & Receive Money</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Move money effortlessly between friends, family, and merchants with instant transfers and zero friction.
              </p>
            </div>
            <div className="pt-8">
              <span className="text-emerald-600 font-semibold text-sm group-hover:underline">Move money →</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                04
              </div>
              <h3 className="text-2xl font-bold text-emerald-950">Transaction Processing</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Benefit from lightning-fast transaction speeds and top-tier security for every payment you make.
              </p>
            </div>
            <div className="pt-8">
              <span className="text-emerald-600 font-semibold text-sm group-hover:underline">See processing →</span>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group">
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 font-bold text-lg group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                05
              </div>
              <h3 className="text-2xl font-bold text-emerald-950">Personal Finance Management</h3>
              <p className="text-slate-600 text-base leading-relaxed">
                Take full control of your financial health with personalized budgets, savings goals, and smart financial advice.
              </p>
            </div>
            <div className="pt-8">
              <span className="text-emerald-600 font-semibold text-sm group-hover:underline">Start planning →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
