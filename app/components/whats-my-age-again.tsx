"use client";

import { Temporal } from "@js-temporal/polyfill";

export function WhatsMyAgeAgain() {
  const birth = Temporal.PlainDate.from("1998-02-16");
  const now = Temporal.Now.plainDateISO();

  const age = now.since(birth, { largestUnit: "years" }).years;
  const wannabe = 22;

  return (
    <span className="group relative inline-block cursor-pointer font-semibold">
      <span className="text-muted-foreground transition-opacity duration-200 group-hover:opacity-0">
        {wannabe}
      </span>
      <span className="absolute inset-0 text-amber-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        {age}
      </span>
    </span>
  );
}
