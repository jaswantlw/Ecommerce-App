# 🛍️ Forever E-Commerce

A full-featured e-commerce website built using the **MERN stack** (MongoDB, Express.js, React, Node.js) with Tailwind CSS, Cloudinary for image uploads, and Stripe for payments.

> ⚠️ This project is for educational/demo purposes. You can fork it and build your own version with improvements!

**🌐 Live Sites:**
- Frontend: [https://forever-main-fe.onrender.com](https://forever-main-fe.onrender.com)
- Backend API: [https://forever-be.onrender.com](https://forever-be.onrender.com)

---

## 🚀 Features

- 🛒 Product listing with cart and checkout
- 🔐 JWT-based authentication
- 🛠️ Admin dashboard for managing products/orders
- ☁️ Cloudinary image upload integration
- 💳 Stripe payment support
- 🚚 Cash on Delivery option
- 📦 Monorepo structure with separate frontend/backend
- 🌍 Fully deployed on Render

---

## 🧰 Tech Stack

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB (Atlas)
- **Authentication**: JWT
- **Payments**: Stripe
- **Image Hosting**: Cloudinary
- **Deployment**: Render

---

## 📁 Folder Structure

```
Ecommerce-App/
├── backend     → Express.js backend
├── frontend    → React + Vite + Tailwind frontend
├── admin (not deployed)    → React + Vite + Tailwind frontend
└── README.md   → Project documentation
```

---

## 🔧 Environment Variables

### Backend (`/backend/.env`)
- `PORT=4000`
- `MONGODB_URI=your-mongo-uri`
- `CLOUDINARY_API_KEY=your-api-key`
- `CLOUDINARY_SECRET_KEY=your-secret`
- `CLOUDINARY_NAME=your-cloud-name`
- `CLOUDINARY_URL=cloudinary://api_key:secret@cloud_name`
- `JWT_SECRET=your-jwt-secret`
- `ADMIN_EMAIL=admin@forever.com`
- `ADMIN_PASSWORD=admin`
- `STRIPE_SECRET_KEY=your-stripe-secret-key`

### Frontend (`/frontend/.env`)
- `VITE_BACKEND_URL=https://forever-be.onrender.com`

---

## 💻 Run Locally

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🧪 Test Card (Stripe)

To test payments, use the following Stripe test card:

- **Card Number:** `4242 4242 4242 4242`  
- **Expiry Date:** Any future date  
- **CVV:** Any 3 digits  

---

## 🚀 Deployment (Render)

### Frontend (Static Site)

- **Root Directory:** `frontend`  
- **Build Command:** `npm run build`  
- **Publish Directory:** `dist`

### Backend (Web Service)

- **Root Directory:** `backend`  
- **Build Command:** `npm install`  
- **Start Command:** `node index.js` *(or your actual entry file, e.g. `server.js`)*

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.

---

## 📄 License

**MIT License** © 2025 [Jaswant Lal](https://github.com/jaswantlw)

---
