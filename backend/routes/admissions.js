const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();
const ADMISSIONS_FILE = path.join(__dirname, "..", "data", "admissions.json");

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

function readEnquiries() {
  if (!fs.existsSync(ADMISSIONS_FILE)) {
    return [];
  }
  const raw = fs.readFileSync(ADMISSIONS_FILE, "utf-8");
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function writeEnquiries(list) {
  fs.writeFileSync(ADMISSIONS_FILE, JSON.stringify(list, null, 2), "utf-8");
}

function validateEnquiry(body) {
  const errors = [];
  const name = (body.fullName || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();
  const department = (body.department || "").trim();

  if (name.length < 3) errors.push("Full name must be at least 3 characters.");
  if (!EMAIL_PATTERN.test(email)) errors.push("Enter a valid email address.");
  if (!PHONE_PATTERN.test(phone)) errors.push("Enter a valid 10-digit mobile number.");
  if (!VALID_DEPARTMENTS.includes(department)) errors.push("Select a valid department.");

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

// GET /api/admissions - list stored enquiries
router.get("/", (req, res) => {
  try {
    res.json({ ok: true, enquiries: readEnquiries() });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Could not read enquiries." });
  }
});

// POST /api/admissions - submit a new enquiry
router.post("/", (req, res) => {
  const { errors, cleaned } = validateEnquiry(req.body || {});
  if (errors.length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  try {
    const enquiries = readEnquiries();
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const entry = {
      id: Date.now(),
      applicationId: `SASC-2026-${randomSuffix}`,
      submittedAt: new Date().toISOString(),
      status: "Verified Submission",
      ...cleaned
    };
    enquiries.unshift(entry);
    writeEnquiries(enquiries);
    res.status(201).json({
      ok: true,
      message: "Admission enquiry received successfully.",
      entry
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Could not save enquiry." });
  }
});

// DELETE /api/admissions/:id - delete a test enquiry (for demo reset)
router.delete("/:id", (req, res) => {
  try {
    const enquiries = readEnquiries();
    const id = parseInt(req.params.id, 10);
    const filtered = enquiries.filter(e => e.id !== id);
    writeEnquiries(filtered);
    res.json({ ok: true, message: "Enquiry deleted." });
  } catch (err) {
    res.status(500).json({ ok: false, error: "Could not delete enquiry." });
  }
});

module.exports = router;
