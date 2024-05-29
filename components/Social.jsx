import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/josecitoMoya",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/jbmoya/",
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
