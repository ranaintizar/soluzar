import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "components/button";

import Img from "@/public/edu-logo.png";
import FacebookIcon from "assets/facebook.svg";
import TwitterIcon from "assets/twitter.svg";
import InstagramIcon from "assets/instagram.svg";
import LinkedInIcon from "assets/linkedin.svg";

import stl from "./Footer.module.scss";

const Footer = () => {
  const [email, setEmail] = React.useState("");

  const submitEmail = () => {
    validateEmail(email)
      ? alert(`Your Email: ${email} \n is Subscribed!`)
      : alert("Email is not valid");
    setEmail("");
  };

  const validateEmail = (email: string) => {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <div className={stl.footer}>
      <div className={stl.container}>
        <div className={stl.row1}>
          <div className={stl.left}>
            <div className={stl.logo}>
              <Image src={Img} alt="logo-image" layout="responsive" />
            </div>
            <p className={stl.desc}>
              But I must explain to you how this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you
            </p>
            <div className={stl.input}>
              <input
                value={email}
                placeholder="Your Email"
                name="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                label="Subscribe"
                customClass={stl.btn}
                handleOnClick={submitEmail}
              />
            </div>
          </div>
          <div className={stl.right}>
            <div className={stl.listContainer}>
              <span className={stl.title}>Platform</span>
              <ul className={stl.usefulLinks}>
                <li>
                  <Link href="#overview">Overview</Link>
                </li>
                <li>
                  <Link href="#features">Features</Link>
                </li>
                <li>
                  <Link href="#pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="#about">About</Link>
                </li>
              </ul>
            </div>
            <div className={stl.listContainer}>
              <span className={stl.title}>Help</span>
              <ul className={stl.usefulLinks}>
                <li>
                  <Link href="#">How does it work ?</Link>
                </li>
                <li>
                  <Link href="#">Where to ask question ?</Link>
                </li>
                <li>
                  <Link href="#">How to pay ?</Link>
                </li>
                <li>
                  <Link href="#">What is needed for this ?</Link>
                </li>
              </ul>
            </div>
            <div className={stl.listContainer}>
              <span className={stl.title}>Contacts</span>
              <ul className={stl.usefulLinks}>
                <li>
                  <Link href="#">[716] 532-3577</Link>
                </li>
                <li>
                  <Link href="#">
                    116 Archer Rd Broadalbin, New York (NY), 12025
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={stl.divider}></div>
        <div className={stl.row2}>
          <div className={stl.copyrightText}>
            &copy; Soluzar 2023. All rights reserved.
          </div>
          <div className={stl.socialLinks}>
            <Link href="https://www.facebook.com/ranathedev" target="_blank">
              <FacebookIcon />
            </Link>
            <Link href="https://twitter.com/ranathedev" target="_blank">
              <TwitterIcon />
            </Link>
            <Link href="https://instagram.com/ranathedev" target="_blank">
              <InstagramIcon />
            </Link>
            <Link href="https://linkedin.com/in/ranathedev" target="_blank">
              <LinkedInIcon />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
