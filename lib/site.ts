// One place for the things that appear on every page and change rarely.

export const SITE_URL = "https://themedicalagent.ai";
export const SITE_NAME = "The Medical Agent";

/** Self-serve. The questionnaire and the checkout both run on ApolloClaw, so every
 *  "Build Your Agent" CTA points there. */
export const BUILD_LINK = "https://www.apolloclaw.ai/build/medical";

/** Consultation. cal.com is canonical - the old calendly link is stale. */
export const DEMO_LINK = "https://cal.com/therealdaveo/apollo-claw";

export const PARENT_SITE = "https://apolloclaw.ai";
export const CONTACT_EMAIL = "david@apolloclaw.ai";
export const CONTACT_PHONE = "(917) 363-5487";

export const NAV_LINKS = [
  { label: "What It Does", href: "/how-it-works" },
  { label: "Who It's For", href: "/for-private-practices" },
  { label: "Results", href: "/#results" },
  { label: "FAQ", href: "/faq" },
  { label: "About", href: "/about" },
];

/**
 * The audience pages, used by the nav, the footer, and the sitemap.
 *
 * Split by WHO CARRIES THE ADMIN, not by specialty. A cardiologist and a dermatologist have the
 * same paperwork problem; a solo physician and a four-site group do not. Specialty changes the
 * vocabulary, which is configured at setup; who is drowning changes the sale.
 */
export const AUDIENCES = [
  { slug: "for-private-practices", label: "For Private Practices" },
  { slug: "for-practice-managers", label: "For Practice Managers" },
  { slug: "for-multi-site-groups", label: "For Multi-Site Groups" },
  { slug: "for-front-office", label: "For Front Office Teams" },
];

/** Breadcrumb JSON-LD for an interior page. */
export function breadcrumb(name: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
    ],
  };
}

/** The metadata every interior page repeats, minus the words. */
export function pageMeta(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}) {
  const url = `${SITE_URL}${opts.path}`;
  return {
    title: opts.title,
    description: opts.description,
    ...(opts.keywords ? { keywords: opts.keywords } : {}),
    alternates: { canonical: url },
    openGraph: {
      type: "website" as const,
      title: opts.title,
      description: opts.description,
      url,
      images: [
        { url: `${SITE_URL}/images/og-image.jpg`, width: 1200, height: 630, alt: SITE_NAME },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: opts.title,
      description: opts.description,
      images: [`${SITE_URL}/images/og-image.jpg`],
    },
  };
}
