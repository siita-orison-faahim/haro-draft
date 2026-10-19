# Haro V1 - College Management System Application

This repository implements the 3 target UI screens specified in the design wireframes for **Haro V1**:

1. **Login Page (`/login`)**
   - Brand logo and header badge ("NTC, Sandema / Staff Portal").
   - Abstract geometry artwork background panel.
   - Credentials input form with password toggle and submit action.

2. **Login Loading State (`/login-loading`)**
   - Seamless loading transition card showing the centered spinner with "Authenticating Role...".
   - Automated routing transition to the Portal Overview.

3. **Portal Overview Dashboard (`/overview`)**
   - Responsive sidebar navigation (Overview, Academic Setup, Users accordion, Audit Log, Settings, Log out, Collapse toggle).
   - Top bar search and action icons (Notifications, Mail).
   - Filter dropdowns ("First Semester") and date selection ("16 Oct, 2026").
   - 4 KPI summary cards (Active Users, Course Enrollments, System Health, Pending Audits).
   - Monthly portal engagement chart.
   - Dual split sections for **System health** and **Recent activity**.

## Getting Started

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.
