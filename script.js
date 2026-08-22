const chatBox = document.getElementById("chatBox");
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const clearTasksBtn = document.getElementById("clearTasksBtn");
const openCount = document.getElementById("openCount");
const doneCount = document.getElementById("doneCount");
const progressCount = document.getElementById("progressCount");
const quickButtons = document.querySelectorAll(".quick-btn");
const menuButtons = document.querySelectorAll(".menu-btn");
const pageHero = document.getElementById("pageHero");
const menuTabs = document.getElementById("menuTabs");
const themeToggleBtn = document.getElementById("themeToggleBtn");
const chatMenu = document.getElementById("chatMenu");
const examMenu = document.getElementById("examMenu");
const quizBadge = document.getElementById("quizBadge");
const examStatus = document.getElementById("examStatus");
const examCounter = document.getElementById("examCounter");
const examScore = document.getElementById("examScore");
const examProgressFill = document.getElementById("examProgressFill");
const examQuestion = document.getElementById("examQuestion");
const examOptions = document.getElementById("examOptions");
const examResult = document.getElementById("examResult");
const startExamBtn = document.getElementById("startExamBtn");
const submitAnswerBtn = document.getElementById("submitAnswerBtn");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");
const clearAnswerBtn = document.getElementById("clearAnswerBtn");
const backToChatBtn = document.getElementById("backToChatBtn");
const bottomReviewBtn = document.getElementById("bottomReviewBtn");
const micBtn = document.getElementById("micBtn");
const aboutTestBtn = document.getElementById("aboutTestBtn");
const readInstructionsBtn = document.getElementById("readInstructionsBtn");
const questionPalette = document.getElementById("questionPalette");
const examTimer = document.getElementById("examTimer");
const totalQuestionsCount = document.getElementById("totalQuestionsCount");
const visitedCount = document.getElementById("visitedCount");
const notVisitedCount = document.getElementById("notVisitedCount");
const answeredCount = document.getElementById("answeredCount");
const notAnsweredCount = document.getElementById("notAnsweredCount");

// Provided FAQ and policy documents. The bot answers only from this list.
const documents = [
  {
    title: "About Workplace",
    keywords: ["about", "company", "organization", "workplace", "mission", "vision", "anything", "hr", "onboarding", "employee", "details", "information"],
    answer:
      "The workplace is guided by punctuality, teamwork, customer focus, honesty, data privacy, continuous learning, and respectful behavior. This onboarding assistant answers from the provided FAQ and policy documents."
  },
  {
    title: "Work Atmosphere Policy",
    keywords: ["atmosphere", "culture", "environment", "workplace", "team", "respect"],
    answer:
      "The work atmosphere is professional, friendly, inclusive, and team-based. Employees should communicate politely, support team members, avoid gossip, and report unsafe or disrespectful behavior to HR."
  },
  {
    title: "Office Timings Policy",
    keywords: ["office timing", "office timings", "timing", "timings", "timming", "timmings", "time", "attendance", "working hours", "late in", "early go"],
    answer:
      "Office timings:\n- Office open time: Morning 6:00 AM\n- Office close time: Evening 9:00 PM\n- Working days: Monday to Saturday\n- Holidays: 1st and 3rd Saturday are holidays\n- Grace time: 10 minutes\n- Late-in must be updated in the HR Portal with manager approval\n- Early-go must be updated in the HR Portal with manager approval"
  },
  {
    title: "Shift Timings Policy",
    keywords: ["shift timing", "shift timings", "shift timming", "shift timmings", "first shift", "1st shift", "second shift", "2nd shift", "night shift"],
    answer:
      "Shift timings:\n- First Shift: 8:50 AM to 5:50 PM\n- Second Shift: 9:20 AM to 6:30 PM\n- Night Shift: 9:00 PM to 6:00 AM"
  },
  {
    title: "Uniform and Dress Code Policy",
    keywords: ["uniform", "dress", "clothes", "formal", "casual", "appearance"],
    answer:
      "Employees should wear formal or smart casual clothes. ID cards must be worn inside the office. Torn jeans, offensive text, slippers, and unsafe clothing are not allowed. Client meetings may require formal dress."
  },
  {
    title: "Lunch and Break Policy",
    keywords: ["lunch", "lunch timing", "lunch timings", "lunch timming", "lunch timmings", "break", "break timing", "break timings", "break timming", "break timmings", "tea", "food", "cafeteria", "break time", "tea break", "afternoon break"],
    answer:
      "Lunch timings:\n- 1st shift lunch: 1:05 PM to 1:40 PM\n- 2nd shift lunch: 1:50 PM to 2:30 PM\n- Night shift lunch: 10:00 PM\n\nBreak timings:\n- 1st shift break: 10:30 AM to 10:50 AM\n- 2nd shift break: 11:30 AM to 11:50 AM\n- Afternoon break: 4:15 PM to 4:30 PM\n\nFood should be eaten in the cafeteria or allowed pantry area."
  },
  {
    title: "Leave Policy",
    keywords: ["leave", "leaves", "vacation", "sick", "casual", "paid leave", "annual leave", "hr portal", "apply leave", "leave apply"],
    answer:
      "Employees get 18 paid leaves annually: 12 casual leaves and 6 sick leaves. Leaves are credited monthly. Leave requests must be applied through the HR Portal at least 2 days in advance, except sick leave."
  },
  {
    title: "Types of Leaves",
    keywords: ["types of leaves", "leave types", "different leaves", "casual leave", "sick leave", "emergency leave", "maternity", "paternity"],
    answer:
      "Types of leaves:\n- Casual Leave: for planned personal work\n- Sick Leave: for illness or medical needs\n- Half-Day Leave: for approved partial-shift absence\n- LOP: unpaid absence when leave balance or approval is unavailable\n- Maternity Leave: as per HR approval and law\n- Paternity Leave: as per HR approval\n- Emergency Leave: for urgent situations"
  },
  {
    title: "Half Day and LOP Policy",
    keywords: ["half day", "lop", "loss of pay", "early go", "late coming", "late in", "permission"],
    answer:
      "Half-day leave applies when an employee works only part of the shift with approval. Loss of Pay, also called LOP, may apply when paid leave balance is not available or absence is not approved. Early-go and late-in requests should be submitted in the HR Portal and approved by the manager."
  },
  {
    title: "Employment Bond Policy",
    keywords: ["bond", "agreement", "service agreement", "training bond", "company bond"],
    answer:
      "A bond or service agreement applies only when it is clearly mentioned in the offer letter or joining agreement. If applicable, the employee must complete the agreed service period or follow the separation terms written in that agreement. HR should be contacted for the exact bond period and amount."
  },
  {
    title: "Place of Work Policy",
    keywords: ["place", "location", "office", "remote", "hybrid", "work from home", "wfh"],
    answer:
      "The primary place of work is the assigned office location. Hybrid or remote work is allowed only when approved by the manager. Employees must be available online during working hours."
  },
  {
    title: "Code of Conduct",
    keywords: ["rules", "regulations", "conduct", "behavior", "discipline", "harassment", "policy"],
    answer:
      "Employees must behave respectfully, avoid harassment, protect confidential information, follow manager instructions, use work assets responsibly, and follow safety, attendance, IT, and HR policies."
  },
  {
    title: "IT and Data Security Policy",
    keywords: ["it", "laptop", "email", "password", "vpn", "software", "data", "security", "setup", "credentials", "login", "system credentials"],
    answer:
      "IT setup includes laptop allocation, employee email, temporary password, HR Portal login, VPN if required, project tool access, and role-based software. Passwords must be changed after first login and must not be shared. Confidential data must not be copied to personal devices."
  },
  {
    title: "Role Based System Credentials",
    keywords: ["credentials according to posts", "role based credentials", "post credentials", "developer access", "hr access", "manager access", "admin access"],
    answer:
      "System credentials are role based. Interns get email, HR Portal, and training tools. Developers get code repository, project board, VPN, and development server access. HR employees get HR Portal and employee-document access. Managers get team dashboards, approval access, and reporting tools. Admin or finance access is given only after written approval."
  },
  {
    title: "Organization Structure",
    keywords: ["structure", "company structure", "organization structure", "internal structure", "hierarchy", "higher authority", "authority"],
    answer:
      "The internal structure is: Managing Director, Operations Head, HR Manager, IT Manager, Department Managers, Team Leads, Senior Employees, Junior Employees, Trainees, and Interns. Employees report to their Team Lead or Manager first, then HR for policy matters."
  },
  {
    title: "Department Types",
    keywords: ["departments", "department types", "types of departments", "floor wise departments", "categories"],
    answer:
      "Departments floor-wise:\n- First Floor: Production\n- Second Floor: HR Support\n- Third Floor: IT Support, Software Development, Finance, Admin, Customer Support, Training, and Operations\n- Fourth Floor: Design, managers, and meeting rooms"
  },
  {
    title: "Floor Wise Details",
    keywords: ["floor", "floor wise", "floor details", "navigation", "inside company", "map", "layout", "where is", "department floor"],
    answer:
      "Floor-wise details:\n- First Floor: Production\n- Second Floor: HR Support\n- Third Floor: IT Support, Software Development, Finance, Admin, Customer Support, Training, and Operations\n- Fourth Floor: Design, managers, and meeting rooms\n- Lunch place: top-floor cafeteria\n- Cafeteria: top floor\n- Washrooms: right corner of the cafeteria area"
  },
  {
    title: "Cabin Wise Details",
    keywords: ["cabin", "cabins", "cabin wise", "manager cabin", "employee cabin", "higher authority cabins", "room", "rooms", "desk", "desks", "bay", "bays"],
    answer:
      "Employee cabins and work bays are on Floor 2 by department. Team Lead cabins are near each team bay. Manager cabins are on Floor 3. Higher authority cabins are on Floor 3 near the board room. Meeting cabins can be booked through the reception or calendar tool."
  },
  {
    title: "Internal Navigation",
    keywords: ["where is", "cafeteria", "lunch place", "washroom", "washrooms", "wash rooms", "toilet", "toilets", "restroom", "restrooms", "seminar hall", "library", "parking", "park", "drinking water", "water", "bike parking", "car parking", "locate", "location", "navigate", "navigation", "direction", "directions", "find", "get to", "go to"],
    answer:
      "Navigation guide:\n- Lunch place: top-floor cafeteria\n- Cafeteria: top floor\n- Washrooms: right corner of the cafeteria area\n- Drinking water: corner area on each floor\n- Production department: First Floor\n- HR Support: Second Floor\n- IT Support, Software Development, Finance, Admin, Customer Support, Training, and Operations: Third Floor\n- Design, managers, and meeting rooms: Fourth Floor\n- Bike parking: Basement B1\n- Car parking: Basement B2"
  },
  {
    title: "Floor Restrictions",
    keywords: ["restrictions", "floor restrictions", "restricted area", "restricted floor", "from floor to floor", "access card", "card access", "id card", "permission"],
    answer:
      "Floor access is controlled by ID card. Employees may access their work floor, cafeteria, reception, washrooms, and common meeting areas. Server room, finance records room, HR confidential file area, and higher authority cabins require permission. Visitors must stay in reception or approved meeting rooms."
  },
  {
    title: "Infrastructure",
    keywords: ["infrastructure", "facilities", "building", "office infrastructure", "amenities", "wifi", "internet", "cctv", "security"],
    answer:
      "Infrastructure includes reception, security desk, workstations, employee cabins, manager cabins, meeting rooms, seminar hall, library, cafeteria, pantry, drinking water points, washrooms, parking for bikes and cars, Wi-Fi, CCTV, biometric attendance, fire exits, and first-aid support."
  },
  {
    title: "Internal Policies",
    keywords: ["internal policies", "internal policy", "internal rules", "office rules", "company restrictions", "regulations", "conduct"],
    answer:
      "Internal policies include attendance rules, leave rules, dress code, data security, visitor restrictions, floor access rules, clean desk policy, meeting room booking, cafeteria discipline, anti-harassment policy, asset usage policy, and emergency safety rules."
  },
  {
    title: "Holiday Policy",
    keywords: ["holiday", "holidays", "festival", "festivals", "public holiday", "public holidays", "working days", "saturday"],
    answer:
      "Working days and holidays:\n- Working days: Monday to Saturday\n- Weekly holidays: Sunday, 1st Saturday, and 3rd Saturday\n\nFestival holidays:\n- Sankranti / Pongal\n- Holi\n- Ugadi\n- Eid\n- Independence Day\n- Ganesh Chaturthi\n- Dussehra\n- Diwali\n- Christmas\n\nPublic holidays:\n- Republic Day\n- Independence Day\n- Gandhi Jayanti\n- State formation day, if declared\n- Election holiday, if declared by government"
  },
  {
    title: "Payroll and Benefits Policy",
    keywords: ["payroll", "salary", "pay", "benefits", "insurance", "tax", "bank"],
    answer:
      "Salary is processed monthly after attendance verification. New hires should submit bank details, ID proof, tax forms, and emergency contact details. Eligible employees may receive health insurance and onboarding benefits."
  },
  {
    title: "Joining Terms and Conditions",
    keywords: ["joining", "terms", "conditions", "after joining", "probation", "notice", "documents"],
    answer:
      "After joining, employees must submit required documents, complete induction, follow workplace rules, complete assigned training, maintain confidentiality, and follow probation and notice-period conditions mentioned in the offer letter."
  }
];

