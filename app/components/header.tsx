import React from "react";
import Image from "next/image";
import Link from "next/link";

type HeaderProps = {
  name: string;
  pages: {
    id: number;
    label: string;
    link: string;
  }[];
};

const Header = ({ name, pages }: HeaderProps) => {
  return (
    <header className="relative flex flex-col w-full h-48 bg-linear-557AFF">
      <div className="z-10 flex flex-col justify-around h-full px-6 bg-header">
        <nav className="flex flex-row self-end gap-6 text-right">
          {pages.map((page) => (
            <Link
              aria-label={page.label}
              key={page.id}
              href={page.link}
              className="px-6 py-2 tracking-wide uppercase font-display min-w-100 hover:bg-blue-light hover:text-blue"
            >
              {page.label}
            </Link>
          ))}
        </nav>
        <h1 className="text-white uppercase">{name}</h1>
      </div>
      <Image
        priority
        height={400}
        width={2000}
        className="absolute object-cover object-top w-full h-48 mb-6"
        src="/images/jeshoots-com-pUAM5hPaCRI-unsplash.jpg"
        alt={`Image of ${name}`}
        aria-label={`Image of ${name}`}
      />
    </header>
  );
};

export default Header;
