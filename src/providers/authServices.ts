import axios from "axios";

const API_URL = "/api"; 

const register = async (userData: any) => {
  try {
    console.log("Registering use with data:", userData);
    const response = await axios.post(`${API_URL}/register`, userData);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message || "Registration failed";
  }
};

const login = async (credentials: any) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error: any) {
    throw error.response?.data || error.message || "Login failed";
  }
};

const logout = async () => {
  try {
    await axios.post(`${API_URL}/logout`);
    localStorage.removeItem("user"); 
    
  } catch (error: any) {
    throw error.response?.data || error.message || "Logout failed";
  }
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
