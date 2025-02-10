import React from "react";
import { createRoot } from "react-dom/client";

const Hello = () => {
  return (<h1>Hello, World!</h1>);
};

export default Hello;

let root = null;

function render(node) {
  root = createRoot(node);
  root.render(<Hello />);
}

function destroy(){
  root.unmount();
}

export { render, destroy };