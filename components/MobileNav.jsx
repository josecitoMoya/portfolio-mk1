"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Switch } from "@/components/ui/switch";
// ↑ Esto va a ser para el theme

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "Inicio",
    path: "/",
  },
  {
    name: "Mis Servicios",
    path: "/services",
  },
  {
    name: "Acerca de mí", 
    path: "/resume",
  },
  {
    name: "Mis Proyectos",
    path: "/work",
  },
  {
    name: "¡Contáctame!", 
    path: "/contact",
  },
  
];

const MobileNav = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold ">
              Jose <span>👨🏻‍💻</span>
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        {/* <div className="absolute bottom-0 left-0 right-0 flex flex-row justify-center items-center gap-8 mb-8">
          <div className="flex justify-center items-center">
            <h1 className="text-xl capitalize hover:text-accent transition-all">
              Theme
            </h1>
          </div>
          Aqui quiero incorporar un switch para el tema oscuro / claro
          <Switch />
        </div> */}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
