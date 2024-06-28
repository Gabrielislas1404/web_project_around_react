import React from 'react';
import closeButton from '../images/formclosebutton.svg';

function PopupWithForm(name, title, isOpen, onClose, children) {
  return (
    <>
      <div className={`popup popup_${name} ${isOpen ? 'popup_hide' : ''} `}>
        <button type="button" className="popup__close-button" onClick={onClose}>
          <img src={closeButton} alt="close Button" />
        </button>
        <form
          className={`popup__content popup__content_${name}`}
          /* novalidate */
        >
          <h4 className="popup__title">${title}</h4>
          {children}
          <button
            className={`popup__save-button popup__save-button_${name}`}
            /* disabled */ type="submit"
          >
            Guardar
          </button>
        </form>
      </div>
    </>
  );
}

export default PopupWithForm;
