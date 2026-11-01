import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background/90 backdrop-blur-md transition-all">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:bg-emerald-700 transition-colors">
            F
          </div>
          <span className="text-2xl font-bold text-emerald-950 tracking-tighter">
            Finora
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-sm text-slate-700 font-medium">
          <Link href="#features" className="hover:text-emerald-700 transition-colors">Features</Link>
          <Link href="#security" className="hover:text-emerald-700 transition-colors">Security</Link>
          <Link href="#pricing" className="hover:text-emerald-700 transition-colors">Pricing</Link>
        </nav>
        <div className="flex items-center gap-5">
          <Link href="/login" className="text-sm font-semibold text-slate-700 hover:text-emerald-700 transition-colors">
            Sign in
          </Link>
          <Link href="/signup" className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:shadow transition-all">
            Open Account
          </Link>
        </div>
      </div>
    </header>
  );
}
