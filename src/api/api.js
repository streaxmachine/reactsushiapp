import axios from "axios";

export const loadSushiApi = async () =>
  await axios.get("http://localhost:3001/sushi");

export const addSushiApi = async (sushi) =>
  await axios.post("http://localhost:3001/sushi", sushi);

export const deleteSushiApi = async (userId) =>
  await axios.delete(`http://localhost:3001/sushi/${userId}`);

export const updateUserApi = async (userId, userInfo) =>
  await axios.put(`http://localhost:3001/sushi/${userId}`, userInfo);
