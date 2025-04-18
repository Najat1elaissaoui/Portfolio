import Image from "next/image";

const Avatar = () => {
  return (
    <div className="xl:flex xl:max-w-none relative">
      <Image
        src="/bulb.png"
        width={737}
        height={678}
        alt="Avatar"
        className="translate-z-0 w-full h-full"
      />
    </div>
  );
};

export default Avatar;
