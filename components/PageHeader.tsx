"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../assets/logo.jpg";
import {
  ArrowLeft,
  BellIcon,
  MenuIcon,
  Mic,
  Search,
  Upload,
  User,
} from "lucide-react";
import Button from "./Button";

const PageHeader = () => {
  const [fullWidthSearch, setFullWidthSearch] = useState(false);
  return (
    <div
      className={` flex gap-10 lg:gap-20 justify-between items-center pt-2 mb-6 mx-4 `}
    >
      <div
        className={`flex gap-4 items-center flex-shrink-0 ${
          fullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button variant={"ghost"} size={"icon"}>
          <MenuIcon />
        </Button>
        <Link href="#">
          <Image className="w-40 h-16" src={logo} alt="" />
        </Link>
      </div>
      <form
        className={` gap-4 flex-grow justify-center ${
          fullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {fullWidthSearch && (
          <Button
            onClick={() => setFullWidthSearch(false)}
            type="button"
            className="flex-shrink-0"
            size={"icon"}
            variant={"ghost"}
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px] ">
          <input
            type="search"
            placeholder="Search"
            className="rounded-l-full border-secondary-border border shadow-inner shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none"
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0">
            <Search />
          </Button>
        </div>
        <Button type="button" className="flex-shrink-0" size={"icon"}>
          <Mic />
        </Button>
      </form>
      <div
        className={`flex-shrink-0 md:gap-2 ${
          fullWidthSearch ? "hidden" : "flex"
        } `}
      >
        <Button
          onClick={() => setFullWidthSearch(true)}
          className="md:hidden"
          size={"icon"}
          variant={"ghost"}
        >
          <Search />
        </Button>
        <Button className="md:hidden" size={"icon"} variant={"ghost"}>
          <Mic />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <Upload />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <BellIcon />
        </Button>
        <Button size={"icon"} variant={"ghost"}>
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
