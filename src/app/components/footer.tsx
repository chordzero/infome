import stylex, { props as xprops} from "@stylexjs/stylex";
import Link from "next/link";
import { colors, fonts } from "../theme.stylex";

const style = stylex.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#111",
    padding: "1rem",
  },
  title: {
    color: "#ddd",
    fontFamily: fonts.primaryText,
  },
  credit: {
    fontFamily: fonts.primaryText,
    color: colors.secondaryText,
    transition: "0.5s",
    ":hover": {
      color: "#fff",
    },
  },
  marginLeft: (marginLeft) => ({
    marginLeft,
  })
});

export default function Footer() {
  return (
    <footer {...xprops(style.footer)}>
      <div>
        <h4 {...xprops(style.title)}>Credits</h4>
        
        <div {...xprops(style.marginLeft("1rem"))}>
          <p {...xprops(style.credit)}>
            UIcons by <Link href="https://www.flaticon.com/uicons" {...xprops(style.credit)}>Flaticon</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}