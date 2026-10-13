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
const homeMenu = document.getElementById("homeMenu");
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
const prevQuestionBtn = document.getElementById("prevQuestionBtn");
const clearAnswerBtn = document.getElementById("clearAnswerBtn");
const markReviewBtn = document.getElementById("markReviewBtn");
const backToChatBtn = document.getElementById("backToChatBtn");
const bottomReviewBtn = document.getElementById("bottomReviewBtn");
const inExamActions = document.getElementById("inExamActions");
const preExamActions = document.getElementById("preExamActions");
const micBtn = document.getElementById("micBtn");
const aboutTestBtn = document.getElementById("aboutTestBtn");
const readInstructionsBtn = document.getElementById("readInstructionsBtn");
const questionPalette = document.getElementById("questionPalette");
const examTimer = document.getElementById("examTimer");
const totalQuestionsCount = document.getElementById("totalQuestionsCount");
const visitedCount = document.getElementById("visitedCount");
const notVisitedCount = document.getElementById("notVisitedCount");
const answeredCount = document.getElementById("answeredCount");
const reviewedCount = document.getElementById("reviewedCount");
const notAnsweredCount = document.getElementById("notAnsweredCount");
const examModalOverlay = document.getElementById("examModalOverlay");
const aboutTestModal = document.getElementById("aboutTestModal");
const instructionsModal = document.getElementById("instructionsModal");
const submitConfirmModal = document.getElementById("submitConfirmModal");
const exitConfirmModal = document.getElementById("exitConfirmModal");
const modalConfirmSubmitBtn = document.getElementById("modalConfirmSubmitBtn");
const modalConfirmExitBtn = document.getElementById("modalConfirmExitBtn");
const modalTotalCount = document.getElementById("modalTotalCount");
const modalAnsweredCount = document.getElementById("modalAnsweredCount");
const modalUnansweredCount = document.getElementById("modalUnansweredCount");
const modalReviewedCount = document.getElementById("modalReviewedCount");

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
let reviewedQuestions = [];
let examTimeTakenSeconds = 0;
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
  updateHomeMetrics();

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

function updateHomeMetrics() {
  const open = tasks.filter((task) => task.status === "open").length;
  const done = tasks.filter((task) => task.status === "done").length;
  const progress = getAverageProgress();

  const homeOpen = document.getElementById("homeOpenTasksCount");
  const homeDone = document.getElementById("homeDoneTasksCount");
  const homeProgress = document.getElementById("homeProgressPercent");
  const homeStatus = document.getElementById("homeAssessmentStatus");

  if (homeOpen) homeOpen.textContent = open;
  if (homeDone) homeDone.textContent = done;
  if (homeProgress) homeProgress.textContent = `${progress}%`;

  if (homeStatus) {
    const attempts = loadAttemptHistory();
    if (attempts && attempts.length > 0) {
      homeStatus.textContent = `${attempts[0].percentage} (${attempts[0].status})`;
      homeStatus.className = attempts[0].status === "Needs Retest" ? "status-pill warn" : "status-pill success";
    } else {
      homeStatus.textContent = "Not Started";
      homeStatus.className = "status-pill neutral";
    }
  }
}

function showMenu(menuName) {
  // Track where we came from before going to exam (for back-arrow navigation)
  if (menuName === "exam") {
    const currentActive = homeMenu && homeMenu.classList.contains("active") ? "home"
      : chatMenu.classList.contains("active") ? "chat" : "home";
    window._examPreviousMenu = currentActive;
  }

  const adminMenuEl = document.getElementById("adminMenu");

  if (homeMenu) homeMenu.classList.toggle("active", menuName === "home");
  chatMenu.classList.toggle("active", menuName === "chat");
  examMenu.classList.toggle("active", menuName === "exam");
  if (adminMenuEl) {
    if (menuName === "admin") {
      adminMenuEl.style.display = "block";
    } else {
      adminMenuEl.style.display = "none";
    }
  }

  pageHero.style.display = (menuName === "exam" || menuName === "admin") ? "none" : "";
  menuTabs.style.display = menuName === "exam" ? "none" : "";

  if (menuName === "exam") {
    initializeExamScreen();
  }

  if (menuName === "home") {
    updateHomeMetrics();
  }

  menuButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.menu === menuName);
  });
}

