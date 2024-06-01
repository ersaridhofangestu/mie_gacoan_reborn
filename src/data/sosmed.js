import { CiTwitter } from "react-icons/ci";
import {
  FaFacebookF,
  FaFacebookSquare,
  FaInstagram,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa";
import { PiTiktokLogoThin } from "react-icons/pi";
import { RiInstagramFill } from "react-icons/ri";

export const sosmed = [
  {
    icon: <FaFacebookF />,
    iconHover: <FaFacebookSquare />,
    url: "/",
  },
  {
    icon: <FaInstagram />,
    iconHover: <RiInstagramFill />,
    url: "/",
  },
  {
    icon: <CiTwitter />,
    iconHover: <FaTwitter />,
    url: "/",
  },
  {
    icon: <PiTiktokLogoThin />,
    iconHover: <FaTiktok />,
    url: "/",
  },
];
