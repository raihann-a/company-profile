import type { CompanyTeamMember } from '@/data/company';

export default function TeamCard({ member }: { member: CompanyTeamMember }) {
    return (
        <article className="group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.36)] transition hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900/90 sm:p-8">
            <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20">
                    {member.initials}
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                    <p className="text-sm text-slate-400">{member.role}</p>
                </div>
            </div>
            <p className="mt-6 text-sm leading-7 text-slate-300">{member.bio}</p>
        </article>
    );
}
