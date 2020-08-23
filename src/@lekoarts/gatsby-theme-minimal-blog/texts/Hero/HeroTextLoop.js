import React from "react";
import TextLoop from "react-text-loop";

function HeroTextLoop() {
    return (
        <div>
            <TextLoop children={["नमस्ते", "Hello", "Ciao", "Hola"]} />,
        </div>
    );
}

export default HeroTextLoop;
