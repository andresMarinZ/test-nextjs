import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import React from "react";
import { ActiveLink } from "../active-link/ActiveLink";
// 'use client';
interface NavItem {
  text: string;
  path: string;
}
const navItems: NavItem[] = [
  { text: "About", path: "/about" },
  { text: "Contact", path: "/contact" },
  { text: "Pricing", path: "/pricing" },
];

export const Navbar = async () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link className="flex flex-1 items-center" href="/">
        <HomeIcon size={16} className="mr-2" />
        Home
      </Link>

      {navItems.map((navItem) => (
        <ActiveLink key={navItem.path} {...navItem}></ActiveLink>
      ))}
    </nav>
  );
};
