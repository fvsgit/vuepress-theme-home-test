import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "en-US",
  title: "Theme Demo",
  description: "A demo for vuepress-theme-hope",
  hostname: "https://fvsgit.github.io",
  base: "/vuepress-theme-home-test/",
  theme,
});
