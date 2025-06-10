"use client";
import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";
interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  usePathname();
  const currentPath = usePathname();
  return (
    <Link
      key={path}
      className={`${style.link} ${
        currentPath === path && style["active-link"]
      }`}
      href={path}
    >
      {text}
    </Link>
  );
};