function loadAttemptHistory() {
  try {
    const saved = localStorage.getItem("hr_exam_attempt_history");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
}

function saveAttemptRecord(record) {
  try {
    const history = loadAttemptHistory();
    history.unshift(record);
    localStorage.setItem("hr_exam_attempt_history", JSON.stringify(history.slice(0, 5)));
  } catch (e) {}
}

function openExamModal(modalId) {
  if (!examModalOverlay) return;
  examModalOverlay.style.display = "flex";
  [aboutTestModal, instructionsModal, submitConfirmModal, exitConfirmModal].forEach((m) => {
    if (m) m.style.display = m.id === modalId ? "block" : "none";
  });
}

function closeExamModals() {
  if (!examModalOverlay) return;
  examModalOverlay.style.display = "none";
  [aboutTestModal, instructionsModal, submitConfirmModal, exitConfirmModal].forEach((m) => {
    if (m) m.style.display = "none";
  });
}

function updateExamLayoutVisibility() {
  const examLayout = document.querySelector(".exam-layout");
  if (!examLayout) return;

  if (examStarted) {
    examLayout.classList.remove("not-started");
    if (inExamActions) inExamActions.style.display = "flex";
    if (preExamActions) preExamActions.style.display = "none";
    if (startExamBtn) startExamBtn.style.display = "none";
  } else {
    examLayout.classList.add("not-started");
    if (inExamActions) inExamActions.style.display = "none";
    if (examStatus.textContent === "Completed") {
      // AFTER COMPLETION: HIDE BOTH IN-EXAM AND PRE-EXAM BUTTONS!
      // No Save and Next, no Review, no Clear Response!
      if (preExamActions) preExamActions.style.display = "none";
    } else {
      // Instructions screen before start
      if (preExamActions) preExamActions.style.display = "flex";
      if (startExamBtn) {
        startExamBtn.style.display = "inline-block";
        startExamBtn.disabled = !instructionsAccepted;
      }
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
    restartExam();
    return;
  }

  if (!instructionsAccepted) {
    examResult.textContent = "Please read and accept the instructions before starting the exam.";
    return;
  }

  restartExam();
}

function restartExam() {
  quizActive = false;
  currentQuestionIndex = 0;
  correctAnswers = 0;
  selectedExamAnswer = "";
  examAnswers = [];
  visitedQuestions = [];
  skippedQuestions = [];
  reviewedQuestions = [];
  reviewMode = false;
  examStarted = true;
  instructionsAccepted = true;
  timerSeconds = 20 * 60;
  examTimeTakenSeconds = 0;

  examStatus.textContent = "Exam running";
  examStatus.classList.add("quiz-active");
  quizBadge.textContent = "In Exam";
  quizBadge.classList.add("quiz-active");
  examResult.textContent = "";

  if (submitAnswerBtn) {
    submitAnswerBtn.disabled = false;
    submitAnswerBtn.textContent = "Review & Submit";
  }

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
  examQuestion.textContent = "Onboarding Policy Assessment";
  examOptions.className = "exam-review";
  examOptions.innerHTML = `
    <div class="review-item">
      <div style="display: flex; gap: 10px; margin-bottom: 15px;">
        <button id="preInstructionsBtn" type="button" class="menu-btn active" style="padding: 6px 12px; font-size: 13px; margin: 0;">Instructions</button>
        <button id="preAboutBtn" type="button" class="menu-btn" style="padding: 6px 12px; font-size: 13px; margin: 0;">About Test</button>
      </div>
      <div id="instructionContent" style="min-height: 140px;">
        <strong>Exam Instructions</strong>
        <div>- Total time: 20:00 minutes countdown.</div>
        <div>- Total questions: ${quizQuestions.length} multiple-choice questions.</div>
        <div>- Single choice: Select the best option for each question.</div>
        <div>- Use <strong>Previous</strong> and <strong>Save and Next</strong> or the Question Palette on the left.</div>
        <div>- Answered questions turn <strong>green</strong>; skipped turn <strong>red</strong>; marked for review turn <strong>purple</strong>.</div>
        <div>- Click <strong>Review &amp; Submit</strong> at any time to submit your test.</div>
      </div>
      <label class="instruction-check">
        <input id="acceptInstructionsCheck" type="checkbox">
        I have read and accept the exam instructions.
      </label>
    </div>
  `;
  examResult.textContent = "";
  if (submitAnswerBtn) submitAnswerBtn.disabled = true;

  const checkbox = document.getElementById("acceptInstructionsCheck");
  checkbox.checked = instructionsAccepted;
  checkbox.addEventListener("change", () => {
    instructionsAccepted = checkbox.checked;
    if (startExamBtn) startExamBtn.disabled = !instructionsAccepted;
  });

  const preInstructionsBtn = document.getElementById("preInstructionsBtn");
  const preAboutBtn = document.getElementById("preAboutBtn");
  const instructionContent = document.getElementById("instructionContent");

  preInstructionsBtn.addEventListener("click", () => {
    preInstructionsBtn.classList.add("active");
    preAboutBtn.classList.remove("active");
    instructionContent.innerHTML = `
      <strong>Exam Instructions</strong>
      <div>- Total time: 20:00 minutes countdown.</div>
      <div>- Total questions: ${quizQuestions.length} multiple-choice questions.</div>
      <div>- Single choice: Select the best option for each question.</div>
      <div>- Use <strong>Previous</strong> and <strong>Save and Next</strong> or the Question Palette on the left.</div>
      <div>- Answered questions turn <strong>green</strong>; skipped turn <strong>red</strong>; marked for review turn <strong>purple</strong>.</div>
      <div>- Click <strong>Review &amp; Submit</strong> at any time to submit your test.</div>
    `;
  });

  preAboutBtn.addEventListener("click", () => {
    preAboutBtn.classList.add("active");
    preInstructionsBtn.classList.remove("active");
    instructionContent.innerHTML = `
      <strong>Onboarding Policy Assessment</strong>
      <div>- Purpose: Verify employee understanding of official company policies and guidelines.</div>
      <div>- Total questions: ${quizQuestions.length} questions.</div>
      <div>- Duration: 20 minutes.</div>
      <div>- Topics: Office &amp; shift timings, leaves, IT setup, cafeteria, navigation, uniform, and code of conduct.</div>
      <div>- Result: Detailed score, percentage, evaluation badge, and personalized suggestions.</div>
    `;
  });

  updateExamLayoutVisibility();
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

  selectedExamAnswer = examAnswers[currentQuestionIndex] || "";

  // Update navigation button states
  if (prevQuestionBtn) {
    prevQuestionBtn.disabled = currentQuestionIndex === 0;
  }
  if (nextQuestionBtn) {
    nextQuestionBtn.disabled = false;
    nextQuestionBtn.textContent = currentQuestionIndex === quizQuestions.length - 1 ? "Save & Review →" : "Save and Next →";
  }
  if (clearAnswerBtn) {
    clearAnswerBtn.disabled = !selectedExamAnswer;
  }
  if (markReviewBtn) {
    const isMarked = Boolean(reviewedQuestions[currentQuestionIndex]);
    markReviewBtn.classList.toggle("active", isMarked);
    markReviewBtn.textContent = isMarked ? "✓ Marked for Review" : "Mark for Review";
  }
  if (submitAnswerBtn) {
    submitAnswerBtn.disabled = false;
  }

  getOptionList(question.options).forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "exam-option";
    button.dataset.answer = option.value;
    button.textContent = option.text;
    if (selectedExamAnswer === option.value) {
      button.classList.add("selected");
    }
    button.addEventListener("click", () => {
      selectedExamAnswer = option.value;
      examAnswers[currentQuestionIndex] = option.value;
      skippedQuestions[currentQuestionIndex] = false;
      document.querySelectorAll(".exam-option").forEach((item) => {
        item.classList.remove("selected");
      });
      button.classList.add("selected");
      if (clearAnswerBtn) clearAnswerBtn.disabled = false;
      renderQuestionPalette();
      updateExamOverview();
    });
    examOptions.appendChild(button);
  });

  renderQuestionPalette();
  updateExamOverview();
}

function selectOptionByValue(val) {
  if (!examStarted) return;
  const targetOption = document.querySelector(`.exam-option[data-answer="${val}"]`);
  if (targetOption) {
    targetOption.click();
  }
}

function goToPrevQuestion() {
  if (!examStarted) return;
  if (currentQuestionIndex > 0) {
    currentQuestionIndex -= 1;
    renderExamQuestion();
  }
}

function goToNextQuestion() {
  if (!examStarted) return;
  if (!selectedExamAnswer) {
    skippedQuestions[currentQuestionIndex] = true;
  }

  if (currentQuestionIndex < quizQuestions.length - 1) {
    currentQuestionIndex += 1;
    renderExamQuestion();
  } else {
    // If on last question, open review/submission modal
    openSubmitConfirmModal();
  }
}

function toggleMarkForReview() {
  if (!examStarted) return;
  reviewedQuestions[currentQuestionIndex] = !reviewedQuestions[currentQuestionIndex];
  if (markReviewBtn) {
    const isMarked = Boolean(reviewedQuestions[currentQuestionIndex]);
    markReviewBtn.classList.toggle("active", isMarked);
    markReviewBtn.textContent = isMarked ? "✓ Marked for Review" : "Mark for Review";
  }
  renderQuestionPalette();
  updateExamOverview();
}

function clearCurrentAnswer() {
  if (!examStarted) return;
  examAnswers[currentQuestionIndex] = "";
  selectedExamAnswer = "";
  skippedQuestions[currentQuestionIndex] = false;
  examResult.textContent = "";
  renderExamQuestion();
}

function openSubmitConfirmModal() {
  const answered = getAnsweredCount();
  const unanswered = quizQuestions.length - answered;
  const reviewed = getReviewedCount();

  if (modalTotalCount) modalTotalCount.textContent = quizQuestions.length;
  if (modalAnsweredCount) modalAnsweredCount.textContent = answered;
  if (modalUnansweredCount) modalUnansweredCount.textContent = unanswered;
  if (modalReviewedCount) modalReviewedCount.textContent = reviewed;

  openExamModal("submitConfirmModal");
}

