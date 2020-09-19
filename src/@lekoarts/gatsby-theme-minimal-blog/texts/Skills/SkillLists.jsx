import React from "react";

function SkillLists() {
    return (
        <ul>
            <li>
                <h1>Programming Languages</h1>
            </li>
            <p>Python, Java, JavaScript, C</p>

            <h2>{`\u2609`}Tools and Libraries</h2>
            <p>
                Git, Jupyter Notebook, TensorFlow, OpenCV, NumPy, Pandas,
                Matplotlib
            </p>

            <li>
                <h2>{`\u26EC`}Web Development</h2>
                <p>
                    HTML, CSS, MongoDB, Express.js, ReactJs, Node.Js, MySQL,
                    Vue.js, Flask
                </p>
            </li>
            <li>
                <h2>Undergraduate Courses</h2>
                <p>
                    Deep Learning Foundations and Applications, Educational Data
                    Analytics, Image Processing, Partial Differential Equations,
                    Probability and Statistics
                </p>
            </li>
            <li>
                <h2>Massive Open Online Courses</h2>
                <p>
                    Introduction to Data Science, Machine Learning, Neural
                    Networks and Deep Learning, ‘Introduction to TensorFlow for
                    Artificial Intelligence, Machine Learning, and Deep
                    Learning’, Structuring Machine Learning Project.
                </p>
            </li>
            <li>
                <h2>Training and Workshops</h2>
                <p>Big Data Hadoop, Cloud Computing, Machine Learning & AI</p>
            </li>
        </ul>
    );
}

export default SkillLists;
