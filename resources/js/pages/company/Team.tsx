import SectionHeading from '@/components/company/section-heading';
import TeamCard from '@/components/company/team-card';
import { companyTeam } from '@/data/company';

export default function Team() {
    return (
        <div className="space-y-20">
            <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_120px_-80px_rgba(14,165,233,0.16)] sm:p-10">
                <SectionHeading
                    eyebrow="Tim Kami"
                    headline="Kolektif berpengalaman yang menjaga kualitas eksekusi tetap tinggi."
                    description="Setiap anggota tim membawa keahlian berbeda, sehingga proyek Anda memiliki fondasi teknis, produk, dan kreatif yang seimbang."
                />

                <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {companyTeam.map((member) => (
                        <TeamCard key={member.name} member={member} />
                    ))}
                </div>
            </section>
        </div>
    );
}
