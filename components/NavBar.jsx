import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="flex justify-between bg-black/20 accent-transparent">
      <div className="flex justify-center items-center">
        <Image
          src="/netflix-logo.jpg"
          alt="Netflix Logo"
          width="180"
          height="150"
        ></Image>
        <ul className="flex text-neutral-400">
          <Link href="/home" className="p-3">
            Home
          </Link>
          <Link href="/home" className="p-3">
            TV Shows
          </Link>
          <Link href="/home" className="p-3">
            Movies
          </Link>
          <Link href="/home" className="p-3">
            Recently Added
          </Link>
          <Link href="/home" className="p-3">
            My List
          </Link>
        </ul>
      </div>
      <div>
        <img></img>
      </div>
    </div>
  );
};

export default NavBar;
