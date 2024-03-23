"use client";

import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import { TweenLite } from "gsap";

export default function Cursor() {
  useGSAP((gsap) => {
    window?.addEventListener("mousemove", (e) => {
      TweenLite.to(document.querySelector("#cursor"), 1, {
        css: {
          left: e.pageX,
          top: e.pageY,
        },
      });
    });
  });

  return (
    <div
      id="cursor"
      className="absolute z-[50] h-[8px] w-[8px] rounded-full bg-white"
    />
  );
}
