"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import { cn } from "../lib/utils";

const navItems = {
  "/": {
    name: "home",
  },
  "/work": {
    name: "work",
  },
  "/projects": {
    name: "projects",
  },
  "/hobbies": {
    name: "hobbies",
  },
};

export function Navbar() {
  const pathname = usePathname();
  return (
    <aside className="mb-16 -ml-[8px] tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="fade relative flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className={cn(
                    "relative flex px-2 py-1 align-middle transition-all hover:text-neutral-700 dark:hover:text-neutral-300",
                    { "font-semibold text-emerald-500": pathname === path },
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
