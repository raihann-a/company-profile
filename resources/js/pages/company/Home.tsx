import { Link } from '@inertiajs/react';
import CompanyHero from '@/components/company/hero-section';
import FeatureCard from '@/components/company/feature-card';
import TeamCard from '@/components/company/team-card';
import SectionHeading from '@/components/company/section-heading';
import { Button } from '@/components/ui/button';
import {
    companyAddress,
    companyAboutPoints,
    companyName,
    companyServices,
    companyTeam,
    companyTagline,
} from '@/data/company';

export default function Home() {
    return (
        <>
            <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_40px_120px_-65px_rgba(14,165,233,0.45)] sm:p-10 lg:p-12">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.28),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(255,131,0,0.18),_transparent_32%)] opacity-80" />
                <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                    <CompanyHero />
                    <div className="flex flex-col gap-6 rounded-3xl bg-slate-900/80 p-8 ring-1 ring-white/10 backdrop-blur-xl sm:p-10">
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/90">Rekam jejak</p>
                            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Kekuatan solusi yang mudah dibawa ke lapangan.</h2>
                        </div>
                        <p className="text-sm leading-7 text-slate-300">
                            {companyName} membantu perusahaan menemukan ritme digital baru yang relevan, elegan, dan dapat tumbuh bersama operasi bisnis.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                            {companyAboutPoints.slice(0, 2).map((item) => (
                                <div key={item.title} className="rounded-3xl border border-white/5 bg-white/5 p-5">
                                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{item.title}</p>
                                    <p className="mt-3 text-base leading-7 text-slate-200">{item.detail}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">Kontak kantor</p>
                                <p className="mt-2 text-sm text-slate-200">{companyAddress.city}</p>
                            </div>
                            <Link href="/contact" className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300 transition hover:text-white">
                                Mulai diskusi
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-20 space-y-10">
                <SectionHeading
                    eyebrow="Layanan Utama"
                    headline="Dari strategi sampai implementasi, setiap langkah punya tujuan."
                    description="Layanan kami dirancang untuk menjadi pondasi solusi digital yang kuat, efisien, dan mudah diadaptasi oleh tim Anda."
                />

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {companyServices.map((service) => (
                        <FeatureCard key={service.title} service={service} />
                    ))}
                </div>
            </section>

            <section className="mt-24 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_120px_-70px_rgba(59,130,246,0.35)] sm:p-10">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/90">Tim Kreatif</p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Orang-orang yang mengubah masalah menjadi momentum.</h2>
                        <p className="mt-4 text-base leading-8 text-slate-300">
                            Tim kecil kami bekerja dengan disiplin produk, desain, dan engineering untuk membuat inisiatif digital bergerak dari konsep menjadi realisasi.
                        </p>
                    </div>
                    <Button asChild>
                        <Link href="/team">Lihat Tim</Link>
                    </Button>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {companyTeam.slice(0, 4).map((member) => (
                        <TeamCard key={member.name} member={member} />
                    ))}
                </div>
            </section>

            <section className="mt-24 grid gap-10 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_40px_120px_-80px_rgba(236,72,153,0.22)] sm:p-10">
                <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr] sm:items-end">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/90">Akhiri dengan langkah nyata</p>
                        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">Kontak kami dan jadwalkan sesi discovery tanpa repot.</h2>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                        <p className="text-sm text-slate-300">Email</p>
                        <p className="mt-2 font-semibold text-white">halo@astranusa.co.id</p>
                        <p className="mt-5 text-sm text-slate-300">Telepon</p>
                        <p className="mt-2 font-semibold text-white">+62 812-3456-7890</p>
                    </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                    <Link href="/contact" className="rounded-3xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                        Kirim pesan sekarang
                    </Link>
                    <Button asChild variant="secondary" className="text-slate-100 hover:text-white">
                        <Link href="/about">Pelajari kami lebih jauh</Link>
                    </Button>
                </div>
            </section>
        </>
    );
}
