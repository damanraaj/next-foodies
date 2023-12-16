"use client";
import Link from "next/link";
import React from "react";
import classes from "./main-header.module.css";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={pathname.startsWith(href) ? classes["active"] : ""}
    >
      {children}
    </Link>
  );
};
export default NavLink;
