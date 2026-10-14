# Enterprise HR Onboarding Platform

A modern, secure, and user-friendly enterprise HR onboarding system that manages the complete employee onboarding lifecycle—from offer acceptance and pre-joining formalities to document verification, IT setup, training, policy acknowledgements, and full organizational integration.

---

## 🚀 How to Run

### Method 1: Direct Browser Launch
Open `index.html` in any modern web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari).  
**No complex installation or external database setup is required.**

### Method 2: Local Web Server
Double-click `start_server.bat` or run:
```bash
python -m http.server 8000
```
Then navigate to: `http://localhost:8000/`

---

## 👥 Enterprise User Roles & Permissions

The platform includes seamless 1-click role-switching in the top navigation bar to test all user perspectives:

1. **Super Admin (`Dr. Evelyn Vance`)**
   - System-wide executive analytics and audit logs
   - User account activation, deactivation, and role management
   - Company templates and operational parameter configuration
2. **HR Admin (`Sarah Jenkins`)**
   - Employee record creation and onboarding initiation
   - Document review, verification approval, and resubmission requests
   - Task assignment, progress monitoring, and compliance reporting
3. **Employee (`Alex Mercer`)**
   - Personalized onboarding roadmap and task checklist
   - Multi-tab profile management (Personal, Emergency, Education, Experience, Bank/Payroll)
   - Secure document uploads with live review status
   - Digital agreement signing via interactive signature canvas
   - Training center, company handbook, and 30-question Policy Exam certification
   - 24/7 AI Onboarding Buddy with speech recognition
4. **Reporting Manager (`David Kumar`)**
   - Team onboarding progress monitoring
   - Engineering induction meetings and task sign-offs
   - Direct manager check-ins and goal alignments
5. **IT Admin (`Marcus Vance`)**
   - Hardware allocation (Laptops, 4K monitors, wireless peripherals, RFID badges)
   - System credentials provisioning (Google Workspace email, Enterprise VPN, GitHub, Jira)
   - IT setup task management
6. **Finance / Payroll (`Rachel Adams`)**
   - Bank account, IFSC, and PAN verification
   - Payroll setup and compliance clearance
   - Financial onboarding audit oversight

---

## 📱 15 Enterprise Modules

1. **Login & Password Recovery (`#page-login`)**
   - Clean enterprise authentication, password recovery instructions, registration, and 1-click quick demo logins.
2. **Executive Main Dashboard (`#page-main-dashboard`)**
   - Real-time KPI summary cards (Active onboardings, completed cohorts, pending reviews, overdue tasks).
   - Candidate progress velocity table, live bottleneck identification, and system audit stream.
3. **Employee Onboarding Hub (`#page-employee-dashboard`)**
   - Personalized welcome banner, 4-stage onboarding roadmap, urgent action checklist, and Day 1 orientation schedule.
4. **Employee Profile & Information Forms (`#page-profile`)**
   - Tabbed inputs: Personal & Contact, Emergency Contacts, Education & Experience, Confidential Bank & Payroll, Organization Assignment.
   - Save-and-resume draft capabilities and validation checks.
5. **Employee Directory (`#page-directory`)**
   - Filter by department, designation, and onboarding status. Search by name or ID. Instant candidate detail inspection drawer.
6. **Document Verification Hub (`#page-documents`)**
   - Upload identification, educational degrees, experience records, bank passbooks, and photos.
   - Live statuses: *Not Submitted*, *Submitted*, *Under Review*, *Verified*, *Rejected*, *Resubmission Required*.
   - HR verification modal with approval decisions and feedback comments.
7. **Task & Milestone Management (`#page-tasks`)**
   - Create, edit, assign, reassign, and delete onboarding tasks.
   - Statuses: *Not Started*, *In Progress*, *Pending Approval*, *Blocked*, *Completed*, *Overdue*.
   - Priorities (*Urgent*, *High*, *Medium*, *Low*), deadlines, progress percentages, and automated department templates.
8. **Formalities & Digital Signatures (`#page-formalities`)**
   - Official appointment letter, NDA, and asset agreements.
   - Interactive HTML5 Canvas digital signature pad with legal consent verification.
   - Multi-tier approval timeline (HR, IT, Manager, Finance).
9. **Policy & Training Center (`#page-training`)**
   - Official workplace policies grounded in 24+ handbook documents.
   - Mandatory and departmental course tracking.
10. **30-Question Policy Assessment Exam (`#page-exam-mode`)**
    - 20-minute timed multiple-choice policy exam with question palette navigation, review markers, auto-submit countdown timer, and instant printable Certificate of Compliance.
11. **AI Onboarding Assistant (`#page-ai-assistant`)**
    - Conversational assistant grounded in official company handbook policies (shift timings, floor navigation, leaves, uniforms, holidays, cafeteria).
    - Speech recognition voice input support.
    - Conversational task creation ("Create task to submit ID proof") and task listing ("Show my tasks").
    - Escalation ticket dispatcher to Floor 2 HR Support.
12. **IT Equipment & Access Provisioning (`#page-it-setup`)**
    - Hardware inventory tracking with serial numbers and handover dates.
    - Role-based software credential statuses (Email, VPN, Git, Jira).
13. **Notifications Center (`#page-notifications`)**
    - Real-time in-app alerts for task updates, document reviews, and deadlines.
    - Category filtering, mark as read, and unread badge counters.
14. **Reports & Workforce Analytics (`#page-reports`)**
    - Computed metrics calculated from live database records.
    - Department-wise onboarding performance comparison.
    - 1-click CSV report export.
15. **User Control & Templates (`#page-users` & `#page-settings`)**
    - Account activation/deactivation and role governance.
    - Reusable onboarding templates for Engineering and HR departments.

---

## 🎨 Design System

- **Clean Enterprise SaaS Layout**: Responsive sidebar, sticky header with quick role switcher, notification bell, and theme toggle.
- **Light & Dark Theme**: Full theme switching with automatic localStorage persistence.
- **Accessible & Responsive**: Optimized for desktop, tablet, and mobile screens.
