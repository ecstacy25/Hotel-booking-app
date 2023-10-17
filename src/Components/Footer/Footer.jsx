import "./Footer.css";
import { BsTwitter, BsFacebook, BsInstagram, BsLinkedin, BsPinterest } from "react-icons/bs";

const Footer = () => {
  const socialIcons = [
    {
      to: "https://twitter.com/ecstacy_ibiam",
      icon: <BsTwitter />,
    },
    {
      to: "https://web.facebook.com/",
      icon: <BsFacebook />,
    },
    {
      to: "https://www.linkedin.com/in/arua-ibiam",
      icon: <BsLinkedin />,
    },
    {
      to: "https://www.instagram.com/sucojnr",
      icon: <BsInstagram />,
    },
    {
      to: "https://www.pinterest.com/",
      icon: <BsPinterest />,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Knessel &copy; 2023</p>
        <div className="social-icons">
          {socialIcons.map((item, index) => (
            <a key={index} href={item.to}>
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
