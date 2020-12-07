const Search = (props) => {
    return (
        <div>
            <form className="search" onSubmit={props.userSubmit}>
                <label htmlFor="bookSearch">Search: </label>
                <input type="text" onChange={props.userInput} id="bookSearch" required />
                <button type="submit" className="searchSubmit">Search</button>
                <br />
                <label htmlFor="printType">Print Type: </label>
                <select name="printType">
                    <option value="all">All</option>
                    <option value="hard">Hard Cover</option>
                    <option value="soft">Soft Cover</option>
                </select>
                <label htmlFor="bookType"> Book Type: </label>
                <select name="bookType">
                    <option value="noFilter">No Filter</option>
                </select>
            </form>
        </div>
    )
}

export default Search;