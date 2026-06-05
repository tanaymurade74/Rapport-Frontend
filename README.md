# Anvaya CRM – Frontend

A full-stack Customer Relationship Management application to manage leads, sales agents, comments, tags, and pipeline reports.

## Live Link

https://crm-frontend-9o5d.vercel.app/


## Tech Stack

| Layer        | Technology                          |
|--------------|-------------------------------------|
| UI Library   | React 19                            |
| Routing      | React Router DOM v7                 |
| Styling      | Bootstrap 5                         |
| Charts       | Chart.js + react-chartjs-2          |
| Notifications| React Toastify                      |
| HTTP         | Fetch API   
| State        | React Context API                   |

---

## Features

- **Dashboard** – Home page with quick navigation to all modules.
- **Lead Management** – Create, view, update, delete, filter, and search leads.
- **Sales Agents** – List and manage sales team members.
- **Reports** – Visualize pipeline data and weekly closed leads with charts.
- **Comments & Tags** – Add comments to leads and organize with tags.
- **Toast Notifications** – Real-time feedback on user actions.
- **Responsive UI** – Mobile-friendly layout using Bootstrap grid.

---

## Pages / Routes

| Path               | Component         | Description                        |
|--------------------|-------------------|------------------------------------|
| `/`                | HomePage          | Landing page with module cards     |
| `/leadList`        | LeadList          | View all leads with filters        |
| `/addLead`         | AddLead           | Create a new lead                  |
| `/lead/:leadId`    | LeadManagement    | View/edit a single lead's details  |
| `/reports`         | Reports           | Pipeline and performance charts    |
| `/salesAgentList`  | SalesAgentList    | Manage sales agents                |
| `/settings`        | Settings          | Application settings               |

---


### Installation

```bash
git clone https://github.com/tanaymurade74/CRM-Frontend.git
cd CRM-Frontend
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
REACT_APP_API_URL=https://crm-backend-wlhu.vercel.app
```

> Replace with `http://localhost:3000` if running the backend locally.

### Run the App

```bash
npm start
```
## Project Structure

```
src/
├── components/         # Page-level components
│   ├── AddLead.js
│   ├── HomePage.js
│   ├── LeadList.js
│   ├── LeadManagement.js
│   ├── Reports.js
│   ├── SalesAgentList.js
│   └── Settings.js
├── constants/          # Shared layout components
│   ├── Footer.js
│   ├── Header.js
│   └── HeaderWithoutSearch.js
├── contexts/           # React Context providers
│   ├── AddLeadContext.js
│   ├── LeadListContext.js
│   ├── LeadManagementContext.js
│   ├── ReportsContext.js
│   ├── SalesAgentListContext.js
│   └── SettingsContext.js
├── useFetch.js         # Custom hook for data fetching
├── App.js              # Root component with routing
└── index.js            # Entry point
```

---

## Backend

The backend is a REST API built with Express.js and MongoDB (Mongoose).

Repository: [https://github.com/tanaymurade74/CRMBackend](https://github.com/tanaymurade74/CRMBackend)

### Key API Endpoints

| Method | Endpoint                  | Description                     |
|--------|---------------------------|---------------------------------|
| GET    | `/leads`                  | List/filter leads               |
| GET    | `/leads/search/:term`     | Fuzzy search leads by name      |
| POST   | `/leads`                  | Create a lead                   |
| PUT    | `/leads/:id`              | Update a lead                   |
| DELETE | `/leads/:id`              | Delete a lead                   |
| POST   | `/leads/:id/comments`     | Add comment to a lead           |
| GET    | `/leads/:id/comments`     | List comments for a lead        |
| DELETE | `/comments/:commentId`    | Delete a comment                |
| GET    | `/agents`                 | List all sales agents           |
| POST   | `/agents`                 | Create a sales agent            |
| GET    | `/agents/:id`             | Get agent by ID                 |
| DELETE | `/agents/:id`             | Delete a sales agent            |
| POST   | `/tag`                    | Create a tag                    |
| GET    | `/tag`                    | List all tags                   |
| GET    | `/report/last-week`       | Leads closed in the last 7 days |
| GET    | `/report/pipeline`        | Total leads in pipeline         |
