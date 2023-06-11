import React from "react";
import Twitter from "../assets/twitter-alt.svg";
import GitHub from "../assets/github-alt.svg";
import DevTo from "../assets/devto-alt.svg";
import Ig from "../assets/ig-alt.svg";
import config from "../lib/config";

export function SocialList({}) {
  return (
    <div>
      <a
        title="Twitter"
        href={`https://twitter.com/${config.twitter_account}`}
        target="_blank"
        rel="noopener"
      >
        <Twitter width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="GitHub"
        href={`https://github.com/${config.github_account}`}
        target="_blank"
        rel="noopener"
      >
        <GitHub width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="DevTo"
        href={`https://dev.to/${config.devto_account}`}
        target="_blank"
        rel="noopener"
      >
        <DevTo width={24} height={24} fill={"#222"} />
      </a>
      <a
        title="Ig"
        href={`https://instagram.com/${config.ig_account}`}
        target="_blank"
        rel="noopener"
      >
        <Ig width={24} height={24} fill={"#222"} />
      </a>
      <style jsx>{`
        a {
          display: inline-block;
        }
        a:not(:last-child) {
          margin-right: 2em;
        }
      `}</style>
    </div>
  );
}
