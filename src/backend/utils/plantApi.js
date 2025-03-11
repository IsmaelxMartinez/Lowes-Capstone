import axios from "axios";

const api = axios.create({
  baseURL: "https://permapeople.org/api/search",
  headers: {
    "x-permapeople-key-id": "KrXL4aUpNLoR",
    "x-permapeople-key-secret": "230c4d46-149e-4e12-9bcc-accfa1b27c32",
  },
});

const searchPlants = async (query) => {
  try {
    const response = await api.post("", {
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
