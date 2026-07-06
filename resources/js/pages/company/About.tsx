import SectionHeading from '@/components/company/section-heading';
import { companyAboutPoints, companyValues } from '@/data/company';

export default function About() {
    return (
        <div className="space-y-20">
            <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_120px_-80px_rgba(14,165,233,0.16)] sm:p-10">
                <SectionHeading
                    eyebrow="Tentang Kami"
                    headline="Visi, misi, dan arah perkembangan perusahaan yang jelas."
                    description="Kami menempatkan pengalaman, proses, dan dampak bisnis sebagai titik awal dalam setiap kerja sama."
                />

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {companyAboutPoints.map((item) => (
                        <article key={item.title} className="rounded-[1.75rem] border border-white/5 bg-slate-900/70 p-6 text-slate-200 shadow-lg shadow-slate-950/10">
                            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300/90">{item.title}</p>
                            <p className="mt-4 text-base leading-8">{item.detail}</p>
                        </article>
                    ))}
                </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_40px_120px_-80px_rgba(236,72,153,0.18)] sm:p-10">
                <SectionHeading
                    eyebrow="Nilai Perusahaan"
                    headline="Kompromi minimal, eksekusi maksimal."
                    description="Nilai kami mendukung tim dan klien untuk bergerak cepat sambil menjaga kualitas dan karakter brand."
                />

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    {companyValues.map((value) => (
                        <article key={value.title} className="rounded-[1.75rem] bg-slate-950/70 p-6 ring-1 ring-white/10 backdrop-blur-xl">
                            <p className="text-sm uppercase tracking-[0.32em] text-slate-400">{value.title}</p>
                            <p className="mt-4 text-base leading-8 text-slate-200">{value.detail}</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
}
