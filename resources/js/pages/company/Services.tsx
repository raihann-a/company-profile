import SectionHeading from '@/components/company/section-heading';
import FeatureCard from '@/components/company/feature-card';
import { companyServices } from '@/data/company';

export default function Services() {
    return (
        <div className="space-y-20">
            <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_120px_-80px_rgba(56,189,248,0.18)] sm:p-10">
                <SectionHeading
                    eyebrow="Layanan"
                    headline="Solusi digital yang dirancang untuk kebutuhan bisnis modern dan adaptif."
                    description="Dari strategi produk sampai platform operasional, layanan kami membantu perusahaan bertumbuh tanpa mengorbankan efisiensi."
                />

                <div className="mt-12 grid gap-6 lg:grid-cols-3">
                    {companyServices.map((service) => (
                        <FeatureCard key={service.title} service={service} large />
                    ))}
                </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_40px_120px_-80px_rgba(236,72,153,0.12)] sm:p-10">
                <SectionHeading
                    eyebrow="Pendekatan kami"
                    headline="Kolaborasi yang efektif tidak muncul begitu saja."
                    description="Kami bekerja bersama tim internal klien dalam siklus pembelajaran, validasi, dan penyempurnaan produk."
                />

                <div className="mt-12 grid gap-6 sm:grid-cols-2">
                    <article className="rounded-[1.75rem] bg-slate-950/70 p-6 text-slate-200 ring-1 ring-white/10 backdrop-blur-xl">
                        <h3 className="text-xl font-semibold text-white">Proses yang transparan</h3>
                        <p className="mt-4 leading-8 text-slate-300">Sesi discovery, peta fitur, dan milestone kami disusun agar setiap pemangku kepentingan paham dan percaya jalur pengembangan.</p>
                    </article>
                    <article className="rounded-[1.75rem] bg-slate-950/70 p-6 text-slate-200 ring-1 ring-white/10 backdrop-blur-xl">
                        <h3 className="text-xl font-semibold text-white">Solusi skalabel</h3>
                        <p className="mt-4 leading-8 text-slate-300">Kami membangun dengan fokus modular, sehingga perbaikan dan peningkatan fitur bisa dilakukan tanpa merombak pondasi.</p>
                    </article>
                </div>
            </section>
        </div>
    );
}
