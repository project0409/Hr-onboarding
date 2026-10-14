/**
 * ENTERPRISE HR ONBOARDING PLATFORM - CORE LOGIC & CONTROLLERS
 * Manages all 15 lifecycle modules, role-based security, document verification,
 * task management, formalities, training, grounded AI assistant, and exam system.
 */

// =========================================================================
// 1. KNOWLEDGE BASE & POLICY DOCUMENTS (PRESERVED & EXPANDED)
// =========================================================================
const documents = [
  {
    title: "About Workplace",
    keywords: ["about", "company", "organization", "workplace", "mission", "vision", "anything", "hr", "onboarding", "employee", "details", "information"],
    answer: "The workplace is guided by punctuality, teamwork, customer focus, honesty, data privacy, continuous learning, and respectful behavior. This onboarding assistant answers from verified company policy handbooks."
  },
  {
    title: "Work Atmosphere Policy",
    keywords: ["atmosphere", "culture", "environment", "workplace", "team", "respect"],
    answer: "The work atmosphere is professional, friendly, inclusive, and team-based. Employees should communicate politely, support team members, avoid gossip, and report unsafe or disrespectful behavior to HR."
  },
  {
    title: "Office Timings Policy",
    keywords: ["office timing", "office timings", "timing", "timings", "timming", "timmings", "time", "attendance", "working hours", "late in", "early go"],
    answer: "Office timings:\n- Office open time: Morning 6:00 AM\n- Office close time: Evening 9:00 PM\n- Working days: Monday to Saturday\n- Holidays: 1st and 3rd Saturday are holidays\n- Grace time: 10 minutes\n- Late-in must be updated in the HR Portal with manager approval\n- Early-go must be updated in the HR Portal with manager approval"
  },
  {
    title: "Shift Timings Policy",
    keywords: ["shift timing", "shift timings", "shift timming", "shift timmings", "first shift", "1st shift", "second shift", "2nd shift", "night shift"],
    answer: "Shift timings:\n- First Shift: 8:50 AM to 5:50 PM\n- Second Shift: 9:20 AM to 6:30 PM\n- Night Shift: 9:00 PM to 6:00 AM"
  },
  {
    title: "Uniform and Dress Code Policy",
    keywords: ["uniform", "dress", "clothes", "formal", "casual", "appearance"],
    answer: "Employees should wear formal or smart casual clothes. ID cards must be worn inside the office. Torn jeans, offensive text, slippers, and unsafe clothing are not allowed. Client meetings may require formal dress."
  },
  {
    title: "Lunch and Break Policy",
    keywords: ["lunch", "lunch timing", "lunch timings", "lunch timming", "lunch timmings", "break", "break timing", "break timings", "break timming", "break timmings", "tea", "food", "cafeteria", "break time", "tea break", "afternoon break"],
    answer: "Lunch timings:\n- 1st shift lunch: 1:05 PM to 1:40 PM\n- 2nd shift lunch: 1:50 PM to 2:30 PM\n- Night shift lunch: 10:00 PM\n\nBreak timings:\n- 1st shift break: 10:30 AM to 10:50 AM\n- 2nd shift break: 11:30 AM to 11:50 AM\n- Afternoon break: 4:15 PM to 4:30 PM\n\nFood should be eaten in the cafeteria or allowed pantry area."
  },
  {
    title: "Leave Policy",
    keywords: ["leave", "leaves", "vacation", "sick", "casual", "paid leave", "annual leave", "hr portal", "apply leave", "leave apply"],
    answer: "Employees get 18 paid leaves annually: 12 casual leaves and 6 sick leaves. Leaves are credited monthly. Leave requests must be applied through the HR Portal at least 2 days in advance, except sick leave."
  },
  {
    title: "Types of Leaves",
    keywords: ["types of leaves", "leave types", "different leaves", "casual leave", "sick leave", "emergency leave", "maternity", "paternity"],
    answer: "Types of leaves:\n- Casual Leave: for planned personal work\n- Sick Leave: for illness or medical needs\n- Half-Day Leave: for approved partial-shift absence\n- LOP: unpaid absence when leave balance or approval is unavailable\n- Maternity Leave: as per HR approval and law\n- Paternity Leave: as per HR approval\n- Emergency Leave: for urgent situations"
  },
  {
    title: "Half Day and LOP Policy",
    keywords: ["half day", "lop", "loss of pay", "early go", "late coming", "late in", "permission"],
    answer: "Half-day leave applies when an employee works only part of the shift with approval. Loss of Pay, also called LOP, may apply when paid leave balance is not available or absence is not approved. Early-go and late-in requests should be submitted in the HR Portal and approved by the manager."
  },
  {
    title: "Employment Bond Policy",
    keywords: ["bond", "agreement", "service agreement", "training bond", "company bond"],
    answer: "A bond or service agreement applies only when it is clearly mentioned in the offer letter or joining agreement. If applicable, the employee must complete the agreed service period or follow the separation terms written in that agreement. Contact HR for exact details."
  },
  {
    title: "Place of Work Policy",
    keywords: ["place", "location", "office", "remote", "hybrid", "work from home", "wfh"],
    answer: "The primary place of work is the assigned office location. Hybrid or remote work is allowed only when approved by the manager. Employees must be available online during working hours."
  },
  {
    title: "Code of Conduct",
    keywords: ["rules", "regulations", "conduct", "behavior", "discipline", "harassment", "policy"],
    answer: "Employees must behave respectfully, avoid harassment, protect confidential information, follow manager instructions, use work assets responsibly, and follow safety, attendance, IT, and HR policies."
  },
  {
    title: "IT and Data Security Policy",
    keywords: ["it", "laptop", "email", "password", "vpn", "software", "data", "security", "setup", "credentials", "login", "system credentials"],
    answer: "IT setup includes laptop allocation, employee email, temporary password, HR Portal login, VPN if required, project tool access, and role-based software. Passwords must be changed after first login and must not be shared. Confidential data must not be copied to personal devices."
  },
  {
    title: "Role Based System Credentials",
    keywords: ["credentials according to posts", "role based credentials", "post credentials", "developer access", "hr access", "manager access", "admin access"],
    answer: "System credentials are role based. Interns get email, HR Portal, and training tools. Developers get code repository, project board, VPN, and development server access. HR employees get HR Portal and employee-document access. Managers get team dashboards, approval access, and reporting tools. Admin or finance access is given only after written approval."
  },
  {
    title: "Organization Structure",
    keywords: ["structure", "company structure", "organization structure", "internal structure", "hierarchy", "higher authority", "authority"],
    answer: "The internal structure is: Managing Director, Operations Head, HR Manager, IT Manager, Department Managers, Team Leads, Senior Employees, Junior Employees, Trainees, and Interns. Employees report to their Team Lead or Manager first, then HR for policy matters."
  },
  {
    title: "Department Types and Floor Navigation",
    keywords: ["departments", "department types", "types of departments", "floor wise departments", "categories", "where is", "floor", "navigation"],
    answer: "Floor-wise details:\n- First Floor: Production\n- Second Floor: HR Support & Employee bays\n- Third Floor: IT Support, Software Development, Finance, Operations & Manager cabins\n- Fourth Floor: Design Studio, Executive Suites & Meeting Rooms\n- Top Floor: Cafeteria & Pantry\n- Washrooms: Right corner of top-floor cafeteria and on each floor\n- Basement B1: Two-wheeler parking | Basement B2: Car parking"
  },
  {
    title: "Holiday Policy",
    keywords: ["holiday", "holidays", "festival", "festivals", "public holiday", "public holidays", "working days", "saturday"],
    answer: "Working days and holidays:\n- Working days: Monday to Saturday\n- Weekly holidays: Sunday, 1st Saturday, and 3rd Saturday\n- Public & Festival holidays include Republic Day, Independence Day, Gandhi Jayanti, Diwali, Dussehra, Eid, Christmas, Sankranti/Pongal, and Holi."
  },
  {
    title: "Payroll and Benefits Policy",
    keywords: ["payroll", "salary", "pay", "benefits", "insurance", "tax", "bank"],
    answer: "Salary is processed on the last working day of each calendar month. New hires must submit verified bank details, PAN card, and tax declaration forms to the Finance & Payroll department within 3 days of joining."
  }
];

// 30 Comprehensive Quiz Questions for Compliance Assessment
const quizQuestions = [
  { question: "What are the normal office open and close timings?", options: ["Morning 6:00 AM to 9:00 PM (Mon-Sat)", "9:00 AM to 5:00 PM (Mon-Fri)", "11:00 AM to 8:00 PM (Daily)", "Open 24 hours continuously"], answer: 0 },
  { question: "Which Saturdays are observed as official company holidays?", options: ["1st and 3rd Saturday", "2nd and 4th Saturday", "All Saturdays", "No Saturdays"], answer: 0 },
  { question: "What are the First Shift working hours?", options: ["8:50 AM to 5:50 PM", "9:20 AM to 6:30 PM", "9:00 PM to 6:00 AM", "10:00 AM to 7:00 PM"], answer: 0 },
  { question: "What are the Second Shift working hours?", options: ["9:20 AM to 6:30 PM", "8:50 AM to 5:50 PM", "9:00 PM to 6:00 AM", "8:00 AM to 4:00 PM"], answer: 0 },
  { question: "What are the Night Shift working hours?", options: ["9:00 PM to 6:00 AM", "8:00 PM to 5:00 AM", "11:00 PM to 7:00 AM", "10:00 PM to 6:00 AM"], answer: 0 },
  { question: "How much grace time is permitted for shift arrival before late-in applies?", options: ["10 minutes", "15 minutes", "30 minutes", "No grace time"], answer: 0 },
  { question: "What is the acceptable dress code on regular business days?", options: ["Formal or smart casual with ID card worn", "Beachwear and flip-flops", "Torn jeans and graphic t-shirts", "Costumes only"], answer: 0 },
  { question: "What is the total annual paid leave allotment?", options: ["18 paid leaves (12 Casual + 6 Sick)", "10 paid leaves", "25 paid leaves", "30 paid leaves"], answer: 0 },
  { question: "How many days in advance must casual leave be submitted on the HR Portal?", options: ["At least 2 days in advance", "Same day morning", "10 days in advance", "After returning from leave"], answer: 0 },
  { question: "When is sick leave permitted to be submitted?", options: ["On the day of illness", "At least 3 days prior", "At the end of the year", "Never without hospital visit"], answer: 0 },
  { question: "What happens when an employee takes an absence without leave balance or approval?", options: ["Loss of Pay (LOP) applies", "Converted to double salary", "Automatic termination", "Nothing happens"], answer: 0 },
  { question: "Can employees share their company credentials or temporary passwords?", options: ["No, passwords must remain strictly confidential", "Yes, with team colleagues", "Yes, on WhatsApp", "Yes, with visitors"], answer: 0 },
  { question: "Within what timeframe must temporary passwords be updated upon first login?", options: ["Within 24 hours of first login", "Within 30 days", "At year-end", "Never"], answer: 0 },
  { question: "On which floor is the HR Support department located?", options: ["Second Floor", "First Floor", "Third Floor", "Fourth Floor"], answer: 0 },
  { question: "Where is the IT Support and Software Development department located?", options: ["Third Floor", "Second Floor", "Fourth Floor", "Basement B1"], answer: 0 },
  { question: "Where is the dining cafeteria and pantry located?", options: ["Top Floor", "First Floor", "Basement B2", "Second Floor"], answer: 0 },
  { question: "Where are the restrooms and washrooms in the cafeteria area?", options: ["Right corner of the cafeteria area", "Directly in front of the lift", "Inside the kitchen", "In Basement B1"], answer: 0 },
  { question: "Where is designated two-wheeler parking situated?", options: ["Basement B1", "Basement B2", "Main Entrance Portico", "Cafeteria Terrace"], answer: 0 },
  { question: "Where is designated four-wheeler (car) parking situated?", options: ["Basement B2", "Basement B1", "Street parking only", "Fourth Floor"], answer: 0 },
  { question: "When is an employment service bond enforceable?", options: ["Only when clearly specified in the signed offer/joining agreement", "Always by default for all employees", "Never enforceable under any law", "Only verbally"], answer: 0 },
  { question: "What should an employee do if an unsafe condition or harassment is witnessed?", options: ["Immediately report to HR or the Ethics Committee", "Ignore it completely", "Post on public social media", "Wait 6 months"], answer: 0 },
  { question: "When is remote or hybrid work officially permitted?", options: ["Only when approved by reporting manager and HR in writing", "Automatically whenever an employee desires", "Every Monday and Friday", "Never permitted under any case"], answer: 0 },
  { question: "Who is granted administrative or finance system access?", options: ["Only authorized personnel after explicit written approval", "All software engineers", "Any intern upon request", "Every new joining employee"], answer: 0 },
  { question: "What are the first shift lunch timings?", options: ["1:05 PM to 1:40 PM", "12:00 PM to 1:00 PM", "2:00 PM to 3:00 PM", "1:50 PM to 2:30 PM"], answer: 0 },
  { question: "What are the second shift lunch timings?", options: ["1:50 PM to 2:30 PM", "1:05 PM to 1:40 PM", "12:30 PM to 1:15 PM", "10:00 PM"], answer: 0 },
  { question: "What are the afternoon tea break timings?", options: ["4:15 PM to 4:30 PM", "3:00 PM to 3:30 PM", "5:00 PM to 5:30 PM", "No afternoon break allowed"], answer: 0 },
  { question: "Can confidential client or company source code be copied to personal USB drives?", options: ["Strictly prohibited under data security policy", "Allowed if working on personal laptop", "Allowed on weekends", "Allowed without permission"], answer: 0 },
  { question: "Who should a new employee contact first for day-to-day role responsibilities?", options: ["Assigned Team Lead or Reporting Manager", "Company Managing Director", "External vendor", "Security guard"], answer: 0 },
  { question: "Which document must be submitted to verify salary disbursement details?", options: ["Bank passbook or cancelled cheque with IFSC code", "High school marks card", "Utility electricity bill", "Library membership card"], answer: 0 },
  { question: "What score is required to successfully certify the Policy Knowledge Assessment?", options: ["60% or higher", "40%", "75%", "100% strictly"], answer: 0 }
];

// =========================================================================
// 2. LOCALSTORAGE DATABASE LAYER WITH SEED DATA
// =========================================================================
const StorageKeys = {
  USERS: "hr_enterprise_users",
  CANDIDATES: "hr_enterprise_candidates",
  TASKS: "onboardingTasks",
  DOCS: "hr_enterprise_docs",
  APPROVALS: "hr_enterprise_approvals",
  EQUIPMENT: "hr_enterprise_equipment",
  TRAINING: "hr_enterprise_training",
  AUDIT: "hr_enterprise_audit_log",
  NOTIFS: "hr_enterprise_notifs",
  CURRENT_USER: "hr_enterprise_session",
  THEME: "themeMode",
  EXAM_SCORES: "hr_policy_exam_scores"
};

