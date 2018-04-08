import { domReady } from "../common/domReady.js";
import { SimplePath } from "./simplePath.js";

domReady(() => {
  const canvas = document.getElementById("demo");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    new SimplePath({ ctx });
  }
});