function submitFinalExam() {
  closeExamModals();
  stopExamTimer();

  const totalQuestions = quizQuestions.length;
  correctAnswers = quizQuestions.filter((question, index) => {
    return examAnswers[index] === question.answer;
  }).length;

  const answered = getAnsweredCount();
  const incorrectAnswers = quizQuestions.filter((question, index) => {
    return examAnswers[index] && examAnswers[index] !== question.answer;
  }).length;
  const skippedCount = totalQuestions - answered;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  const accuracyRate = answered > 0 ? Math.round((correctAnswers / answered) * 100) : 0;
  const timeSpent = (20 * 60) - timerSeconds;

  examStarted = false;
  examStatus.textContent = "Completed";
  examStatus.classList.remove("quiz-active");
  quizBadge.textContent = "Completed";
  quizBadge.classList.remove("quiz-active");
  examCounter.textContent = "Assessment Score";
  examScore.textContent = `Score: ${correctAnswers}/${totalQuestions}`;
  examProgressFill.style.width = `${percentage}%`;
  examQuestion.textContent = "Assessment Score Card";
  examResult.textContent = "";

  // Hide in-exam buttons & pre-exam buttons (NO Save and Next, NO Review, NO Clear Response)
  updateExamLayoutVisibility();

  if (submitAnswerBtn) {
    submitAnswerBtn.disabled = true;
    submitAnswerBtn.textContent = "Review & Submit";
  }

  // Save attempt record to localStorage
  saveAttemptRecord({
    date: new Date().toLocaleDateString(undefined, { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }),
    score: `${correctAnswers}/${totalQuestions}`,
    percentage: `${percentage}%`,
    status: percentage >= 80 ? "Distinction" : (percentage >= 60 ? "Passed" : "Needs Retest"),
    timeTaken: formatDuration(timeSpent)
  });

  // Render ONLY the Score Dashboard (NO questions and answers!)
  examOptions.className = "exam-review";
  examOptions.innerHTML = getScorePageHtml(correctAnswers, totalQuestions, percentage, incorrectAnswers, skippedCount, accuracyRate, timeSpent);

  // Attach score card action button handlers
  const scoreRetakeBtn = document.getElementById("scoreRetakeBtn");
  if (scoreRetakeBtn) {
    scoreRetakeBtn.addEventListener("click", () => {
      restartExam();
    });
  }

  const scoreHomeBtn = document.getElementById("scoreHomeBtn");
  if (scoreHomeBtn) {
    scoreHomeBtn.addEventListener("click", () => {
      stopExamTimer();
      showMenu("chat");
    });
  }

  const scorePrintBtn = document.getElementById("scorePrintBtn");
  if (scorePrintBtn) {
    scorePrintBtn.addEventListener("click", () => {
      window.print();
    });
  }
}

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")} min`;
}

function getScorePageHtml(score, total, percentage, incorrect, skipped, accuracy, timeSpentSeconds) {
  let badgeClass = "retest";
  let badgeText = "⚠️ Needs Retest (Under 60%)";
  if (percentage >= 80) {
    badgeClass = "distinction";
    badgeText = "★ Passed with Distinction";
  } else if (percentage >= 60) {
    badgeClass = "passed";
    badgeText = "✓ Assessment Passed";
  }

  const timeFormatted = formatDuration(timeSpentSeconds);
  const attempts = loadAttemptHistory();

  const attemptsHtml = attempts.length > 1 ? `
    <div class="attempt-history-box">
      <h4>Recent Attempt History</h4>
      ${attempts.slice(1, 4).map((att, i) => `
        <div class="attempt-item">
          <span>Attempt ${attempts.length - i - 1} (${att.date})</span>
          <span><strong>${att.score} (${att.percentage})</strong> — ${att.status}</span>
        </div>
      `).join("")}
    </div>
  ` : "";

  return `
    <div class="score-dashboard-card">
      <div class="score-badge ${badgeClass}">${badgeText}</div>
      <div class="score-big-percentage">${percentage}%</div>
      <div class="score-subtitle">You scored <strong>${score} out of ${total}</strong> questions correctly</div>

      <div class="score-metrics-grid">
        <div class="metric-tile correct">
          <div class="metric-lbl">Correct Answers</div>
          <div class="metric-val">✓ ${score}</div>
        </div>
        <div class="metric-tile incorrect">
          <div class="metric-lbl">Incorrect Answers</div>
          <div class="metric-val">✕ ${incorrect}</div>
        </div>
        <div class="metric-tile">
          <div class="metric-lbl">Skipped / Left</div>
          <div class="metric-val">⏱ ${skipped}</div>
        </div>
        <div class="metric-tile">
          <div class="metric-lbl">Total Questions</div>
          <div class="metric-val">📋 ${total}</div>
        </div>
        <div class="metric-tile">
          <div class="metric-lbl">Accuracy Rate</div>
          <div class="metric-val">🎯 ${accuracy}%</div>
        </div>
        <div class="metric-tile time">
          <div class="metric-lbl">Time Taken</div>
          <div class="metric-val">⏳ ${timeFormatted}</div>
        </div>
      </div>

      <div class="score-feedback-box">
        <strong>HR Policy Evaluation &amp; Feedback:</strong>
        ${getScoreSuggestions(percentage)}
      </div>

      ${attemptsHtml}

      <div class="score-actions-group">
        <button id="scoreRetakeBtn" type="button" class="btn-score-action primary">↻ Retake Assessment</button>
        <button id="scoreHomeBtn" type="button" class="btn-score-action secondary">← Back to Dashboard</button>
        <button id="scorePrintBtn" type="button" class="btn-score-action outline">🖨 Print Score Card</button>
      </div>
    </div>
  `;
}

function getScoreSuggestions(percentage) {
  if (percentage >= 80) {
    return `
      <div>- Excellent understanding of workplace policies, shift timings, and compliance rules.</div>
      <div>- You are well prepared to complete your self-service onboarding milestones.</div>
      <div>- Proceed to the 30-Day roadmap checkpoints with confidence.</div>
    `;
  }

  if (percentage >= 50) {
    return `
      <div>- Satisfactory attempt, but review missed policy areas before completing roadmaps.</div>
      <div>- Focus on shift timings, leave applications (at least 2 days in advance), and IT security policies.</div>
      <div>- You can consult the AI Assistant for quick policy clarifications anytime.</div>
    `;
  }

  return `
    <div>- Please review the onboarding documents carefully.</div>
    <div>- Pay special attention to office timings (6 AM - 9 PM), annual leave allotments (18 paid leaves), and data security.</div>
    <div>- Ask the assistant questions on any policy area and retake the assessment when ready.</div>
  `;
}

function showAboutTest() {
  openExamModal("aboutTestModal");
}

function showInstructionsFromButton() {
  openExamModal("instructionsModal");
}

function getAnsweredCount() {
  return examAnswers.filter((answer) => Boolean(answer)).length;
}

function getReviewedCount() {
  return reviewedQuestions.filter(Boolean).length;
}

function updateExamOverview() {
  const answered = getAnsweredCount();
  const visited = visitedQuestions.filter(Boolean).length;
  const reviewed = getReviewedCount();

  if (totalQuestionsCount) totalQuestionsCount.textContent = quizQuestions.length;
  if (visitedCount) visitedCount.textContent = visited;
  if (notVisitedCount) notVisitedCount.textContent = quizQuestions.length - visited;
  if (answeredCount) answeredCount.textContent = answered;
  if (reviewedCount) reviewedCount.textContent = reviewed;
  if (notAnsweredCount) notAnsweredCount.textContent = quizQuestions.length - answered;
}