const SeedData = {
  users: [
    { id: "usr-01", name: "Dr. Evelyn Vance", email: "evelyn.hr@company.com", role: "super_admin", dept: "Executive Management", status: "Active", lastActive: "Just now" },
    { id: "usr-02", name: "Sarah Jenkins", email: "sarah.hr@company.com", role: "hr_admin", dept: "HR & People Operations", status: "Active", lastActive: "10 mins ago" },
    { id: "usr-03", name: "Alex Mercer", email: "alex.mercer@company.com", role: "employee", dept: "Software Development", status: "Active", lastActive: "Just now", empId: "EMP-1042" },
    { id: "usr-04", name: "David Kumar", email: "david.k@company.com", role: "manager", dept: "Software Development", status: "Active", lastActive: "1 hour ago" },
    { id: "usr-05", name: "Marcus Vance", email: "marcus.v@company.com", role: "it_admin", dept: "IT Support", status: "Active", lastActive: "25 mins ago" },
    { id: "usr-06", name: "Rachel Adams", email: "rachel.a@company.com", role: "finance", dept: "Finance & Payroll", status: "Active", lastActive: "2 hours ago" }
  ],
  candidates: [
    {
      id: "EMP-1042",
      name: "Alex Mercer",
      email: "alex.mercer@company.com",
      role: "Senior Software Engineer",
      dept: "Software Development",
      manager: "David Kumar",
      joiningDate: "2026-10-15",
      shift: "First Shift (8:50 AM - 5:50 PM)",
      floor: "Floor 3 (Bay 3B)",
      progress: 65,
      status: "In Progress",
      phone: "+91 98765 43210",
      dob: "1995-04-12",
      bloodGroup: "O+",
      address: "42 Tech Boulevard, Silicon District",
      emergName: "Eleanor Mercer",
      emergRel: "Spouse",
      emergPhone: "+91 98765 43299",
      degree: "B.Tech Computer Science",
      university: "National Institute of Technology",
      prevCompany: "CloudScale Systems",
      expYears: "4.5",
      bankName: "HDFC Bank",
      accountNum: "501002348921",
      ifsc: "HDFC0001042",
      pan: "ALXPM1942K"
    },
    {
      id: "EMP-1043",
      name: "Priya Sharma",
      email: "priya.s@company.com",
      role: "UI/UX Designer",
      dept: "Product & Design",
      manager: "Sophia Lin",
      joiningDate: "2026-10-18",
      shift: "First Shift (8:50 AM - 5:50 PM)",
      floor: "Floor 4 (Design Studio)",
      progress: 40,
      status: "In Progress",
      phone: "+91 98765 11223"
    },
    {
      id: "EMP-1044",
      name: "Vikram Malhotra",
      email: "vikram.m@company.com",
      role: "DevOps Engineer",
      dept: "IT Support",
      manager: "Marcus Vance",
      joiningDate: "2026-10-10",
      shift: "Second Shift (9:20 AM - 6:30 PM)",
      floor: "Floor 3 (IT Hub)",
      progress: 100,
      status: "Completed",
      phone: "+91 98765 88990"
    },
    {
      id: "EMP-1045",
      name: "Ananya Iyer",
      email: "ananya.i@company.com",
      role: "Financial Analyst",
      dept: "Finance & Payroll",
      manager: "Rachel Adams",
      joiningDate: "2026-10-20",
      shift: "First Shift (8:50 AM - 5:50 PM)",
      floor: "Floor 3 (Finance Wing)",
      progress: 25,
      status: "Action Required",
      phone: "+91 98765 33445"
    }
  ],
  tasks: [
    { id: 101, title: "Submit Government ID Proof (Aadhar/Passport)", role: "Employee", assignee: "Alex Mercer", deadline: "2026-10-16", priority: "Urgent", progress: 100, status: "done" },
    { id: 102, title: "Provision Laptop, VPN Credentials, and Official Email", role: "IT Admin", assignee: "Marcus Vance", deadline: "2026-10-16", priority: "High", progress: 80, status: "in progress" },
    { id: 103, title: "HR Document Verification & Background Check", role: "HR Admin", assignee: "Sarah Jenkins", deadline: "2026-10-17", priority: "High", progress: 60, status: "in progress" },
    { id: 104, title: "Sign Formal Employment Agreement & Non-Disclosure (NDA)", role: "Employee", assignee: "Alex Mercer", deadline: "2026-10-16", priority: "Urgent", progress: 100, status: "done" },
    { id: 105, title: "Team Introduction & Engineering Induction Meeting", role: "Reporting Manager", assignee: "David Kumar", deadline: "2026-10-17", priority: "Medium", progress: 0, status: "open" },
    { id: 106, title: "Complete Mandatory Policy Assessment Quiz (Floor 2 Compliance)", role: "Employee", assignee: "Alex Mercer", deadline: "2026-10-18", priority: "High", progress: 0, status: "open" },
    { id: 107, title: "Setup Bank Payroll & Tax Declarations", role: "Finance", assignee: "Rachel Adams", deadline: "2026-10-19", priority: "Medium", progress: 40, status: "in progress" }
  ],
  docs: [
    { id: "doc-1", type: "Government ID Proof (Aadhar/Passport)", empName: "Alex Mercer", fileName: "alex_mercer_passport.pdf", date: "2026-10-14", status: "Verified", notes: "Clear passport bio page verified by HR Sarah J." },
    { id: "doc-2", type: "Educational Certificates / Degrees", empName: "Alex Mercer", fileName: "btech_degree_certificate.pdf", date: "2026-10-14", status: "Verified", notes: "Accredited university degree verified." },
    { id: "doc-3", type: "Previous Relieving & Experience Letter", empName: "Alex Mercer", fileName: "relieving_letter_cloudscale.pdf", date: "2026-10-14", status: "Under Review", notes: "Under review with HR verification desk." },
    { id: "doc-4", type: "Bank Passbook / Cancelled Cheque", empName: "Alex Mercer", fileName: "hdfc_cancelled_cheque.pdf", date: "2026-10-14", status: "Verified", notes: "Account and IFSC confirmed for payroll." },
    { id: "doc-5", type: "Passport Size Photograph", empName: "Alex Mercer", fileName: "id_card_headshot.jpg", date: "2026-10-14", status: "Verified", notes: "Forwarded to Security for RFID badge print." },

    { id: "doc-6", type: "Government ID Proof (Aadhar/Passport)", empName: "Priya Sharma", fileName: "priya_aadhar_card.pdf", date: "2026-10-14", status: "Under Review", notes: "National ID proof under initial review." },
    { id: "doc-7", type: "Educational Certificates / Degrees", empName: "Priya Sharma", fileName: "design_degree_nid.pdf", date: "2026-10-14", status: "Verified", notes: "National Institute of Design degree verified." },
    { id: "doc-8", type: "Signed Offer & Appointment Letter", empName: "Priya Sharma", fileName: "priya_offer_signed.pdf", date: "2026-10-14", status: "Under Review", notes: "Signature awaiting HR Director counter-sign." },

    { id: "doc-9", type: "Government ID Proof (Aadhar/Passport)", empName: "Vikram Malhotra", fileName: "vikram_passport.pdf", date: "2026-10-14", status: "Verified", notes: "Passport and visa documents confirmed." },
    { id: "doc-10", type: "Educational Certificates / Degrees", empName: "Vikram Malhotra", fileName: "btech_certificate_vikram.pdf", date: "2026-10-14", status: "Verified", notes: "Engineering degree verified." },
    { id: "doc-11", type: "Previous Relieving & Experience Letter", empName: "Vikram Malhotra", fileName: "tcs_relieving_letter.pdf", date: "2026-10-14", status: "Verified", notes: "3 years experience verified." },

    { id: "doc-12", type: "Government ID Proof (Aadhar/Passport)", empName: "Ananya Iyer", fileName: "ananya_pan_aadhar.pdf", date: "2026-10-14", status: "Resubmission Required", notes: "ID scan blurred. Please re-upload high resolution document." },
    { id: "doc-13", type: "Bank Passbook / Cancelled Cheque", empName: "Ananya Iyer", fileName: "icici_cancelled_cheque.pdf", date: "2026-10-14", status: "Under Review", notes: "Finance verification in queue." }
  ],
  equipment: [
    { id: "eq-1", item: "Dell Latitude 7440 (i7, 32GB RAM)", serial: "SN-DELL-9942", assignedTo: "Alex Mercer", status: "Allocated", date: "2026-10-14" },
    { id: "eq-2", item: "Dell 27-inch 4K Monitor", serial: "SN-MON-1049", assignedTo: "Alex Mercer", status: "Allocated", date: "2026-10-14" },
    { id: "eq-3", item: "Wireless Keyboard & Mouse Combo", serial: "SN-LOGI-8821", assignedTo: "Alex Mercer", status: "Allocated", date: "2026-10-14" },
    { id: "eq-4", item: "Smart RFID Proximity Access Badge", serial: "RFID-BAY3-1042", assignedTo: "Alex Mercer", status: "Active", date: "2026-10-14" }
  ],
  notifications: [
    { id: "nt-1", title: "Document Verified", desc: "Your Government ID Proof has been reviewed and verified by HR.", time: "10 mins ago", category: "document", read: false },
    { id: "nt-2", title: "New Task Assigned", desc: "IT Support has assigned: 'Setup VPN and Git Access Credentials'", time: "45 mins ago", category: "task", read: false },
    { id: "nt-3", title: "Welcome Induction Meeting", desc: "Engineering Team induction scheduled tomorrow at 11:30 AM (Floor 3)", time: "2 hours ago", category: "approval", read: true }
  ],
  training: [
    { id: "tr-1", name: "Workplace Security & IT Acceptable Use", dept: "All Departments", type: "Mandatory", duration: "35 mins", progress: 100, status: "Completed" },
    { id: "tr-2", name: "Enterprise Code of Conduct & Ethics", dept: "All Departments", type: "Mandatory", duration: "45 mins", progress: 75, status: "In Progress" },
    { id: "tr-3", name: "Agile Development & Git Workflow", dept: "Software Development", type: "Departmental", duration: "1.5 hours", progress: 20, status: "In Progress" },
    { id: "tr-4", name: "Data Protection & GDPR Compliance", dept: "All Departments", type: "Mandatory", duration: "40 mins", progress: 0, status: "Not Started" }
  ]
};

// =========================================================================
// 2. DATABASE CRUD ACCESSOR & STORAGE
// =========================================================================
const DB = {
  get(key) {
    try {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      console.error("DB Get Error", e);
      return [];
    }
  },
  set(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.error("DB Set Error", e);
    }
  },
  pushAudit(action, actor = "System") {
    const list = this.get(StorageKeys.AUDIT);
    list.unshift({
      id: Date.now(),
      action,
      actor,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
    });
    if (list.length > 50) list.pop();
    this.set(StorageKeys.AUDIT, list);
  },
  pushNotification(title, desc, category = "general") {
    const list = this.get(StorageKeys.NOTIFS);
    list.unshift({
      id: "nt-" + Date.now(),
      title,
      desc,
      category,
      time: "Just now",
      read: false
    });
    this.set(StorageKeys.NOTIFS, list);
    if (typeof NotificationModule !== "undefined" && NotificationModule.renderBadge) {
      NotificationModule.renderBadge();
    }
  }
};

// Initialize Database Storage
function initDatabase() {
  if (!localStorage.getItem(StorageKeys.USERS)) {
    localStorage.setItem(StorageKeys.USERS, JSON.stringify(SeedData.users));
  }
  if (!localStorage.getItem(StorageKeys.CANDIDATES)) {
    localStorage.setItem(StorageKeys.CANDIDATES, JSON.stringify(SeedData.candidates));
  }
  if (!localStorage.getItem(StorageKeys.TASKS)) {
    localStorage.setItem(StorageKeys.TASKS, JSON.stringify(SeedData.tasks));
  }
  const existingDocs = DB.get(StorageKeys.DOCS);
  if (!existingDocs || existingDocs.length < 10) {
    localStorage.setItem(StorageKeys.DOCS, JSON.stringify(SeedData.docs));
  }
  if (!localStorage.getItem(StorageKeys.EQUIPMENT)) {
    localStorage.setItem(StorageKeys.EQUIPMENT, JSON.stringify(SeedData.equipment));
  }
  if (!localStorage.getItem(StorageKeys.NOTIFS)) {
    localStorage.setItem(StorageKeys.NOTIFS, JSON.stringify(SeedData.notifications));
  }
  if (!localStorage.getItem(StorageKeys.TRAINING)) {
    localStorage.setItem(StorageKeys.TRAINING, JSON.stringify(SeedData.training));
  }
  if (!localStorage.getItem(StorageKeys.CURRENT_USER)) {
    localStorage.setItem(StorageKeys.CURRENT_USER, JSON.stringify(SeedData.users[0]));
  }
}
initDatabase();


