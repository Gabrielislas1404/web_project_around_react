import './index.css';
import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import PopupWithForm from './components/PopupWithForm';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);

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
  };

  return (
    <div class="page">
      <Header />
      <Main
        onEditAvatarClick={handleEditAvatarClick}
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onClose={closeAllPopups}
      />

      <section class="elements"></section>

      <Footer />

      <div className="popup">
        <div class="popup__overlay"></div>
        <form class="popup__content" novalidate>
          <button type="button" class="popup__close-button"></button>
          <h4 class="popup__title">Editar perfil</h4>
          <input
            type="text"
            name="name"
            id="input-name"
            placeholder="Nombre"
            minlength="2"
            maxlength="40"
            required
            class="popup__input popup__input_name"
          />
          <span class="popup__line" id="input__error-name"></span>
          <input
            type="text"
            name="occupation"
            id="occupation"
            placeholder="Acerca de mí"
            minlength="2"
            maxlength="200"
            required
            class="popup__input popup__input_occupation"
          />
          <span class="popup__line" id="input__error-occupation"></span>
          <button disabled type="submit" class="popup__save-button">
            Guardar
          </button>
        </form>
      </div>

      <div class="popup popup_add-button">
        <div class="popup__overlay"></div>
        <form class="popup__content popup__content_add" novalidate>
          <button type="button" class="popup__close-button"></button>
          <h4 class="popup__title">Nuevo lugar</h4>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Título"
            minlength="2"
            maxlength="30"
            required
            class="title-input-error popup__input popup__input_title"
          />
          <span class="popup__line" id="input__error-title"></span>
          <input
            type="url"
            name="link"
            id="link"
            placeholder="Enlace a la imágen"
            minlength="7"
            required
            class="popup__input popup__input_link"
          />
          <span class="popup__line" id="input__error-link"></span>
          <button
            disabled
            type="submit"
            class="popup__save-button popup__save-button_picture"
          >
            Crear
          </button>
        </form>
      </div>

      <div class="popup popup_image">
        <div class="popup__overlay"></div>
        <div class="popup__image-container">
          <button
            type="button"
            class="popup__close-button popup__close-button_image"
          ></button>
          <img src=" " alt="" class="popup__picture" />
          <h4 class="popup__card-name"></h4>
        </div>
      </div>

      <div className="popup popup_profile-button">
        <div class="popup__overlay"></div>
        <form class="popup__content popup__content_profile" novalidate>
          <button type="button" class="popup__close-button"></button>
          <h4 class="popup__title popup__title_picture">
            Cambiar foto de perfil
          </h4>
          <div class="popup__wrapper">
            <input
              type="url"
              name="picture"
              id="popup__avatar-input"
              placeholder="Imágen de perfil"
              minlength="7"
              required
              class="popup__input popup__input_link"
            />
            <span class="popup__line" id="input__error-picture"></span>
            <button
              disabled
              type="submit"
              class="popup__save-button popup__save-button_avatar"
            >
              Guardar
            </button>
          </div>
        </form>
      </div>

      <div class="popup popup_erase-photo">
        <div class="popup__overlay"></div>
        <form class="popup__content popup__content_card">
          <button type="button" class="popup__close-button"></button>
          <h4 class="popup__title popup__title_picture">¿Estás seguro/a?</h4>
          <button
            type="submit"
            class="popup__save-button popup__save-button_delete"
          >
            Si
          </button>
        </form>
      </div>

      <template id="card-template">
        <div class="elements__container">
          <img class="elements__image" src=" " alt=" " />
          <div class="elements__description">
            <h3 class="elements__text"></h3>
            <button class="elements__trash"></button>
            <div class="elements__like-wrapper">
              <button class="elements__heart"></button>
              <span class="elements__like"></span>
            </div>
          </div>
        </div>
      </template>
    </div>
  );
}

export default App;
