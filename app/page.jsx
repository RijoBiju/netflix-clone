"use client";

import Profile from "@components/Profile";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const Login = () => {
  const [profiles, setProfiles] = useState([]);
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log(profiles);
    setProfiles([
      ...profiles,
      {
        username: searchParams.get("username"),
        image: searchParams.get("profileImage"),
      },
    ]);
    console.log(profiles);
  }, []);

  useEffect(() => {
    console.log(profiles);
  }, [profiles]);

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex items-end h-1/4 text-white font-semibold text-3xl">
        <h3>Who's Watching?</h3>
      </div>
      <div className="h-2/5 flex items-center gap-10">
        {profiles.map((profile) => (
          <Profile
            redirect={"/home"}
            image={profile.image}
            name={profile.username}
          ></Profile>
        ))}
        <Profile
          redirect={"/add-profile"}
          image={"/add.png"}
          name={"Add Profile"}
        ></Profile>
      </div>
      <div className="h-1/4">
        <a className="text-white border-2 border-gray-600 p-4 cursor-pointer hover:border-gray-400">
          Manage Profiles
        </a>
      </div>
    </div>
  );
};

export default Login;
