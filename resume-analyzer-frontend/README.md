# 📄 Resume Analyzer SaaS (Text-Based MVP)

## Overview
The **Resume Analyzer** is a web-based SaaS application that provides AI-powered feedback on user resumes. Users can simply paste their resume text and receive structured, actionable insights—including strengths, weaknesses, skill gaps, ATS keyword matches, and targeted suggestions for improvement. 

This project demonstrates full-stack development skills using the MERN stack (MongoDB, Express, React, Node.js) and integrates the OpenAI GPT API for advanced natural language analysis.

---

## ✨ Features (MVP)
* **Text Input Interface:** Simple, streamlined UI where users paste their resume text for instant AI analysis.
* **AI-Powered Feedback:** Generates a comprehensive report featuring a resume score, strengths, weaknesses, missing skills, and ATS keyword matching.
* **Human-Readable Output:** Delivers a clean, text-based report that is easy to digest and highly actionable.
* **Secure API Integration:** The backend securely handles all OpenAI API calls, ensuring API keys remain completely private.
* **Scalable Architecture:** Built with a modular foundation to easily support future upgrades, such as PDF parsing or image uploads.

---

## 🛠 Technology Stack
* **Frontend:** React, Tailwind CSS
* **Backend:** Node.js, Express
* **Database:** MongoDB *(Optional for MVP: used for user tracking and quota management)*
* **AI Service:** OpenAI GPT-3.5-turbo
* **Deployment:** Vercel, Render, or Heroku

---

## 🏗 Architecture Diagram

```text
Frontend (React)
 └── User Interface: Resume text input, results display

Backend (Node + Express)
 └── API Endpoint: /api/resume/analyze
 └── Action: Handles OpenAI API calls and returns text-based analysis

Database (MongoDB - Optional)
 └── Action: Manages user accounts and usage tracking

AI Service (OpenAI GPT)
 └── Action: Provides resume evaluation and actionable suggestions