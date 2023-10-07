import Image from "next/image";
import Link from "next/link";

const Profile = ({ redirect, image, name }) => {
  return (
    <div className="flex flex-col cursor-pointer">
      <Link href={redirect}>
        <Image src={image} width={150} height={250}></Image>
        <h5 className="text-center text-white mt-2">{name}</h5>
      </Link>
    </div>
  );
};

export default Profile;
