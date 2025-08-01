

import React from "react";
import { useAuth } from "../context/AuthProvider";

function MyProfile() {
  const { profile } = useAuth();

  const avatarUrl = profile?.photo?.url || "/avatar-placeholder.png";
  const coverImage = profile?.coverImage?.url || avatarUrl; // fallback if no cover image

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-lg w-full relative">
        {/* Cover image */}
        <div className="relative h-40 w-full">
          <img
            src={coverImage}
            alt="cover"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Profile Avatar - absolute positioned */}
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
          <img
            src={avatarUrl}
            alt="avatar"
            className="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
          />
        </div>

        {/* Profile Info */}
        <div className="pt-16 pb-6 px-6 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            {profile?.name || "User Name"}
          </h2>
          <p className="text-gray-600 mt-2">{profile?.email}</p>
          <p className="text-gray-600">{profile?.phone}</p>
          <p className="text-gray-600 font-medium">{profile?.role}</p>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
