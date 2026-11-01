export default function FaqSection() {
  return (
    <section className="py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center space-y-4 mb-20">
          <span className="text-xs font-semibold text-emerald-600 uppercase tracking-widest">Got Questions?</span>
          <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-emerald-950">
            Frequently asked questions
          </h2>
          <p className="text-slate-600 text-lg">
            Clear answers about setting up and growing with Finora.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950 mb-3">How fast can I open an account?</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Most business accounts are verified and ready within 10 minutes using standard corporate incorporation details.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950 mb-3">Are my funds fully secure?</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Yes. All deposits are held with FDIC-insured partner banks up to $250,000+, backed by SOC-2 Type II security certification and AES-256 encryption.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold text-emerald-950 mb-3">Can I integrate Finora with my existing ERP software?</h3>
            <p className="text-slate-600 text-base leading-relaxed">
              Finora features native one-click integrations with QuickBooks, Xero, NetSuite, and major accounting platforms for continuous automated reconciliation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
