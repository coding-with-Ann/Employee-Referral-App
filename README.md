# Employee Referral Application

Standalone employee referral app (React + TypeScript + Tailwind) with a Node + Express backend.
- Link: https://employee-referral-app-frontend.onrender.com/

## Defaults Used
- Resume size limit: 5 MB
- Similarity threshold (resume objective vs why good fit): 0.75 cosine similarity

## Project Structure
- `src/` frontend
- `server/` backend

## Frontend
```bash
cd employee-referral-app
npm install
npm run dev
```

Frontend runs at `http://localhost:3000`.

## Backend
```bash
cd employee-referral-app/server
npm install
npm run dev
```

Backend runs at `http://localhost:5000`.

## API
`POST /api/referrals` (multipart/form-data)
- `resume` file field required

## Storage
Submissions are stored in `server/data/submissions.json` and resumes saved in `server/uploads/`.
# Employee-Referral-App
