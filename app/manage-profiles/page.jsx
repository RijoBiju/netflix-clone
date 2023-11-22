import { useState } from "react";

const ManageProfiles = () => {
  const [profiles, setProfiles] = useState([]);

  return (
    <div className="flex flex-col items-center h-screen">
      <div className="flex items-end h-1/4 text-white font-semibold text-3xl">
        <h3>Select a profile</h3>
      </div>
      <div className="h-2/5 flex items-center gap-10">
        {profiles.map((profile) => (
          <Profile
            redirect={"/home"}
            image={profile.image}
            name={profile.username}
          ></Profile>
        ))}
      </div>
      <div className="h-1/4">
        <Link
          href="/manage-profiles"
          className="text-white border-2 border-gray-600 p-4 cursor-pointer hover:border-gray-400"
        >
          Manage Profiles
        </Link>
      </div>
    </div>
  );
};

export default ManageProfiles;