const quizQuestions = [
  {
    question: "What are the normal office timings?",
    options: "A. Morning 6:00 AM to evening 9:00 PM  B. 11:00 AM to 8:00 PM  C. Any time",
    answer: "a"
  },
  {
    question: "What should an employee wear in office?",
    options: "A. Formal or smart casual dress  B. Any unsafe clothing  C. Beachwear",
    answer: "a"
  },
  {
    question: "What is the lunch break time?",
    options: "A. 1:00 PM to 1:45 PM  B. 3:00 PM to 4:00 PM  C. No lunch break",
    answer: "a"
  },
  {
    question: "Which leave type is used when an employee is unwell?",
    options: "A. Sick leave  B. Paternity leave  C. Dress code leave",
    answer: "a"
  },
  {
    question: "Which leave is unpaid when balance or approval is not available?",
    options: "A. LOP  B. Tea break  C. Uniform leave",
    answer: "a"
  },
  {
    question: "Can employees share company passwords?",
    options: "A. Yes  B. No  C. Only on social media",
    answer: "b"
  },
  {
    question: "How many paid leaves are given annually?",
    options: "A. 18 paid leaves  B. 5 paid leaves  C. No paid leaves",
    answer: "a"
  },
  {
    question: "Where should leave requests be submitted?",
    options: "A. HR Portal  B. Random chat group  C. Personal notebook only",
    answer: "a"
  },
  {
    question: "What is the expected work atmosphere?",
    options: "A. Respectful and collaborative  B. Rude and unsafe  C. No teamwork",
    answer: "a"
  },
  {
    question: "Is remote or hybrid work automatically allowed?",
    options: "A. Yes, always  B. Only with manager approval  C. Never ask anyone",
    answer: "b"
  },
  {
    question: "What must employees protect?",
    options: "A. Confidential work data  B. Public rumors  C. Personal jokes",
    answer: "a"
  },
  {
    question: "What must new hires complete after joining?",
    options: "A. Documents, induction, and training  B. Nothing  C. Only lunch registration",
    answer: "a"
  },
  {
    question: "Where are the cafeteria and seminar hall located?",
    options: "A. Floor 4  B. Basement B2  C. Security gate",
    answer: "a"
  },
  {
    question: "Who gets role-based credentials?",
    options: "A. Employees based on their post  B. Everyone gets admin access  C. Visitors",
    answer: "a"
  },
  {
    question: "When does a bond apply?",
    options: "A. Only if written in offer or joining agreement  B. Always without document  C. Never for anyone",
    answer: "a"
  }
];

let tasks = normalizeTasks(loadTasks());
let pendingTaskTitle = "";
let quizActive = false;
let currentQuestionIndex = 0;
let correctAnswers = 0;
let selectedExamAnswer = "";
let examAnswers = [];
let visitedQuestions = [];
let skippedQuestions = [];
let timerSeconds = 20 * 60;
let timerInterval = null;
let reviewMode = false;
let examStarted = false;
let instructionsAccepted = false;
let pendingTimingChoice = false;
let pendingShiftChoice = false;

