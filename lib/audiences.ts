// The four audience pages. Same shape, different argument.
//
// Split by WHO CARRIES THE ADMIN LOAD rather than by specialty. A cardiologist and a
// dermatologist have the same paperwork problem; a solo physician and a four-site group do not.
// Specialty changes the vocabulary and is configured at setup. Who is drowning changes the sale,
// and it is a different person in each of these four.

export type Audience = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  problem: { heading: string; body: string[] };
  benefits: { title: string; body: string }[];
  closing: { heading: string; body: string };
};

export const AUDIENCE_PAGES: Audience[] = [
  {
    slug: "for-private-practices",
    label: "For Private Practices",
    eyebrow: "For Private Practices",
    title: "You Are the Physician and the Back Office.",
    intro:
      "Nobody opened a practice to spend the evening on prior authorizations. The Medical Agent takes the administrative half so the clinical half gets the hours it is supposed to have.",
    metaTitle: "AI for Private Medical Practices | Administrative Support",
    metaDescription:
      "A private AI agent for independent practices. Drafts reminders and recalls, assembles prior authorizations, writes patient instructions in plain language, and organizes records. Administrative support only, never diagnosis.",
    keywords: [
      "AI for medical practices",
      "medical practice automation",
      "AI medical administrative assistant",
      "prior authorization automation",
      "private practice AI",
    ],
    problem: {
      heading: "The Practice Runs on Work Nobody Trained You For",
      body: [
        "Medical school covered medicine. It did not cover appealing a denial, chasing a referral, or writing discharge instructions at a sixth-grade reading level for the ninth time this week.",
        "So the administrative work goes where there is room for it, which is after hours. That is the part of independent practice that burns people out, and it is almost entirely made of documents somebody already knows how to produce.",
      ],
    },
    benefits: [
      {
        title: "Your Recall List Gets Worked",
        body: "The outreach nobody has an afternoon for, drafted in batches for a quick review instead of sitting untouched for another quarter.",
      },
      {
        title: "Prior Auths Arrive Assembled",
        body: "The packet built from what is already in your systems, with the criteria addressed, so somebody checks it rather than constructs it.",
      },
      {
        title: "Instructions Patients Can Follow",
        body: "Post-visit and prep instructions written in plain language, in your voice, for you to approve. Fewer call-backs asking what you meant.",
      },
      {
        title: "The Fax Pile Sorts Itself",
        body: "Referrals, outside records and forms routed to the right place, with anything urgent flagged rather than buried.",
      },
      {
        title: "A Research Assistant on Call",
        body: "Literature summarized with citations you can check, and an honest note where the evidence is thin or the guidance disagrees.",
      },
      {
        title: "It Stops at the Clinical Line",
        body: "You set what must reach a clinician. It drafts up to that line and hands over. Administrative support only, never diagnosis.",
      },
    ],
    closing: {
      heading: "Keep the Medicine. Hand Over the Paperwork.",
      body: "The agent does not practise medicine and is built not to. It exists so that the part of the job that needs your licence gets the part of the day that is currently going to admin.",
    },
  },
  {
    slug: "for-practice-managers",
    label: "For Practice Managers",
    eyebrow: "For Practice Managers",
    title: "The Admin Load Grows. The Team Does Not.",
    intro:
      "Volume goes up, payer requirements go up, and headcount stays flat. The Medical Agent absorbs the document work so the people you have can do the work only people can do.",
    metaTitle: "AI for Practice Managers | Medical Administrative Automation",
    metaDescription:
      "A private AI agent for practice managers. Absorbs prior authorizations, recalls, records routing and patient correspondence so a flat team handles rising volume.",
    keywords: [
      "practice management AI",
      "medical office automation",
      "healthcare administrative AI",
      "medical billing paperwork automation",
      "practice manager tools",
    ],
    problem: {
      heading: "Every New Requirement Lands on the Same Desk",
      body: [
        "A payer changes an auth requirement, a referral source changes a form, a new quality measure needs documenting. None of it comes with a new hire, and all of it lands on the two people who already had a full week.",
        "The compounding is what gets you. No single addition is unreasonable, and eighteen months of them turns a functioning office into one that is permanently a week behind on everything that is not urgent.",
      ],
    },
    benefits: [
      {
        title: "Throughput Without Headcount",
        body: "The document half of each task is done before a person opens it, so the same team clears meaningfully more.",
      },
      {
        title: "Denials Worked, Not Filed",
        body: "Appeals drafted against the actual denial reason with the supporting notes attached, rather than waiting for a quiet week that does not come.",
      },
      {
        title: "The Backlog Stops Compounding",
        body: "Recalls, unsigned forms and unrouted records stop accumulating faster than anyone can clear them.",
      },
      {
        title: "Consistency Across the Team",
        body: "The same letter, the same instructions and the same follow-up regardless of who was covering that day.",
      },
      {
        title: "Onboarding Gets Cheaper",
        body: "New staff work from drafts rather than from tribal knowledge, so the ramp is weeks instead of months.",
      },
      {
        title: "You Can See What Is Outstanding",
        body: "What is drafted, what is waiting on a clinician, and what nobody has touched. The queue is visible instead of remembered.",
      },
    ],
    closing: {
      heading: "The Work Is Not Going Down",
      body: "This is the part of the load that does not need a person to produce, only a person to check. That is the only lever that moves when the budget does not.",
    },
  },
  {
    slug: "for-multi-site-groups",
    label: "For Multi-Site Groups",
    eyebrow: "For Multi-Site Groups",
    title: "Four Locations. Four Different Ways of Doing Everything.",
    intro:
      "Each site solved the same problems separately and none of them wrote it down. The Medical Agent applies one standard across all of them without anybody having to police it.",
    metaTitle: "AI for Multi-Site Medical Groups | Consistent Practice Operations",
    metaDescription:
      "A private AI agent for multi-location medical groups. One standard for patient correspondence, authorizations and records handling applied consistently across every site.",
    keywords: [
      "multi-site medical group AI",
      "healthcare group operations",
      "medical group standardization",
      "clinic operations automation",
      "multi-location practice management",
    ],
    problem: {
      heading: "Standardization Is the Thing That Never Sticks",
      body: [
        "You write the protocol, you circulate the templates, and within a quarter each location is back to the version its longest-serving person prefers. Nobody is being difficult; the local version works locally, and nothing forces the merge.",
        "It shows up as variance you cannot explain: different call-back rates, different denial rates, different patient complaints, from sites doing nominally the same thing in materially different ways.",
      ],
    },
    benefits: [
      {
        title: "One Standard, Actually Applied",
        body: "The same correspondence, the same auth packets and the same intake handling everywhere, because the draft comes from one place.",
      },
      {
        title: "Local Variation Where It Belongs",
        body: "Site-specific details that genuinely differ stay different. What varied only by accident stops varying.",
      },
      {
        title: "Coverage Between Sites",
        body: "The queue does not care which location is short-staffed this week, so a thin site is not a slow site.",
      },
      {
        title: "Comparable Numbers",
        body: "When every site works the same way, the differences that remain are real and worth investigating.",
      },
      {
        title: "New Sites Start Configured",
        body: "An acquisition or a new location opens with the group's way of working rather than inventing its own over eighteen months.",
      },
      {
        title: "One Clinical Line, Everywhere",
        body: "What must reach a clinician is defined once and enforced identically, which is the part you cannot afford to have vary by site.",
      },
    ],
    closing: {
      heading: "Consistency Without Policing",
      body: "The reason protocols drift is that following them costs more than not. When the standard version is also the easy version, it stops drifting.",
    },
  },
  {
    slug: "for-front-office",
    label: "For Front Office Teams",
    eyebrow: "For Front Office Teams",
    title: "The Phone Rings While You Are Doing Everything Else.",
    intro:
      "Check-in, insurance, the fax pile, the forms, the callbacks, and a waiting room that can see you. The Medical Agent takes the writing so you can take the room.",
    metaTitle: "AI for Medical Front Office Teams | Reduce the Paperwork Load",
    metaDescription:
      "A private AI agent for medical front office teams. Drafts patient correspondence, sorts incoming records, assembles forms and works the callback list so staff can handle the people in front of them.",
    keywords: [
      "medical front office automation",
      "medical receptionist AI",
      "patient communication automation",
      "medical office paperwork",
      "front desk workflow AI",
    ],
    problem: {
      heading: "Every Task Is Small and There Are Two Hundred of Them",
      body: [
        "None of it is hard. A reminder, a form, a records request, a callback, a referral letter. Each one takes four minutes and there are more of them than there are four-minute gaps in the day.",
        "So they get done between other things, which is where the errors come from, and the ones that need a quiet moment to write properly get done last or not at all.",
      ],
    },
    benefits: [
      {
        title: "The Writing Is Already Done",
        body: "Letters, instructions, forms and follow-ups arrive drafted. You read and send instead of composing between phone calls.",
      },
      {
        title: "The Fax Pile Is Sorted",
        body: "Incoming records and referrals identified, named and routed, with the urgent ones surfaced rather than found on Thursday.",
      },
      {
        title: "Callbacks Have a List",
        body: "Who is owed a call, what about, and what was said last time, instead of a stack of notes and somebody's memory.",
      },
      {
        title: "Nothing Sits Because It Was Awkward",
        body: "The message nobody wanted to write is drafted, so the hard ones stop being the slow ones.",
      },
      {
        title: "It Sounds Like Your Office",
        body: "The agent learns how your practice talks to patients, so the drafts do not read like they came from somewhere else.",
      },
      {
        title: "You Are Still the Person",
        body: "Every patient-facing message is yours to approve. The agent writes the draft; the practice keeps the relationship.",
      },
    ],
    closing: {
      heading: "Take the Room, Not the Keyboard",
      body: "The part of this job that matters is the person at the desk and the person on the phone. This is for everything that keeps pulling you away from them.",
    },
  },
];

/** One page by slug. Returns undefined for a slug that is not an audience, which is what lets
 *  each page file assert with `!` and fail loudly at build time rather than rendering blank. */
export function getAudience(slug: string): Audience | undefined {
  return AUDIENCE_PAGES.find((a) => a.slug === slug);
}
