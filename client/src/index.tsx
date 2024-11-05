import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");

// New as of React v18.x
const root = createRoot(rootElement!);
root.render(
  <StrictMode>
    <div>test</div>
  </StrictMode>
);
