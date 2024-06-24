import React from "react";
import Header from "./components/header";

function Component () {
   return (
    <div>
        <Header />
        <Content />
    </div>
   );
}

function Content () {
    return (
        <div>
            <h1>Ini adalah Content</h1>
            <button>Click Me</button>
        </div>
    );
}

export default Component;