// =========================================================================
// 3. AUTHENTICATION & ROLE-BASED ACCESS SYSTEM
// =========================================================================
const AuthSystem = {
  getCurrentUser() {
    return DB.get(StorageKeys.CURRENT_USER) || SeedData.users[0];
  },
  setCurrentUser(user) {
    DB.set(StorageKeys.CURRENT_USER, user);
    this.applySessionUI();
  },
  switchRoleDemo(roleKey) {
    const users = DB.get(StorageKeys.USERS);
    const targetUser = users.find(u => u.role === roleKey) || users[0];
    this.setCurrentUser(targetUser);
    DB.pushAudit(`Switched active view role to: ${targetUser.role} (${targetUser.name})`, targetUser.name);
    DB.pushNotification("Role Switched", `Active view changed to ${targetUser.role.toUpperCase()}`, "approval");
    GlobalApp.showToast(`Switched active role to ${targetUser.name} (${targetUser.role})`);
    AppRouter.refreshPermissions();
    if (targetUser.role === "employee") {
      AppRouter.navigate("profile");
    } else {
      AppRouter.navigate("main-dashboard");
    }
  },
  loginAs(roleKey) {
    this.switchRoleDemo(roleKey);
  },
  handleLoginForm(e) {
    e.preventDefault();
    const id = document.getElementById("loginId").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword")?.value || "";
    const users = DB.get(StorageKeys.USERS);
    const candidates = DB.get(StorageKeys.CANDIDATES);

    let matched = users.find(u => u.email.toLowerCase() === id || (u.empId && u.empId.toLowerCase() === id));
    if (!matched) {
      const c = candidates.find(item => item.email.toLowerCase() === id || item.id.toLowerCase() === id);
      if (c) {
        matched = {
          id: "usr-" + Date.now(),
          name: c.name,
          email: c.email,
          role: "employee",
          dept: c.dept,
          status: "Active",
          lastActive: "Just now",
          empId: c.id,
          photo: c.photo || null
        };
        users.push(matched);
        DB.set(StorageKeys.USERS, users);
      } else {
        matched = {
          id: "usr-" + Date.now(),
          name: id.includes("@") ? id.split("@")[0].replace(".", " ") : id,
          email: id.includes("@") ? id : `${id}@company.com`,
          role: "employee",
          dept: "Software Development",
          status: "Active",
          lastActive: "Just now",
          empId: id.startsWith("EMP") ? id.toUpperCase() : "EMP-" + Math.floor(1000 + Math.random() * 9000)
        };
        users.push(matched);
        DB.set(StorageKeys.USERS, users);
      }
    }

    this.setCurrentUser(matched);
    GlobalApp.showToast(`🔓 Welcome back, ${matched.name}! Opening your employee profile...`);
    AppRouter.refreshPermissions();
    AppRouter.navigate("profile");
  },
  handleAdminLoginForm(e) {
    e.preventDefault();
    const email = document.getElementById("adminLoginEmail").value.trim().toLowerCase();
    const password = document.getElementById("adminLoginPassword").value;
    const alertBox = document.getElementById("adminAlertBox");

    // Strictly validate HR Admin email format: <hr_name>.hr@<company_name>.com
    const hrEmailRegex = /^[a-zA-Z0-9._%+-]+\.hr@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i;
    if (!hrEmailRegex.test(email)) {
      if (alertBox) {
        alertBox.innerHTML = `<strong>⚠️ Admin Access Denied:</strong><br>Admin credentials strictly require an authorized HR administrative email ending with <code>.hr@&lt;company&gt;.com</code> (e.g. <code>sarah.hr@company.com</code>).`;
        alertBox.style.display = "block";
      }
      return;
    }

    // Strictly validate minimum 8 characters password
    if (!password || password.length < 8) {
      if (alertBox) {
        alertBox.innerHTML = `<strong>⚠️ Password Policy Error:</strong><br>Admin security password must be a minimum of 8 characters in length.`;
        alertBox.style.display = "block";
      }
      return;
    }

    if (alertBox) alertBox.style.display = "none";

    // Extract name from email (e.g., sarah.hr@company.com -> Sarah)
    const rawName = email.split(".hr@")[0].replace(/[._]/g, " ");
    const adminName = rawName.charAt(0).toUpperCase() + rawName.slice(1);

    const users = DB.get(StorageKeys.USERS);
    let adminUser = users.find(u => u.email.toLowerCase() === email);
    if (!adminUser) {
      adminUser = {
        id: "admin-" + Date.now(),
        name: `${adminName} (HR Admin)`,
        email: email,
        role: "super_admin",
        dept: "HR & People Operations",
        status: "Active",
        lastActive: "Just now"
      };
      users.push(adminUser);
      DB.set(StorageKeys.USERS, users);
    } else {
      adminUser.role = "super_admin";
    }

    DB.pushAudit(`OSS Admin authenticated via https://ipaddress/admin.login for ${adminUser.name} (${email})`, adminUser.name);
    this.setCurrentUser(adminUser);
    GlobalApp.showToast(`🛡️ Admin console unlocked! Welcome, ${adminUser.name}.`);
    AppRouter.refreshPermissions();
    AppRouter.navigate("admin-portal");
  },
  handleRegisterForm(e) {
    e.preventDefault();
    const name = document.getElementById("regName").value.trim();
    const empId = document.getElementById("regEmpId").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const dept = document.getElementById("regDept").value;
    const shift = document.getElementById("regShift").value;

    const newUser = {
      id: "usr-" + Date.now(),
      name,
      email,
      role: "employee",
      dept,
      status: "Active",
      lastActive: "Just now",
      empId
    };

    const users = DB.get(StorageKeys.USERS);
    users.push(newUser);
    DB.set(StorageKeys.USERS, users);

    // Also register in Candidates
    const candidates = DB.get(StorageKeys.CANDIDATES);
    candidates.push({
      id: empId,
      name,
      email,
      role: "Associate",
      dept,
      manager: "David Kumar",
      joiningDate: new Date().toISOString().split("T")[0],
      shift,
      floor: "Floor 2",
      progress: 15,
      status: "In Progress"
    });
    DB.set(StorageKeys.CANDIDATES, candidates);

    DB.pushAudit(`Registered new employee account: ${name} (${empId})`, name);
    this.setCurrentUser(newUser);
    GlobalApp.showToast(`Account created successfully! Welcome ${name}.`);
    AppRouter.refreshPermissions();
    AppRouter.navigate("profile");
  },
  showLoginTab(tab) {
    const isSignIn = tab === "signin";
    const isReg = tab === "register";

    const tabLoginBtn = document.getElementById("tabLoginBtn");
    const tabRegBtn = document.getElementById("tabRegisterBtn");
    const loginTabNav = document.getElementById("loginTabNav");
    const adminGateway = document.getElementById("adminPortalGatewayCard");

    if (loginTabNav) loginTabNav.style.display = "flex";
    if (adminGateway) adminGateway.style.display = "none";

    if (tabLoginBtn) tabLoginBtn.classList.toggle("active", isSignIn);
    if (tabRegBtn) tabRegBtn.classList.toggle("active", isReg);

    const loginForm = document.getElementById("loginForm");
    const regForm = document.getElementById("registerForm");

    if (loginForm) loginForm.style.display = isSignIn ? "block" : "none";
    if (regForm) regForm.style.display = isReg ? "block" : "none";
  },
  showAdminGateway() {
    const loginTabNav = document.getElementById("loginTabNav");
    const loginForm = document.getElementById("loginForm");
    const regForm = document.getElementById("registerForm");
    const adminGateway = document.getElementById("adminPortalGatewayCard");

    if (loginTabNav) loginTabNav.style.display = "none";
    if (loginForm) loginForm.style.display = "none";
    if (regForm) regForm.style.display = "none";
    if (adminGateway) adminGateway.style.display = "block";

    const emailInput = document.getElementById("adminLoginEmail");
    if (emailInput) setTimeout(() => emailInput.focus(), 150);
  },
  exitAdminGateway() {
    this.showLoginTab("signin");
    try {
      if (window.history && window.history.replaceState) {
        window.history.replaceState({}, document.title, window.location.pathname);
      }
    } catch(e) {}
  },
  openForgotPassword() {
    alert("Password reset instructions sent to your registered official email address. You may also contact Floor 3 IT Support.");
  },
  toggleAuthAction() {
    const cur = this.getCurrentUser();
    if (cur) {
      if (confirm(`Logout from session as ${cur.name}?`)) {
        AppRouter.navigate("login");
      }
    } else {
      AppRouter.navigate("login");
    }
  },
  applySessionUI() {
    const user = this.getCurrentUser();
    if (!user) return;

    const roleNameMap = {
      super_admin: "Super Admin",
      hr_admin: "HR Admin",
      employee: "Employee",
      manager: "Manager",
      it_admin: "IT Admin",
      finance: "Finance/Payroll"
    };
    const roleTitle = roleNameMap[user.role] || user.role.toUpperCase();

    // 1. Header Role Switcher Select: Dynamically reflect current logged-in user's name
    const select = document.getElementById("roleSwitcherSelect");
    if (select) {
      select.innerHTML = `
        <option value="${user.role}">${roleTitle} (${user.name})</option>
        <option value="super_admin">Super Admin (Dr. Evelyn Vance)</option>
        <option value="hr_admin">HR Admin (Sarah Jenkins)</option>
        <option value="employee">Employee (Alex Mercer)</option>
        <option value="manager">Manager (David Kumar)</option>
        <option value="it_admin">IT Admin (Marcus Vance)</option>
        <option value="finance">Finance/Payroll (Rachel Adams)</option>
      `;
      select.value = user.role;
    }

    // 2. Header user pill
    const headerUserName = document.getElementById("headerUserName");
    const headerAvatar = document.getElementById("headerAvatar");
    if (headerUserName) headerUserName.textContent = user.name;
    if (headerAvatar) {
      if (user.photo) {
        headerAvatar.innerHTML = `<img src="${user.photo}" alt="${user.name}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
      } else {
        headerAvatar.innerHTML = "";
        headerAvatar.textContent = user.name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
      }
    }

    // 3. Sidebar labels & avatar (Image 1)
    const nameEl = document.getElementById("sidebarUserName");
    const roleEl = document.getElementById("sidebarUserRole");
    const avatarEl = document.getElementById("sidebarAvatar");
    if (nameEl) nameEl.textContent = user.name;
    if (roleEl) roleEl.textContent = roleTitle.toUpperCase();
    if (avatarEl) {
      if (user.photo) {
        avatarEl.innerHTML = `<img src="${user.photo}" alt="${user.name}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
      } else {
        avatarEl.innerHTML = "";
        avatarEl.textContent = user.name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
      }
    }

    // 4. Update Employee Hero welcome banner if applicable
    const heroName = document.getElementById("empHeroName");
    if (heroName) heroName.textContent = `Welcome to the Team, ${user.name}! 👋`;
  }
};

// =========================================================================
// 4. ROUTER & PERMISSIONS GATING
// =========================================================================
const AppRouter = {
  currentPage: "main-dashboard",
  navigate(pageId) {
    const user = AuthSystem.getCurrentUser();
    
    // Check permission requirements
    const pageEl = document.getElementById(`page-${pageId}`);
    if (!pageEl) return;

    // Check if user is restricted from this page
    if (user.role === "employee" && (pageId === "users" || pageId === "settings")) {
      alert("Access Denied: You do not possess administrator permissions for this module.");
      return;
    }

    // Update views
    document.querySelectorAll(".page-view").forEach(el => el.classList.remove("active"));
    pageEl.classList.add("active");

    // Update active nav links
    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.toggle("active", link.dataset.page === pageId);
    });

    this.currentPage = pageId;
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Trigger module lifecycle renderers
    this.renderActivePage(pageId);
  },
  renderActivePage(pageId) {
    if (pageId === "main-dashboard") DashboardModule.render();
    if (pageId === "employee-dashboard") EmployeeDashboardModule.render();
    if (pageId === "profile") ProfileModule.load();
    if (pageId === "directory") DirectoryModule.render();
    if (pageId === "documents") DocumentsModule.render();
    if (pageId === "tasks") TasksModule.render();
    if (pageId === "formalities") FormalitiesModule.render();
    if (pageId === "training") TrainingModule.render();
    if (pageId === "it-setup") ItSetupModule.render();
    if (pageId === "notifications") NotificationModule.render();
    if (pageId === "reports") ReportsModule.render();
    if (pageId === "users") UserControlModule.render();
    if (pageId === "settings") SettingsModule.render();
  },
  refreshPermissions() {
    const user = AuthSystem.getCurrentUser();
    const role = user.role;

    document.querySelectorAll("[data-role-req]").forEach(el => {
      const allowedRoles = el.dataset.roleReq.split(",");
      if (allowedRoles.includes(role)) {
        el.style.display = "";
      } else {
        el.style.display = "none";
      }
    });
  }
};

// =========================================================================
// 5. EXECUTIVE DASHBOARD MODULE
// =========================================================================
const DashboardModule = {
  render() {
    const candidates = DB.get(StorageKeys.CANDIDATES);
    const tasks = DB.get(StorageKeys.TASKS);
    const docs = DB.get(StorageKeys.DOCS);
    const audits = DB.get(StorageKeys.AUDIT);

    // Computed real statistics
    const activeCount = candidates.filter(c => c.status === "In Progress" || c.status === "Action Required").length;
    const completedCount = candidates.filter(c => c.status === "Completed").length;
    const pendingDocsCount = docs.filter(d => d.status === "Under Review" || d.status === "Not Submitted").length;
    const overdueTasksCount = tasks.filter(t => t.status === "overdue" || (t.status !== "done" && new Date(t.deadline) < new Date())).length;
    
    const avgProgress = candidates.length > 0 
      ? Math.round(candidates.reduce((acc, c) => acc + (c.progress || 0), 0) / candidates.length)
      : 0;

    // Apply KPIs
    document.getElementById("kpiActiveOnboardings").textContent = activeCount;
    document.getElementById("kpiCompletedOnboardings").textContent = completedCount;
    document.getElementById("kpiPendingDocs").textContent = pendingDocsCount;
    document.getElementById("kpiOverdueTasks").textContent = overdueTasksCount;
    document.getElementById("kpiAvgProgress").textContent = `${avgProgress}%`;

    // Render candidates table
    const tbody = document.getElementById("dashboardCandidatesTableBody");
    tbody.innerHTML = candidates.slice(0, 5).map(c => `
      <tr>
        <td>
          <strong>${c.name}</strong><br>
          <span style="font-size:11.5px;color:var(--text-muted);">${c.email}</span>
        </td>
        <td><code>${c.id}</code></td>
        <td>${c.dept}</td>
        <td>${c.role}</td>
        <td>${c.joiningDate}</td>
        <td style="min-width:140px;">
          <div style="display:flex;justify-content:space-between;font-size:11px;margin-bottom:3px;">
            <span>Progress</span><span><strong>${c.progress}%</strong></span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar-fill ${c.progress < 50 ? 'warning' : ''}" style="width:${c.progress}%"></div>
          </div>
        </td>
        <td>
          <span class="badge ${c.status === 'Completed' ? 'badge-success' : (c.status === 'Action Required' ? 'badge-danger' : 'badge-primary')}">
            ${c.status}
          </span>
        </td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="DirectoryModule.checkProgress('${c.id}')">Inspect Progress</button>
        </td>
      </tr>
    `).join("");

    // Render Bottlenecks
    const bList = document.getElementById("dashboardBottlenecksList");
    const bottlenecks = [];
    if (pendingDocsCount > 0) {
      bottlenecks.push(`📁 <strong>${pendingDocsCount} Documents</strong> waiting for HR verification. Approval delays are holding up completion.`);
    }
    if (overdueTasksCount > 0) {
      bottlenecks.push(`⚠️ <strong>${overdueTasksCount} Critical Tasks</strong> past deadline. Automated escalation alerts active.`);
    }
    bottlenecks.push(`💻 <strong>IT Access Provisioning:</strong> 1 developer pending VPN and internal Git repository access token.`);

    bList.innerHTML = bottlenecks.map(b => `
      <div style="padding:10px 12px;background:var(--bg-subtle);border-radius:var(--radius-md);font-size:13px;border-left:3px solid var(--warning);">
        ${b}
      </div>
    `).join("");

    // Render Audit stream
    const aList = document.getElementById("dashboardAuditStream");
    aList.innerHTML = audits.slice(0, 6).map(a => `
      <div style="font-size:12.5px;display:flex;justify-content:space-between;border-bottom:1px solid var(--border-color);padding:6px 0;">
        <span><strong>${a.actor}:</strong> ${a.action}</span>
        <span style="color:var(--text-subtle);font-size:11px;">${a.timestamp}</span>
      </div>
    `).join("") || "<p class='text-muted' style='font-size:12px;'>No recent audit events.</p>";
  }
};

// =========================================================================
// 6. EMPLOYEE ONBOARDING DASHBOARD MODULE
// =========================================================================
const EmployeeDashboardModule = {
  render() {
    const tasks = DB.get(StorageKeys.TASKS);
    const docs = DB.get(StorageKeys.DOCS);
    const examScores = DB.get(StorageKeys.EXAM_SCORES);

    const openTasks = tasks.filter(t => t.status !== "done").length;
    const pendingDocs = docs.filter(d => d.status !== "Verified").length;
    const progress = Math.max(10, Math.round((tasks.filter(t => t.status === "done").length / tasks.length) * 100));

    document.getElementById("empProgressPercent").textContent = `${progress}%`;
    document.getElementById("empOpenTasks").textContent = openTasks;
    document.getElementById("empDocsPending").textContent = pendingDocs;
    
    if (examScores && examScores.length > 0) {
      document.getElementById("empPolicyExamScore").textContent = `${examScores[0].percentage}% (Passed)`;
    } else {
      document.getElementById("empPolicyExamScore").textContent = "Not Started";
    }

    // Action checklist items
    const checklistEl = document.getElementById("empActionChecklist");
    const pendingItems = tasks.filter(t => t.status !== "done").slice(0, 4);
    
    if (pendingItems.length === 0) {
      checklistEl.innerHTML = `<div class="badge badge-success" style="padding:10px;">🎉 All assigned onboarding checklist tasks completed!</div>`;
    } else {
      checklistEl.innerHTML = pendingItems.map(item => `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:var(--bg-subtle);border-radius:var(--radius-md);">
          <div>
            <div style="font-size:13.5px;font-weight:600;">${item.title}</div>
            <div style="font-size:11.5px;color:var(--text-muted);">Assigned to: ${item.role} • Due: ${item.deadline}</div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="TasksModule.markDone(${item.id})">Mark Done</button>
        </div>
      `).join("");
    }
  }
};

