"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* Logo animé */}
          <Link href={"/"}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute left-4 top-4"
            >
              <Image
                src={"/logooo.png"}
                width={200}
                height={48}
                alt="Logo Dev Vortex"
                priority={true}
                className="max-w-[200px] h-auto"
              />
            </motion.div>
          </Link>

          {/* Réseaux Sociaux */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
