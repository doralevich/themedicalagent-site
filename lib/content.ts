// Content shared across pages. The home page shows a subset; /how-it-works and /faq
// show the whole thing. Keeping it here means the two never drift apart.
//
// THE BOUNDARY IS THE PRODUCT, and it runs through every line below. The agent type in
// apolloclaw2 describes this one as "administrative support only, not diagnosis", and that is not
// a disclaimer bolted on at the end - it is what makes the thing safe to sell to a practice at
// all. So nothing here is phrased as clinical judgment, and the FAQ says so in the first answer
// rather than the last.

export const CAPABILITIES = [
  {
    title: "Reminders and Recalls",
    body: "Appointment reminders, no-show follow-ups, and the recall list nobody has time to work. Drafted and scheduled; a person still presses send.",
  },
  {
    title: "Plain-Language Patient Explanations",
    body: "Post-visit instructions and prep notes rewritten so a patient can actually follow them, in your practice's voice, for a clinician to approve.",
  },
  {
    title: "Insurance and Billing Paperwork",
    body: "Prior authorizations, appeals, and claim follow-ups assembled from what you already have, so the form is filled before somebody sits down to fill it.",
  },
  {
    title: "Records and Document Organization",
    body: "Incoming faxes, referrals, and outside records sorted, named and routed to the right chart instead of a shared inbox nobody owns.",
  },
  {
    title: "Literature Summaries",
    body: "A clinician asks a question; the agent summarizes what the literature says, with citations you can check and a clear note where the evidence is thin.",
  },
  {
    title: "The Front Desk's Second Pair of Hands",
    body: "Intake packets, referral letters, and the fifteen small documents a day that nobody trained for and everybody ends up writing.",
  },
];

export const PROCESS = [
  {
    phase: "Day 1",
    num: "01",
    title: "We Learn Your Practice",
    body: "Your specialty, your patient population, your systems, and your voice. We set what the agent may draft, what it must route to a clinician, and what it must never touch.",
  },
  {
    phase: "Week 1",
    num: "02",
    title: "The Paperwork Starts Arriving Done",
    body: "Reminders and recalls draft themselves. Prior auths come back assembled. Post-visit instructions arrive written in language your patients can follow.",
  },
  {
    phase: "Month 1+",
    num: "03",
    title: "It Learns How You Say Things",
    body: "The agent picks up your phrasing, your standing instructions, and the questions your patients always ask. The drafts need less editing each week.",
  },
];

export const TESTIMONIALS = [
  {
    industry: "Family Medicine",
    quote:
      "Our recall list had eleven hundred people on it and we worked maybe thirty a month, because nobody had the afternoon. The agent drafts the outreach and my MA reviews a batch in twenty minutes. We are actually getting people back in.",
    name: "Physician Owner",
    detail: "Solo family practice",
  },
  {
    industry: "Orthopedics",
    quote:
      "Prior auths were eating a full-time position. Now the packet comes back assembled with the notes attached and the criteria addressed, and my biller checks it instead of building it. Same person, three times the throughput.",
    name: "Practice Manager",
    detail: "Orthopedic group, 6 providers",
  },
  {
    industry: "Dermatology",
    quote:
      "Post-visit instructions used to be whatever I typed at 6pm. Now they come back in plain English at a reading level patients can actually use, and I approve them. Our call-back volume dropped noticeably.",
    name: "Dermatologist",
    detail: "Two-location practice",
  },
  {
    industry: "Pediatrics",
    quote:
      "Faxes were the worst part of the day. Referrals, outside records, school forms, all in one pile. The agent sorts and routes them and flags what is urgent. My front desk got an hour back every morning.",
    name: "Office Administrator",
    detail: "Pediatric practice, 4 providers",
  },
  {
    industry: "Behavioral Health",
    quote:
      "What sold me was where it stops. It drafts, it organizes, it never touches a clinical decision, and it says so out loud when something is not its call. That is the only version of this I would put near patients.",
    name: "Clinical Director",
    detail: "Behavioral health group",
  },
  {
    industry: "Internal Medicine",
    quote:
      "I asked it what the current guidance was on a screening interval and it gave me the summary with the citations and told me plainly where the recommendations disagree. That is a research assistant, and I did not have one before.",
    name: "Internist",
    detail: "Multi-specialty group",
  },
];

export const FAQS = [
  {
    q: "Does it diagnose or make clinical decisions?",
    a: "No, and it is built not to. It is administrative support: drafting, organizing, summarizing, and chasing paperwork. Clinical judgment belongs to a licensed clinician, and during setup you define exactly what the agent must route to a person rather than answer.",
  },
  {
    q: "What about HIPAA and patient information?",
    a: "Every engagement is scoped with PHI handling agreed up front, including what the agent may see, where it may write, and what must stay inside your systems. We use least-privilege access throughout, and a Business Associate Agreement is part of the engagement rather than an afterthought.",
  },
  {
    q: "Does it work with our EHR?",
    a: "We build to the systems you already run rather than asking you to move. Where an EHR offers an integration we use it; where it does not, the agent works alongside it in the documents, inboxes and portals your team already uses. Scoped individually.",
  },
  {
    q: "Will it write to the chart?",
    a: "Only if you decide it should, and most practices start with no. The default is that the agent drafts and a person places anything that lands in the record. That line is set at setup and enforced, not left to judgment.",
  },
  {
    q: "Does it talk to patients directly?",
    a: "It drafts what goes to patients; a person sends it. Practices that later want it sending routine reminders on its own can turn that on for specific message types, but nothing is on by default.",
  },
  {
    q: "How long does setup take?",
    a: "Most practices are live within two weeks. We configure it on your specialty, your patient population, your standing instructions and your voice, and connect the systems the work already lives in.",
  },
  {
    q: "Does it replace front office staff?",
    a: "It replaces the part of their day nobody was hired for: retyping the same instructions, chasing the same authorizations, sorting the same fax pile. Most practices find the same team gets meaningfully more done rather than getting smaller.",
  },
  {
    q: "What does it cost?",
    a: "You can build your agent online and see the price before you pay anything. For a deployment scoped to your systems, your volume and your PHI requirements, book a consultation and we will give you a number.",
  },
];
