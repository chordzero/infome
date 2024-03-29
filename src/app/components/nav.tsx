"use client";
import { JSX } from "react";
import stylex, { props as xprops } from "@stylexjs/stylex";
import { colors, fonts } from "../theme.stylex";

function scrollSelector(selector: string) {
  const element = document.querySelector(selector);
  const bounding = element?.getBoundingClientRect();
  window.scroll({
    top: bounding?.top ?? 0,
    behavior: "smooth",
  });
}

const style = stylex.create({
  header: {
    display: "flex",
    position: "fixed",
    width: "100vw",
    padding: "1rem",
    justifyContent: "space-between",
    // backgroundColor: colors.background,
    backdropFilter: "blur(5px)",
    zIndex: 1,
  },
  primaryText: {
    color: colors.primaryText,
    fontFamily: fonts.primaryText,
  },
  leftBtns: {
    display: "inline-flex",
    flexWrap: "nowrap",
  },
  rightBtns: {
    display: "inline-flex",
    flexWrap: "nowrap",
    gap: "1rem",
    justifyContent: "space-evenly",
  },
  rightBtn: {
    display: "inline-block",
    color: colors.secondaryText,
    fontFamily: fonts.primaryText,
    background: "0",
    border: "0",
    fontSize: "0.9rem",
  },
  hoverText: {
    transition: ".25s",
    color: {
      default: colors.secondaryText,
      ":hover": "#fff",
    }
  },
  fontWeight: (weight) => ({
    fontWeight: weight,
  }),
});

export default function Navbar(): JSX.Element {
  return (
    <nav {...xprops(style.header)}>
      <span {...xprops(style.leftBtns)}>
        <span {...xprops(style.primaryText, style.fontWeight(300))}>
          <b>C</b>hordzero
        </span>
      </span>
      <nav {...xprops(style.rightBtns, style.hoverText)}>
        <button onClick={() => {
          window.scroll({
            top: 0,
            behavior: "smooth",
          })
        }} {...xprops(style.rightBtn, style.hoverText)}>Home</button>
        <button
          onClick={() => scrollSelector("#projects")}
          {...xprops(style.rightBtn, style.hoverText)}
        >
          Projects
        </button>
        <button
          onClick={() => {
            window.open("https://github.com/chordzero");
          }}
          {...xprops(style.rightBtn, style.hoverText)}
        >
          Github
        </button>
      </nav>
    </nav>
  );
}
