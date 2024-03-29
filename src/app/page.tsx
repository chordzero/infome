import stylex, { props as xprops } from "@stylexjs/stylex";
import { colors, fonts } from "./theme.stylex";
import Projects from "./components/projects";

const style = stylex.create({
  full: {
    width: "100lvw",
    height: "100lvh",
  },
  fit: {
    width: "fit-content",
    height: "fit-content",
  },
  inlineBlock: {
    display: "inline-block"
  },
  header: {
    backgroundColor: colors.background,
  },
  main: {
    backgroundColor: "#333",
    padding: "7rem",
  },
  primaryText: {
    color: colors.primaryText,
    fontFamily: fonts.primaryText,
    fontWeight: 500,
  },
  secondaryText: {
    color: colors.secondaryText,
    fontFamily: fonts.primaryText,
    fontWeight: 300,
  },
  centerTop: {
    translate: "0 -50%",
  },
  rel: {
    position: "relative",
  },
  article: {
    backgroundColor: "#333",
  },
  top: (top) => ({
    top
  }),
  left: (left) => ({
    left
  }),
  height: (height) => ({
    height
  }), 
  fontWeight: (fontWeight) => ({
    fontWeight
  }),
  fontSize: (fontSize) => ({
    fontSize,
  }),
});

export default function Home() {
  return (
    <>
      <header {...xprops(style.header, style.full)}>
        <hgroup {
          ...xprops(
            style.rel,
            style.fit,
            style.centerTop,
            style.left("12rem"),
            style.top("50lvh"),
          ) 
        }>
          <h1
            {...xprops(
              style.fit,
              style.primaryText,
              style.fontSize("4rem"),
            )}
          >
            Chordzero
          </h1>
          <h3
            {...xprops(
              style.rel,
              style.fit,
              style.secondaryText,
              style.left("3rem"),
              style.fontSize("2rem")
            )}
          >
            Native developer
          </h3>
        </hgroup>
      </header>
      <main {...xprops(style.main)}>
        {/* Projects */}
        <article id="projects" {...xprops(style.article)}>
          <h2 {...xprops(style.primaryText, style.fontSize("2rem"), style.fontWeight(500))}>
            Projects
          </h2>
          <div {...xprops(style.height("1rem"))}></div>
          <div>
            <Projects username="chordzero"/>
          </div>
        </article>
      </main>
    </>
  );
}
