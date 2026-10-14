# 📋 HR Onboarding Portal — Project Requirements & Technical Specification

---

## 🧭 Project Overview

The **HR Onboarding Portal** is a fully client-side, browser-based web application designed to digitise and streamline the end-to-end employee onboarding lifecycle for corporate organisations. It provides dedicated dashboards and workflows for every stakeholder — HR Administrators, Managers, IT Teams, Finance teams, and newly-joining Employees — within a single unified interface.

The application operates entirely in the browser without any traditional server-side backend, using localStorage as its persistent data layer.

---

## 🏗 Tech Stack

### Frontend (Client-Side)

| Technology | Version / Notes | Purpose |
|---|---|---|
| **HTML5** | Semantic HTML, ARIA | Application structure & layout |
| **CSS3** | Custom CSS Variables (no framework) | Styling, themes, animations |
| **Vanilla JavaScript (ES6+)** | No transpilation | All business logic & interactivity |
| **Web Speech API** | Browser-native | Voice input for AI Assistant |
| **FileReader API** | Browser-native | Profile photo & document upload |
| **LocalStorage API** | Browser-native | Persistent data store (no DB) |
| **Blob / DataURL API** | Browser-native | Photo preview and base64 encoding |

### Architecture Pattern

| Aspect | Choice |
|---|---|
| **Architecture** | Single Page Application (SPA) — client-side routing |
| **Routing** | Custom `AppRouter` object, URL hash-based (`#admin.login`) |
| **State Management** | Module-scoped objects (`DB`, `AuthSystem`, `AppRouter`) |
| **Data Persistence** | Browser `localStorage` via a `DB` utility layer |
| **Theme** | CSS Custom Properties (dark/light mode toggle) |
| **Component Pattern** | Plain JS module objects (no framework) |

### Backend / Server

> **Note:** This is a fully static application. There is **no traditional backend server**.

| Aspect | Approach |
|---|---|
| **Backend Framework** | ❌ None (static SPA) |
| **Database** | ❌ None — uses `localStorage` (browser-side) |
| **Authentication** | Client-side session management via `localStorage` |
| **File Storage** | Client-side `Base64 DataURL` in `localStorage` |
| **API Calls** | ❌ None — all data is generated and stored locally |
| **Static Server** | Python `http.server` / Node.js `http-server` (for local dev) |
| **Production Hosting** | Any static host: Nginx, Apache, GitHub Pages, Vercel, Netlify |

---

## 📊 Dashboards — Complete List

The portal contains **2 primary dashboards** and **11 additional functional module pages**:

### Primary Dashboards

| # | Dashboard | Target User | Page ID |
|---|---|---|---|
| 1 | **Executive Dashboard** | HR Admins, Super Admins, Managers | `main-dashboard` |
| 2 | **My Onboarding Hub** | New Employees | `employee-dashboard` |

### Functional Module Pages (Beyond Dashboards)

| # | Module | Purpose |
|---|---|---|
| 3 | **My Profile & Forms** | Employee personal, bank, education, emergency, payroll data |
| 4 | **Employee Directory** | Searchable list of all onboarded employees and their progress |
| 5 | **Document Verification** | Upload, preview, approve/reject KYC and onboarding documents |
| 6 | **Tasks & Milestones** | Create, assign, and track onboarding task progress |
| 7 | **Formalities & Approvals** | NDA, offer letter, policy acknowledgment sign-off |
| 8 | **Policy & Training Center** | Handbook modules, compliance training, and exam portal |
| 9 | **IT & Equipment Setup** | Device assignment, credential provisioning |
| 10 | **Notification Center** | System alerts, approval updates, reminders |
| 11 | **Reports & Analytics** | Headcount, completion rates, HR metrics charts |
| 12 | **User & Role Control** | Manage users, assign roles and permissions |
| 13 | **Company Templates** | Reusable onboarding task workflow templates |
| 14 | **AI Onboarding Buddy** | Floating chat assistant with voice and policy Q&A |
| 15 | **OSS Admin Gateway** | Address-bar-only admin authentication (`/admin.login`) |

---

## 👤 User Roles & Access

| Role | Description | Key Access |
|---|---|---|
| **Super Admin** | Full system access | All modules, audit logs, user management |
| **HR Admin** | HR-level access | Directory, documents, approvals, reports |
| **Manager** | Department-level access | Directory, tasks, formalities, reports |
| **Employee** | Personal onboarding only | Own profile, onboarding hub, tasks, training |
| **IT Admin** | IT provisioning | IT setup, equipment, credentials |
| **Finance/Payroll** | Financial data | Payroll details, reports |

---

## 🔐 Security & Authentication

| Feature | Implementation |
|---|---|
| **Employee Login** | Email + password, stored in `localStorage` |
| **Admin Login** | Restricted to address-bar URL only (`/admin.login`) |
| **Admin Email Format** | Must be `<hr_name>.hr@<company_name>.com` |
| **Admin Password** | Minimum 8 characters enforced |
| **Role-Based UI** | Sidebar items, pages, and actions restricted by `user.role` |
| **Session Management** | `localStorage` key `current_user`, cleared on logout |
| **Audit Trail** | All key actions logged to `hr_audit_log` in `localStorage` |

---

## 🎨 UI/UX Features

| Feature | Detail |
|---|---|
| **Dark / Light Mode** | CSS variable-based theme toggle, persisted in localStorage |
| **Smart Global Search** | Live dropdown navigating to any module by keyword |
| **Profile Photo Upload** | FileReader API, 5 MB limit, reflected across all UI surfaces |
| **AI Buddy Mini View** | Floating bottom-right chat widget with voice input |
| **Responsive Design** | CSS media queries for mobile/tablet support |
| **Toast Notifications** | Timed in-app success/error messages |
| **Guided Tour** | Step-by-step walkthrough for new users |
| **Progress Tracker** | Profile completion gauge (out of 16 required fields) |

---

## 📁 Project File Structure

```
d:/Hr onboarding/
├── index.html              ← Main SPA shell (all page views)
├── script.js               ← All JS logic (~2,900 lines)
├── style.css               ← All CSS styles (~1,900 lines)
├── start_server.bat        ← Local dev server launcher
├── README.md               ← Project readme
├── requirements.md         ← This file
├── admin/
│   └── login/
│       └── index.html      ← /admin/login entrypoint (deep link)
├── adminlogin/
│   └── index.html          ← /adminlogin entrypoint (alternate path)
└── admin.login/
    └── index.html          ← /admin.login entrypoint (OSS-style URL)
```

---

## 🚀 Running the Project

### Option 1 — Python (Recommended)
```bash
cd "d:\Hr onboarding"
python -m http.server 8000
# Open: http://localhost:8000
```

### Option 2 — Node.js
```bash
cd "d:\Hr onboarding"
npx http-server -p 8000
# Open: http://localhost:8000
```

### Option 3 — Batch File
Double-click `start_server.bat` — auto-detects Python or Node.js and opens the browser.

### Admin Login
Navigate in address bar to: `http://localhost:8000/#admin.login`  
Use email format: `sarah.hr@company.com` + any password ≥ 8 characters

---

## 📌 Key Constraints & Design Decisions

- **No build tools** — pure HTML/CSS/JS, no Webpack, Vite, React, or Angular
- **No external libraries** — no jQuery, Bootstrap, or chart libraries
- **No internet required** — fully offline-capable after initial file load
- **Data resets on localStorage clear** — not suitable for production without a real backend
- **Profile photos stored as Base64** — works for demo; in production, use cloud storage (S3, GCS)

---

*Last updated: October 2026 | Version 1.0.0*
