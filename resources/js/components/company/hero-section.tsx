import { companyName, companyTagline } from '@/data/company';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

export default function CompanyHero() {
    return (
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_-70px_rgba(14,165,233,0.22)] sm:p-10">
            <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.18),_transparent_20%)] blur-2xl" />
            <div className="relative space-y-8">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/90">Brand & Teknologi</p>
                <div className="space-y-4">
                    <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                        {companyName}
                    </h1>
                    <p className="max-w-2xl text-lg leading-8 text-slate-300">{companyTagline}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr] sm:items-center">
                    <div className="rounded-3xl bg-white/5 p-6 text-slate-100 ring-1 ring-white/10 backdrop-blur-xl">
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">Capai pertumbuhan</p>
                        <p className="mt-4 text-base leading-7 text-slate-200">Platform yang jelas, tim yang cepat, dan proses yang mudah diikuti.</p>
                    </div>
                    <Button asChild size="lg">
                        <Link href="/contact">Bicara dengan kami</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