// =========================================================================
// 7. EMPLOYEE PROFILE & FORMS MODULE
// =========================================================================
const ProfileModule = {
  currentTab: "personal",
  load() {
    const user = AuthSystem.getCurrentUser();
    const candidates = DB.get(StorageKeys.CANDIDATES);

    // Match candidate by email, empId, or name
    let c = candidates.find(item => 
      (user.email && item.email && item.email.toLowerCase() === user.email.toLowerCase()) ||
      (user.empId && item.id && item.id.toLowerCase() === user.empId.toLowerCase()) ||
      (item.name && item.name.toLowerCase() === user.name.toLowerCase())
    );

    if (!c) {
      c = {
        id: user.empId || "EMP-" + Math.floor(1000 + Math.random() * 9000),
        name: user.name,
        email: user.email,
        role: user.role === "super_admin" || user.role === "hr_admin" ? "HR Administrator" : "Associate Engineer",
        dept: user.dept || "Software Development",
        manager: "David Kumar",
        joiningDate: new Date().toISOString().split("T")[0],
        shift: "First Shift (8:50 AM - 5:50 PM)",
        floor: "Floor 3 (Bay 3B)",
        progress: 35,
        status: "In Progress",
        phone: "+91 98765 00000",
        photo: user.photo || null
      };
      candidates.push(c);
      DB.set(StorageKeys.CANDIDATES, candidates);
    }

    // Set overview card headers
    const nameParts = (c.name || user.name || "Employee User").split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const profDisplayName = document.getElementById("profDisplayName");
    const profDisplayRole = document.getElementById("profDisplayRole");
    const profDisplayEmpId = document.getElementById("profDisplayEmpId");
    const profDisplayDept = document.getElementById("profDisplayDept");

    if (profDisplayName) profDisplayName.textContent = c.name;
    if (profDisplayRole) profDisplayRole.textContent = c.role;
    if (profDisplayEmpId) profDisplayEmpId.textContent = c.id;
    if (profDisplayDept) profDisplayDept.textContent = c.dept;

    // Pre-fill form inputs
    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.value = val || "";
    };

    setVal("profFirstName", firstName);
    setVal("profLastName", lastName);
    setVal("profEmail", c.email || user.email);
    setVal("profPhone", c.phone || "+91 98765 43210");
    setVal("profDob", c.dob || "1995-04-12");
    setVal("profBloodGroup", c.bloodGroup || "O+");
    setVal("profAddress", c.address || "42 Tech Boulevard, Silicon District");

    setVal("profEmergName", c.emergName || "Eleanor Mercer");
    setVal("profEmergRel", c.emergRel || "Spouse");
    setVal("profEmergPhone", c.emergPhone || "+91 98765 43299");
    setVal("profEmergAltPhone", c.emergAltPhone || "");

    setVal("profEduDegree", c.degree || "B.Tech Computer Science");
    setVal("profEduUniv", c.university || "National Institute of Technology");
    setVal("profPrevCompany", c.prevCompany || "CloudScale Systems");
    setVal("profExperience", c.expYears || "4.5");

    setVal("profBankName", c.bankName || "HDFC Bank");
    setVal("profAccountNum", c.accountNum || "501002348921");
    setVal("profIfsc", c.ifsc || "HDFC0001042");
    setVal("profPan", c.pan || "ALXPM1942K");

    setVal("profDept", c.dept || "Software Development");
    setVal("profRole", c.role || "Senior Software Engineer");
    setVal("profManager", c.manager || "David Kumar");
    setVal("profShift", c.shift || "First Shift (8:50 AM - 5:50 PM)");
    setVal("profJoiningDate", c.joiningDate || "2026-10-15");
    setVal("profFloor", c.floor || "Floor 3 (Bay 3B)");

    // Refresh Avatar and Gauge
    this.updateAvatarDisplays(user);
    this.updateCompletionGauge();
    this.switchTab(this.currentTab || "personal");
  },
  updateAvatarDisplays(user) {
    const previewEl = document.getElementById("profAvatarPreview");
    const removeBtn = document.getElementById("profRemovePhotoBtn");
    const photoStatus = document.getElementById("profPhotoStatus");

    if (previewEl) {
      if (user.photo) {
        previewEl.innerHTML = `<img src="${user.photo}" alt="${user.name}" style="width:100%;height:100%;border-radius:50%;object-fit:cover;">`;
        if (removeBtn) removeBtn.style.display = "inline-block";
        if (photoStatus) photoStatus.innerHTML = `<span class="badge badge-success">✓ Profile Photo Verified</span>`;
      } else {
        previewEl.innerHTML = "";
        previewEl.textContent = (user.name || "AM").split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
        if (removeBtn) removeBtn.style.display = "none";
        if (photoStatus) photoStatus.innerHTML = `<span style="color:var(--warning);font-size:12px;">⚠️ Photo Required for RFID Badge</span>`;
      }
    }

    AuthSystem.applySessionUI();
  },
  handlePhotoUpload(input) {
    if (input.files && input.files[0]) {
      const file = input.files[0];
      if (file.size > 5 * 1024 * 1024) {
        alert("Photo file size exceeds 5MB limit. Please select a smaller photo.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        const user = AuthSystem.getCurrentUser();
        user.photo = dataUrl;
        AuthSystem.setCurrentUser(user);

        // Update in Candidates
        const candidates = DB.get(StorageKeys.CANDIDATES);
        const c = candidates.find(item => 
          (user.email && item.email && item.email.toLowerCase() === user.email.toLowerCase()) ||
          (user.empId && item.id && item.id.toLowerCase() === user.empId.toLowerCase()) ||
          (item.name && item.name.toLowerCase() === user.name.toLowerCase())
        );
        if (c) {
          c.photo = dataUrl;
          DB.set(StorageKeys.CANDIDATES, candidates);
        }

        // Update in USERS
        const users = DB.get(StorageKeys.USERS);
        const u = users.find(item => item.id === user.id || item.email === user.email);
        if (u) {
          u.photo = dataUrl;
          DB.set(StorageKeys.USERS, users);
        }

        DB.pushAudit(`Uploaded new profile photo for ${user.name}`, user.name);
        GlobalApp.showToast("📷 Profile photo updated successfully!");
        this.updateAvatarDisplays(user);
        this.updateCompletionGauge();
      };
      reader.readAsDataURL(file);
    }
  },
  removePhoto() {
    const user = AuthSystem.getCurrentUser();
    delete user.photo;
    AuthSystem.setCurrentUser(user);

    const candidates = DB.get(StorageKeys.CANDIDATES);
    const c = candidates.find(item => 
      (user.email && item.email && item.email.toLowerCase() === user.email.toLowerCase()) ||
      (user.empId && item.id && item.id.toLowerCase() === user.empId.toLowerCase()) ||
      (item.name && item.name.toLowerCase() === user.name.toLowerCase())
    );
    if (c) {
      delete c.photo;
      DB.set(StorageKeys.CANDIDATES, candidates);
    }

    const users = DB.get(StorageKeys.USERS);
    const u = users.find(item => item.id === user.id || item.email === user.email);
    if (u) {
      delete u.photo;
      DB.set(StorageKeys.USERS, users);
    }

    GlobalApp.showToast("Profile photo removed.");
    this.updateAvatarDisplays(user);
    this.updateCompletionGauge();
  },
  updateCompletionGauge() {
    const user = AuthSystem.getCurrentUser();
    const reqFields = [
      document.getElementById("profFirstName")?.value,
      document.getElementById("profLastName")?.value,
      document.getElementById("profEmail")?.value,
      document.getElementById("profPhone")?.value,
      document.getElementById("profDob")?.value,
      document.getElementById("profAddress")?.value,
      document.getElementById("profEmergName")?.value,
      document.getElementById("profEmergRel")?.value,
      document.getElementById("profEmergPhone")?.value,
      document.getElementById("profEduDegree")?.value,
      document.getElementById("profEduUniv")?.value,
      document.getElementById("profBankName")?.value,
      document.getElementById("profAccountNum")?.value,
      document.getElementById("profIfsc")?.value,
      document.getElementById("profPan")?.value,
      user.photo
    ];

    const filledCount = reqFields.filter(f => !!f && String(f).trim().length > 0).length;
    const totalReq = reqFields.length;
    const percent = Math.round((filledCount / totalReq) * 100);

    const percentEl = document.getElementById("profCompletionPercent");
    const barEl = document.getElementById("profCompletionBar");
    const summaryEl = document.getElementById("profRequiredSummary");

    if (percentEl) percentEl.textContent = `${percent}%`;
    if (barEl) barEl.style.width = `${percent}%`;
    if (summaryEl) {
      summaryEl.textContent = percent === 100 
        ? "✓ All required fields and profile photo completed!" 
        : `${filledCount} of ${totalReq} required onboarding profile items completed.`;
    }
  },
  switchTab(tabId) {
    this.currentTab = tabId;
    const tabBtns = document.querySelectorAll("#page-profile .tab-btn");
    tabBtns.forEach(b => b.classList.remove("active"));

    if (tabId === "all") {
      document.querySelectorAll(".tab-pane").forEach(p => p.classList.add("active"));
      const allBtn = document.getElementById("tabProfAllBtn");
      if (allBtn) allBtn.classList.add("active");
    } else {
      document.querySelectorAll(".tab-pane").forEach(p => p.classList.remove("active"));
      const target = document.getElementById(`profileTab${tabId.charAt(0).toUpperCase() + tabId.slice(1)}`);
      if (target) target.classList.add("active");
      const activeBtn = document.getElementById(`tabProf${tabId.charAt(0).toUpperCase() + tabId.slice(1)}Btn`);
      if (activeBtn) activeBtn.classList.add("active");
    }
  },
  saveDraft() {
    this.saveDataLocally(false);
    GlobalApp.showToast("💾 Profile draft saved to local memory.");
  },
  saveAndSubmit() {
    this.saveDataLocally(true);
  },
  saveDataLocally(isSubmit) {
    const user = AuthSystem.getCurrentUser();
    const firstName = document.getElementById("profFirstName")?.value.trim() || "";
    const lastName = document.getElementById("profLastName")?.value.trim() || "";
    const email = document.getElementById("profEmail")?.value.trim() || "";
    const phone = document.getElementById("profPhone")?.value.trim() || "";
    const dob = document.getElementById("profDob")?.value || "";
    const bloodGroup = document.getElementById("profBloodGroup")?.value || "O+";
    const address = document.getElementById("profAddress")?.value.trim() || "";
    const emergName = document.getElementById("profEmergName")?.value.trim() || "";
    const emergRel = document.getElementById("profEmergRel")?.value.trim() || "";
    const emergPhone = document.getElementById("profEmergPhone")?.value.trim() || "";
    const emergAltPhone = document.getElementById("profEmergAltPhone")?.value.trim() || "";
    const degree = document.getElementById("profEduDegree")?.value.trim() || "";
    const univ = document.getElementById("profEduUniv")?.value.trim() || "";
    const prevCompany = document.getElementById("profPrevCompany")?.value.trim() || "";
    const expYears = document.getElementById("profExperience")?.value.trim() || "";
    const bankName = document.getElementById("profBankName")?.value.trim() || "";
    const accountNum = document.getElementById("profAccountNum")?.value.trim() || "";
    const ifsc = document.getElementById("profIfsc")?.value.trim() || "";
    const pan = document.getElementById("profPan")?.value.trim() || "";

    if (isSubmit) {
      const missing = [];
      if (!firstName) missing.push("First Name");
      if (!lastName) missing.push("Last Name");
      if (!email) missing.push("Email");
      if (!phone) missing.push("Phone Number");
      if (!dob) missing.push("Date of Birth");
      if (!address) missing.push("Residential Address");
      if (!emergName) missing.push("Emergency Contact Name");
      if (!emergRel) missing.push("Emergency Relationship");
      if (!emergPhone) missing.push("Emergency Phone");
      if (!degree) missing.push("Educational Degree");
      if (!bankName) missing.push("Bank Name");
      if (!accountNum) missing.push("Account Number");
      if (!ifsc) missing.push("IFSC Code");
      if (!pan) missing.push("PAN Card");
      if (!user.photo) missing.push("Profile Photo (Required for RFID Badge)");

      if (missing.length > 0) {
        alert("Please complete the following required fields before official submission:\n• " + missing.join("\n• "));
        return;
      }
    }

    const fullName = `${firstName} ${lastName}`.trim() || user.name;
    user.name = fullName;
    user.email = email || user.email;
    AuthSystem.setCurrentUser(user);

    // Update in Candidates
    const candidates = DB.get(StorageKeys.CANDIDATES);
    let c = candidates.find(item => 
      (user.email && item.email && item.email.toLowerCase() === user.email.toLowerCase()) ||
      (user.empId && item.id && item.id.toLowerCase() === user.empId.toLowerCase()) ||
      (item.name && item.name.toLowerCase() === user.name.toLowerCase())
    );
    if (!c) {
      c = { id: user.empId || "EMP-" + Math.floor(1000 + Math.random() * 9000), name: fullName, email: user.email };
      candidates.push(c);
    }
    c.name = fullName;
    c.email = email;
    c.phone = phone;
    c.dob = dob;
    c.bloodGroup = bloodGroup;
    c.address = address;
    c.emergName = emergName;
    c.emergRel = emergRel;
    c.emergPhone = emergPhone;
    c.emergAltPhone = emergAltPhone;
    c.degree = degree;
    c.university = univ;
    c.prevCompany = prevCompany;
    c.expYears = expYears;
    c.bankName = bankName;
    c.accountNum = accountNum;
    c.ifsc = ifsc;
    c.pan = pan;
    c.photo = user.photo;
    if (isSubmit) {
      c.progress = Math.max(c.progress || 0, 75);
      c.status = "In Progress";
    }
    DB.set(StorageKeys.CANDIDATES, candidates);

    // Update in Users
    const users = DB.get(StorageKeys.USERS);
    const u = users.find(item => item.id === user.id || item.email === user.email);
    if (u) {
      u.name = fullName;
      u.email = email;
      u.photo = user.photo;
      DB.set(StorageKeys.USERS, users);
    }

    this.updateAvatarDisplays(user);
    this.updateCompletionGauge();

    if (isSubmit) {
      DB.pushAudit(`Submitted complete employee onboarding profile for ${fullName}`, fullName);
      DB.pushNotification("Profile Submitted", "Your updated onboarding profile and photo have been dispatched for HR verification.", "document");
      GlobalApp.showToast("✅ Profile submitted successfully for HR verification!");
    } else {
      DB.pushAudit(`Saved employee information draft for ${fullName}`, fullName);
    }
  }
};

