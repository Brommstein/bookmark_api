import React from 'react';
import SingleResult from './SingleResult';

const Results = (props) => {
    return (
        <div className="result">
            {
                props.results.map((book, i) => {
                    return <SingleResult
                        key={i}
                        bookImg={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        pub={book.volumeInfo.publishedDate}
                        desc={book.volumeInfo.description}
                    />
                })
            }
        </div>
    )
}

export default Results;