function loadTheme() {
  const savedTheme = localStorage.getItem("themeMode");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggleBtn.textContent = "Light Mode";
  } else {
    document.body.classList.remove("dark-mode");
    themeToggleBtn.textContent = "Dark Mode";
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle("dark-mode");
  localStorage.setItem("themeMode", isDark ? "dark" : "light");
  themeToggleBtn.textContent = isDark ? "Light Mode" : "Dark Mode";
}

function loadTasks() {
  const savedTasks = localStorage.getItem("onboardingTasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
}

function saveTasks() {
  localStorage.setItem("onboardingTasks", JSON.stringify(tasks));
}

function normalizeTasks(savedTasks) {
  return savedTasks.map((task) => {
    const progress = Number.isInteger(task.progress) ? task.progress : task.status === "done" ? 100 : 0;

    return {
      id: task.id,
      title: task.title,
      status: task.status || "open",
      progress: progress,
      updates: Array.isArray(task.updates) ? task.updates : [],
      isOpen: task.isOpen || false
    };
  });
}

function addMessage(sender, text, source) {
  const message = document.createElement("div");
  message.className = `message ${sender}`;
  message.textContent = text;

  if (source) {
    const sourceLabel = document.createElement("small");
    sourceLabel.textContent = `Source: ${source}`;
    message.appendChild(sourceLabel);
  }

  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function renderTasks() {
  taskList.innerHTML = "";
  openCount.textContent = tasks.filter((task) => task.status === "open").length;
  doneCount.textContent = tasks.filter((task) => task.status === "done").length;
  progressCount.textContent = `${getAverageProgress()}%`;

  if (tasks.length === 0) {
    const emptyItem = document.createElement("li");
    emptyItem.className = "empty-task";
    emptyItem.textContent = "No tasks yet.";
    taskList.appendChild(emptyItem);
    return;
  }

  tasks.forEach((task) => {
    const item = document.createElement("li");
    const title = document.createElement("div");
    const status = document.createElement("span");
    const progressStatus = document.createElement("span");
    const progressWrap = document.createElement("div");
    const progressFill = document.createElement("div");
    const actions = document.createElement("div");
    const openButton = document.createElement("button");
    const doneButton = document.createElement("button");
    const deleteButton = document.createElement("button");
    const details = document.createElement("div");
    const progressForm = document.createElement("form");
    const dailyForm = document.createElement("form");
    const progressLabel = document.createElement("label");
    const progressInput = document.createElement("input");
    const progressButton = document.createElement("button");
    const dailyLabel = document.createElement("label");
    const dailyText = document.createElement("textarea");
    const dailyButton = document.createElement("button");
    const updatesTitle = document.createElement("div");
    const updatesList = document.createElement("ol");
    const doneClass = task.status === "done" ? "done" : "";

    title.className = "task-title";
    title.textContent = task.title;

    status.className = `task-status ${doneClass}`;
    status.textContent = task.status;

    progressStatus.className = "task-status progress";
    progressStatus.textContent = `${task.progress}%`;

    progressWrap.className = "progress-wrap";
    progressFill.className = "progress-fill";
    progressFill.style.width = `${task.progress}%`;
    progressWrap.appendChild(progressFill);

    actions.className = "task-actions";

    openButton.type = "button";
    openButton.className = "open-btn";
    openButton.textContent = task.isOpen ? "Close Task" : "Open Task";
    openButton.addEventListener("click", () => {
      task.isOpen = !task.isOpen;
      saveTasks();
      renderTasks();
    });

    doneButton.type = "button";
    doneButton.className = "done-btn";
    doneButton.textContent = task.status === "done" ? "Done" : "Mark Done";
    doneButton.disabled = task.status === "done";
    doneButton.addEventListener("click", () => {
      updateTaskProgress(task.id, 100);
      addMessage("bot", `Task submitted/completed: "${task.title}".`);
    });

    deleteButton.type = "button";
    deleteButton.className = "delete-btn";
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteTask(task.id);
    });

    progressForm.className = "progress-form";
    progressLabel.textContent = "Update progress percentage";
    progressInput.type = "number";
    progressInput.min = "0";
    progressInput.max = "100";
    progressInput.value = task.progress;
    progressButton.type = "submit";
    progressButton.className = "update-btn";
    progressButton.textContent = "Update Progress";
    progressForm.addEventListener("submit", (event) => {
      event.preventDefault();
      updateTaskProgress(task.id, Number(progressInput.value));
      addMessage("bot", `Progress updated for "${task.title}".`);
    });
    progressForm.appendChild(progressLabel);
    progressForm.appendChild(progressInput);
    progressForm.appendChild(progressButton);

    dailyForm.className = "daily-form";
    dailyLabel.textContent = "Daily work update";
    dailyText.placeholder = "Write today's update for this task";
    dailyButton.type = "submit";
    dailyButton.className = "update-btn";
    dailyButton.textContent = "Add Daily Update";
    dailyForm.addEventListener("submit", (event) => {
      event.preventDefault();
      addDailyUpdate(task.id, dailyText.value);
      dailyText.value = "";
      addMessage("bot", `Daily update added for "${task.title}".`);
    });
    dailyForm.appendChild(dailyLabel);
    dailyForm.appendChild(dailyText);
    dailyForm.appendChild(dailyButton);

    updatesTitle.className = "task-title";
    updatesTitle.textContent = "Daily Updates";

    updatesList.className = "update-list";
    if (task.updates.length === 0) {
      const emptyUpdate = document.createElement("li");
      emptyUpdate.textContent = "No daily updates yet.";
      updatesList.appendChild(emptyUpdate);
    } else {
      task.updates.forEach((update) => {
        const updateItem = document.createElement("li");
        updateItem.textContent = `${update.date}: ${update.text}`;
        updatesList.appendChild(updateItem);
      });
    }

    details.className = task.isOpen ? "task-details" : "task-details hidden";
    details.appendChild(progressForm);
    details.appendChild(dailyForm);
    details.appendChild(updatesTitle);
    details.appendChild(updatesList);

    actions.appendChild(openButton);
    actions.appendChild(doneButton);
    actions.appendChild(deleteButton);

    item.appendChild(title);
    item.appendChild(status);
    item.appendChild(progressStatus);
    item.appendChild(progressWrap);
    item.appendChild(actions);
    item.appendChild(details);
    taskList.appendChild(item);
  });
}

function createTask(title) {
  const task = {
    id: Date.now(),
    title: title,
    status: "open",
    progress: 0,
    updates: [],
    isOpen: true
  };

  tasks.push(task);
  saveTasks();
  renderTasks();
  return `Created task: "${title}".`;
}

function getAverageProgress() {
  if (tasks.length === 0) {
    return 0;
  }

  const total = tasks.reduce((sum, task) => sum + task.progress, 0);
  return Math.round(total / tasks.length);
}

function updateTaskProgress(taskId, progressValue) {
  const task = tasks.find((item) => item.id === taskId);
  if (!task) {
    return;
  }

  const progress = Math.max(0, Math.min(100, progressValue));
  task.progress = progress;

  if (progress === 100) {
    task.status = "done";
  } else if (progress > 0) {
    task.status = "in progress";
  } else {
    task.status = "open";
  }

  saveTasks();
  renderTasks();
}

function addDailyUpdate(taskId, updateText) {
  const task = tasks.find((item) => item.id === taskId);
  const text = updateText.trim();

  if (!task || !text) {
    return;
  }

  const today = new Date().toLocaleDateString();
  task.updates.push({
    date: today,
    text: text
  });

  saveTasks();
  renderTasks();
}

function deleteTask(taskId) {
  tasks = tasks.filter((task) => task.id !== taskId);
  saveTasks();
  renderTasks();
  addMessage("bot", "Task deleted.");
}

function markTaskDone(userText) {
  const words = userText
    .replace("mark", "")
    .replace("done", "")
    .replace("complete", "")
    .replace("completed", "")
    .trim()
    .toLowerCase();

  const task = tasks.find((item) => item.title.toLowerCase().includes(words));

  if (!task) {
    return "I could not find that task. Try: mark submit ID proof done.";
  }

  updateTaskProgress(task.id, 100);
  return `Marked "${task.title}" as done.`;
}