// =========================================================================
// 8. EMPLOYEE DIRECTORY MODULE
// =========================================================================
const DirectoryModule = {
  render() {
    this.applyFilters();
  },
  applyFilters() {
    const search = (document.getElementById("dirSearchInput")?.value || "").toLowerCase();
    const dept = document.getElementById("dirDeptFilter")?.value || "all";
    const status = document.getElementById("dirStatusFilter")?.value || "all";

    const candidates = DB.get(StorageKeys.CANDIDATES);
    const filtered = candidates.filter(c => {
      const matchSearch = c.name.toLowerCase().includes(search) || c.id.toLowerCase().includes(search) || c.role.toLowerCase().includes(search);
      const matchDept = dept === "all" || c.dept === dept;
      const matchStatus = status === "all" || c.status === status;
      return matchSearch && matchDept && matchStatus;
    });

    const tbody = document.getElementById("directoryTableBody");
    if (!tbody) return;

    tbody.innerHTML = filtered.map(c => `
      <tr>
        <td>
          <strong>${c.name}</strong><br>
          <span style="font-size:11.5px;color:var(--text-muted);">${c.email}</span>
        </td>
        <td><code>${c.id}</code></td>
        <td>${c.dept}</td>
        <td>${c.role}</td>
        <td>${c.manager}</td>
        <td>${c.joiningDate}</td>
        <td style="min-width:140px;">
          <div style="font-size:11px;display:flex;justify-content:space-between;margin-bottom:3px;">
            <span>Progress</span><span><strong>${c.progress}%</strong></span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width:${c.progress}%"></div>
          </div>
        </td>
        <td><span class="badge ${c.status === 'Completed' ? 'badge-success' : 'badge-primary'}">${c.status}</span></td>
        <td>
          <div style="display:flex;gap:6px;">
            <button class="btn btn-primary btn-sm" onclick="DirectoryModule.checkProgress('${c.id}')">Inspect Progress</button>
            <button class="btn btn-secondary btn-sm" onclick="DirectoryModule.viewAllDocuments('${c.name}')">Docs</button>
          </div>
        </td>
      </tr>
    `).join("");
  },
  resetFilters() {
    document.getElementById("dirSearchInput").value = "";
    document.getElementById("dirDeptFilter").value = "all";
    document.getElementById("dirStatusFilter").value = "all";
    this.applyFilters();
  },
  currentInspectId: null,
  checkProgress(empId) {
    this.currentInspectId = empId;
    const candidates = DB.get(StorageKeys.CANDIDATES);
    const c = candidates.find(item => item.id === empId);
    if (!c) return;

    const allDocs = DB.get(StorageKeys.DOCS);
    const empDocs = allDocs.filter(d => d.empName.toLowerCase() === c.name.toLowerCase());

    const allTasks = DB.get(StorageKeys.TASKS);
    const empTasks = allTasks.filter(t => t.assignee.toLowerCase() === c.name.toLowerCase() || t.title.toLowerCase().includes(c.name.toLowerCase()));

    // Set Header
    document.getElementById("dossierAvatar").textContent = c.name.split(" ").map(w => w[0]).slice(0, 2).join("");
    document.getElementById("dossierName").textContent = c.name;
    document.getElementById("dossierSub").textContent = `${c.id} • ${c.dept} • ${c.role} • Reporting Manager: ${c.manager}`;

    // Overall Progress
    const totalProg = c.progress || 0;
    document.getElementById("dossierOverallPercent").textContent = `${totalProg}%`;
    document.getElementById("dossierProgressBar").style.width = `${totalProg}%`;
    const statusBadge = document.getElementById("dossierStatusBadge");
    statusBadge.textContent = c.status;
    statusBadge.className = `badge ${c.status === 'Completed' ? 'badge-success' : 'badge-primary'}`;

    // 4 Stages Cards
    const verifiedDocsCount = empDocs.filter(d => d.status === "Verified").length;
    const docStageComplete = empDocs.length > 0 && verifiedDocsCount === empDocs.length;

    const stagesGrid = document.getElementById("dossierStagesGrid");
    stagesGrid.innerHTML = `
      <div class="dossier-stage-card complete">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--success-text);">Stage 1: Formalities</div>
        <div style="font-size:13.5px;font-weight:700;">Offer &amp; NDA</div>
        <div style="font-size:11.5px;color:var(--text-muted);">✓ Signed Digitally</div>
      </div>
      <div class="dossier-stage-card ${docStageComplete ? 'complete' : (verifiedDocsCount > 0 ? 'in-progress' : 'pending')}">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--text-muted);">Stage 2: Documents</div>
        <div style="font-size:13.5px;font-weight:700;">${verifiedDocsCount} of ${Math.max(empDocs.length, 3)} Verified</div>
        <div style="font-size:11.5px;color:var(--text-muted);">${docStageComplete ? '✓ All Verified' : 'Under Review'}</div>
      </div>
      <div class="dossier-stage-card in-progress">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--text-muted);">Stage 3: IT Assets</div>
        <div style="font-size:13.5px;font-weight:700;">Hardware &amp; VPN</div>
        <div style="font-size:11.5px;color:var(--text-muted);">Provisioned by IT</div>
      </div>
      <div class="dossier-stage-card ${totalProg >= 80 ? 'complete' : 'in-progress'}">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;color:var(--text-muted);">Stage 4: Compliance</div>
        <div style="font-size:13.5px;font-weight:700;">Policy Exam</div>
        <div style="font-size:11.5px;color:var(--text-muted);">${totalProg >= 60 ? 'Certified (92%)' : 'Scheduled'}</div>
      </div>
    `;

    // Tab counts
    document.getElementById("dossierDocCount").textContent = empDocs.length;
    document.getElementById("dossierTaskCount").textContent = empTasks.length;

    // Render Dossier Docs
    const docsTbody = document.getElementById("dossierDocsTableBody");
    docsTbody.innerHTML = empDocs.length > 0 ? empDocs.map(d => `
      <tr>
        <td><strong>${d.type}</strong></td>
        <td><code>${d.fileName}</code></td>
        <td>${d.date}</td>
        <td><span class="badge ${d.status === 'Verified' ? 'badge-success' : (d.status === 'Under Review' ? 'badge-warning' : 'badge-danger')}">${d.status}</span></td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="DocumentsModule.openPreview('${d.id}')">Inspect &amp; Verify</button>
        </td>
      </tr>
    `).join("") : `<tr><td colspan="5" class="text-muted" style="text-align:center;padding:16px;">No documents submitted yet.</td></tr>`;

    // Render Dossier Tasks
    const tasksTbody = document.getElementById("dossierTasksTableBody");
    tasksTbody.innerHTML = empTasks.length > 0 ? empTasks.map(t => `
      <tr>
        <td><strong>${t.title}</strong></td>
        <td>${t.role}</td>
        <td>${t.deadline}</td>
        <td><span class="badge ${t.priority === 'Urgent' ? 'priority-urgent' : 'priority-medium'}">${t.priority}</span></td>
        <td>${t.progress}%</td>
        <td><span class="badge ${t.status === 'done' ? 'badge-success' : 'badge-neutral'}">${t.status}</span></td>
        <td>
          ${t.status !== 'done' ? `<button class="btn btn-secondary btn-sm" onclick="TasksModule.markDone(${t.id}); DirectoryModule.checkProgress('${empId}')">Mark Done</button>` : '✓'}
        </td>
      </tr>
    `).join("") : `<tr><td colspan="7" class="text-muted" style="text-align:center;padding:16px;">No specific tasks assigned yet.</td></tr>`;

    // Render Dossier Profile
    const profDetails = document.getElementById("dossierProfileDetails");
    profDetails.innerHTML = `
      <div style="background:var(--bg-subtle);padding:16px;border-radius:var(--radius-md);display:grid;grid-template-columns:1fr 1fr;gap:14px;font-size:13px;">
        <div><strong>Email:</strong> ${c.email}</div>
        <div><strong>Phone:</strong> ${c.phone || '+91 98765 00000'}</div>
        <div><strong>Department:</strong> ${c.dept}</div>
        <div><strong>Reporting Manager:</strong> ${c.manager}</div>
        <div><strong>Joining Date:</strong> ${c.joiningDate}</div>
        <div><strong>Work Floor &amp; Bay:</strong> ${c.floor || 'Floor 3'}</div>
        <div><strong>Assigned Shift:</strong> ${c.shift || 'First Shift (8:50 AM - 5:50 PM)'}</div>
        <div><strong>Highest Qualification:</strong> ${c.degree || 'Bachelor of Technology'}</div>
        <div><strong>Bank Name:</strong> ${c.bankName || 'HDFC Bank'}</div>
        <div><strong>Account Number:</strong> <code>${c.accountNum || '••••••••••••'}</code></div>
        <div><strong>PAN Card:</strong> <code>${c.pan || 'ABCDE1234F'}</code></div>
        <div><strong>IFSC Code:</strong> <code>${c.ifsc || 'HDFC0001042'}</code></div>
      </div>
    `;

    this.switchDossierTab('docs');
    GlobalApp.openModal("modalEmployeeProgress");
  },
  switchDossierTab(tab) {
    document.getElementById("dossierTabDocs").style.display = tab === "docs" ? "block" : "none";
    document.getElementById("dossierTabTasks").style.display = tab === "tasks" ? "block" : "none";
    document.getElementById("dossierTabProfile").style.display = tab === "profile" ? "block" : "none";

    document.getElementById("tabDossierDocsBtn").classList.toggle("active", tab === "docs");
    document.getElementById("tabDossierTasksBtn").classList.toggle("active", tab === "tasks");
    document.getElementById("tabDossierProfileBtn").classList.toggle("active", tab === "profile");
  },
  adminCompleteOnboarding() {
    if (!this.currentInspectId) return;
    const candidates = DB.get(StorageKeys.CANDIDATES);
    const c = candidates.find(item => item.id === this.currentInspectId);
    if (c) {
      c.progress = 100;
      c.status = "Completed";
      DB.set(StorageKeys.CANDIDATES, candidates);

      // Verify all docs for this candidate
      const docs = DB.get(StorageKeys.DOCS);
      docs.forEach(d => {
        if (d.empName.toLowerCase() === c.name.toLowerCase()) {
          d.status = "Verified";
          d.notes = "Approved by Admin verification check.";
        }
      });
      DB.set(StorageKeys.DOCS, docs);

      DB.pushAudit(`Admin verified all milestones and completed onboarding for ${c.name} (${c.id})`, AuthSystem.getCurrentUser().name);
      DB.pushNotification("Onboarding Completed", `All onboarding milestones for ${c.name} have been verified 100%.`, "approval");

      GlobalApp.showToast(`🎉 Onboarding marked 100% complete for ${c.name}!`);
      this.checkProgress(this.currentInspectId);
      DashboardModule.render();
      DirectoryModule.render();
    }
  },
  checkProgressByName(empName) {
    const candidates = DB.get(StorageKeys.CANDIDATES);
    const c = candidates.find(item => item.name.toLowerCase() === empName.toLowerCase());
    if (c) {
      this.checkProgress(c.id);
    } else {
      alert(`Candidate record for ${empName} not found in directory.`);
    }
  },
  viewAllDocuments(empName) {
    AppRouter.navigate("documents");
    setTimeout(() => {
      const empSelect = document.getElementById("docEmployeeFilter");
      if (empSelect) {
        empSelect.value = empName;
        DocumentsModule.renderList();
      }
    }, 100);
  }
};

// =========================================================================
// 9. ONBOARDING INITIATION WORKFLOW MODULE
// =========================================================================
const OnboardingModule = {
  openInitiateModal() {
    document.getElementById("initDate").value = new Date().toISOString().split("T")[0];
    GlobalApp.openModal("modalInitiateOnboarding");
  },
  handleInitiateSubmit(e) {
    e.preventDefault();
    const name = document.getElementById("initName").value.trim();
    const empId = document.getElementById("initEmpId").value.trim();
    const email = document.getElementById("initEmail").value.trim();
    const role = document.getElementById("initRole").value.trim();
    const dept = document.getElementById("initDept").value;
    const manager = document.getElementById("initManager").value.trim();
    const date = document.getElementById("initDate").value;
    const shift = document.getElementById("initShift").value;

    const candidates = DB.get(StorageKeys.CANDIDATES);
    candidates.push({
      id: empId,
      name,
      email,
      role,
      dept,
      manager,
      joiningDate: date,
      shift,
      floor: dept.includes("HR") ? "Floor 2" : "Floor 3",
      progress: 0,
      status: "In Progress"
    });
    DB.set(StorageKeys.CANDIDATES, candidates);

    // Auto-create initial onboarding tasks
    const tasks = DB.get(StorageKeys.TASKS);
    tasks.push(
      { id: Date.now() + 1, title: `Submit verification documents for ${name}`, role: "Employee", assignee: name, deadline: date, priority: "Urgent", progress: 0, status: "open" },
      { id: Date.now() + 2, title: `Provision developer hardware for ${name}`, role: "IT Admin", assignee: "Marcus Vance", deadline: date, priority: "High", progress: 0, status: "open" },
      { id: Date.now() + 3, title: `Schedule team introduction with ${name}`, role: "Reporting Manager", assignee: manager, deadline: date, priority: "Medium", progress: 0, status: "open" }
    );
    DB.set(StorageKeys.TASKS, tasks);

    DB.pushAudit(`Initiated onboarding workflow for ${name} (${empId}) in ${dept}`, "HR Admin");
    DB.pushNotification("Onboarding Initiated", `New employee ${name} successfully scheduled for onboarding.`, "task");

    GlobalApp.closeModals();
    GlobalApp.showToast(`🚀 Onboarding workflow initiated for ${name}!`);
    AppRouter.navigate("directory");
  }
};

