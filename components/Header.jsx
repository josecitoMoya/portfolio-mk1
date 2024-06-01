"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Switch } from "@/components/ui/switch";

//componente
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(true);

  const handleChange = () => {
    setTheme(!theme);
    console.log(theme);
  };

  return (
    <header className="py-8 xl:py-12 text-white gb-pink-50/20">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Jose<span className="text-accent"> 👨🏻‍💻</span>
          </h1>
        </Link>
        {/* Desktop nav & boton para contratar*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href="/contact"> */}
          {/* <Button>Hire me</Button> */}
          {/* <Switch onClick={handleChange}>Hire me</Switch> */}
          {/* </Link> */}
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
