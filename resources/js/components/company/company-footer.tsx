import { companyAddress, companyName, companyNav } from '@/data/company';
import { Link } from '@inertiajs/react';

export default function CompanyFooter() {
    return (
        <footer className="border-t border-white/10 bg-slate-950/95 text-slate-300">
            <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-16 lg:flex-row lg:justify-between lg:px-8">
                <div className="max-w-xl">
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/90">{companyName}</p>
                    <p className="mt-4 text-lg font-semibold text-white">Solusi digital yang bersahaja, profesional, dan berdaya saing.</p>
                    <p className="mt-4 text-sm leading-7 text-slate-400">
                        Menyediakan layanan strategis hingga implementasi teknis untuk perusahaan yang ingin membangun keunggulan digital dengan identitas kuat.
                    </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[220px_220px]">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Navigasi</p>
                        <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                            {companyNav.map((item) => (
                                <li key={item.href}>
                                    <Link href={item.href} className="transition hover:text-white">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Kontak</p>
                        <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                            <p>{companyAddress.street}</p>
                            <p>{companyAddress.city}</p>
                            <p>
                                <a href={`mailto:${companyAddress.email}`} className="transition hover:text-white">
                                    {companyAddress.email}
                                </a>
                            </p>
                            <p>
                                <a href={`tel:${companyAddress.phone}`} className="transition hover:text-white">
                                    {companyAddress.phone}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t border-slate-800/70 bg-slate-950/90 px-6 py-6 text-center text-xs text-slate-500 lg:px-8">
                © {new Date().getFullYear()} {companyName}. Semua hak cipta dilindungi.
            </div>
        </footer>
    );
}
