import Image from "next/image";

const ShowCase = ({ image_src, title, overview }) => {
  return (
    <div className="overflow-hidden min-w-[290px] min-h-[140px] h-[140px] transition-[transform, margin, height] duration-200 ease-in hover:scale-[1.5] hover:translate-x-1/4 hover:h-[250px] focus-within:translate-x-1/4 focus:translate-x-1/4">
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
      <div className="flex flex-col gap-3 bg-neutral-900 p-3 rounded-lg text-white">
        <h3 className="font-bold">{title}</h3>
        <p className="text-xs">{overview}</p>
      </div>
    </div>
  );
};

export default ShowCase;
