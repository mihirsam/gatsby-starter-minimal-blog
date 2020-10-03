import React from "react";
import Python from "./../Static/languages/icon_python.png";
import Java from "./../Static/languages/icon_java.png";
import JavaScript from "./../Static/languages/icon_javascript.svg";
import C from "./../Static/languages/icon_c.png";
import Git from "./../Static/tools/icon_git.svg";
import Jupyter from "./../Static/tools/icon_jupyter.svg";
import Tensorflow from "./../Static/tools/icon_tensorflow.png";
import Numpy from "./../Static/tools/icon_numpy.svg";
import Pandas from "./../Static/tools/icon_pandas.png";
import Matplotlib from "./../Static/tools/icon_matplotlib.svg";
import OpenCV from "./../Static/tools/icon_opencv.png";
import Tableau from "./../Static/tools/icon_tableau.png";
import HTML from "./../Static/webdev/icon_html.png";
import CSS from "./../Static/webdev/icon_css.jpg";
import MongoDB from "./../Static/webdev/icon_mongodb.png";
import Express from "./../Static/webdev/icon_express.png";
import ReactJS from "./../Static/webdev/icon_reactjs.png";
import NodeJS from "./../Static/webdev/icon_nodejs.jpg";
import MySQL from "./../Static/webdev/icon_mysql.png";
import VueJS from "./../Static/webdev/icon_vuejs.png";
import Flask from "./../Static/webdev/icon_flask.png";

function SkillLists() {
    return (
        <ul>
            <li>
                <h1>Programming Languages</h1>
            </li>
            <figure>
                <img width={80} height={80} src={Python} alt="skills img" />
                <figcaption>
                    <b>Python</b>
                </figcaption>
            </figure>
            <figure>
                <img width={80} height={80} src={Java} alt="skills img" />
                <figcaption>
                    <b>Java</b>
                </figcaption>
            </figure>
            <figure>
                <img width={80} height={80} src={JavaScript} alt="skills img" />
                <figcaption>
                    <b>JavaScript</b>
                </figcaption>
            </figure>
            <figure>
                <img width={80} height={80} src={C} alt="skills img" />
                <figcaption>
                    <b>C</b>
                </figcaption>
            </figure>
            <li>
                <h2>Tools and Libraries</h2>
            </li>
            <figure>
                <img width={80} height={80} src={Git} alt="skills img" />
                <figcaption>
                    <b>Git</b>
                </figcaption>
            </figure>
            <figure>
                <img width={140} height={80} src={Jupyter} alt="skills img" />
                <figcaption>
                    <b>Jupyter Notebook</b>
                </figcaption>
            </figure>
            <figure>
                <img width={80} height={80} src={Tensorflow} alt="skills img" />
                <figcaption>
                    <b>TensorFlow</b>
                </figcaption>
            </figure>
            <figure>
                <img width={80} height={80} src={Numpy} alt="skills img" />
                <figcaption>
                    <b>NumPy</b>
                </figcaption>
            </figure>
            <figure>
                <img width={240} height={80} src={Pandas} alt="skills img" />
                <figcaption>
                    <b>Pandas</b>
                </figcaption>
            </figure>
            <figure>
                <img
                    width={300}
                    height={72}
                    src={Matplotlib}
                    alt="skills img"
                />
                <figcaption>
                    <b>Matplotlib</b>
                </figcaption>
            </figure>
            <figure>
                <img width={80} height={80} src={OpenCV} alt="skills img" />
                <figcaption>
                    <b>OpenCV</b>
                </figcaption>
            </figure>
            <figure>
                <img width={271} height={56} src={Tableau} alt="skills img" />
                <figcaption>
                    <b>Tableau</b>
                </figcaption>
            </figure>
            <li>
                <h2>Web Development</h2>
                <p>
                    HTML, CSS, MongoDB, Express.js, ReactJs, Node.Js, MySQL,
                    Vue.js, Flask
                </p>
            </li>
            <figure>
                <img width={80} height={80} src={HTML} alt="skills img" />
                <figcaption>
                    <b>HTML</b>
                </figcaption>
            </figure>
            <figure>
                <img width={80} height={80} src={CSS} alt="skills img" />
                <figcaption>
                    <b>HTML</b>
                </figcaption>
            </figure>
            <figure>
                <img width={80} height={80} src={MongoDB} alt="skills img" />
                <figcaption>
                    <b>HTML</b>
                </figcaption>
            </figure>
            <figure>
                <img width={80} height={80} src={Express} alt="skills img" />
                <figcaption>
                    <b>HTML</b>
                </figcaption>
            </figure>
            <figure>
                <img width={80} height={80} src={ReactJS} alt="skills img" />
                <figcaption>
                    <b>HTML</b>
                </figcaption>
            </figure>
            <figure>
                <img width={80} height={80} src={NodeJS} alt="skills img" />
                <figcaption>
                    <b>HTML</b>
                </figcaption>
            </figure>
            <figure>
                <img width={80} height={80} src={MySQL} alt="skills img" />
                <figcaption>
                    <b>HTML</b>
                </figcaption>
            </figure>
            <figure>
                <img width={80} height={80} src={VueJS} alt="skills img" />
                <figcaption>
                    <b>HTML</b>
                </figcaption>
            </figure>
            <figure>
                <img width={80} height={80} src={Flask} alt="skills img" />
                <figcaption>
                    <b>HTML</b>
                </figcaption>
            </figure>
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
