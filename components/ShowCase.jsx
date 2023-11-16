import Image from "next/image";

const ShowCase = ({ image_src }) => {
  return (
    <div className="min-w-[290px] min-h-[140px]">
      <Image
        src={image_src}
        // objectFit="cover"
        width={290}
        height={140}
        quality={100}
        alt="Show Image"
        // sizes="100vw"
        // className="w-full h-auto"
        style={{ objectFit: "cover" }}
      ></Image>
    </div>
  );
};

export default ShowCase;
