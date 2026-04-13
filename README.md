# CoachFlow — Sports Education LMS

A Learning Management System designed to deliver structured educational content for sports educators, coaches, and professionals in physical and sports activities (APS).

## Overview

CoachFlow centralizes and distributes knowledge about physical and sports activities on a single platform. It supports continuous professional development through structured learning paths and modular courses.

**Content structure:** Programs → Courses → Modules → Lessons

## Tech stack

| Layer | Technology |
|---|---|
| Frontend | React, Next.js (App Router) |
| Styling | Tailwind CSS, shadcn/ui |
| Language | TypeScript |
| Backend / API | Next.js API routes |
| Database | Supabase (PostgreSQL) |
| Auth & Storage | Supabase |

## Getting started

### Prerequisites

- Node.js (via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)) or [Bun](https://bun.sh)
- A [Supabase](https://supabase.com) project

### Installation

```sh
# Clone the repository
git clone https://github.com/adrien-neyron/CoachFlow.git
cd CoachFlow

# Install dependencies
npm install
# or
bun install
```

### Environment variables

Create a `.env` file at the root of the project:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

### Run locally

```sh
npm run dev
# or
bun dev
```

## Roadmap

### Phase 1 — LMS foundation *(current)*
- [x] Authentication
- [x] Course structure
- [x] Content delivery
- [ ] User progress tracking
- [ ] Responsive learning interface

### Phase 2 — Professional platform
- [ ] Payments and subscriptions
- [ ] Certification system
- [ ] Assessments and quizzes
- [ ] Role management (admin / instructor / learner)

### Phase 3 — Advanced learning ecosystem
- [ ] Cohort learning
- [ ] Community features
- [ ] Analytics dashboard
- [ ] Mobile optimization

## License

Private project — all rights reserved.
