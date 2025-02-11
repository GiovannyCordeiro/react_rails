import React from "react";
import { createRoot, Root } from "react-dom/client";

const Hello: React.FC = () => {
  return <h1>Hello, World!</h1>;
};

export default Hello;

let root: Root | null = null;

function render(node: HTMLElement) {
  if (!node) return;
  root = createRoot(node);
  root.render(<Hello />);
}

function destroy() {
  if (root) {
    root.unmount();
    root = null;
  }
}

export { render, destroy };