function renderQuestionPalette() {
  if (!questionPalette) return;
  questionPalette.innerHTML = "";

  quizQuestions.forEach((question, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = index + 1;
    button.className = "palette-btn";

    if (index === currentQuestionIndex) {
      button.classList.add("current");
    }

    if (reviewedQuestions[index]) {
      button.classList.add("reviewed");
    } else if (examAnswers[index]) {
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
  if (!examTimer) return;
  const minutes = Math.floor(timerSeconds / 60);
  const seconds = timerSeconds % 60;
  examTimer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  if (timerSeconds <= 120 && examStarted) {
    examTimer.classList.add("timer-warning");
  } else {
    examTimer.classList.remove("timer-warning");
  }
}

function getOptionList(optionsText) {
  return [
    { value: "a", text: optionsText.split("  B.")[0].trim() },
    { value: "b", text: "B. " + optionsText.split("  B.")[1].split("  C.")[0].trim() },
    { value: "c", text: "C. " + optionsText.split("  C.")[1].trim() }
  ];
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

if (submitAnswerBtn) {
  submitAnswerBtn.addEventListener("click", () => {
    if (examStarted) openSubmitConfirmModal();
  });
}

if (bottomReviewBtn) {
  bottomReviewBtn.addEventListener("click", () => {
    if (examStarted) openSubmitConfirmModal();
  });
}

if (prevQuestionBtn) {
  prevQuestionBtn.addEventListener("click", () => {
    goToPrevQuestion();
  });
}

if (nextQuestionBtn) {
  nextQuestionBtn.addEventListener("click", () => {
    goToNextQuestion();
  });
}

if (markReviewBtn) {
  markReviewBtn.addEventListener("click", () => {
    toggleMarkForReview();
  });
}

if (clearAnswerBtn) {
  clearAnswerBtn.addEventListener("click", () => {
    clearCurrentAnswer();
  });
}

if (modalConfirmSubmitBtn) {
  modalConfirmSubmitBtn.addEventListener("click", () => {
    submitFinalExam();
  });
}

if (modalConfirmExitBtn) {
  modalConfirmExitBtn.addEventListener("click", () => {
    closeExamModals();
    stopExamTimer();
    examStarted = false;
    showMenu(window._examPreviousMenu || "home");
  });
}

document.querySelectorAll("[data-close]").forEach((btn) => {
  btn.addEventListener("click", () => {
    closeExamModals();
  });
});

clearTasksBtn.addEventListener("click", () => {
  tasks = [];
  saveTasks();
  renderTasks();
  addMessage("bot", "All onboarding tasks have been cleared.");
});

backToChatBtn.addEventListener("click", () => {
  if (examStarted) {
    openExamModal("exitConfirmModal");
  } else {
    stopExamTimer();
    // Navigate back to where the user came from (home by default)
    showMenu(window._examPreviousMenu || "home");
  }
});

// Breadcrumb back arrow – same behaviour as the Exit button
const breadcrumbBackBtn = document.getElementById("breadcrumbBackBtn");
if (breadcrumbBackBtn) {
  breadcrumbBackBtn.addEventListener("click", () => {
    if (examStarted) {
      openExamModal("exitConfirmModal");
    } else {
      stopExamTimer();
      showMenu(window._examPreviousMenu || "home");
    }
  });
}

aboutTestBtn.addEventListener("click", () => {
  showAboutTest();
});

readInstructionsBtn.addEventListener("click", () => {
  showInstructionsFromButton();
});

// Keyboard Navigation for Exam Experience
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeExamModals();
    return;
  }

  if (!examStarted) return;
  if (document.activeElement && (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA")) {
    return;
  }

  const key = e.key.toLowerCase();
  if (key === "1" || key === "a") {
    selectOptionByValue("a");
  } else if (key === "2" || key === "b") {
    selectOptionByValue("b");
  } else if (key === "3" || key === "c") {
    selectOptionByValue("c");
  } else if (e.key === "ArrowLeft") {
    goToPrevQuestion();
  } else if (e.key === "ArrowRight" || e.key === "Enter") {
    goToNextQuestion();
  } else if (key === "m") {
    toggleMarkForReview();
  }
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
updateHomeMetrics();
showMenu("home");

document.querySelectorAll("[data-goto]").forEach((btn) => {
  btn.addEventListener("click", () => {
    showMenu(btn.dataset.goto);
  });
});

addMessage(
  "bot",
  "Hi! 👋 Welcome aboard! I'm your HR Onboarding Assistant. I can help you with:\n\n• Answering questions about benefits, IT setup & policies\n• Creating onboarding tasks\n• Checking your task status\n\nHow can I help you today?"
);


// ========================================================
// FIRST-TIME GUIDED TOUR & MODE EXPLAINER
// ========================================================

(function initGuidedTour() {
  const STORAGE_KEY = "hr_guided_tour_completed";
  const overlay = document.getElementById("tourOverlay");
  const spotlight = document.getElementById("tourSpotlight");
  const tooltip = document.getElementById("tourTooltip");
  const stepLabel = document.getElementById("tourStepLabel");
  const iconEl = document.getElementById("tourIcon");
  const titleEl = document.getElementById("tourTitle");
  const descEl = document.getElementById("tourDesc");
  const dotsContainer = document.getElementById("tourDots");
  const prevBtn = document.getElementById("tourPrevBtn");
  const nextBtn = document.getElementById("tourNextBtn");
  const skipBtn = document.getElementById("tourSkipBtn");

  if (!overlay || !spotlight || !tooltip) return;

  // Tour Steps: explains every mode by navigating directly to its source!
  const tourSteps = [
    {
      menu: "home",
      targetSelector: ".home-hero-card",
      icon: "👋",
      title: "Welcome to Your Onboarding Hub!",
      desc: "This is your Home base. Here you get an instant overview of your onboarding progress, open tasks, policy assessment status, and quick-action shortcuts."
    },
    {
      menu: "home",
      targetSelector: ".home-status-card",
      icon: "📊",
      title: "Live Onboarding Tracker",
      desc: "Track your tasks and completion percentage in real-time. This status widget syncs continuously as you complete checklist items."
    },
    {
      menu: "home",
      targetSelector: ".home-pathways-grid",
      icon: "🧭",
      title: "3 Core Onboarding Pathways",
      desc: "Quickly access the AI Onboarding Buddy, your interactive Task Tracker, or the Policy Assessment with a single click."
    },
    {
      menu: "home",
      targetSelector: "#quickReference",
      icon: "📖",
      title: "Workplace Quick Reference",
      desc: "Essential Day-1 answers at your fingertips: shift timings, leave allotments (18 paid leaves), IT credentials, and floor-wise navigation."
    },
    {
      menu: "chat",
      targetSelector: ".chat-panel",
      icon: "🤖",
      title: "AI Chat Assistant Mode",
      desc: "Ask any onboarding or policy question! The AI answers grounded strictly in official company documents. You can also use voice input via the 🎤 microphone."
    },
    {
      menu: "chat",
      targetSelector: ".task-panel",
      icon: "✅",
      title: "Task Tracker & Daily Updates Mode",
      desc: "Add personal onboarding tasks, track progress percentages, and log daily work notes. You can also tell the bot 'mark ID proof done' directly in chat!"
    },
    {
      menu: "exam",
      targetSelector: ".exam-card",
      icon: "🎓",
      title: "Policy Assessment Exam Mode",
      desc: "Complete your required 20-minute onboarding assessment. Answer 30 policy questions, use Mark for Review, and receive an instant score certification with zero answer leaks."
    },
    {
      menu: "home",
      targetSelector: "#menuTabs",
      icon: "🚀",
      title: "You're All Set to Go!",
      desc: "Switch between Home, Chat & Tasks, and Quiz Exam anytime using these top tabs, or toggle Dark Mode on the right. Welcome to the team!"
    }
  ];

  let currentStep = 0;

  function startTour() {
    overlay.style.display = "block";
    goToStep(0);
  }

  // Make startTour available globally
  window.startTour = startTour;

  // Check if previously completed on initial page load
  try {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      overlay.style.display = "none";
    } else {
      overlay.style.display = "block";
      goToStep(0);
    }
  } catch (e) {
    overlay.style.display = "block";
    goToStep(0);
  }

  // Build Dots
  if (dotsContainer) {
    dotsContainer.innerHTML = "";
    tourSteps.forEach((_, idx) => {
      const dot = document.createElement("span");
      dot.className = "tour-dot" + (idx === 0 ? " active" : "");
      dot.addEventListener("click", () => goToStep(idx));
      dotsContainer.appendChild(dot);
    });
  }

  function updateDots(index) {
    if (!dotsContainer) return;
    const dots = dotsContainer.querySelectorAll(".tour-dot");
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
  }

  function positionSpotlightAndTooltip(targetEl) {
    if (!targetEl) {
      // Fallback: center spotlight in window
      spotlight.style.top = "20%";
      spotlight.style.left = "20%";
      spotlight.style.width = "60%";
      spotlight.style.height = "50%";

      tooltip.style.top = "50%";
      tooltip.style.left = "50%";
      tooltip.style.transform = "translate(-50%, -50%)";
      return;
    }

    const rect = targetEl.getBoundingClientRect();
    const padding = 8;
    const spotTop = Math.max(0, rect.top - padding);
    const spotLeft = Math.max(0, rect.left - padding);
    const spotWidth = rect.width + padding * 2;
    const spotHeight = rect.height + padding * 2;

    spotlight.style.top = `${spotTop}px`;
    spotlight.style.left = `${spotLeft}px`;
    spotlight.style.width = `${spotWidth}px`;
    spotlight.style.height = `${spotHeight}px`;

    // Tooltip stays locked at the TOP center of screen at all times (CSS handles top: 20px, left: 50%)
    tooltip.style.top = "20px";
    tooltip.style.left = "50%";
    tooltip.style.transform = "translateX(-50%)";
  }

  function scrollToTargetAndPosition(targetEl) {
    if (!targetEl) {
      positionSpotlightAndTooltip(null);
      return;
    }

    // Smoothly scroll target into the lower/middle half of viewport so top instruction card never obstructs it
    targetEl.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });

    // Update spotlight boundaries as page scrolls
    setTimeout(() => positionSpotlightAndTooltip(targetEl), 60);
    setTimeout(() => positionSpotlightAndTooltip(targetEl), 180);
    setTimeout(() => positionSpotlightAndTooltip(targetEl), 350);
  }

  function goToStep(index) {
    if (index < 0 || index >= tourSteps.length) return;
    currentStep = index;
    const step = tourSteps[index];

    // 1. Switch to the target mode/menu if needed!
    if (typeof showMenu === "function") {
      showMenu(step.menu);
    }

    // 2. Update step labels & content
    if (stepLabel) stepLabel.textContent = `Step ${index + 1} of ${tourSteps.length}`;
    if (iconEl) iconEl.textContent = step.icon;
    if (titleEl) titleEl.textContent = step.title;
    if (descEl) descEl.textContent = step.desc;

    // 3. Update nav buttons
    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) {
      if (index === tourSteps.length - 1) {
        nextBtn.textContent = "Finish Tour 🎉";
      } else {
        nextBtn.textContent = "Next Mode →";
      }
    }
    updateDots(index);

    // 4. Highlight target element
    setTimeout(() => {
      const targetEl = document.querySelector(step.targetSelector);
      scrollToTargetAndPosition(targetEl);
    }, 140);
  }

  function closeTour() {
    overlay.style.display = "none";
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch (e) {}
    // Return user to Home page when tour ends
    if (typeof showMenu === "function") {
      showMenu("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  // Keep spotlight and tooltip locked onto element while user manually scrolls or resizes
  function syncOnUserScroll() {
    if (overlay.style.display === "block") {
      const step = tourSteps[currentStep];
      if (step) {
        const targetEl = document.querySelector(step.targetSelector);
        if (targetEl) {
          positionSpotlightAndTooltip(targetEl);
        }
      }
    }
  }

  window.addEventListener("scroll", syncOnUserScroll, { passive: true });
  window.addEventListener("resize", syncOnUserScroll, { passive: true });

  // Event Listeners
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (currentStep < tourSteps.length - 1) {
        goToStep(currentStep + 1);
      } else {
        closeTour();
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentStep > 0) {
        goToStep(currentStep - 1);
      }
    });
  }

  if (skipBtn) {
    skipBtn.addEventListener("click", () => {
      closeTour();
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (overlay.style.display !== "block") return;
    if (e.key === "Escape") {
      closeTour();
    } else if (e.key === "ArrowRight") {
      if (currentStep < tourSteps.length - 1) goToStep(currentStep + 1);
    } else if (e.key === "ArrowLeft") {
      if (currentStep > 0) goToStep(currentStep - 1);
    }
  });

  // Allow re-triggering the tour from the top navigation button
  const startTourBtn = document.getElementById("startTourBtn");
  if (startTourBtn) {
    startTourBtn.addEventListener("click", () => {
      startTour();
    });
  }
})();



// ========================================================
// AUTHENTICATION SYSTEM (SIGN IN, REGISTER & SESSION)
// ========================================================

(function initAuthSystem() {
  const USERS_STORAGE_KEY = "hr_registered_users";
  const CURRENT_USER_KEY = "hr_current_user";

  // Elements
  const authModalOverlay = document.getElementById("authModalOverlay");
  const authModalCloseBtn = document.getElementById("authModalCloseBtn");
  const navAuthBtn = document.getElementById("navAuthBtn");
  const authNavContainer = document.getElementById("authNavContainer");
  const tabSignInBtn = document.getElementById("tabSignInBtn");
  const tabRegisterBtn = document.getElementById("tabRegisterBtn");
  const signInForm = document.getElementById("signInForm");
  const registerForm = document.getElementById("registerForm");
  const authAlertBanner = document.getElementById("authAlertBanner");
  const authSwitchPrompt = document.getElementById("authSwitchPrompt");
  const quickDemoLoginBtn = document.getElementById("quickDemoLoginBtn");
  const homeUserName = document.getElementById("homeUserName");
  const homeUserRole = document.getElementById("homeUserRole");
  const homeUserAvatar = document.getElementById("homeUserAvatar");

  // Load existing registered accounts from localStorage or seed with default
  function getRegisteredUsers() {
    try {
      const stored = localStorage.getItem(USERS_STORAGE_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    // Seed standard demo user
    const defaultUsers = [
      {
        fullName: "Alex Mercer",
        empId: "EMP-1042",
        email: "alex.mercer@company.com",
        dept: "Software Development",
        shift: "Shift 1",
        password: "password123"
      }
    ];
    saveRegisteredUsers(defaultUsers);
    return defaultUsers;
  }

  function saveRegisteredUsers(users) {
    try {
      localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
    } catch (e) {}
  }

  function getCurrentUser() {
    try {
      const stored = localStorage.getItem(CURRENT_USER_KEY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return null;
  }

  function setCurrentUser(user) {
    try {
      if (user) {
        localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(CURRENT_USER_KEY);
      }
    } catch (e) {}
    renderAuthState();
  }

  function showAlert(message, isError = true) {
    if (!authAlertBanner) return;
    authAlertBanner.textContent = message;
    authAlertBanner.className = "auth-alert-banner " + (isError ? "error" : "success");
    authAlertBanner.style.display = "block";
  }

  function hideAlert() {
    if (authAlertBanner) authAlertBanner.style.display = "none";
  }

  function switchAuthTab(mode) {
    hideAlert();
    if (mode === "signin") {
      tabSignInBtn.classList.add("active");
      tabRegisterBtn.classList.remove("active");
      signInForm.style.display = "flex";
      registerForm.style.display = "none";
      if (authSwitchPrompt) {
        authSwitchPrompt.innerHTML = 'Need an account? <a href="#" id="authSwitchLink">Register here</a>';
        const link = document.getElementById("authSwitchLink");
        if (link) link.addEventListener("click", (e) => { e.preventDefault(); switchAuthTab("register"); });
      }
    } else {
      tabRegisterBtn.classList.add("active");
      tabSignInBtn.classList.remove("active");
      registerForm.style.display = "flex";
      signInForm.style.display = "none";
      if (authSwitchPrompt) {
        authSwitchPrompt.innerHTML = 'Already registered? <a href="#" id="authSwitchLink">Sign In here</a>';
        const link = document.getElementById("authSwitchLink");
        if (link) link.addEventListener("click", (e) => { e.preventDefault(); switchAuthTab("signin"); });
      }
    }
  }

  function openAuthModal(defaultMode = "signin") {
    if (!authModalOverlay) return;
    switchAuthTab(defaultMode);
    authModalOverlay.style.display = "flex";
  }

  function closeAuthModal() {
    if (!authModalOverlay) return;
    authModalOverlay.style.display = "none";
    hideAlert();
  }

  // Update navbar & user status profile card
  function renderAuthState() {
    const user = getCurrentUser();

    // 1. Navbar right action controls
    if (authNavContainer) {
      if (user) {
        authNavContainer.innerHTML = `
          <div class="user-badge-wrap" title="${user.email} (${user.dept})">
            <span>👤</span>
            <strong>${user.fullName}</strong>
            <button id="navLogoutBtn" type="button" class="nav-logout-btn" title="Sign out">Log Out</button>
          </div>
        `;
        const logoutBtn = document.getElementById("navLogoutBtn");
        if (logoutBtn) {
          logoutBtn.addEventListener("click", () => {
            setCurrentUser(null);
            if (typeof addMessage === "function") {
              addMessage("bot", "You have signed out. Sign back in anytime to continue your onboarding records.");
            }
          });
        }
      } else {
        authNavContainer.innerHTML = `
          <button id="navAuthBtn" type="button" class="nav-auth-btn" title="Sign In or Create Account">🔐 Sign In</button>
        `;
        const authBtn = document.getElementById("navAuthBtn");
        if (authBtn) {
          authBtn.addEventListener("click", () => openAuthModal("signin"));
        }
      }
    }

    // 2. Home status profile card
    if (homeUserName) {
      homeUserName.textContent = user ? user.fullName : "New Team Member";
    }
    if (homeUserRole) {
      homeUserRole.textContent = user ? `${user.dept} • ${user.shift}` : "Onboarding Phase 1 (Active)";
    }
    if (homeUserAvatar) {
      homeUserAvatar.textContent = user ? "👨‍💼" : "👋";
    }
  }

  // Handle Sign In submission
  if (signInForm) {
    signInForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const loginId = document.getElementById("loginEmail").value.trim().toLowerCase();
      const password = document.getElementById("loginPassword").value;

      const users = getRegisteredUsers();
      const matched = users.find(u => 
        (u.email.toLowerCase() === loginId || u.empId.toLowerCase() === loginId) && 
        u.password === password
      );

      if (matched) {
        setCurrentUser(matched);
        showAlert(`Welcome back, ${matched.fullName}! Authenticated successfully.`, false);
        setTimeout(() => {
          closeAuthModal();
          if (typeof addMessage === "function") {
            addMessage("bot", `Welcome back, ${matched.fullName}! You are signed in as a verified team member (${matched.dept}).`);
          }
        }, 600);
      } else {
        showAlert("Invalid email/ID or password. Try the Demo Account below or Register.");
      }
    });
  }

  // Handle Quick Demo Login
  if (quickDemoLoginBtn) {
    quickDemoLoginBtn.addEventListener("click", () => {
      const users = getRegisteredUsers();
      const alex = users[0] || {
        fullName: "Alex Mercer",
        empId: "EMP-1042",
        email: "alex.mercer@company.com",
        dept: "Software Development",
        shift: "Shift 1",
        password: "password123"
      };
      setCurrentUser(alex);
      closeAuthModal();
      if (typeof addMessage === "function") {
        addMessage("bot", `Signed in as Demo Employee: Alex Mercer (${alex.dept}).`);
      }
    });
  }

  // Handle Register submission
  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fullName = document.getElementById("regFullName").value.trim();
      const empId = document.getElementById("regEmpId").value.trim().toUpperCase();
      const email = document.getElementById("regEmail").value.trim().toLowerCase();
      const dept = document.getElementById("regDept").value;
      const shift = document.getElementById("regShift").value;
      const password = document.getElementById("regPassword").value;
      const confirmPassword = document.getElementById("regPasswordConfirm").value;

      if (password !== confirmPassword) {
        showAlert("Passwords do not match. Please re-enter.");
        return;
      }

      const users = getRegisteredUsers();
      const exists = users.find(u => u.email.toLowerCase() === email || u.empId.toLowerCase() === empId);

      if (exists) {
        showAlert("An employee account with this Email or ID already exists. Please Sign In.");
        return;
      }

      const newUser = {
        fullName,
        empId,
        email,
        dept,
        shift,
        password
      };

      users.push(newUser);
      saveRegisteredUsers(users);
      setCurrentUser(newUser);

      showAlert(`Account created! Welcome to the team, ${fullName}.`, false);
      setTimeout(() => {
        closeAuthModal();
        if (typeof addMessage === "function") {
          addMessage("bot", `Congratulations ${fullName}! Your employee account (${empId}) is registered and signed in. All task and quiz milestones are linked to your profile.`);
        }
      }, 700);
    });
  }

  // Tabs Click
  if (tabSignInBtn) tabSignInBtn.addEventListener("click", () => switchAuthTab("signin"));
  if (tabRegisterBtn) tabRegisterBtn.addEventListener("click", () => switchAuthTab("register"));
  if (authModalCloseBtn) authModalCloseBtn.addEventListener("click", closeAuthModal);
  if (navAuthBtn) navAuthBtn.addEventListener("click", () => openAuthModal("signin"));

  // Toggle Password Visibility Eye buttons
  document.querySelectorAll(".toggle-password-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const targetId = btn.dataset.target;
      const input = document.getElementById(targetId);
      if (input) {
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        btn.textContent = isPassword ? "🙈" : "👁";
      }
    });
  });

  // Close Auth Modal on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && authModalOverlay.style.display === "flex") {
      closeAuthModal();
    }
  });

  // Initial render
  renderAuthState();
})();


