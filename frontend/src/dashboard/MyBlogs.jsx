import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { BACKEND_URL } from "../utils.js";

function MyBlogs() {
  const [myBlogs, setMyBlogs] = useState([]);
  const { fetchBlogs } = useAuth();
  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/blogs/my-blog`,
          { withCredentials: true }
        );
        console.log(data);
        setMyBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyBlogs();
  }, []);

  const handleDelete = async (id) => {
    await axios
      .delete(`${BACKEND_URL}/api/blogs/delete/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message || "Blog deleted successfully");
        setMyBlogs((value) => value.filter((blog) => blog._id !== id));
        fetchBlogs && fetchBlogs();
      })
      .catch((error) => {
        toast.error(error.response.message || "Failed to delete blog");
      });
  };
  return (
    <div>
      <div className="container mx-auto my-12 p-4">
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 md:ml-20">
          {myBlogs && myBlogs.length > 0 ? (
            myBlogs.map((element) => (
              <div
                className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                key={element._id}
              >
                <Link to={`/blog/${element._id}`} className="block">
                  {element?.blogImage && (
                    <img
                      src={element?.blogImage.url}
                      alt="blogImg"
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="p-4">
                    <span className="text-sm text-gray-600">
                      {element.category}
                    </span>
                    <h4 className="text-xl font-semibold my-2 hover:text-blue-600 transition-colors duration-300">
                      {element.title}
                    </h4>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {element.about?.substring(0, 100)}...
                    </p>
                  </div>
                </Link>
                
                <div className="px-4 pb-4">
                  <div className="flex justify-between mt-4">
                    <Link
                      to={`/blog/update/${element._id}`}
                      className="text-blue-500 bg-white rounded-md shadow-lg px-3 py-1 border border-gray-400 hover:bg-blue-50 hover:border-blue-300 transition-colors duration-300"
                    >
                      UPDATE
                    </Link>
                    <button
                      onClick={() => handleDelete(element._id)}
                      className="text-red-500 bg-white rounded-md shadow-lg px-3 py-1 border border-gray-400 hover:bg-red-50 hover:border-red-300 transition-colors duration-300"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">
              You have not posted any blog to see!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyBlogs;