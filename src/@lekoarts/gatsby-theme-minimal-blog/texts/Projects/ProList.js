import React from "react";

function ProList() {
    return (
        <div>
            <div>
                <h4>
                    Information Extraction using Convolutional Neural Network
                </h4>
                <span>
                    <p style={{ "font-size": "20px" }}>
                        Convolutional Neural Networks have in the past years
                        shown break-through results in some NLP tasks, one
                        particular task is sentence classification, i.e.,
                        classifying sentence into a set of pre-defined
                        categories and use them to generate a summary. Generated
                        summary scores upto 64% on different datasets which
                        almost twice of accepted score of 35%.{" "}
                        <a
                            id="customa"
                            style={{ "font-size": "20px" }}
                            href="http://www.nrifintech.com/solution-for-broker-dealers.html"
                        >
                            Read more
                        </a>
                    </p>
                </span>
            </div>

            <br />
            <br />

            <div>
                <h4>Twitter Sentiment Analyzer</h4>
                <span>
                    <p style={{ "font-size": "20px" }}>
                        In this project, I have trained a Naive Bayes classifier
                        to predict sentiment from thousands of Twitter tweets.
                        This project could be practically used by any company
                        with social media presence to automatically predict
                        customer's sentiment (i.e. whether their customers are
                        happy or not) or to detect toxic comments. The process
                        could be done automatically without having humans
                        manually review thousands of tweets and customer
                        reviews.{" "}
                        <a
                            id="customa"
                            style={{ "font-size": "20px" }}
                            href="http://www.nrifintech.com/solution-for-broker-dealers.html"
                        >
                            Read more
                        </a>
                    </p>
                </span>
            </div>

            <br />
            <br />

            <div>
                <h4>Stock Management System</h4>
                <span>
                    <p style={{ "font-size": "20px" }}>
                        Stock Management System is a software system for
                        tracking inventory levels, orders, sales and deliveries.
                        It can also be used in the manufacturing industry to
                        create a work order, bill of materials and other
                        production related documents. Companies use stock
                        management software to avoid product overstock and
                        outages. It is a tool for organizing inventory data that
                        before was generally stored in hard-copy form or in
                        spreadsheets. Open-source and clean code structure makes
                        it easy to add new modules for anyone.{" "}
                        <a
                            id="customa"
                            style={{ "font-size": "20px" }}
                            href="http://www.nrifintech.com/solution-for-broker-dealers.html"
                        >
                            Read more
                        </a>
                    </p>
                </span>
            </div>
        </div>
    );
}

export default ProList;
