# ITIPRO Internship Portal - Backend Setup

## Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)

## Installation

### 1. Backend Setup
```bash
cd backend
npm install
```

### 2. Environment Configuration
Create a `.env` file in the backend folder with:
```
MONGODB_URI=mongodb://localhost:27017/itipro
PORT=5000
JWT_SECRET=your_jwt_secret_key_here
```

**For MongoDB Atlas (Cloud):**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/itipro
PORT=5000
JWT_SECRET=your_jwt_secret_key_here
```

### 3. Start Backend Server
```bash
npm run dev    # For development with auto-reload
npm start      # For production
```
Backend will run on `http://localhost:5000`

### 4. Start Frontend (in another terminal)
```bash
cd ../
npm run dev
```
Frontend will run on `http://localhost:5173`

## API Endpoints

### Register Student
- **POST** `/api/auth/register`
- Body:
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "college": "MIT",
  "qualification": "B.Tech",
  "interestedDomain": "EV Technology",
  "password": "password123",
  "confirmPassword": "password123"
}
```

### Login Student
- **POST** `/api/auth/login`
- Body:
```json
{
  "emailOrPhone": "john@example.com",
  "password": "password123"
}
```

## MongoDB Collections

### Students Collection
Fields stored in MongoDB:
- `fullName`: String
- `email`: String (unique, indexed)
- `phone`: String
- `college`: String
- `qualification`: String (enum)
- `interestedDomain`: String (enum)
- `password`: String (hashed with bcrypt)
- `createdAt`: Date

## Features Implemented

✅ Student Registration with form validation
✅ Password encryption with bcryptjs
✅ Student Login authentication
✅ JWT token generation
✅ MongoDB data persistence
✅ CORS enabled for frontend communication
✅ Error handling and validation
✅ Loading states in UI
✅ Success/Error messages

## Security Notes

1. Passwords are hashed using bcryptjs before storage
2. JWT tokens expire in 7 days
3. CORS is configured to accept only frontend origin
4. Change `JWT_SECRET` in production to a strong random string
5. Never commit `.env` file to git
