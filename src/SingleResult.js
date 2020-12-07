import React from 'react';

const SingleResult = (props) => {
    return (
        <section className="flexbox">
            <img className="flexImg" src={props.bookImg} alt="Book Cover" />
            <div className="flexInfo">
                <h2>{props.title}</h2>
                <p>{props.author}</p>
                <br />
                <p>{props.desc}</p>
                <p>{props.pub}</p>
            </div>
        </section>
    )
}

export default SingleResult;