// ========================================================
// ADMIN AUTHENTICATION & CONSOLE SYSTEM
// ========================================================

(function initAdminSystem() {
  // ── Credentials ──────────────────────────────────────────
  const ADMIN_CREDENTIALS = {
    emails:   ["admin@company.com", "adm-001"],
    password: "masterAdmin2026!",
    pin:      "998877",
    authCode: "SEC-HR-2026",
    fullName: "Dr. Evelyn Vance",
    title:    "HR Director",
    role:     "admin"
  };

  const ADMIN_SESSION_KEY  = "hr_admin_session";
  const AUDIT_LOG_KEY      = "hr_admin_audit_log";
  const USERS_STORAGE_KEY  = "hr_registered_users";
  const EXAM_SCORES_KEY    = "hr_exam_scores";

  // ── DOM references ────────────────────────────────────────
  const tabAdminBtn         = document.getElementById("tabAdminBtn");
  const tabSignInBtn2       = document.getElementById("tabSignInBtn");
  const tabRegisterBtn2     = document.getElementById("tabRegisterBtn");
  const adminLoginForm      = document.getElementById("adminLoginForm");
  const signInForm2         = document.getElementById("signInForm");
  const registerForm2       = document.getElementById("registerForm");
  const authAlertBanner2    = document.getElementById("authAlertBanner");
  const quickDemoAdminBtn   = document.getElementById("quickDemoAdminBtn");
  const adminNavBtn         = document.getElementById("adminNavBtn");
  const adminLogoutBtn      = document.getElementById("adminLogoutBtn");
  const adminConsoleName    = document.getElementById("adminConsoleName");
  const adminConsoleRole    = document.getElementById("adminConsoleRole");
  const adminStatTotal      = document.getElementById("adminStatTotal");
  const adminStatActive     = document.getElementById("adminStatActive");
  const adminStatPending    = document.getElementById("adminStatPending");
  const adminStatAvgScore   = document.getElementById("adminStatAvgScore");
  const adminTableBody      = document.getElementById("adminEmployeeTableBody");
  const adminAuditLog       = document.getElementById("adminAuditLog");
  const adminRefreshBtn     = document.getElementById("adminRefreshBtn");
  const adminClearScoresBtn = document.getElementById("adminClearScoresBtn");
  const adminClearUsersBtn  = document.getElementById("adminClearUsersBtn");

  // ── Audit helpers ─────────────────────────────────────────
  function getAuditLog() {
    try { return JSON.parse(localStorage.getItem(AUDIT_LOG_KEY) || "[]"); } catch (e) { return []; }
  }

  function pushAuditLog(message, level) {
    level = level || "info";
    var log = getAuditLog();
    var ts  = new Date().toLocaleString();
    log.push({ ts: ts, message: message, level: level });
    if (log.length > 60) log.splice(0, log.length - 60);
    try { localStorage.setItem(AUDIT_LOG_KEY, JSON.stringify(log)); } catch (e) {}
    renderAuditLog();
  }

  function renderAuditLog() {
    if (!adminAuditLog) return;
    var log = getAuditLog();
    if (!log.length) {
      adminAuditLog.innerHTML = '<p class="admin-audit-empty">No audit events recorded yet.</p>';
      return;
    }
    adminAuditLog.innerHTML = log.slice().reverse().map(function(e) {
      var cls = e.level === "warn" ? "warn" : e.level === "danger" ? "danger" : "";
      return '<div class="audit-entry ' + cls + '">[' + e.ts + '] ' + e.message + '</div>';
    }).join("");
  }

  // ── Admin session helpers ─────────────────────────────────
  function getAdminSession() {
    try { return JSON.parse(localStorage.getItem(ADMIN_SESSION_KEY)); } catch (e) { return null; }
  }

  function setAdminSession(data) {
    try {
      if (data) localStorage.setItem(ADMIN_SESSION_KEY, JSON.stringify(data));
      else       localStorage.removeItem(ADMIN_SESSION_KEY);
    } catch (e) {}
  }

  // ── Registered users / exam scores ────────────────────────
  function getRegisteredUsers() {
    try { return JSON.parse(localStorage.getItem(USERS_STORAGE_KEY) || "[]"); } catch (e) { return []; }
  }

  function saveRegisteredUsers(users) {
    try { localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users)); } catch (e) {}
  }

  function getExamScores() {
    try { return JSON.parse(localStorage.getItem(EXAM_SCORES_KEY) || "{}"); } catch (e) { return {}; }
  }

  // ── Alert helpers ─────────────────────────────────────────
  function showAlert(msg, isError) {
    if (isError === undefined) isError = true;
    if (!authAlertBanner2) return;
    authAlertBanner2.textContent   = msg;
    authAlertBanner2.className     = "auth-alert-banner " + (isError ? "error" : "success");
    authAlertBanner2.style.display = "block";
  }

  function hideAlert() {
    if (authAlertBanner2) authAlertBanner2.style.display = "none";
  }

  // ── Auth modal close helper ───────────────────────────────
  function closeAuthModal() {
    var overlay = document.getElementById("authModalOverlay");
    if (overlay) overlay.style.display = "none";
    hideAlert();
  }

  // ── Tab switcher ──────────────────────────────────────────
  function switchToAdminTab() {
    hideAlert();
    if (tabAdminBtn)     tabAdminBtn.classList.add("active");
    if (tabSignInBtn2)   tabSignInBtn2.classList.remove("active");
    if (tabRegisterBtn2) tabRegisterBtn2.classList.remove("active");
    if (adminLoginForm)  adminLoginForm.style.display = "flex";
    if (signInForm2)     signInForm2.style.display    = "none";
    if (registerForm2)   registerForm2.style.display  = "none";
  }

  // Patch existing tabs so clicking Sign In / Register deselects Admin tab
  if (tabSignInBtn2) {
    tabSignInBtn2.addEventListener("click", function() {
      if (tabAdminBtn) tabAdminBtn.classList.remove("active");
      if (adminLoginForm) adminLoginForm.style.display = "none";
    });
  }
  if (tabRegisterBtn2) {
    tabRegisterBtn2.addEventListener("click", function() {
      if (tabAdminBtn) tabAdminBtn.classList.remove("active");
      if (adminLoginForm) adminLoginForm.style.display = "none";
    });
  }
  // ── Tab click navigates directly to /adminlogin page ────
  if (tabAdminBtn) {
    tabAdminBtn.addEventListener("click", function(e) {
      // Direct navigation to dedicated page
      window.location.href = "adminlogin/";
    });
  }

  // ── Validate admin credentials ────────────────────────────
  function doAdminLogin(email, password, pin, authCode) {
    var emailNorm = email.trim().toLowerCase();
    var isEmail   = ADMIN_CREDENTIALS.emails.indexOf(emailNorm) !== -1;
    var isPass    = password === ADMIN_CREDENTIALS.password;
    var isPin     = pin === ADMIN_CREDENTIALS.pin;
    var isAuth    = authCode.trim().toUpperCase() === ADMIN_CREDENTIALS.authCode;

    if (!isEmail) {
      showAlert("❌ Invalid Admin System ID or Email.");
      pushAuditLog("FAILED login — unknown identifier: " + emailNorm, "danger");
      return false;
    }
    if (!isPass) {
      showAlert("❌ Incorrect Master Admin Password.");
      pushAuditLog("FAILED login — wrong password.", "danger");
      return false;
    }
    if (!isPin) {
      showAlert("❌ Security PIN does not match.");
      pushAuditLog("FAILED login — wrong PIN.", "danger");
      return false;
    }
    if (!isAuth) {
      showAlert("❌ Department Authority Key invalid. Expected: SEC-HR-2026");
      pushAuditLog("FAILED login — wrong authority key.", "danger");
      return false;
    }
    return true;
  }

  // ── Start admin session & show console ────────────────────
  function loginAsAdmin() {
    var session = {
      fullName:  ADMIN_CREDENTIALS.fullName,
      title:     ADMIN_CREDENTIALS.title,
      role:      "admin",
      loginTime: new Date().toLocaleString()
    };
    setAdminSession(session);
    pushAuditLog("ADMIN LOGIN — " + session.fullName + " authenticated successfully.");
    applyAdminUIState(session);
  }

  function applyAdminUIState(session) {
    // Show admin nav button
    if (adminNavBtn) adminNavBtn.style.display = "inline-flex";

    // Update console header
    if (adminConsoleName) adminConsoleName.textContent = session.title + " — " + session.fullName;
    if (adminConsoleRole) adminConsoleRole.textContent = "System Administrator • Full Permissions Active";

    // Populate data
    renderAdminConsole();

    // Close auth modal and go to admin page
    closeAuthModal();
    if (typeof showMenu === "function") showMenu("admin");
  }

  // ── Render console data ───────────────────────────────────
  function renderAdminConsole() {
    var users  = getRegisteredUsers();
    var scores = getExamScores();

    var total      = users.length;
    var scoreVals  = users.map(function(u) { return scores[u.empId] !== undefined ? scores[u.empId] : null; })
                          .filter(function(v) { return v !== null; });
    var avg        = scoreVals.length
      ? Math.round(scoreVals.reduce(function(a, b) { return a + b; }, 0) / scoreVals.length)
      : null;

    if (adminStatTotal)    adminStatTotal.textContent    = total;
    if (adminStatActive)   adminStatActive.textContent   = total;
    if (adminStatPending)  adminStatPending.textContent  = 0;
    if (adminStatAvgScore) adminStatAvgScore.textContent = avg !== null ? avg + "%" : "—";

    if (!adminTableBody) return;
    if (!users.length) {
      adminTableBody.innerHTML = '<tr><td colspan="8" class="admin-table-empty">No employee records found.</td></tr>';
      renderAuditLog();
      return;
    }

    adminTableBody.innerHTML = users.map(function(u, i) {
      var score = scores[u.empId] !== undefined ? scores[u.empId] + "%" : "Not Taken";
      return '<tr>' +
        '<td>' + (i + 1) + '</td>' +
        '<td><strong>' + u.fullName + '</strong></td>' +
        '<td>' + u.empId + '</td>' +
        '<td>' + u.email + '</td>' +
        '<td>' + u.dept + '</td>' +
        '<td>' + u.shift + '</td>' +
        '<td>' + score + '</td>' +
        '<td>' +
          '<button class="admin-action-btn" onclick="adminResetScore(\'' + u.empId + '\')">Reset Score</button>' +
          '<button class="admin-action-btn remove" onclick="adminRemoveUser(\'' + u.empId + '\')">Remove</button>' +
        '</td>' +
        '</tr>';
    }).join("");

    renderAuditLog();
  }

  // ── Global action handlers (inline onclick) ───────────────
  window.adminResetScore = function(empId) {
    var scores = getExamScores();
    if (scores[empId] !== undefined) {
      delete scores[empId];
      try { localStorage.setItem(EXAM_SCORES_KEY, JSON.stringify(scores)); } catch (e) {}
      pushAuditLog("SCORE RESET — " + empId + " exam score removed.", "warn");
      renderAdminConsole();
    } else {
      alert("No exam score on record for " + empId + ".");
    }
  };

  window.adminRemoveUser = function(empId) {
    if (!confirm("Remove employee " + empId + " from the registry? This cannot be undone.")) return;
    var users = getRegisteredUsers().filter(function(u) { return u.empId !== empId; });
    saveRegisteredUsers(users);
    // If removed user is currently signed in, sign them out
    try {
      var cur = JSON.parse(localStorage.getItem("hr_current_user"));
      if (cur && cur.empId === empId) localStorage.removeItem("hr_current_user");
    } catch (e) {}
    pushAuditLog("USER REMOVED — " + empId + " deleted from registry.", "danger");
    renderAdminConsole();
  };

  // ── Form submit handler ───────────────────────────────────
  if (adminLoginForm) {
    adminLoginForm.addEventListener("submit", function(e) {
      e.preventDefault();
      var email    = (document.getElementById("adminEmail")    || {}).value || "";
      var password = (document.getElementById("adminPassword") || {}).value || "";
      var pin      = (document.getElementById("adminPin")      || {}).value || "";
      var authCode = (document.getElementById("adminAuthCode") || {}).value || "";

      if (doAdminLogin(email, password, pin, authCode)) {
        showAlert("✅ Credentials verified. Launching Admin Console…", false);
        setTimeout(function() { loginAsAdmin(); }, 700);
      }
    });
  }

  // ── Quick Demo admin login ────────────────────────────────
  if (quickDemoAdminBtn) {
    quickDemoAdminBtn.addEventListener("click", function() {
      loginAsAdmin();
    });
  }

  // ── Control buttons ───────────────────────────────────────
  if (adminRefreshBtn) {
    adminRefreshBtn.addEventListener("click", function() {
      renderAdminConsole();
      pushAuditLog("REFRESH — Console data refreshed by admin.");
    });
  }

  if (adminClearScoresBtn) {
    adminClearScoresBtn.addEventListener("click", function() {
      if (!confirm("Reset ALL employee exam scores? This cannot be undone.")) return;
      try { localStorage.removeItem(EXAM_SCORES_KEY); } catch (e) {}
      pushAuditLog("SCORES CLEARED — All exam scores wiped by admin.", "warn");
      renderAdminConsole();
    });
  }

  if (adminClearUsersBtn) {
    adminClearUsersBtn.addEventListener("click", function() {
      if (!confirm("⚠️ DANGER: Delete entire employee registry? All accounts will be lost.")) return;
      saveRegisteredUsers([]);
      try { localStorage.removeItem("hr_current_user"); } catch (e) {}
      pushAuditLog("REGISTRY CLEARED — All employee accounts deleted by admin.", "danger");
      renderAdminConsole();
    });
  }

  // ── Admin Logout ──────────────────────────────────────────
  if (adminLogoutBtn) {
    adminLogoutBtn.addEventListener("click", function() {
      pushAuditLog("ADMIN LOGOUT — " + ADMIN_CREDENTIALS.fullName + " signed out.");
      setAdminSession(null);
      if (adminNavBtn) adminNavBtn.style.display = "none";
      if (typeof showMenu === "function") showMenu("home");
    });
  }

  // ── Admin nav button ──────────────────────────────────────
  if (adminNavBtn) {
    adminNavBtn.addEventListener("click", function() {
      if (typeof showMenu === "function") showMenu("admin");
    });
  }

  // ── Restore session on page load ──────────────────────────
  var existingSession = getAdminSession();
  if (existingSession) {
    if (adminNavBtn) adminNavBtn.style.display = "inline-flex";
    if (adminConsoleName) adminConsoleName.textContent = existingSession.title + " — " + existingSession.fullName;
    if (adminConsoleRole) adminConsoleRole.textContent = "System Administrator • Full Permissions Active";
    renderAdminConsole();

    // Check if redirected from /adminlogin with ?menu=admin query param
    var urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("menu") === "admin") {
      if (typeof showMenu === "function") {
        showMenu("admin");
      }
    }
  }

})();


