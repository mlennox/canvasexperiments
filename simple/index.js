import { domReady } from "../common/domReady.js";
import { Simple } from "./simple.js";

domReady(() => {
  const canvas = document.getElementById("demo");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    new Simple({ ctx });
  }
});
