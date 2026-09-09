// Vercel Serverless Function: GET /api/notices
const noticesData = [
  {
    id: 1,
    date: "2026-09-05",
    category: "Examinations",
    title: "Autonomous End Semester Theory Examinations (Nov/Dec 2026) Schedule & Hall Allocation",
    body: "The final timetable and hall allocations for University of Madras autonomous end-semester examinations have been published. Hall tickets can be collected from respective department offices starting 12 September.",
    isNew: true,
    fileSize: "420 KB PDF"
  },
  {
    id: 2,
    date: "2026-09-02",
    category: "Admissions",
    title: "UG Admissions 2026-27 (B.Sc CS, BCA, B.Com, BBA & B.A.) Merit List Round 2 Released",
    body: "Selected candidates under University Single Window & Merit Quota are requested to report to the Central Seminar Hall with original certificates before 20 September.",
    isNew: true,
    fileSize: "610 KB PDF"
  },
  {
    id: 3,
    date: "2026-08-28",
    category: "Placements",
    title: "Mega Campus Recruitment Drive 2026: Deloitte, Zoho, TCS, Infosys & HDFC Bank",
    body: "Eligible final-year students (B.Sc CS, BCA, B.Sc IT, B.Com, BBA) can register for virtual assessments and personal interviews via the Training & Placement cell.",
    isNew: true,
    fileSize: "350 KB PDF"
  },
  {
    id: 4,
    date: "2026-08-22",
    category: "Events",
    title: "State-Level Inter-Collegiate Arts & Science Symposium \"SHA-FEST 2026\" Registrations Open",
    body: "Inviting student papers, web design hackathons, commerce case studies, and literary debates. Cash prizes worth ₹1,00,000 to be won. Teams of up to 4 can register.",
    isNew: false,
    fileSize: "1.2 MB PDF"
  },
  {
    id: 5,
    date: "2026-08-15",
    category: "Scholarships",
    title: "Merit-cum-Means & Sha Founder's Scholarship Scheme 2026-27",
    body: "Applications are invited from eligible students for Tamil Nadu State Post-Matric and Sha's Educational Trust Merit Scholarships. Submit signed forms at the administrative block counter 4.",
    isNew: false,
    fileSize: "280 KB PDF"
  },
  {
    id: 6,
    date: "2026-08-10",
    category: "Campus",
    title: "Central Digital Library & E-Learning Resource Terminal 24/7 Hours during Exams",
    body: "The Air-Conditioned E-Learning Centre with INFLIBNET and DELNET digital access will remain open until midnight throughout the examination revision cycle.",
    isNew: false,
    fileSize: "190 KB PDF"
  }
];

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { category, search } = req.query || {};
  let filtered = [...noticesData];

  if (category && category !== "All") {
    filtered = filtered.filter(n => n.category.toLowerCase() === category.toLowerCase());
  }

  if (search) {
    const q = search.toLowerCase();
    filtered = filtered.filter(n => n.title.toLowerCase().includes(q) || n.body.toLowerCase().includes(q));
  }

  filtered.sort((a, b) => (a.date < b.date ? 1 : -1));

  return res.status(200).json({
    ok: true,
    count: filtered.length,
    notices: filtered
  });
};
