import Alpine from "alpinejs";
import { app } from "./alpine/app";

// Execute on load
// ...

// Await document content
window.addEventListener("DOMContentLoaded", () => {
  // ...
});

// Await document assets
window.addEventListener("load", () => {
  // ...
});

// Await Alpine.js initialization
document.addEventListener("alpine:init", () => {
  Alpine.data("app", app);
});

Alpine.start();