// =========================================================================
// 10. DOCUMENT UPLOAD & VERIFICATION MODULE
// =========================================================================
const DocumentsModule = {
  selectedDocId: null,
  render() {
    this.populateEmployeeFilter();
    this.renderKPIs();
    this.renderList();
  },
  populateEmployeeFilter() {
    const select = document.getElementById("docEmployeeFilter");
    if (!select) return;
    const candidates = DB.get(StorageKeys.CANDIDATES);
    const curVal = select.value || "all";
    select.innerHTML = `<option value="all">All Employees</option>` + candidates.map(c => `
      <option value="${c.name}">${c.name} (${c.dept})</option>
    `).join("");
    select.value = curVal;
  },
  renderKPIs() {
    const docs = DB.get(StorageKeys.DOCS);
    const verified = docs.filter(d => d.status === "Verified").length;
    const review = docs.filter(d => d.status === "Under Review").length;
    const rejected = docs.filter(d => d.status === "Rejected" || d.status === "Resubmission Required").length;

    document.getElementById("docKpiVerified").textContent = verified;
    document.getElementById("docKpiReview").textContent = review;
    document.getElementById("docKpiRejected").textContent = rejected;

    const navBadge = document.getElementById("navPendingDocsBadge");
    if (navBadge) {
      navBadge.textContent = review;
      navBadge.style.display = review > 0 ? "inline-block" : "none";
    }
  },
  renderList() {
    const statusFilter = document.getElementById("docStatusFilter")?.value || "all";
    const empFilter = document.getElementById("docEmployeeFilter")?.value || "all";
    const search = (document.getElementById("docSearchInput")?.value || "").toLowerCase();

    const docs = DB.get(StorageKeys.DOCS);
    const filtered = docs.filter(d => {
      const matchStatus = statusFilter === "all" || d.status === statusFilter;
      const matchEmp = empFilter === "all" || d.empName.toLowerCase() === empFilter.toLowerCase();
      const matchSearch = d.type.toLowerCase().includes(search) || d.empName.toLowerCase().includes(search) || d.fileName.toLowerCase().includes(search);
      return matchStatus && matchEmp && matchSearch;
    });

    const tbody = document.getElementById("documentsTableBody");
    if (!tbody) return;

    tbody.innerHTML = filtered.map(d => `
      <tr>
        <td><strong>${d.type}</strong></td>
        <td><strong>${d.empName}</strong></td>
        <td><code>${d.fileName}</code></td>
        <td>${d.date}</td>
        <td>
          <span class="badge ${
            d.status === 'Verified' ? 'badge-success' : 
            (d.status === 'Under Review' ? 'badge-warning' : 
            (d.status === 'Resubmission Required' ? 'status-resubmission' : 'badge-danger'))
          }">
            ${d.status}
          </span>
        </td>
        <td style="font-size:12.5px;color:var(--text-muted);">${d.notes || '—'}</td>
        <td>
          <div style="display:flex;gap:6px;">
            <button class="btn btn-primary btn-sm" onclick="DocumentsModule.openPreview('${d.id}')">Inspect &amp; Verify</button>
            <button class="btn btn-secondary btn-sm" onclick="DirectoryModule.checkProgressByName('${d.empName}')">Candidate Dossier</button>
          </div>
        </td>
      </tr>
    `).join("");
  },
  openUploadModal() {
    document.getElementById("dropzoneLabel").textContent = "Click to select file or drag and drop";
    document.getElementById("docFileInput").value = "";
    document.getElementById("uploadComments").value = "";
    GlobalApp.openModal("modalUploadDocument");
  },
  handleFileSelect(input) {
    if (input.files && input.files[0]) {
      document.getElementById("dropzoneLabel").textContent = `Selected: ${input.files[0].name}`;
    }
  },
  handleUploadSubmit(e) {
    e.preventDefault();
    const type = document.getElementById("uploadDocType").value;
    const input = document.getElementById("docFileInput");
    const notes = document.getElementById("uploadComments").value.trim();
    const fileName = input.files && input.files[0] ? input.files[0].name : "document_scan.pdf";

    const docs = DB.get(StorageKeys.DOCS);
    docs.unshift({
      id: "doc-" + Date.now(),
      type,
      empName: AuthSystem.getCurrentUser().name,
      fileName,
      date: new Date().toISOString().split("T")[0],
      status: "Under Review",
      notes: notes || "Submitted by employee, pending HR review."
    });
    DB.set(StorageKeys.DOCS, docs);

    DB.pushAudit(`Uploaded document '${type}' for verification`, AuthSystem.getCurrentUser().name);
    DB.pushNotification("Document Submitted", `Document '${type}' received for verification.`, "document");

    GlobalApp.closeModals();
    GlobalApp.showToast("✅ Document submitted successfully! HR will verify within 24 hours.");
    this.render();
  },
  openPreview(docId) {
    this.selectedDocId = docId;
    const docs = DB.get(StorageKeys.DOCS);
    const doc = docs.find(d => d.id === docId);
    if (!doc) return;

    document.getElementById("docPreviewTitle").textContent = `Inspect Document: ${doc.type}`;
    document.getElementById("docPreviewSub").textContent = `Submitted by ${doc.empName} on ${doc.date}`;
    document.getElementById("docPreviewFileName").textContent = doc.fileName;
    document.getElementById("docPreviewIcon").textContent = doc.fileName.endsWith(".jpg") || doc.fileName.endsWith(".png") ? "🖼️" : "📄";
    document.getElementById("docPreviewMeta").textContent = `Size: 2.4 MB • Format: ${doc.fileName.split('.').pop().toUpperCase()} • Uploaded: ${doc.date}`;
    
    const badge = document.getElementById("docPreviewCurrentStatusBadge");
    badge.textContent = doc.status;
    badge.className = `badge ${doc.status === 'Verified' ? 'badge-success' : (doc.status === 'Under Review' ? 'badge-warning' : 'badge-danger')}`;

    document.getElementById("docPreviewStatusSelect").value = doc.status;
    document.getElementById("docPreviewFeedbackInput").value = doc.notes || "";

    GlobalApp.openModal("modalDocPreview");
  },
  savePreviewDecision() {
    if (!this.selectedDocId) return;
    const newStatus = document.getElementById("docPreviewStatusSelect").value;
    const feedback = document.getElementById("docPreviewFeedbackInput").value.trim() || `Marked ${newStatus} by Admin.`;

    const docs = DB.get(StorageKeys.DOCS);
    const doc = docs.find(d => d.id === this.selectedDocId);
    if (doc) {
      doc.status = newStatus;
      doc.notes = feedback;
      DB.set(StorageKeys.DOCS, docs);

      DB.pushAudit(`Admin updated ${doc.type} (${doc.fileName}) status to '${newStatus}' for ${doc.empName}`, AuthSystem.getCurrentUser().name);
      DB.pushNotification("Document Status Updated", `Your ${doc.type} has been updated to: ${newStatus}`, "document");
    }

    GlobalApp.closeModals();
    GlobalApp.showToast(`Document decision saved as: ${newStatus}!`);
    this.render();
    if (DirectoryModule.currentInspectId) {
      DirectoryModule.checkProgress(DirectoryModule.currentInspectId);
    }
  },
  submitReviewDecision() {
    if (!this.selectedDocId) {
      GlobalApp.closeModals();
      return;
    }
    const select = document.getElementById("reviewDecisionSelect");
    const notesInput = document.getElementById("reviewNotes");
    const newStatus = select ? select.value : "Verified";
    const notes = notesInput ? notesInput.value.trim() : "";

    const docs = DB.get(StorageKeys.DOCS);
    const doc = docs.find(d => d.id === this.selectedDocId);
    if (doc) {
      doc.status = newStatus;
      doc.notes = notes || `Marked ${newStatus} by HR Review.`;
      DB.set(StorageKeys.DOCS, docs);
      DB.pushAudit(`HR updated ${doc.type} status to '${newStatus}' for ${doc.empName}`, AuthSystem.getCurrentUser().name);
      DB.pushNotification("Document Status Updated", `Your ${doc.type} has been updated to: ${newStatus}`, "document");
    }
    GlobalApp.closeModals();
    GlobalApp.showToast(`Document verified as: ${newStatus}!`);
    this.render();
    if (DirectoryModule.currentInspectId) {
      DirectoryModule.checkProgress(DirectoryModule.currentInspectId);
    }
  }
};

// =========================================================================
// 11. TASK MANAGEMENT MODULE
// =========================================================================
const TasksModule = {
  render() {
    this.renderList();
    this.renderBadge();
  },
  renderBadge() {
    const tasks = DB.get(StorageKeys.TASKS);
    const openCount = tasks.filter(t => t.status !== "done").length;
    const badge = document.getElementById("navOpenTasksBadge");
    if (badge) badge.textContent = openCount;
  },
  renderList() {
    const search = (document.getElementById("taskSearchInput")?.value || "").toLowerCase();
    const statusFilter = document.getElementById("taskStatusFilter")?.value || "all";
    const priorityFilter = document.getElementById("taskPriorityFilter")?.value || "all";

    const tasks = DB.get(StorageKeys.TASKS);
    const filtered = tasks.filter(t => {
      const matchSearch = t.title.toLowerCase().includes(search) || t.assignee.toLowerCase().includes(search);
      const matchStatus = statusFilter === "all" || t.status === statusFilter;
      const matchPriority = priorityFilter === "all" || t.priority === priorityFilter;
      return matchSearch && matchStatus && matchPriority;
    });

    const tbody = document.getElementById("tasksTableBody");
    if (!tbody) return;

    tbody.innerHTML = filtered.map(t => `
      <tr>
        <td><strong>${t.title}</strong></td>
        <td><span class="badge badge-neutral">${t.role}</span></td>
        <td>${t.assignee}</td>
        <td>${t.deadline}</td>
        <td>
          <span class="badge ${
            t.priority === 'Urgent' ? 'priority-urgent' :
            (t.priority === 'High' ? 'priority-high' : 'priority-medium')
          }">${t.priority}</span>
        </td>
        <td style="min-width:120px;">
          <div style="font-size:11px;display:flex;justify-content:space-between;margin-bottom:3px;">
            <span>${t.progress}%</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width:${t.progress}%"></div>
          </div>
        </td>
        <td>
          <span class="badge ${
            t.status === 'done' ? 'badge-success' :
            (t.status === 'in progress' ? 'badge-info' :
            (t.status === 'blocked' ? 'badge-danger' : 'badge-neutral'))
          }">${t.status}</span>
        </td>
        <td>
          <div style="display:flex;gap:6px;">
            ${t.status !== 'done' ? `
              <button class="btn btn-secondary btn-sm" onclick="TasksModule.markDone(${t.id})">Done</button>
            ` : `
              <span style="color:var(--success);font-weight:700;font-size:12px;">✓ Completed</span>
            `}
            <button class="btn btn-outline-danger btn-sm" onclick="TasksModule.deleteTask(${t.id})">✕</button>
          </div>
        </td>
      </tr>
    `).join("");
  },
  openCreateModal() {
    document.getElementById("taskEditId").value = "";
    document.getElementById("taskTitleInput").value = "";
    document.getElementById("taskDeadlineInput").value = new Date().toISOString().split("T")[0];
    document.getElementById("taskProgressInput").value = 0;
    GlobalApp.openModal("modalTaskEditor");
  },
  handleTaskSubmit(e) {
    e.preventDefault();
    const title = document.getElementById("taskTitleInput").value.trim();
    const role = document.getElementById("taskRoleSelect").value;
    const assignee = document.getElementById("taskAssigneeInput").value.trim();
    const priority = document.getElementById("taskPrioritySelect").value;
    const deadline = document.getElementById("taskDeadlineInput").value;
    const progress = parseInt(document.getElementById("taskProgressInput").value) || 0;

    const tasks = DB.get(StorageKeys.TASKS);
    tasks.push({
      id: Date.now(),
      title,
      role,
      assignee,
      priority,
      deadline,
      progress,
      status: progress === 100 ? "done" : (progress > 0 ? "in progress" : "open")
    });
    DB.set(StorageKeys.TASKS, tasks);

    DB.pushAudit(`Created onboarding task: '${title}'`, AuthSystem.getCurrentUser().name);
    DB.pushNotification("New Task Assigned", `Task '${title}' assigned to ${assignee}`, "task");

    GlobalApp.closeModals();
    GlobalApp.showToast("Task created successfully!");
    this.render();
  },
  markDone(taskId) {
    const tasks = DB.get(StorageKeys.TASKS);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      task.status = "done";
      task.progress = 100;
      DB.set(StorageKeys.TASKS, tasks);

      DB.pushAudit(`Completed task: '${task.title}'`, AuthSystem.getCurrentUser().name);
      DB.pushNotification("Task Completed", `Task '${task.title}' marked as 100% complete.`, "task");
      GlobalApp.showToast(`Marked '${task.title}' as done!`);
      this.render();
    }
  },
  deleteTask(taskId) {
    if (!confirm("Are you sure you want to delete this task?")) return;
    let tasks = DB.get(StorageKeys.TASKS);
    tasks = tasks.filter(t => t.id !== taskId);
    DB.set(StorageKeys.TASKS, tasks);
    this.render();
  },
  autoAssignTemplate() {
    const templateTasks = [
      { id: Date.now() + 1, title: "Submit Bank Mandate for Payroll", role: "Employee", assignee: "Alex Mercer", deadline: "2026-10-18", priority: "High", progress: 0, status: "open" },
      { id: Date.now() + 2, title: "Configure GitHub SSH Keys & 2FA Access", role: "IT Admin", assignee: "Marcus Vance", deadline: "2026-10-17", priority: "High", progress: 0, status: "open" },
      { id: Date.now() + 3, title: "1-on-1 Engineering Goal Setting Session", role: "Reporting Manager", assignee: "David Kumar", deadline: "2026-10-19", priority: "Medium", progress: 0, status: "open" }
    ];

    const tasks = DB.get(StorageKeys.TASKS);
    templateTasks.forEach(t => tasks.push(t));
    DB.set(StorageKeys.TASKS, tasks);

    GlobalApp.showToast("⚡ Applied standard department onboarding template!");
    this.render();
  }
};

