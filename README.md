# Rapport CRM – Frontend

A Customer Relationship Management dashboard to manage leads, sales agents, comments, tags, and pipeline reports. Built with React, React Router, Bootstrap, and Chart.js, backed by a REST API.

## Live Demo

[Live Demo](https://crm-frontend-9o5d.vercel.app/)

## Quick Start

```bash
git clone https://github.com/tanaymurade74/CRM-Frontend.git
cd CRM-Frontend
npm install
```

Create a `.env` file in the project root, pointing at the backend API:

```env
REACT_APP_API_URL=https://crm-backend-wlhu.vercel.app
```

> Use `http://localhost:3000` instead if you're running the [backend](https://github.com/tanaymurade74/CRMBackend) locally.

Then start the app:

```bash
npm start         # runs on http://localhost:3000 (CRA dev server)
```

## Technologies

* React 19
* React Router DOM 7
* Bootstrap 5
* Chart.js + react-chartjs-2
* React Toastify
* Create React App (react-scripts)

## Demo Video

Watch a walkthrough of the major features: _add your video link here (Loom / YouTube)_

## Features

**Home / Dashboard**

* Landing page with quick navigation to all modules

**Leads**

* View all leads with real-time search by name
* Filter leads and add new ones through a form
* View a single lead's full details
* Edit lead title, status, tags, and other fields

**Comments & Tags**

* Add comments to a lead and view the comment history
* Organize leads with tags

**Sales Agents**

* List, add, and delete sales team members

**Reports**

* Visualize pipeline data and leads closed in the last week with charts

**General**

* Toast notifications for real-time feedback on actions
* Responsive, mobile-friendly layout using the Bootstrap grid

## Routes

| Path              | Component      | Description                       |
|-------------------|----------------|-----------------------------------|
| `/`               | HomePage       | Landing page with module cards    |
| `/leadList`       | LeadList       | View all leads with search        |
| `/addLead`        | AddLead        | Create a new lead                 |
| `/lead/:leadId`   | LeadManagement | View/edit a single lead           |
| `/reports`        | Reports        | Pipeline and performance charts   |
| `/salesAgentList` | SalesAgentList | Manage sales agents               |
| `/settings`       | Settings       | Application settings              |

## Project Structure

```
src/
├── components/      # Page-level components (HomePage, LeadList, AddLead, etc.)
├── constants/       # Shared layout (Header, Footer)
├── contexts/        # React Context providers, one per feature
├── useFetch.js      # Custom data-fetching hook
├── App.js           # Root component with routing
└── index.js         # Entry point
```

## Backend

This app consumes a separate Express/MongoDB REST API.

* **Backend repository:** [https://github.com/tanaymurade74/CRMBackend](https://github.com/tanaymurade74/CRMBackend)

The frontend reads the API base URL from the `REACT_APP_API_URL` environment variable and calls endpoints such as `/leads`, `/agents`, `/tag`, and `/report/*`.
