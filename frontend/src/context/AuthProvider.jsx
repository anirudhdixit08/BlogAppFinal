
import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../utils.js";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [profile, setProfile] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const updateProfile = async () => {
    try {
      let token = localStorage.getItem("jwt");
      if (token) {
        const { data } = await axios.get(`${BACKEND_URL}/api/users/my-profile`, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        });
        setProfile(data.user);
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error("Error fetching profile", error);
    }
  };

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(`${BACKEND_URL}/api/blogs/all-blogs`, {
        withCredentials: true,
      });
      setBlogs(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateProfile();
    fetchBlogs();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        blogs,
        profile,
        setProfile,
        isAuthenticated,
        setIsAuthenticated,
        updateProfile,
        fetchBlogs,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);