function listTaskStatus() {
  if (tasks.length === 0) {
    return "You do not have any onboarding tasks yet.";
  }

  return tasks
    .map((task, index) => `${index + 1}. ${task.title} - ${task.status} - ${task.progress}% progress`)
    .join("\n");
}

function getTaskDetails(userText) {
  const task = findTaskFromText(userText);

  if (!task) {
    return "I could not find that task. Try: open task submit tax forms.";
  }

  task.isOpen = true;
  saveTasks();
  renderTasks();

  const updates =
    task.updates.length === 0
      ? "No daily updates yet."
      : task.updates.map((update) => `${update.date}: ${update.text}`).join("\n");

  return `Task opened: ${task.title}\nStatus: ${task.status}\nProgress: ${task.progress}%\nDaily updates:\n${updates}`;
}

function findTaskFromText(userText) {
  const lowerText = userText.toLowerCase();

  return tasks.find((task) => {
    const taskWords = task.title.toLowerCase().split(" ");
    return taskWords.some((word) => word.length > 2 && lowerText.includes(word));
  });
}

function updateProgressFromChat(userText) {
  const task = findTaskFromText(userText);
  const numberMatch = userText.match(/\d+/);

  if (!task || !numberMatch) {
    return "Please mention the task name and progress number. Example: update tax forms progress 50.";
  }

  updateTaskProgress(task.id, Number(numberMatch[0]));
  return `Updated "${task.title}" to ${task.progress}% progress.`;
}

function addDailyUpdateFromChat(userText) {
  const task = findTaskFromText(userText);

  if (!task) {
    return "Please mention the task name. Example: add daily update tax forms submitted documents.";
  }

  const updateText = userText
    .replace(/add daily update/i, "")
    .replace(/daily update/i, "")
    .replace(task.title, "")
    .trim();

  if (!updateText) {
    return "Please include the daily update text after the task name.";
  }

  addDailyUpdate(task.id, updateText);
  return `Daily update added for "${task.title}".`;
}

function normalizeQuestion(text) {
  let cleanedText = text.toLowerCase();

  const corrections = {
    empolyee: "employee",
    employe: "employee",
    emplyee: "employee",
    onbording: "onboarding",
    onbord: "onboard",
    restrections: "restrictions",
    restrictionss: "restrictions",
    policiews: "policies",
    policyes: "policies",
    polices: "policies",
    infrasture: "infrastructure",
    infrastruture: "infrastructure",
    cafteria: "cafeteria",
    cafetria: "cafeteria",
    flooar: "floor",
    thord: "third",
    developmen: "development",
    autority: "authority",
    autorities: "authorities",
    timming: "timing",
    timmings: "timings",
    shif: "shift",
    leavs: "leaves",
    leavees: "leaves",
    credentails: "credentials",
    credintials: "credentials",
    cabbin: "cabin",
    washrom: "washroom",
    washrooms: "washrooms",
    departmnt: "department",
    departmnts: "departments",
    maneger: "manager",
    manger: "manager",
    parkin: "parking",
    libary: "library",
    ofice: "office",
    offlice: "office",
    locat: "locate",
    navigat: "navigate",
    canteen: "cafeteria",
    toilet: "washroom",
    toilets: "washrooms",
    restroom: "washroom",
    restrooms: "washrooms",
    palce: "place",
    structur: "structure",
    struture: "structure"
  };

  Object.keys(corrections).forEach((wrongWord) => {
    const pattern = new RegExp(`\\b${wrongWord}\\b`, "g");
    cleanedText = cleanedText.replace(pattern, corrections[wrongWord]);
  });

  return cleanedText.replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function getWords(text) {
  return normalizeQuestion(text)
    .split(" ")
    .filter((word) => word.length > 1);
}

function getEditDistance(firstWord, secondWord) {
  const costs = [];

  for (let i = 0; i <= firstWord.length; i += 1) {
    let lastValue = i;

    for (let j = 0; j <= secondWord.length; j += 1) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newValue = costs[j - 1];

        if (firstWord.charAt(i - 1) !== secondWord.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }

        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }

    if (i > 0) {
      costs[secondWord.length] = lastValue;
    }
  }

  return costs[secondWord.length];
}

function wordsAreClose(userWord, keywordWord) {
  if (userWord === keywordWord) {
    return true;
  }

  if (userWord.length < 4 || keywordWord.length < 4) {
    return false;
  }

  const distance = getEditDistance(userWord, keywordWord);
  return distance <= 1 || (keywordWord.length > 7 && distance <= 2);
}

function keywordMatches(normalizedText, userWords, keyword) {
  const normalizedKeyword = normalizeQuestion(keyword);
  const keywordWords = normalizedKeyword.split(" ");

  if (normalizedText.includes(normalizedKeyword)) {
    return keywordWords.length > 1 ? 4 : 2;
  }

  if (keywordWords.length > 1) {
    const matchedWords = keywordWords.filter((keywordWord) => {
      return userWords.some((userWord) => wordsAreClose(userWord, keywordWord));
    });

    return matchedWords.length === keywordWords.length ? 3 : 0;
  }

  return userWords.some((userWord) => wordsAreClose(userWord, normalizedKeyword)) ? 1 : 0;
}

function findDocumentAnswer(userText) {
  const lowerText = normalizeQuestion(userText);
  const userWords = getWords(userText);
  let bestDocument = null;
  let bestScore = 0;

  documents.forEach((doc) => {
    let score = 0;

    doc.keywords.forEach((keyword) => {
      score += keywordMatches(lowerText, userWords, keyword);
    });

    if (score > bestScore) {
      bestScore = score;
      bestDocument = doc;
    }
  });

  return bestDocument;
}

function getTaskTitleFromText(text) {
  const lowerText = text.toLowerCase();
  const phrases = ["create a task to", "create task to", "add a task to", "add task to"];

  for (const phrase of phrases) {
    if (lowerText.includes(phrase)) {
      return text.slice(lowerText.indexOf(phrase) + phrase.length).trim();
    }
  }

  return "";
}

function startQuiz() {
  showMenu("exam");
  startExam();
  return "Quiz exam opened. Answer the questions in the exam menu.";
}

function getCurrentQuestionText() {
  const question = quizQuestions[currentQuestionIndex];
  return `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}\n${question.question}\n${question.options}`;
}

function handleQuizAnswer(userText) {
  const answer = userText.trim().toLowerCase().charAt(0);

  if (!["a", "b", "c"].includes(answer)) {
    return { text: "Please answer with A, B, or C.\n\n" + getCurrentQuestionText() };
  }

  if (answer === quizQuestions[currentQuestionIndex].answer) {
    correctAnswers += 1;
  }

  currentQuestionIndex += 1;

  if (currentQuestionIndex < quizQuestions.length) {
    return { text: getCurrentQuestionText() };
  }

  quizActive = false;
  quizBadge.textContent = "Ready";
  quizBadge.classList.remove("quiz-active");

  const percentage = Math.round((correctAnswers / quizQuestions.length) * 100);
  let resultText = `Quiz completed.\nYour score: ${correctAnswers}/${quizQuestions.length}\nTotal percentage: ${percentage}/100`;

  if (percentage >= 80) {
    resultText += "\nResult: Excellent. You understand the company joining conditions well.";
  } else if (percentage >= 50) {
    resultText += "\nResult: Good attempt. Please review the company policies once more.";
  } else {
    resultText += "\nResult: Please study the rules, leaves, timings, uniform, lunch, and conduct policies again.";
  }

  return { text: resultText };
}

function showMenu(menuName) {
  chatMenu.classList.toggle("active", menuName === "chat");
  examMenu.classList.toggle("active", menuName === "exam");
  pageHero.style.display = menuName === "exam" ? "none" : "";
  menuTabs.style.display = menuName === "exam" ? "none" : "";

  if (menuName === "exam") {
    initializeExamScreen();
  }

  menuButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.menu === menuName);
  });
}

function updateExamLayoutVisibility() {
  const examLayout = document.querySelector(".exam-layout");
  if (examLayout) {
    if (examStarted) {
      examLayout.classList.remove("not-started");
      startExamBtn.style.display = "none";
    } else {
      examLayout.classList.add("not-started");
      startExamBtn.style.display = "inline-block";
    }
  }
}

