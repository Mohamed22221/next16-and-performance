import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <nav className="w-full py-5 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <Link href="/">
          <h1 className="text-3xl font-bold">
            Next16<span className="text-blue-500">&Performance</span>
          </h1>
        </Link>
        <div className="flex items-center gap-2">
          <Link className={buttonVariants({ variant: "ghost" })} href="/">
            Home
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="/blog">
            Blog
          </Link>
          <Link className={buttonVariants({ variant: "ghost" })} href="/create">
            Create
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Link className={buttonVariants()} href="/auth/sign-up">
          Sign up
        </Link>
        <Link
          className={buttonVariants({
            variant: "secondary",
          })}
          href="/auth/login"
        >
          Login
        </Link>
        <ThemeToggle/>
      </div>
    </nav>
  );
};

export default Navbar;
