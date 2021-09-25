import './Search.css';

function Search({ searchStr, setSearchStr }) {
    return (
        <div className="sortby">
            <strong>Search:</strong>
            <input value={searchStr} onChange={(e) => setSearchStr(e.target.value)} />
        </div>
    );
}

export default Search;