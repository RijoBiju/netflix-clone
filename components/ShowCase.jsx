import Image from "next/image";

const ShowCase = ({ image_src }) => {
  return (
    <div>
      <Image src={image_src} width={290} height={140} alt="Show Image"></Image>
    </div>
  );
};

export default ShowCase;
