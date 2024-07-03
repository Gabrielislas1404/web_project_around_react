import React from 'react';
function PopupWithForm({
  name,
  title,
  buttonTitle,
  isOpen,
  onClose,
  children,
}) {
  return (
    <>
      <div className={`popup popup_${name} ${isOpen ? 'popup_hide' : ''} `}>
        <div class="popup__overlay"></div>
        <form className={`popup__content popup__content_${name}`} novalidate>
          <button
            type="button"
            className="popup__close-button"
            onClick={onClose}
          ></button>

          <h4 className="popup__title">{title}</h4>
          {children}
          <button
            className={`popup__save-button popup__save-button_${name}`}
            disabled
            type="submit"
          >
            {buttonTitle}
          </button>
        </form>
      </div>
    </>
  );
}

export default PopupWithForm;