function initializeExamScreen() {
  totalQuestionsCount.textContent = quizQuestions.length;
  if (!examStarted) {
    renderInstructionsScreen();
  } else {
    startExamTimer();
    renderExamQuestion();
  }
  updateTimerDisplay();
  renderQuestionPalette();
  updateExamOverview();
  updateExamLayoutVisibility();
}

function startExam() {
  if (examStatus.textContent === "Completed") {
    instructionsAccepted = false;
    renderInstructionsScreen();
    updateExamLayoutVisibility();
    return;
  }

  if (!instructionsAccepted) {
    examResult.textContent = "Please read and accept the instructions before starting the exam.";
    return;
  }

  quizActive = false;
  currentQuestionIndex = 0;
  correctAnswers = 0;
  selectedExamAnswer = "";
  examAnswers = [];
  visitedQuestions = [];
  skippedQuestions = [];
  reviewMode = false;
  examStarted = true;
  timerSeconds = 20 * 60;
  examStatus.textContent = "Exam running";
  examStatus.classList.add("quiz-active");
  quizBadge.textContent = "Ready";
  quizBadge.classList.remove("quiz-active");
  examResult.textContent = "";
  nextQuestionBtn.disabled = false;
  submitAnswerBtn.disabled = true;
  submitAnswerBtn.textContent = "Review and Submit";
  clearAnswerBtn.disabled = true;
  startExamBtn.disabled = true;
  startExamBtn.textContent = "Start Exam";
  startExamTimer();
  updateExamLayoutVisibility();
  renderExamQuestion();
}

function renderInstructionsScreen() {
  examStatus.textContent = "Instructions";
  examStatus.classList.remove("quiz-active");
  examCounter.textContent = "Before you start";
  examScore.textContent = `Total Questions: ${quizQuestions.length}`;
  examProgressFill.style.width = "0%";
  examQuestion.textContent = "Read Instructions";
  examOptions.className = "exam-review";
  examOptions.innerHTML = `
    <div class="review-item">
      <div style="display: flex; gap: 10px; margin-bottom: 15px;">
        <button id="preInstructionsBtn" type="button" class="menu-btn active" style="padding: 6px 12px; font-size: 13px; margin: 0;">Instructions</button>
        <button id="preAboutBtn" type="button" class="menu-btn" style="padding: 6px 12px; font-size: 13px; margin: 0;">About Test</button>
      </div>
      <div id="instructionContent" style="min-height: 140px;">
        <strong>Exam Instructions</strong>
        <div>- Total time: 20:00 minutes.</div>
        <div>- Timer counts down from 20:00 to 00:00 with seconds.</div>
        <div>- Select one answer for each question.</div>
        <div>- Click Save and Next to move to the next question.</div>
        <div>- Answered questions turn green in the left question panel.</div>
        <div>- Skipped questions turn red in the left question panel.</div>
        <div>- After the last question, review your answers before final submission.</div>
      </div>
      <label class="instruction-check">
        <input id="acceptInstructionsCheck" type="checkbox">
        I have read and accept the exam instructions.
      </label>
    </div>
  `;
  examResult.textContent = "";
  nextQuestionBtn.disabled = true;
  clearAnswerBtn.disabled = true;
  submitAnswerBtn.disabled = true;
  submitAnswerBtn.textContent = "Review and Submit";
  startExamBtn.disabled = !instructionsAccepted;

  const checkbox = document.getElementById("acceptInstructionsCheck");
  checkbox.checked = instructionsAccepted;
  checkbox.addEventListener("change", () => {
    instructionsAccepted = checkbox.checked;
    startExamBtn.disabled = !instructionsAccepted;
  });

  const preInstructionsBtn = document.getElementById("preInstructionsBtn");
  const preAboutBtn = document.getElementById("preAboutBtn");
  const instructionContent = document.getElementById("instructionContent");

  preInstructionsBtn.addEventListener("click", () => {
    preInstructionsBtn.classList.add("active");
    preAboutBtn.classList.remove("active");
    instructionContent.innerHTML = `
      <strong>Exam Instructions</strong>
      <div>- Total time: 20:00 minutes.</div>
      <div>- Timer counts down from 20:00 to 00:00 with seconds.</div>
      <div>- Select one answer for each question.</div>
      <div>- Click Save and Next to move to the next question.</div>
      <div>- Answered questions turn green in the left question panel.</div>
      <div>- Skipped questions turn red in the left question panel.</div>
      <div>- After the last question, review your answers before final submission.</div>
    `;
  });

  preAboutBtn.addEventListener("click", () => {
    preAboutBtn.classList.add("active");
    preInstructionsBtn.classList.remove("active");
    instructionContent.innerHTML = `
      <strong>Onboarding Policy Assessment</strong>
      <div>- Purpose: check employee understanding of onboarding rules.</div>
      <div>- Total questions: ${quizQuestions.length}</div>
      <div>- Duration: 20 minutes.</div>
      <div>- Topics: benefits, IT setup, leaves, timings, holidays, policies, navigation, and task awareness.</div>
      <div>- Result: score and percentage with suggestions.</div>
    `;
  });
}

function renderExamQuestion() {
  reviewMode = false;
  const question = quizQuestions[currentQuestionIndex];
  const progress = Math.round(((currentQuestionIndex + 1) / quizQuestions.length) * 100);
  visitedQuestions[currentQuestionIndex] = true;

  examCounter.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  examScore.textContent = `Answered: ${getAnsweredCount()}`;
  examProgressFill.style.width = `${progress}%`;
  examQuestion.textContent = question.question;
  examOptions.innerHTML = "";
  examOptions.className = "exam-options";
  nextQuestionBtn.disabled = false;
  submitAnswerBtn.disabled = true;
  submitAnswerBtn.textContent = "Review and Submit";
  selectedExamAnswer = examAnswers[currentQuestionIndex] || "";
  clearAnswerBtn.disabled = !selectedExamAnswer;

  getOptionList(question.options).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "exam-option";
    button.dataset.answer = option.value;
    button.textContent = option.text;
    if (selectedExamAnswer === option.value) {
      button.classList.add("selected");
      nextQuestionBtn.disabled = false;
      submitAnswerBtn.disabled = true;
      clearAnswerBtn.disabled = false;
    }
    button.addEventListener("click", () => {
      selectedExamAnswer = option.value;
      examAnswers[currentQuestionIndex] = option.value;
      skippedQuestions[currentQuestionIndex] = false;
      document.querySelectorAll(".exam-option").forEach((item) => {
        item.classList.remove("selected");
      });
      button.classList.add("selected");
      nextQuestionBtn.disabled = false;
      submitAnswerBtn.disabled = true;
      clearAnswerBtn.disabled = false;
      renderQuestionPalette();
      updateExamOverview();
    });
    examOptions.appendChild(button);
  });

  if (currentQuestionIndex === quizQuestions.length - 1) {
    bottomReviewBtn.style.display = "inline-block";
  } else {
    bottomReviewBtn.style.display = "none";
  }

  renderQuestionPalette();
  updateExamOverview();
}

function getOptionList(optionsText) {
  return [
    { value: "a", text: optionsText.split("  B.")[0].trim() },
    { value: "b", text: "B. " + optionsText.split("  B.")[1].split("  C.")[0].trim() },
    { value: "c", text: "C. " + optionsText.split("  C.")[1].trim() }
  ];
}

function submitExamAnswer() {
  if (reviewMode) {
    submitFinalExam();
    return;
  }

  showReviewScreen();
}

function goToNextQuestion() {
  if (!selectedExamAnswer) {
    skippedQuestions[currentQuestionIndex] = true;
  }

  currentQuestionIndex += 1;

  if (currentQuestionIndex >= quizQuestions.length) {
    currentQuestionIndex = 0;
  }

  examResult.textContent = "";
  renderExamQuestion();
}

