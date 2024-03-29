import stylex, {props as xprops} from "@stylexjs/stylex";
import Image from "next/image";
import { colors } from "../../theme.stylex";

interface props {
  moveRight: boolean
}

const style = stylex.create({
  iconBox: {
    position: "relative",
    color: colors.secondaryText,
    height: "2rem",
    width: "2rem",
    alignSelf: "center",
    transition: ".25s",
  },
  icon: {
    display: "inline-block",
    filter: "invert(100%)",
  },
  marginRight: (marginRight) => ({
    marginRight,
  })
});

export default function RightArrow({ moveRight }: props): JSX.Element {
  return (
    <div {...xprops(style.iconBox, moveRight ? style.marginRight("0rem") : style.marginRight(".5rem"))}>
      <Image
        src="/angle-small-right.svg"
        alt="Go to this repository"
        fill={true}
        {...xprops(style.icon)}
      />
    </div>
  )
}