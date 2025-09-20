# DopeList

**DopeList** is a productivity and task management web application built with **Next.js 14**, **React 18**, and **Convex** for the backend. It helps users organize tasks, subtasks, projects, and labels efficiently, with features for tracking due dates, priorities, and completion status.

---

## Screenshots
> 

---


## Features

- **Project Management**: Create, view, and delete projects.
- **Task Management**: Create, update, complete, and delete tasks.
- **Sub-Task Management**: Manage subtasks under each main task.
- **Labels & Filters**: Organize tasks with custom and system labels.
- **Inbox, Today & Upcoming Views**: Quickly access tasks due today or upcoming.
- **Overdue Tracking**: Identify overdue tasks for timely action.
- **Authentication**: Secure login using NextAuth and OAuth.
- **Grouping**: Group tasks by date for better visualization.

---

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS, Radix UI, Lucide Icons
- **Backend / Database**: Convex (Serverless backend with built-in database)
- **Authentication**: NextAuth.js
- **Date Handling**: Moment.js & date-fns
- **Other Libraries**: react-hook-form, zod, OpenAI API

---

## Project Structure

### Backend (Convex)
- **`convex/schema.ts`**: Defines tables for users, sessions, accounts, todos, subTodos, labels, and projects.
- **`convex/http.ts`**: HTTP routes for OpenID Connect configuration and JWKS.
- **`convex/auth.ts`**: Handles user authentication and ID extraction.
- **`convex/labels.ts`**: Queries and mutations related to labels.
- **`convex/projects.ts`**: Queries and mutations for project management.
- **`convex/todos.ts`**: Queries and mutations for main tasks.
- **`convex/subTodos.ts`**: Queries and mutations for subtasks.

### Frontend
- **`utils/index.tsx`**: Contains navigation menu items and default project ID.
- **Pages & Components**: Organized under `pages/` and `components/` folders (not listed here but include Inbox, Today, Upcoming, Filters & Labels views, task forms, and modals).

---

## Getting Started

### Prerequisites

- Node.js v20 or higher
- npm or yarn
- Convex account and project setup

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/dopelist.git
cd dopelist
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables in `.env`:
```env
NEXTAUTH_URL=http://localhost:3000
CONVEX_PROJECT_URL=your-convex-project-url
CONVEX_API_KEY=your-convex-api-key
JWKS=your-jwks-json
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Run the development server |
| `npm run build` | Build the project for production |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint for code linting |

