// Vercel Serverless Function: /api/admissions (GET, POST)

// In-memory store for serverless runtime
let inMemoryAdmissions = [
  {
    id: 1725619200000,
    submittedAt: "2026-09-01T10:30:00.000Z",
    applicationId: "SASC-2026-1042",
    fullName: "Praveen Kumar S",
    email: "praveen.k@gmail.com",
    phone: "9876543210",
    department: "B.Sc. Computer Science",
    marksPercentage: "92.5%",
    quota: "University Single Window Merit Quota",
    status: "Verified",
    message: "Interested in AI & Data Analytics specialization and campus hostel accommodation."
  },
  {
    id: 1725705600000,
    submittedAt: "2026-09-03T14:15:00.000Z",
    applicationId: "SASC-2026-1089",
    fullName: "Sneha Ramanathan",
    email: "sneha.raman@outlook.com",
    phone: "9123456780",
    department: "B.Com (General & Accounting)",
    marksPercentage: "88.4%",
    quota: "Direct Management Quota",
    status: "In Review",
    message: "Seeking merit scholarship details based on 12th commerce board score."
  }
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[6-9]\d{9}$/;
const VALID_DEPARTMENTS = [
  "B.Sc. Computer Science",
  "BCA (Bachelor of Computer Applications)",
  "B.Sc. Information Technology",
  "B.Com (General & Accounting)",
  "BBA (Business Administration)",
  "B.A. English Literature",
  "Computer Science",
  "Computer Applications",
  "Information Technology",
  "Commerce",
  "Business Administration",
  "English Literature"
];

function validateEnquiry(body) {
  const errors = [];
  const name = (body.fullName || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const department = (body.department || "").trim();

  if (name.length < 3) errors.push("Full name must be at least 3 characters.");
  if (!EMAIL_PATTERN.test(email)) errors.push("Enter a valid email address.");
  if (!PHONE_PATTERN.test(phone)) errors.push("Enter a valid 10-digit Indian mobile number.");
  if (!VALID_DEPARTMENTS.includes(department)) errors.push("Please select a valid academic department.");

  return {
    errors,
    cleaned: {
      fullName: name,
      email,
      phone,
      department,
      marksPercentage: body.marksPercentage ? body.marksPercentage + "%" : "Not Provided",
      quota: body.quota || "General Enquiry",
      message: (body.message || "").trim()
    }
  };
}

module.exports = (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    return res.status(200).json({
      ok: true,
      count: inMemoryAdmissions.length,
      enquiries: inMemoryAdmissions
    });
  }

  if (req.method === "POST") {
    const { errors, cleaned } = validateEnquiry(req.body || {});
    if (errors.length > 0) {
      return res.status(400).json({ ok: false, errors });
    }

    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newEntry = {
      id: Date.now(),
      applicationId: `SASC-2026-${randomSuffix}`,
      submittedAt: new Date().toISOString(),
      status: "New Submission",
      ...cleaned
    };

    inMemoryAdmissions.unshift(newEntry);

    return res.status(201).json({
      ok: true,
      message: "Admission enquiry submitted successfully. Our admission officer will reach out within 24 hours.",
      entry: newEntry
    });
  }

  return res.status(405).json({ ok: false, error: "Method not allowed." });
};
