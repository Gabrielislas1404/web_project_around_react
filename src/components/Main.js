import React from 'react';
import '../blocks/profile.css';
import PopupWithForm from './PopupWithForm';

function Main({ onEditAvatarClick, onEditProfileClick, onAddPlaceClick }) {
  return (
    <section class="profile">
      <div class="profile__picture-wrapper">
        <div class="profile__picture-overlay"></div>
        <img src="." alt="foto de perfil" class="profile__picture" />
        <button
          className="profile__picture-button"
          onClick={onEditAvatarClick}
        ></button>
      </div>

      <div class="profile__container">
        <h1 class="profile__name"></h1>
        <button
          type="button"
          className="profile__button"
          onClick={onEditProfileClick}
        ></button>
        <h2 class="profile__about-me"></h2>
      </div>
      <button
        type="button"
        class="profile__add-button"
        onClick={onAddPlaceClick}
      ></button>
    </section>
  );
}

/* function handleEditAvatarClick() {
  const popupElement = document.querySelector('.popup_profile-button');
  if (popupElement) {
    popupElement.classList.add('popup_hide');
  }
}

 const handleEditProfileClick = () => {
  const popupElement = document.querySelector('.popup');
  if (popupElement) {
    popupElement.classList.add('popup_hide');
  }
};

const handleAddPlaceClick = () => {
  const popupElement = document.querySelector('.popup_add-button');
  if (popupElement) {
    popupElement.classList.add('popup_hide');
  }
};  */

export default Main;
