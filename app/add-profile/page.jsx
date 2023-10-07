import ProfileCreator from "@components/ProfileCreator";
import Image from "next/image";
import Link from "next/link";

const AddProfile = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 h-screen">
      <div className="w-2/6">
        <h3 className="text-white font-semibold text-3xl">Add Profile</h3>
        <h6 className="text-neutral-400 font-semibold text-xs mt-3">
          Add a profile for another person watching Netflix
        </h6>
      </div>
      <div className="w-2/6">
        <ProfileCreator></ProfileCreator>
      </div>
    </div>
  );
};

export default AddProfile;
