"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Profile from "@components/Profile";
import Link from "next/link";

const ProfileCreator = () => {
  const [profileImage, setProfileImage] = useState("");
  useEffect(() => {
    setProfileImage("/netflix-profile-blue.jpg");
  }, []);

  const [username, setUsername] = useState("");

  return (
    <div>
      <div className="flex justify-start gap-4 w-full">
        <div className="flex gap-1">
          <Profile redirect={""} image={profileImage} name={username}></Profile>
          <div className="flex flex-col gap-2">
            <button
              className="bg-blue-500 w-5 h-5"
              onClick={() => setProfileImage("/netflix-profile-blue.jpg")}
            ></button>
            <button
              className="bg-red-500 w-5 h-5"
              onClick={() => setProfileImage("/netflix-profile-red.jpg")}
            ></button>
          </div>
        </div>
        <div className="flex justify-start items-center">
          <input
            className="bg-gray-500 rounded p-2 indent-1 w-80"
            type="text"
            onInput={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
      </div>
      <div className="flex gap-3 w-2/6 mt-8">
        <Link
          className="bg-white font-bold py-2 px-8 text-center"
          href={{
            pathname: "/",
            query: { username, profileImage },
          }}
        >
          Continue
        </Link>
        <Link
          href="/"
          className="border-2 border-neutral-600 text-neutral-600 font-bold py-2 px-8"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default ProfileCreator;
