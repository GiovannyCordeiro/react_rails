import React from "react";
import { createRoot } from "react-dom/client";

const Hello = () => {
  return <h1>Hello, World!</h1>;
};

export default Hello;

let root = null;

function render(root) {
  root = createRoot(root);
  root.render(<Hello />);
}

function destroy(){
  root.unmount();
}

export { render, destroy };