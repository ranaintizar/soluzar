import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import Logo from "@/public/edu-logo.png";
import USAFlag from "assets/usa-flag.svg";

import stl from "./Header.module.scss";

interface Props {
  links: Array<{ name: string; href: string }>;
}

const Header = ({ links }: Props) => {
  const [expand, setIsExpand] = React.useState(false);

  const [width, setWidth] = React.useState(500);

  useEffect(() => {
    const btn = document.getElementById("btn");
    expand ? btn?.classList.add(stl.active) : btn?.classList.add(stl.noActive);
    expand
      ? btn?.classList.remove(stl.notActive)
      : btn?.classList.remove(stl.active);
  }, [expand]);

  useEffect(() => {
    width > 640 && setIsExpand(false);
  }, [width]);

  useEffect(() => {
    function measureWidth() {
      setWidth(document.body.clientWidth);
    }
    measureWidth();
    window.addEventListener("resize", measureWidth);
    return () => window.removeEventListener("resize", measureWidth);
  }, []);

  return (
    <header className={clsx(stl.header, expand ? stl.expand : "")}>
      <div className={stl.container}>
        <div className={stl.logo}>
          <Image
            src={Logo.src}
            width={50}
            height={50}
            alt="soluzar-logo"
            className={stl.img}
          />
        </div>
        <div className={stl.menu}>
          {links.map((item, i: number) => (
            <Link key={i} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
        <div className={stl.right}>
          <div
            className={stl.lang}
            onClick={() => console.log("Lang-Btn Clicked...")}
          >
            <USAFlag /> <span className={stl.langName}>English</span>
          </div>
          <div className={stl.divider}></div>
          <button
            className={stl.signupBtn}
            onClick={() => console.log("Button Clicked...")}
          >
            Sign up
          </button>
          <button
            id="btn"
            onClick={() => setIsExpand(!expand)}
            className={stl.expandBtn}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <ul className={stl.list}>
        {links.map((item, i) => (
          <li key={i}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
        <li
          className={stl.lang2}
          onClick={() => console.log("Lang-Btn Clicked...")}
        >
          <span className={stl.langName}>English</span>
          <USAFlag />
        </li>
      </ul>
    </header>
  );
};

Header.defaultProps = {
  links: [
    { name: "Overview", href: "#overview" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
  ],
};

export default Header;
