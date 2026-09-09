# Vercel Free Hosting & Custom Domain Guide 🚀

This guide explains how to deploy your **Sha's Arts and Science College Portal** to **Vercel** for 100% free, and how to attach your own custom domain later.

---

## Part 1: How to Deploy to Vercel for Free (Takes 2 Minutes)

You have two simple options: **Via GitHub (Recommended)** or **Via Vercel CLI**.

### Option A: Via GitHub (Simplest & Best)

1. **Push your code to GitHub**:
   - Open VS Code terminal in your `shameera college portal` directory.
   - Run:
     ```bash
     git init
     git add .
     git commit -m "Sha's Arts and Science College portal ready for Vercel"
     ```
   - Create a new repository on [GitHub](https://github.com/new) (e.g. `shas-arts-science-college-portal`).
   - Push your code to GitHub:
     ```bash
     git remote add origin https://github.com/YOUR_USERNAME/shas-arts-science-college-portal.git
     git branch -M main
     git push -u origin main
     ```

2. **Deploy on Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign up/log in with your GitHub account (Free Hobby plan).
   - Click **"Add New..."** &rarr; **"Project"**.
   - Select your repository and click **Import**.
   - Keep all default settings:
     - **Framework Preset**: *Other*
     - **Root Directory**: `./` (leave as default)
   - Click **"Deploy"**!

3. In less than 60 seconds, Vercel will give you a live production URL:
   `https://shas-arts-science-portal.vercel.app` (or similar).

---

### Option B: Deploy Directly via Terminal (Without Git)

1. Open PowerShell or Command Prompt in `shameera college portal`.
2. Run:
   ```bash
   npx vercel
   ```
3. Follow the quick terminal prompts:
   - *Set up and deploy?* Press **Y**
   - *Which scope?* Choose your Vercel account
   - *Link to existing project?* Press **N**
   - *What's your project's name?* Press **Enter** (or type a name)
   - *In which directory is your code located?* Press **Enter** (for `./`)
4. When done, deploy to production:
   ```bash
   npx vercel --prod
   ```
5. Your live link is generated immediately!

---

## Part 2: How It Works on Vercel

We have configured `vercel.json` and `/api` serverless functions for you:
1. **Frontend**: The static site in `/frontend` is served at `/`.
2. **Serverless Functions**: Requests to `/api/notices` and `/api/admissions` are automatically handled by Vercel Serverless Functions in `api/notices.js` and `api/admissions.js`.
3. **Resilient Local Demo**: In case of network changes, the frontend also saves submissions directly to in-browser `localStorage`. Your mentor can submit enquiries, view them in the **Admin Portal** drawer, and export them as CSV right from the browser.
4. **EmailJS Integration**: Submissions and contact requests also dispatch directly to `meerananwer12@gmail.com` via the configured EmailJS credentials.

---

## Part 3: How to Add a Custom Domain Later

When you purchase a domain (e.g. `shascollege.edu.in`, `shasartsandscience.ac.in`, or `shascollege.org`) from GoDaddy, Namecheap, or Google Domains:

1. Open your project dashboard on [vercel.com](https://vercel.com).
2. Go to **Settings** &rarr; **Domains**.
3. Type your domain name (e.g., `shascollege.edu.in` or `www.shascollege.edu.in`) and click **Add**.
4. Vercel will show you the exact DNS records to configure:
   - For apex domain (`shascollege.edu.in`): Add an **A Record** pointing to `76.76.21.21`.
   - For `www` subdomain (`www.shascollege.edu.in`): Add a **CNAME Record** pointing to `cname.vercel-dns.com`.
5. Log into your domain registrar (GoDaddy/Namecheap), go to **DNS Management**, and add the records shown by Vercel.
6. Within a few minutes, Vercel will automatically generate a free **SSL Certificate (HTTPS)** and your custom domain will be live!

---

## Part 4: Testing Your Project for Your Mentor

When presenting your project to your mentor or evaluators:
1. **Show the Hero & Admissions Countdown**: Highlight the live 2026 application countdown timer and dynamic announcement ticker.
2. **Demonstrate Notice Board Filtering**: Type in the search box (e.g., "Exam" or "Deloitte") or click category pills to show real-time filtering.
3. **Use the Interactive Fee Estimator**: Drag the 12th Board marks slider to 95% to demonstrate the automatic 75% Founder's Merit Scholarship calculation.
4. **Submit an Admission Form**: Fill in candidate details and click submit. Show the generated Application ID (`SASC-2026-XXXX`) and printable confirmation receipt.
5. **Open the Admin Portal**: Click the **Admin Portal** button in the top bar to display the newly submitted enquiry in the mentor evaluation table, and click **Export to CSV** to prove full data capture!
