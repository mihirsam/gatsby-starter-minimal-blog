import React from "react";
import linkedin from "./linkedin.png";
import github from "./github.png";

function ContactList() {
    return (
        <div>
            <p>
                If you like my work and have some cool project to work on, just
                send me an{" "}
                <a href="mailto: abc@example.com" id="customa">
                    email
                </a>{" "}
                or contact me through social sites listed below.
            </p>

            <ul>
                <li>
                    <span>
                        <h2>
                            <b>LinkedIn: </b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img
                                width={25}
                                height={25}
                                src={linkedin}
                                alt="linkedin_pic"
                            />
                            &nbsp;&nbsp;&nbsp;
                            <a
                                href="https://www.linkedin.com/in/mihirshrivastava/"
                                id="customa"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                mihirshrivastava
                            </a>
                        </h2>
                    </span>
                </li>
                <li>
                    <span>
                        <h2>
                            <b>GitHub: </b>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img
                                width={25}
                                height={25}
                                src={github}
                                alt="github_pic"
                            />
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a
                                href="https://github.com/mihirsam"
                                id="customa"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                mihirsam
                            </a>
                        </h2>
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default ContactList;
