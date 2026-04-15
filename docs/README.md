# 📝 Testable Todo Item Card

A clean, modern, and accessible Todo/Task Card component built with a strong focus on **testability**, **accessibility**, and **responsive design**.

---

## 🚀 Concept

This project implements a single Todo Card (or a small page containing one card) that displays key task information such as:

* Title
* Description
* Priority
* Due date
* Time remaining
* Status
* Tags

It is designed to be easily testable using `data-testid` attributes and follows best practices in semantic HTML and accessibility.

---

## 🧪 Required Test IDs

All elements include exact `data-testid` values for automated testing:

| Element         | data-testid                                  |
| --------------- | -------------------------------------------- |
| Root Card       | `test-todo-card`                             |
| Title           | `test-todo-title`                            |
| Description     | `test-todo-description`                      |
| Priority        | `test-todo-priority`                         |
| Due Date        | `test-todo-due-date`                         |
| Time Remaining  | `test-todo-time-remaining`                   |
| Status          | `test-todo-status`                           |
| Checkbox Toggle | `test-todo-complete-toggle`                  |
| Tags Container  | `test-todo-tags`                             |
| Example Tag     | `test-todo-tag-work`, `test-todo-tag-urgent` |
| Edit Button     | `test-todo-edit-button`                      |
| Delete Button   | `test-todo-delete-button`                    |

---

## 🧱 Features

### ✅ Core Functionality

* Displays task details (title, description, priority, etc.)
* Shows **dynamic time remaining** (e.g., *"Due in 3 days"*, *"Overdue by 2 hours"*)
* Includes a **completion toggle**
* Edit & Delete buttons (mock actions)

### 🎯 Behaviour

* Checkbox toggles task completion:

  * Applies strike-through to title
  * Updates status to **Done**
* Time remaining is calculated from a fixed or dynamic date
* Optional auto-refresh using `setInterval`

---

## ♿ Accessibility

This project follows accessibility best practices:

* Semantic HTML (`article`, `time`, `button`, `label`)
* Fully keyboard navigable
* Accessible checkbox (`<input type="checkbox">`)
* Proper `aria-label` usage where needed
* Visible focus states
* WCAG-compliant color contrast
* Optional `aria-live="polite"` for time updates

---

## 📱 Responsiveness

Designed to work across all screen sizes:

* **Mobile (320px+)**

  * Full-width layout
  * Stacked content
* **Tablet/Desktop**

  * Max-width: 420–500px
  * Clean spacing and alignment
* Tags wrap properly (no overflow)
* No horizontal scrolling issues

---

## 🧩 HTML Structure (Recommended)

* Root: `<article>` or `<section role="region">`
* Title: `<h2>` / `<h3>`
* Description: `<p>`
* Priority & Status: `<span>` / `<strong>`
* Dates: `<time>`
* Checkbox: `<input type="checkbox">` + `<label>`
* Tags: `<ul>` / `<li>` or `role="list"`
* Actions: `<button>`

---

## 🛠️ Example Data

* Priority: `High`
* Status: `In Progress`
* Tags: `work`, `urgent`, `design`
* Due Date: Fixed or dynamically generated
* Time Remaining: Calculated from current time

---

## ✅ Acceptance Criteria

* All required `data-testid` elements are present
* Checkbox is:

  * Focusable
  * Keyboard accessible
* Time remaining is reasonably accurate
* Buttons are:

  * Visible
  * Accessible
* Semantic HTML is correctly used
* Fully responsive (320px – 1200px)
* No layout breaking or overflow

---

## 🎯 Focus Areas

This project emphasizes:

* **Testability** → Easy integration with testing tools
* **Accessibility** → Inclusive and usable for all users
* **Responsiveness** → Works across all device sizes

---

## 📌 Notes

* Tags and task data are hardcoded for simplicity (Stage 0)
* Edit/Delete actions are placeholders
* Designed as a foundational UI component for larger applications

---

## 🔗 Getting Started

```bash
git clone <your-repo-url>
cd <project-folder>
open index.html
```

---

Built with 💻 + good UI discipline.
