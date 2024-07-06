import './index.css';
import React from 'react';
import { useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const closeAllPopups = () => {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div class="page">
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onClose={closeAllPopups}
        selectedCard={selectedCard}
      />

      <PopupWithForm
        name={'edit-profile'}
        title={'Edital perfil'}
        buttonTitle={'Guardar'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <input
            type="text"
            name="name"
            id="input-name"
            placeholder="Nombre"
            minLength="2"
            maxLength="40"
            required
            className="popup__input popup__input_name"
          />
          <span className="popup__line" id="input__error-name"></span>
          <input
            type="text"
            name="occupation"
            id="occupation"
            placeholder="Acerca de mí"
            minLength="2"
            maxLength="200"
            required
            className="popup__input popup__input_occupation"
          />
          <span className="popup__line" id="input__error-occupation"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        name={'add-button'}
        title={'Nuevo lugar'}
        buttonTitle={'Crear'}
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Título"
            minLength="2"
            maxLength="30"
            required
            className="title-input-error popup__input popup__input_title"
          />
          <span className="popup__line" id="input__error-name"></span>
          <input
            type="url"
            name="link"
            id="link"
            placeholder="Enlace a la imágen"
            minLength="7"
            required
            className="popup__input popup__input_link"
          />
          <span className="popup__line" id="input__error-link"></span>
        </>
      </PopupWithForm>

      <PopupWithForm
        name={'profile-button'}
        title={'Cambiar foto de perfil'}
        buttonTitle={'Guardar'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="popup__wrapper">
          <input
            type="url"
            name="picture"
            id="popup__avatar-input"
            placeholder="Imágen de perfil"
            minLength="7"
            required
            className="popup__input popup__input_link"
          />
          <span className="popup__line" id="input__error-picture"></span>
        </div>
      </PopupWithForm>

      <Footer />
    </div>
  );
}

export default App;
