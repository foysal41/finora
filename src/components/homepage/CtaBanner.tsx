export default function CtaBanner() {
  return (
    <section className="py-28 bg-emerald-950 text-white dark-mesh relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-10">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-tight">
          Ready to elevate your business finances?
        </h2>
        <p className="text-emerald-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
          Join thousands of high-growth tech platforms scaling securely with Finora.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-2">
          <button className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-emerald-50 text-emerald-950 rounded-full font-bold transition-all text-base shadow-xl">
            Open your account now
          </button>
          <button className="w-full sm:w-auto px-10 py-4 bg-emerald-900 hover:bg-emerald-800 text-white border border-emerald-700/80 rounded-full font-semibold transition-all text-base">
            Talk to sales
          </button>
        </div>
      </div>
    </section>
  );
}
