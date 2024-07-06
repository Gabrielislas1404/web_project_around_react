function ImagePopup({ selectedCard, onClose }) {
  console.log('imagePopup', selectedCard);
  return (
    <div className="popup popup_image">
      <div className="popup__overlay"></div>
      <div className="popup__image-container">
        <button
          type="button"
          className="popup__close-button popup__close-button_image"
          onClick={onClose}
        ></button>
        <img src={selectedCard.link} alt="" className="popup__picture" />
        <h4 className="popup__card-name">{selectedCard.name}</h4>
      </div>
    </div>
  );
}

export default ImagePopup;
