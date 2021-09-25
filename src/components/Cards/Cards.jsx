import Card from "../Card/Card";

function Cards({data}) {
    const cards = data.map(card => <Card key={card.id} cardData={card} />);
    
    return (
        <>
            {cards}        
        </>
    );
}

export default Cards;