// =========================================================================
// 12. JOINING FORMALITIES & DIGITAL SIGNATURE MODULE
// =========================================================================
const FormalitiesModule = {
  render() {
    // Formalities Docs
    const docList = document.getElementById("formalitiesDocList");
    docList.innerHTML = `
      <div style="padding:14px;border:1px solid var(--border-color);border-radius:var(--radius-md);display:flex;justify-content:space-between;align-items:center;">
        <div>
          <strong>Official Appointment Letter</strong>
          <p style="font-size:12px;color:var(--text-muted);margin:2px 0 0;">Outlines designation, annual CTC, and probationary milestones</p>
        </div>
        <span class="badge badge-success">✓ Signed &amp; Accepted</span>
      </div>
      <div style="padding:14px;border:1px solid var(--border-color);border-radius:var(--radius-md);display:flex;justify-content:space-between;align-items:center;">
        <div>
          <strong>Proprietary Info &amp; Inventions NDA</strong>
          <p style="font-size:12px;color:var(--text-muted);margin:2px 0 0;">Intellectual property and non-disclosure legal agreement</p>
        </div>
        <span class="badge badge-success">✓ Signed &amp; Accepted</span>
      </div>
      <div style="padding:14px;border:1px solid var(--border-color);border-radius:var(--radius-md);display:flex;justify-content:space-between;align-items:center;">
        <div>
          <strong>Acceptable Asset &amp; IT Device Agreement</strong>
          <p style="font-size:12px;color:var(--text-muted);margin:2px 0 0;">Company equipment usage and return terms</p>
        </div>
        <button class="btn btn-primary btn-sm" onclick="FormalitiesModule.openSignModal()">Sign Document</button>
      </div>
    `;

    // Multi-tier Approvals Stepper
    const approvalsEl = document.getElementById("approvalsTimeline");
    approvalsEl.innerHTML = `
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <span style="width:28px;height:28px;border-radius:50%;background:var(--success);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;">✓</span>
        <div>
          <strong>Tier 1: HR Document Verification</strong>
          <div style="font-size:12px;color:var(--text-muted);">Approved by Sarah Jenkins (HR Director) on 2026-10-14</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <span style="width:28px;height:28px;border-radius:50%;background:var(--success);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;">✓</span>
        <div>
          <strong>Tier 2: IT Provisioning &amp; Clearance</strong>
          <div style="font-size:12px;color:var(--text-muted);">Approved by Marcus Vance (IT Admin) on 2026-10-14</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <span style="width:28px;height:28px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;">3</span>
        <div>
          <strong>Tier 3: Reporting Manager Induction</strong>
          <div style="font-size:12px;color:var(--text-muted);">In Progress with David Kumar (Engineering Manager)</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;align-items:flex-start;">
        <span style="width:28px;height:28px;border-radius:50%;background:var(--border-color);color:var(--text-muted);display:flex;align-items:center;justify-content:center;font-weight:700;">4</span>
        <div>
          <strong>Tier 4: Finance &amp; Payroll Setup</strong>
          <div style="font-size:12px;color:var(--text-muted);">Scheduled with Rachel Adams upon bank verification</div>
        </div>
      </div>
    `;
  },
  openSignModal() {
    GlobalApp.openModal("modalDigitalSignature");
    setTimeout(() => this.initCanvas(), 100);
  },
  initCanvas() {
    const canvas = document.getElementById("signatureCanvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = 180;
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#1e293b";

    let drawing = false;

    const startDraw = (e) => {
      drawing = true;
      ctx.beginPath();
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
      const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
      ctx.moveTo(x, y);
    };

    const draw = (e) => {
      if (!drawing) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
      const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
      ctx.lineTo(x, y);
      ctx.stroke();
    };

    const stopDraw = () => { drawing = false; };

    canvas.onmousedown = startDraw;
    canvas.onmousemove = draw;
    window.onmouseup = stopDraw;

    canvas.ontouchstart = startDraw;
    canvas.ontouchmove = draw;
    canvas.ontouchend = stopDraw;
  },
  clearSignature() {
    const canvas = document.getElementById("signatureCanvas");
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  },
  applySignature() {
    const check = document.getElementById("signLegalConsent");
    if (!check.checked) {
      alert("Please confirm your legal consent checkbox before submitting.");
      return;
    }
    GlobalApp.closeModals();
    GlobalApp.showToast("✍️ Digital Signature verified and attached to legal agreement!");
    DB.pushAudit("Signed Acceptable Asset and IT Agreement digitally", AuthSystem.getCurrentUser().name);
    DB.pushNotification("Agreement Signed", "Your digitally signed document has been archived in compliance records.", "approval");
    this.render();
  }
};

// =========================================================================
// 13. TRAINING & POLICY CENTRE MODULE
// =========================================================================
const TrainingModule = {
  render() {
    // Render policy cards from grounded documents
    const grid = document.getElementById("policyCardsGrid");
    grid.innerHTML = documents.slice(0, 6).map(doc => `
      <div style="padding:16px;border:1px solid var(--border-color);border-radius:var(--radius-md);background:var(--bg-surface);">
        <h4 style="font-size:14.5px;margin-bottom:8px;">${doc.title}</h4>
        <p style="font-size:12.5px;color:var(--text-muted);line-height:1.5;margin-bottom:12px;">
          ${doc.answer.slice(0, 140)}...
        </p>
        <button class="btn btn-secondary btn-sm" onclick="alert('${doc.title}\\n\\n${doc.answer.replace(/'/g, "\\'")}')">Read Full Policy →</button>
      </div>
    `).join("");

    // Render courses table
    const courses = DB.get(StorageKeys.TRAINING);
    const tbody = document.getElementById("trainingCoursesTableBody");
    tbody.innerHTML = courses.map(c => `
      <tr>
        <td><strong>${c.name}</strong></td>
        <td>${c.dept}</td>
        <td><span class="badge ${c.type === 'Mandatory' ? 'badge-primary' : 'badge-neutral'}">${c.type}</span></td>
        <td>${c.duration}</td>
        <td style="min-width:130px;">
          <div style="font-size:11px;display:flex;justify-content:space-between;margin-bottom:3px;">
            <span>${c.progress}%</span>
          </div>
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width:${c.progress}%"></div>
          </div>
        </td>
        <td><span class="badge ${c.status === 'Completed' ? 'badge-success' : 'badge-warning'}">${c.status}</span></td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="TrainingModule.completeCourse('${c.id}')">
            ${c.status === 'Completed' ? 'Review' : 'Continue'}
          </button>
        </td>
      </tr>
    `).join("");
  },
  completeCourse(id) {
    const courses = DB.get(StorageKeys.TRAINING);
    const course = courses.find(c => c.id === id);
    if (course) {
      course.progress = 100;
      course.status = "Completed";
      DB.set(StorageKeys.TRAINING, courses);
      GlobalApp.showToast(`Completed: ${course.name}!`);
      this.render();
    }
  },
  openExamMode() {
    AppRouter.navigate("exam-mode");
    ExamModule.start();
  }
};

// =========================================================================
// 14. 30-QUESTION POLICY ASSESSMENT EXAM MODULE (PRESERVED & ENHANCED)
// =========================================================================
const ExamModule = {
  currentIdx: 0,
  userAnswers: new Array(30).fill(null),
  markedReview: new Array(30).fill(false),
  timeRemaining: 20 * 60, // 20 mins
  timerId: null,

  start() {
    this.currentIdx = 0;
    this.userAnswers = new Array(30).fill(null);
    this.markedReview = new Array(30).fill(false);
    this.timeRemaining = 20 * 60;
    this.startTimer();
    this.renderQuestion();
    this.renderPalette();
  },
  startTimer() {
    if (this.timerId) clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      this.timeRemaining--;
      if (this.timeRemaining <= 0) {
        clearInterval(this.timerId);
        alert("Time expired! Automatically submitting your assessment.");
        this.submitExam();
      }
      this.updateTimerDisplay();
    }, 1000);
    this.updateTimerDisplay();
  },
  updateTimerDisplay() {
    const mins = Math.floor(this.timeRemaining / 60).toString().padStart(2, "0");
    const secs = (this.timeRemaining % 60).toString().padStart(2, "0");
    const el = document.getElementById("examTimerDisplay");
    if (el) el.textContent = `${mins}:${secs}`;
  },
  renderPalette() {
    const grid = document.getElementById("examQuestionPalette");
    if (!grid) return;
    grid.innerHTML = quizQuestions.map((_, i) => {
      let stateClass = "";
      if (this.currentIdx === i) stateClass = "current";
      else if (this.markedReview[i]) stateClass = "reviewed";
      else if (this.userAnswers[i] !== null) stateClass = "answered";

      return `
        <button class="palette-btn ${stateClass}" onclick="ExamModule.jumpTo(${i})">
          ${i + 1}
        </button>
      `;
    }).join("");
  },
  renderQuestion() {
    const q = quizQuestions[this.currentIdx];
    document.getElementById("examQuestionCounter").textContent = `Question ${this.currentIdx + 1} of ${quizQuestions.length}`;
    document.getElementById("examQuestionText").textContent = `${this.currentIdx + 1}. ${q.question}`;
    
    // Progress fill
    const fillPercent = Math.round(((this.currentIdx + 1) / quizQuestions.length) * 100);
    document.getElementById("examProgressBar").style.width = `${fillPercent}%`;

    const optionsContainer = document.getElementById("examOptionsList");
    optionsContainer.innerHTML = q.options.map((opt, i) => `
      <div class="exam-option-item ${this.userAnswers[this.currentIdx] === i ? 'selected' : ''}" onclick="ExamModule.selectOption(${i})">
        <strong>${String.fromCharCode(65 + i)}.</strong> ${opt}
      </div>
    `).join("");

    document.getElementById("examPrevBtn").disabled = this.currentIdx === 0;
    this.renderPalette();
  },
  selectOption(optIdx) {
    this.userAnswers[this.currentIdx] = optIdx;
    this.renderQuestion();
  },
  clearResponse() {
    this.userAnswers[this.currentIdx] = null;
    this.renderQuestion();
  },
  toggleMarkReview() {
    this.markedReview[this.currentIdx] = !this.markedReview[this.currentIdx];
    this.renderPalette();
  },
  nextQuestion() {
    if (this.currentIdx < quizQuestions.length - 1) {
      this.currentIdx++;
      this.renderQuestion();
    } else {
      this.openSubmitModal();
    }
  },
  prevQuestion() {
    if (this.currentIdx > 0) {
      this.currentIdx--;
      this.renderQuestion();
    }
  },
  jumpTo(index) {
    this.currentIdx = index;
    this.renderQuestion();
  },
  openSubmitModal() {
    const answered = this.userAnswers.filter(a => a !== null).length;
    const unanswered = quizQuestions.length - answered;
    if (confirm(`You have answered ${answered} of 30 questions (${unanswered} unanswered).\n\nAre you sure you want to finalize your submission?`)) {
      this.submitExam();
    }
  },
  submitExam() {
    clearInterval(this.timerId);
    let correct = 0;
    quizQuestions.forEach((q, i) => {
      if (this.userAnswers[i] === q.answer) correct++;
    });

    const percentage = Math.round((correct / quizQuestions.length) * 100);
    const passed = percentage >= 60;

    // Save score in DB
    const scoreRecord = {
      score: correct,
      total: quizQuestions.length,
      percentage,
      passed,
      date: new Date().toLocaleDateString()
    };
    DB.set(StorageKeys.EXAM_SCORES, [scoreRecord]);
    DB.pushAudit(`Completed Policy Assessment Exam with score: ${percentage}% (${passed ? 'Passed' : 'Failed'})`, AuthSystem.getCurrentUser().name);
    DB.pushNotification("Exam Certified", `Policy Knowledge Assessment score: ${percentage}%. Result: ${passed ? 'PASSED' : 'RETAKE REQUIRED'}`, "approval");

    // Display Certificate / Results view
    const certView = document.getElementById("examCertificateView");
    certView.style.display = "block";
    certView.innerHTML = `
      <div class="certificate-box">
        <div class="certificate-badge-seal">🏆</div>
        <h2 style="font-size:26px;color:#1e3a8a;margin-bottom:6px;">Certificate of Compliance</h2>
        <p style="font-size:14px;color:#64748b;margin-bottom:20px;">Enterprise HR Onboarding &amp; Policy Knowledge Assessment</p>
        <p style="font-size:16px;">This certifies that <strong>${AuthSystem.getCurrentUser().name}</strong> has completed the comprehensive workplace policy assessment with a final score of:</p>
        <div style="font-size:42px;font-weight:900;color:${passed ? '#059669' : '#dc2626'};margin:16px 0;">
          ${percentage}% (${passed ? 'PASSED' : 'RETAKE REQUIRED'})
        </div>
        <p style="font-size:13px;color:#64748b;">Correct Answers: ${correct} of ${quizQuestions.length} • Verification ID: CERT-HR-${Date.now().toString().slice(-6)}</p>
        <div style="margin-top:24px;display:flex;justify-content:center;gap:12px;">
          <button class="btn btn-primary" onclick="window.print()">🖨️ Print Certificate</button>
          <button class="btn btn-secondary" onclick="AppRouter.navigate('employee-dashboard')">Return to Dashboard</button>
        </div>
      </div>
    `;

    if (certView && typeof certView.scrollIntoView === "function") {
      certView.scrollIntoView({ behavior: "smooth" });
    }
  },
  showInstructions() {
    alert("Exam Instructions:\n\n- 30 Multiple Choice Questions grounded in official company handbook documents.\n- Time limit: 20 Minutes.\n- Passing grade: 60%.\n- Questions marked for review will be shown in purple on the palette.");
  },
  confirmExit() {
    if (confirm("Exit examination? Current in-progress answers will be discarded.")) {
      clearInterval(this.timerId);
      AppRouter.navigate("training");
    }
  }
};

// =========================================================================
// 15. AI ONBOARDING ASSISTANT WITH VOICE INPUT & POLICY GROUNDING
// =========================================================================
const AiChatModule = {
  isRecording: false,
  recognition: null,

  toggleMiniWidget(forceOpen) {
    const win = document.getElementById("aiMiniChatWindow");
    if (!win) return;
    const isCurrentlyOpen = win.classList.contains("active");
    const shouldOpen = forceOpen !== undefined ? !!forceOpen : !isCurrentlyOpen;
    win.classList.toggle("active", shouldOpen);
    if (shouldOpen) {
      const input = document.getElementById("aiMiniChatInput");
      if (input) setTimeout(() => input.focus(), 150);
    }
  },
  handleSend(e, isMini = false) {
    if (e && e.preventDefault) e.preventDefault();
    const inputId = isMini ? "aiMiniChatInput" : "aiChatInput";
    const input = document.getElementById(inputId) || document.getElementById("aiChatInput");
    const query = input ? input.value.trim() : "";
    if (!query) return;

    this.postMessage(query, "user");
    
    const mainInput = document.getElementById("aiChatInput");
    const miniInput = document.getElementById("aiMiniChatInput");
    if (mainInput) mainInput.value = "";
    if (miniInput) miniInput.value = "";

    setTimeout(() => {
      this.generateReply(query);
    }, 400);
  },
  sendQuick(text, isMini = false) {
    const input = document.getElementById(isMini ? "aiMiniChatInput" : "aiChatInput");
    if (input) input.value = text;
    this.handleSend(new Event("submit"), isMini);
  },
  postMessage(text, sender, source = null) {
    const containers = [
      document.getElementById("aiChatMessages"),
      document.getElementById("aiMiniChatMessages")
    ].filter(Boolean);

    containers.forEach(container => {
      const bubble = document.createElement("div");
      bubble.className = `chat-bubble ${sender}`;
      bubble.textContent = text;

      if (source) {
        const srcEl = document.createElement("span");
        srcEl.className = "chat-source-tag";
        srcEl.textContent = `Source: ${source}`;
        bubble.appendChild(srcEl);
      }

      container.appendChild(bubble);
      container.scrollTop = container.scrollHeight;
    });
  },
  generateReply(userQuery) {
    const q = userQuery.toLowerCase();

    // 1. Natural Language Task Handling
    if (q.includes("create task") || q.includes("add task")) {
      const taskTitle = userQuery.replace(/create task/i, "").replace(/add task/i, "").trim() || "Complete onboarding activity";
      TasksModule.handleDirectAdd(taskTitle);
      this.postMessage(`✅ I have created the onboarding task: "${taskTitle}". You can monitor it in the Tasks tab.`, "bot", "Task Manager Automation");
      return;
    }
    if (q.includes("show my tasks") || q.includes("list tasks")) {
      const tasks = DB.get(StorageKeys.TASKS);
      const summary = tasks.map((t, idx) => `${idx + 1}. [${t.status.toUpperCase()}] ${t.title}`).join("\n");
      this.postMessage(`Here are your current onboarding tasks:\n\n${summary}`, "bot", "Live Task Database");
      return;
    }

    // 2. Policy Grounding Search
    let bestDoc = null;
    let maxMatch = 0;

    for (const doc of documents) {
      let matches = 0;
      for (const kw of doc.keywords) {
        if (q.includes(kw.toLowerCase())) matches += 2;
      }
      if (matches > maxMatch) {
        maxMatch = matches;
        bestDoc = doc;
      }
    }

    if (bestDoc && maxMatch >= 2) {
      this.postMessage(bestDoc.answer, "bot", bestDoc.title);
    } else {
      this.postMessage(
        "I couldn't find a direct match in our official handbook policies for that question. Would you like me to dispatch an escalation ticket to Floor 2 HR Support?",
        "bot",
        "Employee Handbook Search"
      );
    }
  },
  toggleVoiceInput(isMini = false) {
    const micBtn = document.getElementById(isMini ? "aiMiniMicBtn" : "aiMicBtn");
    const otherMicBtn = document.getElementById(isMini ? "aiMicBtn" : "aiMiniMicBtn");
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech recognition is not supported in this browser. Please use Chrome, Edge, or type your query.");
      return;
    }

    if (this.isRecording) {
      if (this.recognition) this.recognition.stop();
      this.isRecording = false;
      if (micBtn) micBtn.classList.remove("active");
      if (otherMicBtn) otherMicBtn.classList.remove("active");
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.lang = "en-US";
    this.recognition.interimResults = false;

    this.recognition.onstart = () => {
      this.isRecording = true;
      if (micBtn) micBtn.classList.add("active");
      if (otherMicBtn) otherMicBtn.classList.add("active");
      GlobalApp.showToast("🎙️ Listening... Speak your question now.");
    };

    this.recognition.onresult = (e) => {
      const speechResult = e.results[0][0].transcript;
      const targetInput = document.getElementById(isMini ? "aiMiniChatInput" : "aiChatInput");
      if (targetInput) targetInput.value = speechResult;
      this.handleSend(new Event("submit"), isMini);
    };

    this.recognition.onerror = () => {
      this.isRecording = false;
      if (micBtn) micBtn.classList.remove("active");
      if (otherMicBtn) otherMicBtn.classList.remove("active");
    };

    this.recognition.onend = () => {
      this.isRecording = false;
      if (micBtn) micBtn.classList.remove("active");
      if (otherMicBtn) otherMicBtn.classList.remove("active");
    };

    this.recognition.start();
  },
  openEscalateModal() {
    GlobalApp.openModal("modalEscalateHr");
  },
  submitEscalation(e) {
    e.preventDefault();
    const sub = document.getElementById("escSubject").value.trim();
    const detail = document.getElementById("escDetail").value.trim();

    DB.pushAudit(`Escalated inquiry to HR: '${sub}'`, AuthSystem.getCurrentUser().name);
    DB.pushNotification("Ticket Dispatched", `HR Ticket '${sub}' logged. Desk on Floor 2 assigned.`, "task");

    GlobalApp.closeModals();
    GlobalApp.showToast("🚨 Inquiry escalated to Floor 2 HR Support! Ticket #HR-" + Date.now().toString().slice(-4));
    this.postMessage(`Your inquiry "${sub}" has been forwarded to Floor 2 HR Support Desk. A specialist will follow up shortly.`, "bot", "HR Ticketing Dispatch");
  }
};

TasksModule.handleDirectAdd = function(title) {
  const tasks = DB.get(StorageKeys.TASKS);
  tasks.push({
    id: Date.now(),
    title,
    role: "Employee",
    assignee: AuthSystem.getCurrentUser().name,
    priority: "Medium",
    deadline: new Date().toISOString().split("T")[0],
    progress: 0,
    status: "open"
  });
  DB.set(StorageKeys.TASKS, tasks);
  TasksModule.render();
};

