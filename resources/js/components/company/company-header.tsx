import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { companyName, companyNav } from '@/data/company';
import { cn } from '@/lib/utils';

export default function CompanyHeader() {
    return (
        <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
                <Link href="/" className="inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-slate-100">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-500 to-cyan-500 text-base font-black text-white shadow-lg shadow-fuchsia-500/10">
                        {companyName.slice(0, 1)}
                    </span>
                    <span className="text-base tracking-[0.18em]">{companyName}</span>
                </Link>

                <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
                    {companyNav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                'transition hover:text-white focus-visible:text-white',
                            )}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <Button asChild size="sm" className="hidden md:inline-flex">
                        <Link href="/contact">Hubungi Kami</Link>
                    </Button>
                    <button className="inline-flex items-center justify-center rounded-full border border-slate-600/90 bg-slate-900/80 px-3 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-400/50 hover:bg-slate-800/90 md:hidden">
                        Menu
                    </button>
                </div>
            </div>
        </header>
    );
}
