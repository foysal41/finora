export default function Testimonials() {
  return (
    <section className="py-28 bg-white border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">Client Success</span>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-emerald-950">
            Trusted by modern financial leaders
          </h2>
          <p className="text-slate-600 text-lg">
            Discover how visionary founders and CFOs scale their operations with total clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-10 rounded-3xl bg-slate-50 flex flex-col justify-between space-y-8 shadow-sm">
            <p className="text-slate-800 text-lg sm:text-xl font-normal leading-relaxed italic">
              &quot;Finora transformed how we handle international payouts and cash yield. What used to take days now happens instantly with complete transparency.&quot;
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
              <div className="w-12 h-12 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-lg">
                SJ
              </div>
              <div>
                <p className="font-bold text-emerald-950 text-base">Sarah Jenkins</p>
                <p className="text-xs font-medium text-slate-500">CFO at TechCorp Global</p>
              </div>
            </div>
          </div>

          <div className="p-10 rounded-3xl bg-slate-50 flex flex-col justify-between space-y-8 shadow-sm">
            <p className="text-slate-800 text-lg sm:text-xl font-normal leading-relaxed italic">
              &quot;The multi-currency vaults and automated expense cards gave our global remote team total financial visibility without any administrative overhead.&quot;
            </p>
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
              <div className="w-12 h-12 rounded-full bg-emerald-800 text-white font-bold flex items-center justify-center text-lg">
                MC
              </div>
              <div>
                <p className="font-bold text-emerald-950 text-base">Marcus Chen</p>
                <p className="text-xs font-medium text-slate-500">Founder & CEO at Apex Digital</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
