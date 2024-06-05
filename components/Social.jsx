import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

import { CiMail } from "react-icons/ci";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/josecitoMoya",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/jbmoya/",
  },
  {
    icon: <FaWhatsapp />,
    path: "https://api.whatsapp.com/send?phone=543876109748&text=%C2%A1Hola!%20Vi%20tu%20portfolio%20y%20quisiera%20ponerme%20en%20contacto%20con%20vos.",
  },
  {
    icon: <CiMail />,
    path: "mailto:jose_moya@live.com.ar?subject=Hola,%20trabajemos%20juntos?",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((items, index) => {
        return (
          <Link
            key={index}
            href={items.path}
            className={iconStyles}
            target="blank_"
          >
            {items.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
