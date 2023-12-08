import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoImg from "@/assets/logo.png";
import classes from "./main-header.module.css";
const AppHeader = () => {
  return (
    <header className={classes["header"]}>
      <Link href="/" className={classes["logo"]}>
        <Image
          src={LogoImg.src}
          alt="logo"
          width={250}
          height={250}
          loading="lazy"
        />
      </Link>
      <nav className={classes["nav"]}>
        <ul>
          <li>
            <Link href={"/meals"}>Browse meals</Link>
          </li>
          <li>
            <Link href={"/community"}>Check out community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AppHeader;
