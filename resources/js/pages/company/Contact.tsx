import { useState } from 'react';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/company/section-heading';
import { companyAddress } from '@/data/company';

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 600));
        setSubmitting(false);
        toast.success('Pesan Anda berhasil dikirim. Kami akan menghubungi segera.');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <div className="space-y-20">
            <section className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_120px_-80px_rgba(56,189,248,0.18)] sm:p-10">
                <SectionHeading
                    eyebrow="Hubungi Kami"
                    headline="Kirim pesan singkat dan tim kami akan merespons dalam waktu yang cepat."
                    description="Bagikan kebutuhan Anda tentang produk digital, layanan teknis, atau kolaborasi strategis."
                />

                <div className="mt-12 grid gap-10 xl:grid-cols-[1.1fr_0.9fr] xl:items-start">
                    <div className="grid gap-6 rounded-[2rem] border border-white/5 bg-slate-900/70 p-8 text-slate-200 ring-1 ring-white/10 backdrop-blur-xl">
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/90">Alamat kantor</p>
                            <p className="mt-4 text-base leading-7 text-slate-300">{companyAddress.street}<br />{companyAddress.city}</p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/90">Email</p>
                            <p className="mt-4 text-base leading-7 text-slate-300">{companyAddress.email}</p>
                        </div>
                        <div>
                            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/90">Telepon</p>
                            <p className="mt-4 text-base leading-7 text-slate-300">{companyAddress.phone}</p>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-[0_30px_80px_-50px_rgba(56,189,248,0.15)] sm:p-10">
                        <label className="block text-sm font-medium text-slate-200">
                            Nama lengkap
                            <input
                                value={form.name}
                                onChange={(event) => setForm({ ...form, name: event.target.value })}
                                required
                                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                                placeholder="Contoh: Dira"
                            />
                        </label>
                        <label className="block text-sm font-medium text-slate-200">
                            Email
                            <input
                                value={form.email}
                                onChange={(event) => setForm({ ...form, email: event.target.value })}
                                type="email"
                                required
                                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                                placeholder="Contoh: dira@example.com"
                            />
                        </label>
                        <label className="block text-sm font-medium text-slate-200">
                            Pesan singkat
                            <textarea
                                value={form.message}
                                onChange={(event) => setForm({ ...form, message: event.target.value })}
                                required
                                rows={6}
                                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/10"
                                placeholder="Tuliskan kebutuhan atau permintaan Anda di sini"
                            />
                        </label>
                        <div className="flex justify-end">
                            <Button type="submit" disabled={submitting} size="lg">
                                {submitting ? 'Mengirim...' : 'Kirim Pesan'}
                            </Button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
