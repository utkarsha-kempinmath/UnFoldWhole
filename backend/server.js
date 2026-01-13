//84wXPsPoTznvQH98
//mongodb+srv://utkarshakempinmath1725_db_user:84wXPsPoTznvQH98@cluster0.tqmpcbm.mongodb.net/?appName=Cluster0
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is connected!" });
});

app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
