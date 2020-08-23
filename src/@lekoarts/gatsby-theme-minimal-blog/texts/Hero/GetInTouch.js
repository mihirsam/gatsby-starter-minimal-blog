import React from "react";
import "./ButtonFocus.css";

function GetInTouch() {
    return (
        <button
            className="button"
            onClick={(e) => {
                window.location.href = window.location.href = `mailto:${"writetomihirr@gmail.com"}`;
            }}
        >
            {" "}
            Get In Touch
        </button>
    );
}

export default GetInTouch;
