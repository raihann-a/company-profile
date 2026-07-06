export default function SectionHeading({
    eyebrow,
    headline,
    description,
}: {
    eyebrow: string;
    headline: string;
    description: string;
}) {
    return (
        <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/90">{eyebrow}</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">{headline}</h2>
            <p className="mt-4 text-base leading-8 text-slate-300">{description}</p>
        </div>
    );
}
