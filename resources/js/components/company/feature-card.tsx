import type { CompanyService } from '@/data/company';

export default function FeatureCard({
    service,
    large = false,
}: {
    service: CompanyService;
    large?: boolean;
}) {
    return (
        <article className={`rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-slate-950/10 ${large ? 'lg:p-8' : ''}`}>
            <div className="rounded-3xl bg-slate-900/75 p-6 ring-1 ring-white/10 backdrop-blur-xl">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-300">
                {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 rounded-3xl border border-white/5 bg-white/5 p-4">
                        <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </article>
    );
}
