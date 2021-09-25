import './Sortby.css';

function Sortby({ sortBy, setSortBy }) {
    return (
        <div className="sortby">
            <strong>Sort by:</strong>
            <select
                name="sortby"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
            >
                <option>None</option>
                <option>Name A->Z</option>
                <option>Name Z->A</option>
                <option>ABV low->high</option>
                <option>ABV high->low</option>
            </select>
        </div>
    );
}

export default Sortby;