import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/HarishVaddadhi" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/vaddadhi-harish-31a82b20a/" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <Link key={index} href={item.path} target="_blank" rel="noopener noreferrer" className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;