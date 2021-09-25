import Card from "../Card/Card";

function Cards({ data, sortBy, searchStr }) {
    const dataCopy = searchStr
        ? [...data].filter(item => item.name.toLowerCase().includes(searchStr.toLowerCase().trim()))
        : [...data];

    let sortingFunc;

    switch (sortBy) {
        case 'Name A->Z':
            sortingFunc = (a, b) => a.name < b.name ? -1 : 1
            break;
        case 'Name Z->A':
            sortingFunc = (a, b) => a.name < b.name ? 1 : -1
            break;
        case 'ABV low->high':
            sortingFunc = (a, b) => a.abv < b.abv ? -1 : 1
            break;
        case 'ABV high->low':
            sortingFunc = (a, b) => a.abv < b.abv ? 1 : -1
            break;

        default:
            sortingFunc = () => 0
            break;
    }

    dataCopy.sort(sortingFunc)

    const cards = dataCopy.map(card => <Card key={card.id} cardData={card} />);

    return (
        <>
            {cards}
        </>
    );
}

export default Cards;