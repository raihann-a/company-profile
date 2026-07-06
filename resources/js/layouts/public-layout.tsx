import type { PropsWithChildren } from 'react';
import CompanyHeader from '@/components/company/company-header';
import CompanyFooter from '@/components/company/company-footer';

export default function PublicLayout({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen overflow-x-hidden bg-[#04050A] text-slate-100">
            <div className="relative isolate overflow-hidden">
                <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] blur-3xl sm:h-[520px]" />
                <CompanyHeader />
                <main className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8">{children}</main>
            </div>
            <CompanyFooter />
        </div>
    );
}
