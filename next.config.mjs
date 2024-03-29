/** @type {import('next').NextConfig} */
import path from "path";
import stylexPlugin from "@stylexjs/nextjs-plugin";

const __dirname = import.meta.dirname

export default stylexPlugin({
  rootDir: __dirname,
  aliases: {
    "@/*": [path.join(__dirname, "*")],
  },
})({});
