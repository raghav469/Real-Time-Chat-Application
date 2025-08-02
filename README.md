# 💬 Full Stack Realtime Chat App

A fully functional real-time chat application built using the **MERN** stack with **Socket.io** for bi-directional communication. Styled with **Tailwind CSS** and **Daisy UI**, this app supports authentication, user status tracking, image uploads, and robust error handling.

---

## 🚀 Features 
 
- ⚙️ **Tech Stack**: MongoDB, Express, React, Node.js  
- 🔐 **Authentication & Authorization** with **JWT**
- 💬 **Real-time messaging** using **Socket.io**
- 🟢 **Online user presence indicator**
- ❗ **Error handling** on both client and server sides
- ☁️ Image storage via **Cloudinary**
- 🎨 Styled with **TailwindCSS** and **Daisy UI**

---

## 📁 Project Structure
/client → React frontend
/server → Node.js + Express backend
/socket → WebSocket setup with Socket.io

---

## 🔧 Environment Setup

Create a `.env` file in the root of the `/server` directory and add the following:

```env
MONGODB_URI=your_mongo_uri
PORT=5001
JWT_SECRET=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

NODE_ENV=development
Build the app
npm run build
Start the app
npm start
