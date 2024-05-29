"use client";

import Home from "@/app/page";
import { Londrina_Sketch } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Servicios",
    path: "/services",
  },
  {
    name: "Quien soy",
    path: "/resume",
  },
  {
    name: "Proyectos",
    path: "/work",
  },
  {
    name: "Contacto",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } capitalize font-medium hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
