// // import axios from "axios";
// // import React, { createContext, useContext, useEffect, useState } from "react";

// // export const AuthContext = createContext();

// // export const AuthProvider = ({ children }) => {
// //   const [blogs, setBlogs] = useState();
// //   const [profile, setProfile] = useState();
// //   const [isAuthenticated, setIsAuthenticated] = useState(false);

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         // token should be let type variable because its value will change in every login. (in backend also)
// //         let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage (Go to login.jsx)
// //         console.log(token);
// //         if (token) {
// //           const { data } = await axios.get(
// //             "http://localhost:4001/api/users/my-profile",
// //             {
// //               withCredentials: true,
// //               headers: {
// //                 "Content-Type": "application/json",
// //               },
// //             }
// //           );
// //           console.log("kallu",data.user);
// //           setProfile(data.user);
// //           setIsAuthenticated(true);
// //         }
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     };

// //     const fetchBlogs = async () => {
// //       try {
// //         const { data } = await axios.get(
// //           "http://localhost:4001/api/blogs/all-blogs",
// //           { withCredentials: true }
// //         );
// //         console.log(data);
// //         setBlogs(data);
// //       } catch (error) {
// //         console.log(error);
// //       }
// //     };

// //     fetchBlogs();
// //     fetchProfile();
// //   }, []);

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         blogs,
// //         profile,
// //         setProfile,
// //         isAuthenticated,
// //         setIsAuthenticated,
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   );
// // };

// // export const useAuth = () => useContext(AuthContext);


// import axios from "axios";
// import React, { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//   const [blogs, setBlogs] = useState(null);
//   const [profile, setProfile] = useState(null);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const fetchProfile = async () => {
//     try {
//       const token = localStorage.getItem("jwt");
//       if (!token) return;

//       const { data } = await axios.get("http://localhost:4001/api/users/my-profile", {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         withCredentials: true,
//       });

//       setProfile(data.user);
//       setIsAuthenticated(true);
//     } catch (error) {
//       console.error("Profile fetch error:", error);
//     }
//   };

//   const fetchBlogs = async () => {
//     try {
//       const { data } = await axios.get("http://localhost:4001/api/blogs/all-blogs", {
//         withCredentials: true,
//       });
//       setBlogs(data);
//     } catch (error) {
//       console.error("Blogs fetch error:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//     fetchBlogs();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         blogs,
//         profile,
//         setProfile,
//         isAuthenticated,
//         setIsAuthenticated,
//         fetchBlogs,     // ✅ now accessible from components
//         fetchProfile,   // optional: if you need to reload profile after login
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);
// ✅ AuthProvider.jsx
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