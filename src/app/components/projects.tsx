"use client";
import { JSX, useCallback, useEffect, useState } from "react";
import stylex, { props as xprops } from "@stylexjs/stylex";
import Link from "next/link";
import Image from "next/image";

import { RepoData, getUserRepos } from "@/modules/github";
import { colors, fonts } from "../theme.stylex";
import RightArrow from "./atoms/rightarrow";

interface props {
  username: string;
}

const style = stylex.create({
  primaryText: {
    color: colors.primaryText,
    fontFamily: fonts.primaryText,
  },
  secondaryText: {
    fontFamily: fonts.primaryText,
    color: colors.secondaryText,
  },
  repoName: {
    fontWeight: 500,
  },
  repoDescription: {
    fontWeight: 300,
    marginLeft: "1rem",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: "0.5rem",
    borderColor: colors.secondaryText,
    backgroundColor: "#222",
    padding: "1.5rem",
    boxShadow: "5px 5px 3px #111",
  },
});

export default function Projects({ username }: props): JSX.Element {
  const [repoData, setRepoData] = useState<RepoData[] | undefined>();
  const [mouseEnter, setMouseEnter] = useState(false);

  const getRepoData = useCallback(async (username: string) => {
    var data = await getUserRepos(username);
    data = data.filter((repoData: RepoData) => {
      return !repoData.fork;
    });
    setRepoData(data);
  }, []);

  useEffect(() => {
    getRepoData(username);
  }, []);

  return (
    <>
      {repoData?.map((data: RepoData) => {
        return (
          <div
            key={data.id}
            onMouseEnter={() => {
              setMouseEnter(true);
            }}
            onMouseLeave={() => {
              setMouseEnter(false);
            }}
            onClick={() => {
              window.open(data.svn_url);
            }}
            {...xprops(style.box)}
          >
            <div>
              <h3 {...xprops(style.primaryText, style.repoName)}>
                {data.name}
              </h3>
              <p {...xprops(style.secondaryText, style.repoDescription)}>
                {data.description ?? "No description this repository"}
              </p>
            </div>
            <RightArrow moveRight={mouseEnter}/>
          </div>
        );
      })}
    </>
  );
}
