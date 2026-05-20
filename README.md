# Car Rental — Car-Project

Lightweight car rental full‑stack app with an Express + MongoDB backend and a React + Vite frontend.

---

## Repository layout

- `backend/` — API server
  - Entry: `backend/index.js`
  - Config: `backend/config.js` (edit `MONGO_URL`; `PORT` is also defined there)
  - Routes: `backend/routes/carRoutes.js`
  - Models: `backend/models/carModel.js` (`Car`), `backend/models/users.js` (`User`)
  - See `backend/package.json` for scripts

- `frontend/` — React app (Vite)
  - Entry: `frontend/src/main.jsx`
  - Router: `frontend/src/App.jsx`
  - Pages: `frontend/src/pages/` (Home, Booking, Register, Login, CreateCar, EditCar, ShowCar, DeleteCar)
  - Components: `frontend/src/components/` (CarCard, CarTable, BackButton, Spinner)
  - See `frontend/package.json` for scripts

---

## Features

- CRUD operations for cars (create, read, update, delete)
- User registration and login (JWT-based)
- Simple responsive UI built with React + Tailwind + Vite

---

## Prerequisites

- Node.js v16+ (or latest LTS)
- MongoDB instance (local or Atlas)

---

## Setup & Run

Backend
1. Open a terminal in the `backend` folder:
   - `cd backend`
2. Install dependencies and start the server:
   - `npm install`;
   - `npm run dev` (or `npm start` depending on the script in `backend/package.json`)
3. Configure MongoDB connection in `backend/config.js` (set `MONGO_URL`). Default `PORT` is defined there.

Frontend
1. Open a terminal in the `frontend` folder:
   - `cd frontend`
2. Install dependencies and start the dev server:
   - `npm install`;
   - `npm run dev`
3. The app is served by Vite (default: `http://localhost:5173` or the address shown by Vite). The frontend expects the backend API at `http://localhost:<PORT>/cars` (default `PORT` from `backend/config.js`).

---

## API (high level)

Implemented routes in `backend/routes/carRoutes.js` (prefix `/cars`):

- `POST /cars` — create a car
- `GET /cars` — list cars
- `GET /cars/:id` — get car details
- `PUT /cars/:id` — update a car
- `DELETE /cars/:id` — delete a car
- `POST /cars/register` — register user
- `POST /cars/login` — login user (returns JWT)

Refer to the route and model files for request/response shapes.

---

## Environment variables

Edit `backend/config.js` to set:

- `MONGO_URL` — MongoDB connection string
- `PORT` — backend server port (default used by the frontend)

---

## Notes

- If using MongoDB Atlas, make sure the IP whitelist and user credentials are configured.
- If the frontend cannot reach the backend, verify the `PORT` and any proxy or CORS settings in the backend.

---

## Contributing

Contributions, bug reports and feature requests are welcome. Open an issue or submit a pull request.
