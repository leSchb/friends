import axios from "axios";
import { projectConfig } from "@/shared/config";

export const apiClient = axios.create({
  baseURL: projectConfig.API_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: true,
});
