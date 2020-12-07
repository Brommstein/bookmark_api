import React from 'react';

const UserInput = (props) => {
    return (
        <div>
            <form className="search">
                <label htmlFor="bookSearch">Search: </label>
                <input type="text" onChange={props.userInput} id="bookSearch" required />
                <button type="submit" className="searchSubmit">Search</button>
            </form>
        </div>
    )
}

export default UserInput;