function getConciseReviewHtml() {
  const answeredNums = [];
  const unansweredNums = [];
  
  quizQuestions.forEach((q, index) => {
    if (examAnswers[index]) {
      answeredNums.push(index + 1);
    } else {
      unansweredNums.push(index + 1);
    }
  });

  return `
    <div class="review-summary-card" style="padding: 24px; border: 1px solid #dbe5ed; border-radius: 8px; max-width: 600px; margin: 20px auto; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05); text-align: left;">
      <h3 style="margin-top: 0; margin-bottom: 18px; font-size: 20px; text-align: center;">Exam Submission Summary</h3>
      
      <div style="margin-bottom: 14px; font-size: 15px; border-bottom: 1px solid #edf2f7; padding-bottom: 8px;">
        <strong>Total Questions:</strong> <span style="font-weight: bold; font-size: 16px;">${quizQuestions.length}</span>
      </div>
      <div style="margin-bottom: 14px; font-size: 15px; border-bottom: 1px solid #edf2f7; padding-bottom: 8px;">
        <strong>Answered Questions (${answeredNums.length}):</strong> 
        <span style="color: #166534; font-weight: bold; word-break: break-all;">${answeredNums.length > 0 ? answeredNums.join(", ") : "None"}</span>
      </div>
      <div style="margin-bottom: 24px; font-size: 15px; border-bottom: 1px solid #edf2f7; padding-bottom: 8px;">
        <strong>Unanswered Questions (${unansweredNums.length}):</strong> 
        <span style="color: #991b1b; font-weight: bold; word-break: break-all;">${unansweredNums.length > 0 ? unansweredNums.join(", ") : "None"}</span>
      </div>

      <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">
        <button id="finalSubmitBtn" type="button" class="score-home-btn" style="background: #0f2f75; padding: 12px 24px;">Submit Exam</button>
        <button id="backToQuestionsBtn" type="button" class="clear-response-btn" style="padding: 12px 24px; border: 1px solid #cbd5df; border-radius: 6px; font-weight: bold; cursor: pointer;">Back to Questions</button>
      </div>
    </div>
  `;
}

function showReviewScreen() {
  reviewMode = true;
  examStatus.textContent = "Review";
  examCounter.textContent = `Review ${quizQuestions.length} questions`;
  examScore.textContent = `Answered: ${getAnsweredCount()}`;
  examProgressFill.style.width = "100%";
  examQuestion.textContent = "Review your answers before final submission";
  examOptions.className = "exam-review";
  examOptions.innerHTML = getConciseReviewHtml();

  const finalSubmitBtn = document.getElementById("finalSubmitBtn");
  if (finalSubmitBtn) {
    finalSubmitBtn.addEventListener("click", () => {
      submitFinalExam();
    });
  }

  const backToQuestionsBtn = document.getElementById("backToQuestionsBtn");
  if (backToQuestionsBtn) {
    backToQuestionsBtn.addEventListener("click", () => {
      renderExamQuestion();
    });
  }

  examResult.textContent = "";
  nextQuestionBtn.disabled = true;
  clearAnswerBtn.disabled = true;
  submitAnswerBtn.disabled = false;
  submitAnswerBtn.textContent = "Submit Exam";
  renderQuestionPalette();
  updateExamOverview();
}

function submitFinalExam() {
  stopExamTimer();
  correctAnswers = quizQuestions.filter((question, index) => {
    return examAnswers[index] === question.answer;
  }).length;

  const percentage = Math.round((correctAnswers / quizQuestions.length) * 100);
  const finalMessage =
    `Exam submitted.\n` +
    `Your score: ${correctAnswers}/${quizQuestions.length}\n` +
    `Total percentage: ${percentage}/100\n` +
    getExamResultMessage(percentage);

  examStarted = false;
  examStatus.textContent = "Completed";
  examStatus.classList.remove("quiz-active");
  examCounter.textContent = "Score Page";
  examScore.textContent = `Score: ${correctAnswers}/${quizQuestions.length}`;
  examProgressFill.style.width = `${percentage}%`;
  examQuestion.textContent = "Exam Score";
  
  updateExamLayoutVisibility();

  examOptions.className = "exam-review";
  examOptions.innerHTML = getScorePageHtml(correctAnswers, percentage);

  const scoreHomeBtn = document.getElementById("scoreHomeBtn");
  if (scoreHomeBtn) {
    scoreHomeBtn.addEventListener("click", () => {
      stopExamTimer();
      showMenu("chat");
    });
  }

  submitAnswerBtn.textContent = "Review and Submit";
  submitAnswerBtn.disabled = true;
  nextQuestionBtn.disabled = true;
  clearAnswerBtn.disabled = true;
  startExamBtn.disabled = false;
  startExamBtn.textContent = "Restart Exam";
  reviewMode = false;
  examResult.textContent = finalMessage;
}

function getScorePageHtml(score, percentage) {
  return `
    <div class="score-card">
      <div class="score-percent">${percentage}%</div>
      <strong>Your score: ${score}/${quizQuestions.length}</strong>
      <p>${getExamResultMessage(percentage)}</p>
      <div class="score-suggestions">
        <strong>Suggestions:</strong>
        ${getScoreSuggestions(percentage)}
      </div>
      <button id="scoreHomeBtn" type="button" class="score-home-btn">Back to Main Page</button>
    </div>
    <div class="score-details-heading" style="margin-top: 30px; font-weight: bold; font-size: 18px;">
      Detailed Question Review
    </div>
    <div class="exam-review" style="margin-top: 12px;">
      ${getExamReviewHtml(true)}
    </div>
  `;
}

function getScoreSuggestions(percentage) {
  if (percentage >= 80) {
    return `
      <div>- Excellent understanding of onboarding policies.</div>
      <div>- You can proceed with onboarding tasks confidently.</div>
      <div>- Review IT setup and leave application once before joining.</div>
    `;
  }

  if (percentage >= 50) {
    return `
      <div>- Good attempt, but review missed policy areas.</div>
      <div>- Focus on timings, leave rules, IT setup, and workplace navigation.</div>
      <div>- Ask the assistant topic-wise questions before retaking the exam.</div>
    `;
  }

  return `
    <div>- Please review the onboarding documents carefully.</div>
    <div>- Start with leave types, office timings, shift timings, and IT setup.</div>
    <div>- Ask the assistant simple questions and retake the exam after practice.</div>
  `;
}

function showAboutTest() {
  examQuestion.textContent = "About Test";
  examOptions.className = "exam-review";
  
  let backBtnHtml = "";
  if (examStarted) {
    backBtnHtml = `<button id="backToExamBtn" type="button" style="margin-top: 15px; background: #0f766e;">Back to Exam</button>`;
  }

  examOptions.innerHTML = `
    <div class="review-item">
      <strong>Onboarding Policy Assessment</strong>
      <div>- Purpose: check employee understanding of onboarding rules.</div>
      <div>- Total questions: ${quizQuestions.length}</div>
      <div>- Duration: 20 minutes.</div>
      <div>- Topics: benefits, IT setup, leaves, timings, holidays, policies, navigation, and task awareness.</div>
      <div>- Result: score and percentage with suggestions.</div>
      ${backBtnHtml}
    </div>
  `;
  examResult.textContent = examStarted ? "Click Back to Exam or a question number on the left side to continue the exam." : "";
  
  if (examStarted) {
    nextQuestionBtn.disabled = true;
    clearAnswerBtn.disabled = true;
    const backBtn = document.getElementById("backToExamBtn");
    if (backBtn) {
      backBtn.addEventListener("click", () => {
        renderExamQuestion();
      });
    }
  }
}

function showInstructionsFromButton() {
  if (!examStarted) {
    renderInstructionsScreen();
    return;
  }

  examQuestion.textContent = "Read Instructions";
  examOptions.className = "exam-review";
  examOptions.innerHTML = `
    <div class="review-item">
      <strong>Exam Instructions</strong>
      <div>- Total time: 20:00 minutes.</div>
      <div>- Select one answer for each question.</div>
      <div>- Click Save and Next to continue.</div>
      <div>- Green question number means answered.</div>
      <div>- Red question number means skipped.</div>
      <div>- Click any question number on the left to return to the exam.</div>
      <button id="backToExamBtn" type="button" style="margin-top: 15px; background: #0f766e;">Back to Exam</button>
    </div>
  `;
  examResult.textContent = "Click a question number on the left side or click Back to Exam to continue.";
  nextQuestionBtn.disabled = true;
  clearAnswerBtn.disabled = true;

  const backBtn = document.getElementById("backToExamBtn");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      renderExamQuestion();
    });
  }
}

