import React from "react";
import { Envelope } from "../icons/envelope";
import { Linkedin } from "../icons/linkedin";
import { Twitter } from "../icons/twitter";
import { Medium } from "../icons/medium";


type FooterProps = {
    contactMeLinks: string[];
}


const Footer = ({ contactMeLinks }: FooterProps) => {
  return (
    <footer className="fixed bottom-0 w-full py-4 mt-12 bg-white shadow-footer">
      <div className="flex items-center justify-center gap-1">
        <a href={contactMeLinks[0]} arial-label="Email">
          <Envelope className="icons_contactme" />
        </a>
        <a href={contactMeLinks[1]} arial-label="Twitter">
          <Twitter className="icons_contactme" />
        </a>
        <a href={contactMeLinks[2]} arial-label="Linkedin">
          <Linkedin className="icons_contactme" />
        </a>
        <a href={contactMeLinks[3]} arial-label="Medium">
          <Medium className="icons_contactme" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
