import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import blogRoute from "./routes/blog.route.js";
import { connectDB } from "./database/db.js";
// import newsletterRoute from "./routes/newsletter.route.js"; // Removed

import cors from "cors";

const app = express();
dotenv.config();

const port = process.env.PORT;

//middleware
app.use(express.json());
app.use(cookieParser());

// CORS configuration for deployment
const allowedOrigins = [
  'https://blog-app-final-git-main-anirudh-dixits-projects.vercel.app',
  'https://blog-app-final-five.vercel.app',
  'blog-app-final-ks0rik0vw-anirudh-dixits-projects.vercel.app',
  'https://blog-app-final-jauaxyjiz-anirudh-dixits-projects.vercel.app' // <-- ADD THIS NEW URL
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        console.log('CORS blocked origin:', origin);
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true, // <-- ADD THIS LINE
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // Allow requests with no origin (like mobile apps or curl requests)
//       if (!origin) return callback(null, true);
      
//       if (allowedOrigins.indexOf(origin) !== -1) {
//         callback(null, true);
//       } else {
//         console.log('CORS blocked origin:', origin);
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

app.use(cors());

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "./tmp/",
  })
);

// DB Code
connectDB();

// defining routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);
// app.use("/api/newsletter", newsletterRoute); // Removed

// Test route to verify backend is working
app.get("/", (req, res) => {
  res.json({ message: "BlogifyApp Backend is running!", timestamp: new Date().toISOString() });
});

// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});