function clearCurrentAnswer() {
  examAnswers[currentQuestionIndex] = "";
  selectedExamAnswer = "";
  skippedQuestions[currentQuestionIndex] = false;
  examResult.textContent = "";
  renderExamQuestion();
}

function getAnsweredCount() {
  return examAnswers.filter((answer) => Boolean(answer)).length;
}

function updateExamOverview() {
  const answered = getAnsweredCount();
  const visited = visitedQuestions.filter((item) => Boolean(item)).length;

  totalQuestionsCount.textContent = quizQuestions.length;
  visitedCount.textContent = visited;
  notVisitedCount.textContent = quizQuestions.length - visited;
  answeredCount.textContent = answered;
  notAnsweredCount.textContent = quizQuestions.length - answered;
}

function renderQuestionPalette() {
  questionPalette.innerHTML = "";

  quizQuestions.forEach((question, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = index + 1;
    button.className = "palette-btn";

    if (index === currentQuestionIndex) {
      button.classList.add("current");
    }

    if (examAnswers[index]) {
      button.classList.add("answered");
    } else if (skippedQuestions[index]) {
      button.classList.add("skipped");
    } else if (visitedQuestions[index]) {
      button.classList.add("visited");
    }

    button.addEventListener("click", () => {
      if (!examStarted) return;
      currentQuestionIndex = index;
      renderExamQuestion();
    });

    questionPalette.appendChild(button);
  });
}

function startExamTimer() {
  stopExamTimer();
  updateTimerDisplay();

  timerInterval = setInterval(() => {
    timerSeconds -= 1;
    updateTimerDisplay();

    if (timerSeconds <= 0) {
      timerSeconds = 0;
      updateTimerDisplay();
      submitFinalExam();
    }
  }, 1000);
}

function stopExamTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  examTimer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getExamReviewHtml(showCorrect) {
  return quizQuestions
    .map((question, index) => {
      const userAnswer = examAnswers[index];
      const isCorrect = userAnswer === question.answer;
      const className = showCorrect ? (isCorrect ? "correct" : "wrong") : "";
      const statusText = userAnswer ? "Answered" : "Skipped";
      const correctLine = showCorrect
        ? `<div>Correct answer: ${getAnswerText(question, question.answer)}</div>`
        : "";

      return `
        <div class="review-item ${className}">
          <strong>${index + 1}. ${question.question}</strong>
          <div>Status: ${statusText}</div>
          <div>Your answer: ${getAnswerText(question, userAnswer)}</div>
          ${correctLine}
        </div>
      `;
    })
    .join("");
}

function getAnswerText(question, answerValue) {
  const option = getOptionList(question.options).find((item) => item.value === answerValue);
  return option ? option.text : "Not answered";
}

function getExamResultMessage(percentage) {
  if (percentage >= 80) {
    return "Result: Excellent. You understand the onboarding terms well.";
  }

  if (percentage >= 50) {
    return "Result: Good attempt. Review the policy answers once more.";
  }

  return "Result: Please review the onboarding documents by asking the assistant topic-wise questions.";
}

function getShiftTimingAnswer(userText) {
  const lowerText = normalizeQuestion(userText);

  if (lowerText.includes("1") || lowerText.includes("first")) {
    pendingShiftChoice = false;
    return "First Shift:\n- Work time: 8:50 AM to 5:50 PM\n- Lunch: 1:05 PM to 1:40 PM\n- Break: 10:30 AM to 10:50 AM";
  }

  if (lowerText.includes("2") || lowerText.includes("second")) {
    pendingShiftChoice = false;
    return "Second Shift:\n- Work time: 9:20 AM to 6:30 PM\n- Lunch: 1:50 PM to 2:30 PM\n- Break: 11:30 AM to 11:50 AM";
  }

  if (lowerText.includes("night")) {
    pendingShiftChoice = false;
    return "Night Shift:\n- Work time: 9:00 PM to 6:00 AM\n- Lunch: 10:00 PM\n- Break: as assigned by the shift manager";
  }

  return "Which shift timing do you want?\n- First Shift\n- Second Shift\n- Night Shift";
}

function getAllShiftTimingsAnswer() {
  pendingShiftChoice = false;
  return "Shift timings:\n- First Shift: 8:50 AM to 5:50 PM\n- Second Shift: 9:20 AM to 6:30 PM\n- Night Shift: 9:00 PM to 6:00 AM";
}

function isOfficeTimingQuestion(lowerText) {
  return (
    lowerText === "office" ||
    lowerText.includes("office timing") ||
    lowerText.includes("office timings")
  );
}

function isShiftTimingQuestion(lowerText) {
  return (
    lowerText === "shift" ||
    lowerText.includes("shift timing") ||
    lowerText.includes("shift timings")
  );
}

function isSingleShiftQuestion(lowerText) {
  return (
    lowerText === "first" ||
    lowerText === "first shift" ||
    lowerText === "1st" ||
    lowerText === "1st shift" ||
    lowerText === "second" ||
    lowerText === "second shift" ||
    lowerText === "2nd" ||
    lowerText === "2nd shift" ||
    lowerText === "night" ||
    lowerText === "night shift"
  );
}

function getDocumentByTitle(title) {
  return documents.find((doc) => doc.title === title);
}

function isGenericTimingQuestion(lowerText) {
  const normalizedText = normalizeQuestion(lowerText);
  const hasTimingWord =
    normalizedText.includes("timing") ||
    normalizedText.includes("timings");

  const hasSpecificTimingType =
    normalizedText.includes("office") ||
    normalizedText.includes("shift") ||
    normalizedText.includes("lunch") ||
    normalizedText.includes("break") ||
    normalizedText.includes("late") ||
    normalizedText.includes("early");

  return hasTimingWord && !hasSpecificTimingType;
}

function getTimingChoiceAnswer(userText) {
  const lowerText = normalizeQuestion(userText);

  if (lowerText.includes("office")) {
    pendingTimingChoice = false;
    const document = getDocumentByTitle("Office Timings Policy");
    return { text: document.answer, source: document.title };
  }

  if (lowerText.includes("shift")) {
    pendingTimingChoice = false;
    return { text: getAllShiftTimingsAnswer(), source: "Shift Timings Policy" };
  }

  return {
    text: "Which timings do you want?\n- Office Timings\n- Shift Timings",
    source: "Office Timings Policy"
  };
}

function getPolicySummary() {
  return (
    "Here is the onboarding document summary:\n" +
    "- Office timings: Morning 6:00 AM to evening 9:00 PM.\n" +
    "- Working days: Monday to Saturday.\n" +
    "- Weekly holidays: Sunday, 1st Saturday, and 3rd Saturday.\n" +
    "- Shift timings: First Shift 8:50 AM to 5:50 PM, Second Shift 9:20 AM to 6:30 PM, Night Shift 9:00 PM to 6:00 AM.\n" +
    "- Lunch: 1:00 PM to 1:45 PM.\n" +
    "- Tea breaks: 11:15 AM to 11:30 AM and 4:15 PM to 4:30 PM.\n" +
    "- Festival holidays: Sankranti/Pongal, Holi, Ugadi, Eid, Independence Day, Ganesh Chaturthi, Dussehra, Diwali, Christmas.\n" +
    "- Public holidays: Republic Day, Independence Day, Gandhi Jayanti, declared state holidays, and declared election holidays.\n" +
    "- Uniform: formal or smart casual dress with ID card.\n" +
    "- Leaves: 18 paid leaves annually, 12 casual + 6 sick, credited monthly.\n" +
    "- Leave types: casual, sick, half-day, LOP, maternity, paternity, and emergency leave.\n" +
    "- Leave application: apply in the HR Portal at least 2 days in advance, except sick leave.\n" +
    "- Early-go or late-in: update the HR Portal and get manager approval.\n" +
    "- Half day: applies when only part of the shift is worked with approval.\n" +
    "- LOP: loss of pay may apply when leave balance is unavailable or absence is not approved.\n" +
    "- Work place: assigned office; hybrid or remote only with manager approval.\n" +
    "- Atmosphere: respectful, collaborative, safe, and professional.\n" +
    "- Bond: applies only if written in the offer letter or joining agreement.\n" +
    "- IT: laptop, email, HR Portal, VPN, and tools are given based on role.\n" +
    "- Structure: Managing Director, Operations Head, HR Manager, IT Manager, Managers, Team Leads, employees, trainees, and interns.\n" +
    "- Departments: First Floor Production; Second Floor HR Support; Third Floor IT Support, Software Development, Finance, Admin, Customer Support, Training, and Operations; Fourth Floor Design, managers, and meeting rooms.\n" +
    "- Navigation: lunch place and cafeteria are on the top floor; washrooms are at the right corner of the cafeteria area; bike parking is B1; car parking is B2."
  );
}

