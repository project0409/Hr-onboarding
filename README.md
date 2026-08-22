# HR Onboarding Assistant

This is a fully working basic web application using only HTML, CSS, and JavaScript.

## How to Run

Open `index.html` in any browser.

No installation is needed.

## Main Features

- Answers onboarding questions grounded in provided FAQ and policy documents
- Handles common spelling mistakes in onboarding questions
- Work atmosphere section
- Rules and regulations
- Office timings: morning 6:00 AM to evening 9:00 PM
- Shift timings:
  - First Shift: 8:50 AM to 5:50 PM
  - Second Shift: 9:20 AM to 6:30 PM
  - Night Shift: 9:00 PM to 6:00 AM
- Working days: Monday to Saturday
- Weekly holidays: Sunday, 1st Saturday, and 3rd Saturday
- Festival holidays and public holidays list
- Uniform and dress code
- Lunch and break policy
- Leave policy: 18 paid leaves annually, 12 casual and 6 sick, credited monthly
- Leave application through the HR Portal at least 2 days in advance, except sick leave
- Generic `timings` question asks whether the user wants Office Timings or Shift Timings
- Lunch timing: 1:00 PM to 1:45 PM
- Tea breaks: 11:15 AM to 11:30 AM and 4:15 PM to 4:30 PM
- Late-in and early-go rules
- Half-day and LOP leave rules
- Place of work policy
- IT and data security policy
- IT setup and role-based system credentials
- Employment bond policy
- Internal organization structure
- Department types
- Floor-wise department and facility details
- Cabin-wise manager, authority, and employee area details
- Internal navigation for cafeteria, lunch place, washrooms, library, seminar hall, parking, and drinking water
- Floor-to-floor restrictions and access rules
- Company infrastructure and internal policies
- Payroll and joining terms
- Conversational HR chatbot grounded in the provided documents
- Onboarding task creation and status tracking
- Task progress updates
- Daily work updates for each task
- Separate quiz exam menu with final percentage out of 100

## Evaluation Coverage

- Groundedness: answers come from the `documents` array in `script.js`
- Accuracy: each answer cites a source document name in the chat
- Task tracking: tasks are saved in `localStorage` and keep status, progress, and daily updates
- Multi-turn conversation: the bot can ask whether to create a task after messages like `I need to submit ID proof`
- Conversational design: users can ask normal questions like `Where is the cafeteria?`, `What are leave types?`, or `Open task submit ID proof`
- Clean UI: policy details are not shown on the page; users get answers only when they ask the assistant

## Quiz Flow

The user can open the `Quiz Exam` menu or type:

```text
Open quiz exam
```

The exam screen shows one question at a time with answer buttons.

After all questions, the bot gives:

- Correct answers
- Total score
- Percentage out of 100
- Result message

## Task Examples

```text
Create a task to submit ID proof
Show my tasks
Mark submit ID proof done
Open task submit ID proof
Update submit ID proof progress 50
Add daily update submit ID proof uploaded documents today
```

Tasks are stored in browser `localStorage`, so they stay after refreshing the page.

Each task can also be updated from the sidebar:

- Add a task
- Open the task
- Update progress percentage
- Add daily work updates
- Mark the task done
- Delete the task

## File Guide

- `index.html`: page structure
- `style.css`: design and layout
- `script.js`: company policy data, chatbot logic, tasks, and quiz scoring

## Beginner-Friendly Design

All company data is stored in simple JavaScript arrays:

- `documents` contains company policies and answers
- `quizQuestions` contains quiz questions and correct answers
- `tasks` contains onboarding task data

This keeps the project easy to understand and easy to modify.
