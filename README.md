# SAQ_Assesment
# PCI DSS 4.0.1 SAQ Selection Logic Web Application

## Overview

This project is a web-based decision support application that guides merchants through the **PCI DSS 4.0.1 SAQ (Self-Assessment Questionnaire) selection process**. The application walks users step-by-step through the official decision tree and recommends the correct SAQ type based on their payment environment.

The goal of this project is to simplify SAQ selection, reduce errors, and clearly explain *why* a particular SAQ applies.

---
## Screenshots

<img width="1528" height="769" alt="image" src="https://github.com/user-attachments/assets/7714a92f-f7d5-4b52-8b6e-dd319017148c" />

<img width="1770" height="816" alt="image" src="https://github.com/user-attachments/assets/44c42c33-9d6e-4237-9cac-1da03d60f333" />

<img width="1830" height="746" alt="image" src="https://github.com/user-attachments/assets/0fd73b35-c084-486a-bd28-e667827a9084" />

<img width="1913" height="805" alt="image" src="https://github.com/user-attachments/assets/efa02d06-1997-4988-9ed0-f9e0c187e76b" />





---


## Key Concepts Covered

* **PAN** – Primary Account Number
* **SAD** – Sensitive Authentication Data
* **CHD** – Cardholder Data
* **PSTN** – Public Switched Telephone Network
* **SAQ** – Self-Assessment Questionnaire

---

## Features

### Core Features

* Complete implementation of **all 7 PCI DSS decision steps**
* One-question-at-a-time guided assessment
* Accurate SAQ recommendation based on user inputs
* Ability to restart the assessment at any time

### Additional Enhancements

* Back button to review or modify previous answers
* Clear explanation for the final SAQ result
* Assessment path/history tracking
* Responsive UI for desktop and mobile
* Input validation to prevent invalid navigation

---

## SAQ Types Supported

* **SAQ A** – Fully outsourced payments with no merchant impact
* **SAQ A-EP** – Outsourced payments where merchant website can impact security
* **SAQ B** – Standalone payment terminals (no IP connectivity)
* **SAQ C** – Payment application on internet-connected systems (no storage)
* **SAQ C-VT** – Web-based virtual terminal under strict conditions
* **SAQ D** – All other scenarios (full PCI DSS scope)

---

## Decision Tree Flow

1. Storage of cardholder data
2. Processing or transmission of cardholder data
3. Manual entry via web-based virtual terminal
4. Virtual terminal eligibility checks
5. Card data capture method
6. Fully outsourced payment validation
7. Website impact on payment security

Each step follows official PCI DSS 4.0.1 guidelines and branches correctly to the final SAQ outcome.

---

## Tech Stack

* **Frontend Framework:** Next.js (React)
* **Language:** JavaScript / TypeScript
* **Styling:** CSS / UI component library (as implemented)
* **State Management:** React state/hooks
* **Deployment:** Vercel

---

## Project Structure (Simplified)

```
├── app / pages
│   ├── components
│   ├── data (decision tree logic)
│   ├── styles
│   └── page.tsx / index.tsx
├── public
├── README.md
└── package.json
```

---

## Getting Started

### Prerequisites

* Node.js (v18 or above recommended)
* npm or yarn

### Installation

```bash
npm install
```

### Run Locally

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

---

## Extensibility

The decision logic is data-driven, making it easy to:

* Add new steps (e.g., Step 8)
* Modify existing rules
* Reuse the logic for future PCI DSS updates

---

## Testing

* All possible decision paths were manually tested
* Each SAQ outcome was verified against PCI DSS documentation

---



---

## Author

**Mohan Kumar**

---

## Notes

This project was developed as part of a technical assessment and follows official PCI DSS 4.0.1 SAQ selection guidelines for educational and evaluation purposes.
