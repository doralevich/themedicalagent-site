import type { Metadata } from "next";
import Link from "next/link";
import Nav from "../components/Nav";
import { Footer } from "../components/Footer";
import { PageHero, Label } from "../components/PageHero";
import { ClosingCta } from "../components/Cta";
import { CAPABILITIES, PROCESS } from "@/lib/content";
import { breadcrumb, pageMeta } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "How It Works: From Consultation to Running in Two Weeks",
  description:
    "What The Medical Agent does, how it gets configured around your specialty and your standing instructions, and what the first two weeks actually look like.",
  path: "/how-it-works",
  keywords: [
    "how medical AI works",
    "medical practice AI setup",
    "EHR AI integration",
    "healthcare automation onboarding",
  ],
});

const STACK = [
  {
    title: "Your EHR and Practice Systems", body: "We build to what you already run. Where your EHR offers an integration we use it; where it does not, the agent works alongside it. It reads where you allow it and writes only where you decide it should, which for most practices starts at nowhere.",
  },
  {
    title: "Your Voice and Standing Instructions", body: "How your practice talks to patients, and the guidance you give the same answer to every week. A draft comes back sounding like your office rather than like a form letter.",
  },
  {
    title: "Your Payer and Referral Paperwork", body: "Prior authorization portals, denial letters, referral forms and the criteria each payer actually applies. This is where most of the recovered hours come from.",
  },
  {
    title: "Your Schedule and Recall List", body: "Reminders, no-show follow-ups and the recall cohort nobody has an afternoon for, surfaced where your team already works.",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb("How It Works", "/how-it-works")) }}
      />
      <Nav />
      <main>
        <PageHero
          eyebrow="How It Works"
          title="Configured Around Your Practice, Not a Generic Clinic"
        >
          <p className="max-w-2xl mx-auto">
            Every deployment starts with your specialty, your systems, your PHI requirements and the
            line where a clinician has to take over. Here is what that looks like.
          </p>
        </PageHero>

        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>What It Does</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                Six Jobs It Takes Off Your Team
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {CAPABILITIES.map((c) => (
                <div key={c.title} className="bg-white border-l-4 border-brand rounded p-6 shadow-sm">
                  <h3 className="font-bold text-lg text-ink mb-3">{c.title}</h3>
                  <p className="text-ink leading-relaxed">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid-dark-section py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label on="dark">The Timeline</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                From Consultation to Running in 2 Weeks
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {PROCESS.map((p) => (
                <div key={p.num} className="flex flex-col items-center text-center px-6">
                  <div className="w-20 h-20 rounded-full border-2 border-brand-tint flex flex-col items-center justify-center mb-5 bg-ground/85 shrink-0">
                    <span className="text-xs uppercase tracking-widest font-semibold text-brand-tint">
                      {p.phase}
                    </span>
                    <span className="text-xl font-bold text-white">{p.num}</span>
                  </div>
                  <h3 className="font-bold text-lg text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cream py-20">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <Label>What It Connects To</Label>
              <h2 className="text-3xl md:text-4xl font-bold text-ink leading-tight">
                It Plugs Into the Stack You Already Run
              </h2>
              <p className="text-lg text-ink mt-4 max-w-3xl mx-auto">
                We do the integration work. You do not migrate systems to accommodate
                the agent.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {STACK.map((s) => (
                <div key={s.title} className="bg-white rounded p-6 border-l-4 border-brand shadow-sm">
                  <h3 className="font-bold text-lg text-ink mb-3">{s.title}</h3>
                  <p className="text-ink leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
            <p className="text-center mt-10">
              <Link href="/what-is-an-agent" className="text-sm font-semibold text-brand hover:underline">
                What is an agent, exactly? &rarr;
              </Link>
            </p>
          </div>
        </section>

        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