// ========================================================
// MODE INSTRUCTION BANNERS — Dismiss & Re-show on Mode Switch
// ========================================================

(function initModeBanners() {

  var chatBanner  = document.getElementById("chatModeInstructions");
  var examBanner  = document.getElementById("examModeInstructions");
  var taskHint    = document.getElementById("taskModeHint");

  var closeChatBtn  = document.getElementById("closeChatBanner");
  var closeExamBtn  = document.getElementById("closeExamBanner");
  var closeTaskBtn  = document.getElementById("closeTaskHint");

  // Dismiss handlers — hide banner for this session (re-shows on next mode visit)
  if (closeChatBtn && chatBanner) {
    closeChatBtn.addEventListener("click", function() {
      chatBanner.style.display = "none";
    });
  }
  if (closeExamBtn && examBanner) {
    closeExamBtn.addEventListener("click", function() {
      examBanner.style.display = "none";
    });
  }
  if (closeTaskBtn && taskHint) {
    closeTaskBtn.addEventListener("click", function() {
      taskHint.style.display = "none";
    });
  }

  // Re-show banners whenever a mode nav button is clicked
  var menuBtns = document.querySelectorAll(".menu-btn[data-menu]");
  menuBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      var mode = btn.dataset.menu;
      if (mode === "chat") {
        if (chatBanner)  chatBanner.style.display  = "";
        if (taskHint)    taskHint.style.display     = "";
      }
      if (mode === "exam") {
        if (examBanner)  examBanner.style.display  = "";
      }
    });
  });

  // Re-show banners whenever home page "data-goto" buttons are clicked
  var gotoButtons = document.querySelectorAll("[data-goto]");
  gotoButtons.forEach(function(btn) {
    btn.addEventListener("click", function() {
      var dest = btn.dataset.goto;
      if (dest === "chat") {
        if (chatBanner) chatBanner.style.display = "";
        if (taskHint)   taskHint.style.display   = "";
      }
      if (dest === "exam") {
        if (examBanner) examBanner.style.display = "";
      }
    });
  });

})();
