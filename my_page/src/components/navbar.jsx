import {
  IoHomeOutline,
  IoCodeSlashSharp,
  IoInformationCircleOutline,
} from "react-icons/io5";

import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="bg-[#3E3E3E] p-4 w-full rounded-lg shadow-xl mb-3 flex justify-between">
      <div className="flex">
        <Link href="/" className="mr-4">
          <IoHomeOutline size={20} color="white" />
        </Link>

        <Link href="/proyects">
          <IoCodeSlashSharp size={20} color="white" />
        </Link>
      </div>
      <div>
        <Link href="/info" className="text-white">
          <IoInformationCircleOutline size={20} color="white" />
        </Link>
      </div>
    </div>
  );
};
