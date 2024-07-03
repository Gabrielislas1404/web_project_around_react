function Card(card) {
  return (
    <div className="elements__container">
      <img className="elements__image" src={card.link} alt={card.name} />
      <div className="elements__description">
        <h3 className="elements__text">{card.name}</h3>
        <button className="elements__trash"></button>
        <div className="elements__like-wrapper">
          <button className="elements__heart"></button>
          <span className="elements__like">{card.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
