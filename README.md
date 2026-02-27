Anvaya CRM

A full‑stack Customer Relationship Management (CRM) app to manage leads, sales agents, comments, tags and simple pipeline reports.
Built with a React frontend, Express/Node backend, MongoDB (Mongoose).
Quick Start

git clone https://github.com/<your-username>/<your-repo>.git
cd MajorProject2
# Backend
cd backend
npm install
npm start
# Frontend (new terminal)
cd ../frontend
npm install
npm start

Server defaults to port 3000.

Technologies

React
React Router
Node.js
Express
MongoDB (Mongoose)
Fetch API (used in frontend)

Features

Dashboard
- Basic pipeline reports: leads closed in the last week, total leads in pipeline

Leads
- Create, list, update, and delete leads
- Filter leads by salesAgent, status, tags, source, and _id
- Search leads by name (fuzzy search)

Sales Agents
- Create, list, get and delete sales agents

Comments
- Add and list comments on a lead
- Delete comments

Tags
- Create and list tags

API Reference


GET /leads
- List leads with optional query params: _id, salesAgent, status, tags, source
- Valid status values: "New", "Contacted", "Qualified", "Proposal Sent", "Closed"
- Sample Request:
  GET /leads?status=New&salesAgent=605c...abc
- Sample Response:
  { "Leads": [ { "_id", "name", "source", "salesAgent", "status", ... }, ... ] }

GET /leads/search/:searchTerm
- Fuzzy search leads by name (constructs regex from term)
- Sample Request:
  GET /leads/search/john
- Sample Response:
  { "Leads": [ { "_id", "name": "John Doe", ... }, ... ] }

POST /leads
- Create a new lead
- Required fields: name, source
- Optional: salesAgent (must be a valid ObjectId), tags, priority, timeToClose
- Sample Request body:
  { "name": "Acme Corp", "source": "Website", "salesAgent": "<agentId>" }
- Sample Response:
  { "Lead": { "_id", "name", "source", "salesAgent", ... } }

PUT /leads/:id
- Update a lead by id
- If status is set to "Closed", provider sets closedAt = now
- Sample Request:
  PUT /leads/605c...abc
  Body: { "status": "Closed", "notes": "Deal signed" }
- Sample Response:
  { "Lead": { "_id", "605c...abc", "status": "Closed", "closedAt": "...", ... } }

DELETE /leads/:id
- Delete a lead by id
- Sample Request:
  DELETE /leads/605c...abc
- Sample Response:
  { "message": "Lead deleted successfully" }

POST /leads/:id/comments
- Add a comment to a lead
- Body: { "commentText": "...", "author": "Agent Name" }
- Sample Response:
  { "_id", "lead", "commentText", "author", "createdAt" }

GET /leads/:id/comments
- List comments for a lead
- Sample Response:
  { "comments": [ { "_id", "commentText", "author", "createdAt", ... }, ... ] }

DELETE /comments/:commentId
- Delete a comment by id
- Sample Response:
  { "Comment": { "_id", "commentId", "commentText", ... } }

GET /agents
- List all sales agents
- Sample Response:
  { "agents": [ { "_id", "name", "email" }, ... ] }

POST /agents
- Create a sales agent
- Body: { "name": "Agent Name", "email": "agent@example.com" }
- Sample Response:
  { "agent": { "_id", "name", "email" } }
- Duplicate email returns 409 error.

GET /agents/:id
- Get a sales agent by id
- Sample Response:
  { "_id", "name", "email", ... }

DELETE /agents/:id
- Delete a sales agent by id
- Sample Response:
  { /* deleted agent doc */ }

POST /tag
- Create a tag
- Body: { "name": "High Priority" }
- Sample Response:
  { "tag": { "_id", "name" } }

GET /tag
- List all tags
- Sample Response:
  { "tag": [ { "_id", "name" }, ... ] }

GET /report/last-week
- Returns leads closed in the last 7 days
- Sample Response:
  [ { "id": "...", "name": "...", "salesAgent": "...", "closedAt": "..." }, ... ]

GET /report/pipeline
- Returns a count of leads not in "Closed" status
- Sample Response:
  { "totalPipelineLeads": 42 }

Environment

Frontend (.env)
REACT_APP_API_URL=https://crm-backend-wlhu.vercel.app

Backend (.env)
MONGODB=<your-mongodb-connection-string>
