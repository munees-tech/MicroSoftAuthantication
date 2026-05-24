# Microsoft OAuth Authentication System

A full-stack Microsoft OAuth authentication system built using Node.js, Express.js, TypeScript, Passport.js, MongoDB, Netlify, and Render.

---

##  Live Demo

Frontend:
https://fabulous-fox-079da9.netlify.app/

Backend:
https://login-system-cq55.onrender.com

---

##  Features

- Microsoft OAuth Login
- Passport.js Authentication
- MongoDB User Storage
- Session Authentication
- Get Current User API
- Logout Functionality
- Netlify Frontend Deployment
- Render Backend Deployment
- Cross-Origin Session Handling

---

##  Technologies Used

### Frontend
- HTML
- CSS
- JavaScript
- Netlify

### Backend
- Node.js
- Express.js
- TypeScript
- Passport.js
- Passport-Microsoft
- MongoDB
- Mongoose
- Express-Session
- Render

---

##  Authentication Flow

```text
User Clicks Login
        ↓
Passport Redirects To Microsoft
        ↓
User Logs In Using Microsoft Account
        ↓
Microsoft Returns User Profile
        ↓
Backend Saves User In MongoDB
        ↓
Session Created
        ↓
Frontend Fetches Logged-In User


backend/
│
├── src/
│   ├── config/
│   ├── controllers/
│   ├── db/
│   ├── models/
│   ├── routes/
│   └── server.ts
│
frontend/
│
├── index.html
└── home.html


PORT=5000

MICROSOFT_CLIENT_ID=YOUR_CLIENT_ID

MICROSOFT_CLIENT_SECRET=YOUR_CLIENT_SECRET

SESSION_SECRET=YOUR_SECRET

