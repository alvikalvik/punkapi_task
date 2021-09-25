import './Card.css';

function Card({ cardData }) {
    const { name, image_url, abv, first_brewed, description } = cardData;
    return (
        <article className="card">
            <h2 className="card__title">{name}</h2>
            <div className="card__wrapper">
                <img className="card__img" src={image_url} alt={name} />
                <div className="card__info-wrapper">
                    <div className="card__text-info"><strong>ABV:</strong> {abv}</div>
                    <div className="card__text-info"><strong>First brewed:</strong> {first_brewed}</div>
                    <div className="card__text-info"><strong>Description:</strong> {description}</div>
                </div>
            </div>

        </article>
    );
}

export default Card;