function replyToUser(userText) {
  const lowerText = normalizeQuestion(userText);

  // Greet/wish response
  const greetings = ["hi", "hello", "hey", "greetings", "good morning", "good afternoon", "good evening", "wish"];
  const isGreeting = greetings.some(greet => {
    return lowerText === greet || lowerText.startsWith(greet + " ") || lowerText.endsWith(" " + greet) || lowerText.includes(" " + greet + " ");
  });

  if (isGreeting) {
    return {
      text: "Hello! 👋 I'm your HR Onboarding Assistant. How can I help you today? You can ask about office timings, leaves, IT setup, uniform, lunch, cafeteria, washrooms, or onboarding tasks."
    };
  }

  if (pendingTimingChoice) {
    return getTimingChoiceAnswer(userText);
  }

  if (pendingShiftChoice) {
    return { text: getShiftTimingAnswer(userText), source: "Shift Timings Policy" };
  }

  if (quizActive) {
    return handleQuizAnswer(userText);
  }

  if (
    lowerText.includes("start quiz") ||
    lowerText.includes("take quiz") ||
    lowerText.includes("open quiz") ||
    lowerText.includes("quiz exam") ||
    lowerText.includes("assessment")
  ) {
    return { text: startQuiz() };
  }

  if (isOfficeTimingQuestion(lowerText)) {
    const document = getDocumentByTitle("Office Timings Policy");
    return { text: document.answer, source: document.title };
  }

  if (isSingleShiftQuestion(lowerText)) {
    return { text: getShiftTimingAnswer(userText), source: "Shift Timings Policy" };
  }

  if (isShiftTimingQuestion(lowerText)) {
    return { text: getAllShiftTimingsAnswer(), source: "Shift Timings Policy" };
  }

  if (isGenericTimingQuestion(lowerText)) {
    pendingTimingChoice = true;
    return getTimingChoiceAnswer(userText);
  }

  if (
    lowerText.includes("all policy") ||
    lowerText.includes("all policies") ||
    lowerText.includes("everything") ||
    lowerText.includes("all rules") ||
    lowerText.includes("terms and conditions")
  ) {
    return { text: getPolicySummary(), source: "Provided Onboarding Documents" };
  }

  if (pendingTaskTitle) {
    if (["yes", "yep", "sure", "ok", "okay"].includes(lowerText)) {
      const response = createTask(pendingTaskTitle);
      pendingTaskTitle = "";
      return { text: response };
    }

    pendingTaskTitle = "";
    return { text: "No problem. I did not create that task." };
  }

  if (lowerText.includes("show") && lowerText.includes("task")) {
    return { text: listTaskStatus() };
  }

  if (lowerText.includes("status") && lowerText.includes("task")) {
    return { text: listTaskStatus() };
  }

  if (lowerText.includes("open task") || lowerText.includes("task details")) {
    return { text: getTaskDetails(lowerText) };
  }

  if (lowerText.includes("progress") && lowerText.match(/\d+/)) {
    return { text: updateProgressFromChat(lowerText) };
  }

  if (lowerText.includes("daily update")) {
    return { text: addDailyUpdateFromChat(userText) };
  }

  if (lowerText.includes("mark") && (lowerText.includes("done") || lowerText.includes("complete"))) {
    return { text: markTaskDone(lowerText) };
  }

  const newTaskTitle = getTaskTitleFromText(userText);
  if (newTaskTitle) {
    return { text: createTask(newTaskTitle) };
  }

  if (lowerText.includes("remind me") || lowerText.includes("need to")) {
    pendingTaskTitle = userText.replace(/remind me to/i, "").replace(/i need to/i, "").trim();
    return { text: `Should I create an onboarding task for "${pendingTaskTitle}"?` };
  }

  const document = findDocumentAnswer(userText);
  if (document) {
    return {
      text: document.answer,
      source: document.title
    };
  }

  return {
    text:
      "I can only answer questions related to the office policies, structure, locations, and internal navigation. I cannot help with external or unrelated queries. Please ask about office timings, leave types, IT setup, uniform, lunch, cafeteria, washrooms, parking, or onboarding tasks.",
    listAnswer: true
  };
}

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();
  sendUserMessage(userInput.value);
});

taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = taskInput.value.trim();
  if (!title) {
    return;
  }

  createTask(title);
  addMessage("bot", `Added onboarding task: "${title}".`);
  taskInput.value = "";
});

function sendUserMessage(messageText) {
  const text = messageText.trim();
  if (!text) {
    return;
  }

  addMessage("user", text);
  userInput.value = "";

  const response = replyToUser(text);
  const botText = response.source || response.listAnswer ? formatAnswerAsList(response.text) : response.text;
  addMessage("bot", botText, response.source);
}

function formatAnswerAsList(answerText) {
  if (answerText.includes("\n-")) {
    return answerText;
  }

  const parts = answerText
    .split(/\. |\n/)
    .map((part) => part.trim())
    .filter((part) => part.length > 0);

  if (parts.length <= 1) {
    return `- ${answerText}`;
  }

  return parts
    .map((part) => {
      const cleanPart = part.endsWith(".") ? part.slice(0, -1) : part;
      return `- ${cleanPart}`;
    })
    .join("\n");
}

quickButtons.forEach((button) => {
  button.addEventListener("click", () => {
    userInput.value = button.textContent;
    sendUserMessage(userInput.value);
  });
});

menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showMenu(button.dataset.menu);
  });
});

themeToggleBtn.addEventListener("click", () => {
  toggleTheme();
});

startExamBtn.addEventListener("click", () => {
  startExam();
});

submitAnswerBtn.addEventListener("click", () => {
  submitExamAnswer();
});

nextQuestionBtn.addEventListener("click", () => {
  goToNextQuestion();
});

clearTasksBtn.addEventListener("click", () => {
  tasks = [];
  saveTasks();
  renderTasks();
  addMessage("bot", "All onboarding tasks have been cleared.");
});

clearAnswerBtn.addEventListener("click", () => {
  clearCurrentAnswer();
});

backToChatBtn.addEventListener("click", () => {
  stopExamTimer();
  showMenu("chat");
});

aboutTestBtn.addEventListener("click", () => {
  showAboutTest();
});

readInstructionsBtn.addEventListener("click", () => {
  showInstructionsFromButton();
});

bottomReviewBtn.addEventListener("click", () => {
  showReviewScreen();
});

// Speech Recognition (Web Speech API)
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  let isListening = false;

  micBtn.addEventListener("click", () => {
    if (isListening) {
      recognition.stop();
    } else {
      isListening = true;
      recognition.start();
    }
  });

  recognition.onstart = () => {
    micBtn.classList.add("listening");
    micBtn.textContent = "🛑";
    userInput.placeholder = "Listening...";
  };

  recognition.onend = () => {
    isListening = false;
    micBtn.classList.remove("listening");
    micBtn.textContent = "🎤";
    userInput.placeholder = "Ask about timings, uniform, lunch, leaves, or type Start quiz";
  };

  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript;
    if (speechResult && speechResult.trim() && isListening) {
      isListening = false;
      userInput.value = speechResult;
      userInput.dispatchEvent(new Event("input"));
      recognition.stop();
      sendUserMessage(speechResult);
    }
  };

  recognition.onerror = (event) => {
    console.error("Speech recognition error:", event.error);
    if (event.error !== "no-speech" && event.error !== "aborted") {
      addMessage("bot", `Speech recognition error: ${event.error}. Please try again.`);
    }
  };
} else {
  micBtn.style.display = "none";
}

loadTheme();
renderTasks();
addMessage(
  "bot",
  "Hi! 👋 Welcome aboard! I'm your HR Onboarding Assistant. I can help you with:\n\n• Answering questions about benefits, IT setup & policies\n• Creating onboarding tasks\n• Checking your task status\n\nHow can I help you today?"
);