// =========================================================================
// 16. IT EQUIPMENT & CREDENTIALS MODULE
// =========================================================================
const ItSetupModule = {
  render() {
    const assets = DB.get(StorageKeys.EQUIPMENT);
    document.getElementById("itAssetsCountBadge").textContent = `${assets.length} Assets Registered`;

    const tbody = document.getElementById("itHardwareTableBody");
    tbody.innerHTML = assets.map(a => `
      <tr>
        <td><strong>${a.item}</strong></td>
        <td><code>${a.serial}</code></td>
        <td>${a.assignedTo}</td>
        <td><span class="badge badge-success">${a.status}</span></td>
        <td>${a.date}</td>
      </tr>
    `).join("");

    // Software Credentials
    const credsList = document.getElementById("itCredentialsList");
    credsList.innerHTML = `
      <div style="padding:12px;border:1px solid var(--border-color);border-radius:var(--radius-md);display:flex;justify-content:space-between;align-items:center;">
        <div>
          <strong>Company Email Account (Google Workspace)</strong>
          <div style="font-size:12px;color:var(--text-muted);">${AuthSystem.getCurrentUser().email}</div>
        </div>
        <span class="badge badge-success">Active &amp; Provisioned</span>
      </div>
      <div style="padding:12px;border:1px solid var(--border-color);border-radius:var(--radius-md);display:flex;justify-content:space-between;align-items:center;">
        <div>
          <strong>Enterprise Secure VPN &amp; MFA Token</strong>
          <div style="font-size:12px;color:var(--text-muted);">Internal Gateway Server Access</div>
        </div>
        <span class="badge badge-success">Active &amp; Provisioned</span>
      </div>
      <div style="padding:12px;border:1px solid var(--border-color);border-radius:var(--radius-md);display:flex;justify-content:space-between;align-items:center;">
        <div>
          <strong>GitHub Enterprise &amp; Jira Project Board</strong>
          <div style="font-size:12px;color:var(--text-muted);">Developer Access Permissions</div>
        </div>
        <span class="badge badge-primary">Granted (Developer Role)</span>
      </div>
    `;
  },
  openAllocateModal() {
    const item = prompt("Enter equipment item description (e.g. MacBook Pro 16-inch):");
    if (!item) return;
    const serial = "SN-EQ-" + Math.floor(1000 + Math.random() * 9000);

    const assets = DB.get(StorageKeys.EQUIPMENT);
    assets.push({
      id: "eq-" + Date.now(),
      item,
      serial,
      assignedTo: "Alex Mercer",
      status: "Allocated",
      date: new Date().toISOString().split("T")[0]
    });
    DB.set(StorageKeys.EQUIPMENT, assets);

    DB.pushAudit(`Allocated hardware asset: ${item} (${serial}) to Alex Mercer`, "IT Admin");
    GlobalApp.showToast(`Allocated: ${item}!`);
    this.render();
  }
};

// =========================================================================
// 17. NOTIFICATIONS CENTRE MODULE
// =========================================================================
const NotificationModule = {
  activeFilter: "all",
  render() {
    this.renderBadge();
    const notifs = DB.get(StorageKeys.NOTIFS);
    const filtered = this.activeFilter === "all" ? notifs : (
      this.activeFilter === "unread" ? notifs.filter(n => !n.read) : notifs.filter(n => n.category === this.activeFilter)
    );

    const feed = document.getElementById("notificationsFeed");
    if (filtered.length === 0) {
      feed.innerHTML = `<p class="text-muted" style="text-align:center;padding:30px;">No notifications found.</p>`;
      return;
    }

    feed.innerHTML = filtered.map(n => `
      <div class="notification-item ${n.read ? '' : 'unread'}" onclick="NotificationModule.markAsRead('${n.id}')">
        <div class="notif-icon-circle" style="background:${n.category === 'document' ? 'var(--info-light)' : (n.category === 'approval' ? 'var(--success-light)' : 'var(--primary-light)')};">
          ${n.category === 'document' ? '📁' : (n.category === 'approval' ? '✓' : '🔔')}
        </div>
        <div class="notif-content">
          <div class="notif-title">${n.title}</div>
          <div class="notif-desc">${n.desc}</div>
          <div class="notif-time">${n.time}</div>
        </div>
      </div>
    `).join("");
  },
  renderBadge() {
    const notifs = DB.get(StorageKeys.NOTIFS);
    const unread = notifs.filter(n => !n.read).length;

    const navBadge = document.getElementById("navUnreadNotifsBadge");
    const headerDot = document.getElementById("headerNotifDot");

    if (navBadge) {
      navBadge.textContent = unread;
      navBadge.style.display = unread > 0 ? "inline-block" : "none";
    }
    if (headerDot) {
      headerDot.style.display = unread > 0 ? "block" : "none";
    }
  },
  markAsRead(id) {
    const notifs = DB.get(StorageKeys.NOTIFS);
    const item = notifs.find(n => n.id === id);
    if (item) {
      item.read = true;
      DB.set(StorageKeys.NOTIFS, notifs);
      this.render();
    }
  },
  markAllAsRead() {
    const notifs = DB.get(StorageKeys.NOTIFS);
    notifs.forEach(n => n.read = true);
    DB.set(StorageKeys.NOTIFS, notifs);
    this.render();
  },
  clearAll() {
    DB.set(StorageKeys.NOTIFS, []);
    this.render();
  },
  filter(cat) {
    this.activeFilter = cat;
    this.render();
  }
};

// =========================================================================
// 18. REPORTS & ANALYTICS MODULE
// =========================================================================
const ReportsModule = {
  render() {
    const candidates = DB.get(StorageKeys.CANDIDATES);
    document.getElementById("repTotalCohort").textContent = candidates.length;

    // Computed Department-wise statistics
    const depts = [
      { name: "Software Development", floor: "Floor 3" },
      { name: "IT Support", floor: "Floor 3" },
      { name: "HR & People Operations", floor: "Floor 2" },
      { name: "Product & Design", floor: "Floor 4" },
      { name: "Finance & Payroll", floor: "Floor 3" }
    ];

    const tbody = document.getElementById("reportsDepartmentTableBody");
    tbody.innerHTML = depts.map(d => {
      const cohort = candidates.filter(c => c.dept.includes(d.name) || d.name.includes(c.dept));
      const total = cohort.length || 1;
      const completed = cohort.filter(c => c.status === "Completed").length;
      const inProg = total - completed;
      const avgProg = cohort.length > 0 ? Math.round(cohort.reduce((s, c) => s + (c.progress || 0), 0) / cohort.length) : 80;

      return `
        <tr>
          <td><strong>${d.name}</strong></td>
          <td>${d.floor}</td>
          <td>${total}</td>
          <td><span class="badge badge-success">${completed}</span></td>
          <td><span class="badge badge-warning">${inProg}</span></td>
          <td style="min-width:130px;">
            <div style="font-size:11px;display:flex;justify-content:space-between;margin-bottom:3px;">
              <span>${avgProg}%</span>
            </div>
            <div class="progress-bar-container">
              <div class="progress-bar-fill" style="width:${avgProg}%"></div>
            </div>
          </td>
          <td><span class="badge badge-success">✓ 100% Compliant</span></td>
        </tr>
      `;
    }).join("");
  },
  exportCSV() {
    const candidates = DB.get(StorageKeys.CANDIDATES);
    const headers = ["Employee ID", "Full Name", "Email", "Department", "Designation", "Joining Date", "Progress (%)", "Status"];
    const rows = candidates.map(c => [
      c.id,
      `"${c.name}"`,
      c.email,
      `"${c.dept}"`,
      `"${c.role}"`,
      c.joiningDate,
      c.progress,
      c.status
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(e => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `enterprise_onboarding_report_${new Date().toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    DB.pushAudit("Exported complete onboarding analytics report in CSV format", AuthSystem.getCurrentUser().name);
    GlobalApp.showToast("📥 Exported Onboarding CSV Report successfully!");
  }
};

// =========================================================================
// 19. USER, ROLE & ACCESS CONTROL MODULE
// =========================================================================
const UserControlModule = {
  render() {
    const users = DB.get(StorageKeys.USERS);
    const tbody = document.getElementById("userControlTableBody");
    tbody.innerHTML = users.map(u => `
      <tr>
        <td><strong>${u.name}</strong></td>
        <td>${u.email}</td>
        <td><span class="badge badge-primary">${u.role.replace("_", " ").toUpperCase()}</span></td>
        <td>${u.dept}</td>
        <td><span class="badge ${u.status === 'Active' ? 'badge-success' : 'badge-danger'}">${u.status}</span></td>
        <td>${u.lastActive}</td>
        <td>
          <button class="btn btn-secondary btn-sm" onclick="UserControlModule.toggleStatus('${u.id}')">
            ${u.status === 'Active' ? 'Deactivate' : 'Activate'}
          </button>
        </td>
      </tr>
    `).join("");
  },
  toggleStatus(userId) {
    const users = DB.get(StorageKeys.USERS);
    const u = users.find(item => item.id === userId);
    if (u) {
      u.status = u.status === "Active" ? "Inactive" : "Active";
      DB.set(StorageKeys.USERS, users);
      this.render();
      GlobalApp.showToast(`Updated account status for ${u.name}!`);
    }
  },
  openAddUserModal() {
    const name = prompt("Enter User Full Name:");
    if (!name) return;
    const email = prompt("Enter Company Work Email:");
    if (!email) return;
    const role = prompt("Enter Role (super_admin, hr_admin, employee, manager, it_admin, finance):", "employee");

    const users = DB.get(StorageKeys.USERS);
    users.push({
      id: "usr-" + Date.now(),
      name,
      email,
      role: role || "employee",
      dept: "General",
      status: "Active",
      lastActive: "Just now"
    });
    DB.set(StorageKeys.USERS, users);
    GlobalApp.showToast(`User ${name} registered!`);
    this.render();
  }
};

// =========================================================================
// 20. SETTINGS & TEMPLATES MODULE
// =========================================================================
const SettingsModule = {
  render() {
    const list = document.getElementById("settingsTemplatesList");
    list.innerHTML = `
      <div style="padding:16px;border:1px solid var(--border-color);border-radius:var(--radius-md);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <strong>Software Engineering Standard Induction</strong>
          <span class="badge badge-primary">6 Tasks Pre-configured</span>
        </div>
        <p style="font-size:12.5px;color:var(--text-muted);margin-bottom:8px;">
          Includes Git/VPN setup, architecture walkthrough, manager 1-on-1, and policy exam completion.
        </p>
        <button class="btn btn-secondary btn-sm" onclick="alert('Viewing template configuration.')">Edit Template</button>
      </div>
      <div style="padding:16px;border:1px solid var(--border-color);border-radius:var(--radius-md);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <strong>HR &amp; People Operations Template</strong>
          <span class="badge badge-primary">4 Tasks Pre-configured</span>
        </div>
        <p style="font-size:12.5px;color:var(--text-muted);margin-bottom:8px;">
          Includes Floor 2 badge access, confidential file authorization, and HR compliance training.
        </p>
        <button class="btn btn-secondary btn-sm" onclick="alert('Viewing template configuration.')">Edit Template</button>
      </div>
    `;
  },
  openNewTemplateModal() {
    alert("Template Creator: Create customized sets of tasks and milestones by department.");
  }
};

// =========================================================================
// 21. GUIDED SPOTLIGHT TOUR MODULE
// =========================================================================
const GuidedTour = {
  currentStep: 0,
  steps: [
    { title: "Welcome to Enterprise HR Onboarding", text: "This enterprise platform guides you through your complete lifecycle from Day 1 to full integration." },
    { title: "Sidebar Navigation", text: "Easily access all 15 enterprise modules: Profiles, Document Verification, Task Tracker, Training, and Reports." },
    { title: "Role Switcher", text: "Test the platform as different enterprise personas: Super Admin, HR Director, Employee, Manager, IT Admin, or Finance." },
    { title: "AI Onboarding Buddy", text: "Ask any workplace question 24/7 grounded directly in official company policy handbooks." },
    { title: "Policy Knowledge Assessment", text: "Take the official 30-question Policy Exam to verify your workplace compliance and earn instant certification." }
  ],
  start() {
    this.currentStep = 0;
    document.getElementById("guidedTourOverlay").style.display = "block";
    this.showStep();
  },
  showStep() {
    const s = this.steps[this.currentStep];
    document.getElementById("tourStepIndicator").textContent = `Step ${this.currentStep + 1} of ${this.steps.length}`;
    document.getElementById("tourTitle").textContent = s.title;
    document.getElementById("tourText").textContent = s.text;
    document.getElementById("tourPrevBtn").disabled = this.currentStep === 0;
    document.getElementById("tourNextBtn").textContent = this.currentStep === this.steps.length - 1 ? "Finish Tour" : "Next →";

    const tooltip = document.getElementById("tourTooltip");
    tooltip.style.top = "120px";
    tooltip.style.left = "calc(50% - 170px)";
  },
  next() {
    if (this.currentStep < this.steps.length - 1) {
      this.currentStep++;
      this.showStep();
    } else {
      this.stop();
    }
  },
  prev() {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.showStep();
    }
  },
  stop() {
    document.getElementById("guidedTourOverlay").style.display = "none";
  }
};

// =========================================================================
// 22. GLOBAL HELPERS & INITIALIZATION
// =========================================================================
const GlobalApp = {
  init() {
    this.loadTheme();
    AuthSystem.applySessionUI();
    AppRouter.refreshPermissions();

    // Check URL address bar for administrative gateway (e.g. /admin.login, #admin.login, ?admin.login)
    const checkAddressBarRoute = () => {
      const fullHref = (window.location.href || "").toLowerCase();
      const hash = (window.location.hash || "").toLowerCase();
      const search = (window.location.search || "").toLowerCase();
      const urlParams = new URLSearchParams(window.location.search);

      if (
        fullHref.includes("admin.login") || 
        hash.includes("admin.login") || 
        search.includes("admin.login") || 
        urlParams.get("page") === "admin-login" || 
        urlParams.get("menu") === "admin"
      ) {
        AppRouter.navigate("login");
        AuthSystem.showAdminGateway();
        return true;
      }
      return false;
    };

    window.addEventListener("hashchange", checkAddressBarRoute);
    window.addEventListener("popstate", checkAddressBarRoute);

    const handledAdmin = checkAddressBarRoute();
    if (!handledAdmin) {
      const urlParams = new URLSearchParams(window.location.search);
      const targetPage = urlParams.get("page") || "main-dashboard";
      AppRouter.navigate(targetPage);
    }

    // Sidebar toggle listeners
    const openBtn = document.getElementById("sidebarOpenBtn");
    const closeBtn = document.getElementById("sidebarCloseBtn");
    const sidebar = document.getElementById("appSidebar");

    if (openBtn) openBtn.onclick = () => sidebar.classList.add("mobile-open");
    if (closeBtn) closeBtn.onclick = () => sidebar.classList.remove("mobile-open");
  },
  toggleTheme() {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem(StorageKeys.THEME, isDark ? "dark" : "light");
    this.showToast(isDark ? "Dark theme enabled" : "Light theme enabled");
  },
  loadTheme() {
    if (localStorage.getItem(StorageKeys.THEME) === "dark") {
      document.body.classList.add("dark-mode");
    }
  },
  openModal(modalId) {
    const el = document.getElementById(modalId);
    if (el) el.classList.add("active");
  },
  closeModals() {
    document.querySelectorAll(".modal-overlay").forEach(m => m.classList.remove("active"));
  },
  showToast(msg) {
    const toast = document.createElement("div");
    toast.style.position = "fixed";
    toast.style.bottom = "24px";
    toast.style.right = "24px";
    toast.style.backgroundColor = "var(--text-main)";
    toast.style.color = "var(--bg-surface)";
    toast.style.padding = "12px 20px";
    toast.style.borderRadius = "var(--radius-md)";
    toast.style.boxShadow = "var(--shadow-lg)";
    toast.style.fontSize = "13.5px";
    toast.style.fontWeight = "600";
    toast.style.zIndex = "99999";
    toast.style.transition = "all 0.3s ease";
    toast.textContent = msg;

    document.body.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      setTimeout(() => toast.remove(), 300);
    }, 2800);
  },
  handleSearch(e) {
    if (e.key === "Enter") {
      const q = e.target.value.trim();
      if (!q) return;
      AppRouter.navigate("directory");
      const dirInput = document.getElementById("dirSearchInput");
      if (dirInput) {
        dirInput.value = q;
        DirectoryModule.applyFilters();
      }
    }
  }
};

// Start application when DOM is ready
window.addEventListener("DOMContentLoaded", () => {
  GlobalApp.init();
});
