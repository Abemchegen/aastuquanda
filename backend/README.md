# AASTU Q&A - Backend

The backend API for the AASTU Q&A platform, built with Node.js, Express, and Prisma.

## 🛠 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Auth**: JWT (JSON Web Tokens)
- **Image Upload**: Cloudinary

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   Copy `.env.example` to `.env` and fill in the values:
   ```bash
   cp .env.example .env
   ```

3. **Database Setup**
   Ensure your PostgreSQL server is running and `DATABASE_URL` is set.
   ```bash
   npm run prisma:generate
   npm run prisma:migrate
   ```

4. **Run Server**
   ```bash
   npm run dev
   ```

## 📜 Scripts

- `npm run dev`: Start the server with Nodemon.
- `npm start`: Start the server in production mode.
- `npm run prisma:generate`: Generate Prisma client.
- `npm run prisma:migrate`: Run database migrations.
- `npm run prisma:deploy`: Deploy migrations (production).
