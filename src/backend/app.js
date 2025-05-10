// app.js

import express from "express";
import axios from "axios";
import cors from "cors";
import { configDotenv } from "dotenv";
import searchPlants from "./utils/plantApi.js";

configDotenv();
const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/listPlants", async (req, res) => {
  try {
    const query = req.query.q;
    const plants = await searchPlants(query);
    res.json(plants);
    // console.log(plants);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
