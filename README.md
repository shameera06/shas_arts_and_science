# Sha's Arts and Science College (Autonomous) — Modern College Portal 🎓

An autonomous Arts & Science collegiate web portal built as a working full-stack application and software testing project. Features a modern collegiate design system, rich micro-animations, glassmorphic navigation, real-time notice filtering, an interactive fee & scholarship estimator, live countdown timer, and an integrated admission enquiry tracking portal with an Admin evaluation drawer and direct EmailJS integration (`meerananwer12@gmail.com`).

**Affiliated with the University of Madras • Approved by UGC • Re-accredited with 'A+' Grade**  
**Ready for 100% Free Deployment on [Vercel](https://vercel.com).**

---

## 🌟 Key Highlights & Features

### 1. Modern Collegiate Aesthetics & Rich Animations
- **Typography**: Google Fonts `Plus Jakarta Sans` for clean, modern readability combined with `Outfit` and `Cinzel` for academic prestige.
- **Palette**: Deep Collegiate Navy (`#071120`, `#0B192C`), Royal Blue (`#2563EB`), Academic Warm Gold (`#F59E0B`), and Emerald Green (`#10B981`).
- **Micro-Animations**:
  - Emergency Notice Ticker with pulsing live indicator.
  - Admission 2026 priority deadline countdown timer ticking live every second.
  - Infinite floating corporate recruiter marquee showcasing Amazon, Zoho, Deloitte, EY, TCS, Infosys, Cognizant, and more.
  - Animated leadership carousel with smooth continuous translation.
  - Interactive hover elevations, subtle glow shadows, and glassmorphic blur headers.

### 2. Interactive Academic & Department Explorer
- Category filter pills: *All Disciplines*, *Computing & IT*, *Commerce & Management*, *Humanities & Languages*.
- Program cards featuring intake capacity, affiliation badges, top placement packages, and student clubs for:
  - **B.Sc. Computer Science** (Intake: 120, ₹42,000/sem)
  - **Bachelor of Computer Applications (BCA)** (Intake: 120, ₹40,000/sem)
  - **B.Sc. Information Technology** (Intake: 60, ₹38,000/sem)
  - **B.Com (General & Accounting)** (Intake: 180, ₹36,000/sem)
  - **Bachelor of Business Administration (BBA)** (Intake: 120, ₹35,000/sem)
  - **B.A. English Literature** (Intake: 60, ₹28,000/sem)
- **Interactive Syllabus & Labs Modal**: Click *"View Syllabus & Labs"* to inspect the 3-year (6 semesters) autonomous curriculum breakdown, high-tech laboratory facilities, and career roles for any department.

### 3. Dynamic Live Notice Board
- Pulls live announcements directly from the college API (`/api/notices`).
- **Live Search**: Instant keyword search filtering by title, description, or category.
- **Category Filter**: Quickly isolate *Examinations*, *Admissions*, *Placements*, *Events*, or *Scholarships*.
- Simulated *"Download Official Circular (PDF)"* action with immediate feedback.

### 4. Interactive Fee & Scholarship Estimator
- Choose your course, admission quota (Autonomous Merit, Management Quota, Sports & Cultural Quota), and whether to include hostel accommodation.
- Adjust the **12th Board marks slider** (50% to 100%):
  - **95%+**: 75% Founder's Super-Merit Scholarship waiver.
  - **90%–94.9%**: 50% Academic Excellence Scholarship waiver.
  - **80%–89.9%**: 25% Merit Encouragement Grant.
- Real-time tuition fee breakdown and net payable calculation.
- *"Apply with this Scholarship"* button automatically transfers course and score to the admission form!

### 5. Working Admission Enquiry Portal
- Complete client-side validation for Full Name, Email, 10-digit Indian Mobile Number, and Program.
- Submits securely to `/api/admissions` and dispatches notification via EmailJS directly to `meerananwer12@gmail.com`.
- Instant generation of an official **Application ID (e.g. `SASC-2026-XXXX`)**.
- Displays a celebratory **Confirmation Receipt Slip Modal** with save/print capabilities.

### 6. Mentor Evaluation Admin Drawer (Demo Mode)
- Click **"Admin Portal"** in the top announcement bar or footer to open the mentor evaluation table.
- View all submitted candidate records with real-time status badges (*Verified / In Review*).
- Real-time search filter for candidate names, programs, or mobile numbers.
- **Export to CSV**: Generates and downloads a real `sasc_admissions_report.csv` spreadsheet file!
- Reset demo records anytime with a single click.
- Live EmailJS key test & status verification panel.

---

## 📁 Project Architecture

```
shameera college portal/
├── api/
│   ├── notices.js            # Vercel Serverless Function (Notices API)
│   └── admissions.js         # Vercel Serverless Function (Admissions API)
├── frontend/
│   ├── index.html            # Semantic HTML5 with modern collegiate layout
│   ├── css/
│   │   └── style.css         # Complete modern design system & animations
│   ├── js/
│   │   └── main.js           # Smart API client, countdown, estimator & modals
│   └── img/                  # High-resolution campus, leadership & faculty photos
├── backend/
│   ├── server.js             # Local Node.js Express server (serves frontend & API)
│   ├── routes/
│   │   ├── admissions.js     # Express admission routes (GET, POST, DELETE)
│   │   └── notices.js        # Express notices routes with query filters
│   ├── data/
│   │   ├── admissions.json   # Persistent admission enquiries store
│   │   └── notices.json      # Structured academic circulars data
│   └── package.json
├── vercel.json               # Zero-config Vercel deployment configuration
├── VERCEL_DEPLOYMENT_GUIDE.md# Step-by-step Vercel free hosting & custom domain guide
├── package.json              # Root package.json for convenient npm scripts
└── README.md
```

---

## 🚀 How to Run Locally

1. Open terminal in the project directory.
2. Install dependencies:
   ```bash
   cd backend
   npm install
   ```
3. Start the local server:
   ```bash
   npm start
   ```
4. Open your browser and go to **http://localhost:4000**.
   - The single Express server serves both the modern frontend and the backend REST API endpoints.

---

## ☁️ How to Deploy to Vercel for Free

Please see the comprehensive [VERCEL_DEPLOYMENT_GUIDE.md](file:///c:/Users/DELL%20BUSTAN/OneDrive/ドキュメント/shameera%20prompt/shameera%20college%20portal/VERCEL_DEPLOYMENT_GUIDE.md) for step-by-step instructions.

**Quick Summary (2 Minutes):**
1. Push this project to your GitHub repository.
2. Log in to [vercel.com](https://vercel.com) and click **"Add New..."** &rarr; **"Project"**.
3. Import your repository and click **"Deploy"**.
4. Vercel automatically deploys the frontend and the serverless functions in `/api`.
5. Later, go to **Project Settings &rarr; Domains** in Vercel to attach any custom domain (e.g. `shasartsandscience.ac.in`).

---

## 🧪 Testing Checklist (For Mentor & Evaluator Presentation)

| Test Case | Interaction / Action | Expected Result |
|---|---|---|
| **1. Dynamic Announcements** | Observe the top bar marquee | News bulletins scroll smoothly across the screen without lag. |
| **2. Live Countdown Timer** | Look at the Hero Section | The Days, Hours, Minutes, and Seconds decrement live every 1 second. |
| **3. Department Filter** | Click *"Computing & IT"* or *"Commerce & Management"* | Cards filter smoothly to the relevant programs. |
| **4. Syllabus Modal** | Click *"View Syllabus & Labs"* on B.Sc. CS | Modal opens showing 6-semester Arts & Science curriculum breakdown; closes on 'X'. |
| **5. Notice Board Search** | Type *"exam"* into notice search box | Instantly filters and displays Madras University semester exam circulars. |
| **6. Notice Categories** | Click *"Admissions"* or *"Placements"* | Circulars re-filter immediately according to the selected category. |
| **7. Fee Calculator** | Adjust 12th Board marks slider to 95% | Displays 75% Founder's Super-Merit Scholarship waiver & updates net fee. |
| **8. Form Validation** | Submit empty form | Red validation errors appear under Full Name, Email, Phone, and Program. |
| **9. Valid Submission** | Fill name, email, phone (`9876543210`), course | Confirmation slip modal appears with generated `SASC-2026-XXXX` ID. |
| **10. Admin Records Portal**| Click *"Admin Portal"* in top bar | Submitted record is visible in table with status chip; allows CSV export! |
| **11. Infinite Recruiter Marquee** | Scroll to Placements section | Recruiter badges (Amazon, Zoho, Deloitte, EY, TCS, etc.) scroll continuously. |
| **12. Responsive Reflow** | Resize browser to mobile width (<720px) | Hamburger menu activates; all cards stack cleanly with zero overlap. |

---

## 📄 License & Attribution

Developed for Sha's Arts and Science College (Autonomous). Built for Software Testing and Web Engineering curriculum evaluation.
