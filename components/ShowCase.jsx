import Image from "next/image";

const ShowCase = ({ image_src }) => {
  return (
    <div>
      <Image
        src={image_src}
        objectFit="cover"
        width={290}
        height={140}
        alt="Show Image"
        minWidth={290}
        minHeight={140}
      ></Image>
    </div>
  );
};

export default ShowCase;
