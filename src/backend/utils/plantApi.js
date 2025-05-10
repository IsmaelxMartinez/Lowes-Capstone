import axios from "axios";
import { configDotenv } from "dotenv";

configDotenv();

const api = axios.create({
  baseURL: "https://permapeople.org/api/search",
  headers: {
    "x-permapeople-key-id": process.env.API_KEY,
    "x-permapeople-key-secret": process.env.API_SECRET,
  },
});

const searchPlants = async (query) => {
  try {
    const response = await api.post("/", null, {
      params: {
        q: query,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching plant data:", error);
    return null;
  }
};

export default searchPlants;
