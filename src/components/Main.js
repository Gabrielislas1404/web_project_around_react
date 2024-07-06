import React from 'react';
import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import '../blocks/profile.css';
import Card from './Card';
import ImagePopup from './ImagePopup';

function Main({ onEditAvatarClick, onEditProfileClick, onAddPlaceClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((error) => {
        console.error('Error', error);
      });

    api
      .getInitialCards()
      .then((res) => {
        setCards(res);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }, []);

  return (
    <>
      <section className="profile">
        <div class="profile__picture-wrapper">
          <div class="profile__picture-overlay"></div>
          <img src={userAvatar} alt="foto de perfil" class="profile__picture" />
          <button
            className="profile__picture-button"
            onClick={onEditAvatarClick}
          ></button>
        </div>

        <div class="profile__container">
          <h1 class="profile__name">{userName}</h1>
          <button
            type="button"
            className="profile__button"
            onClick={onEditProfileClick}
          ></button>
          <h2 class="profile__about-me">{userDescription}</h2>
        </div>
        <button
          type="button"
          class="profile__add-button"
          onClick={onAddPlaceClick}
        ></button>
      </section>

      {selectedCard && (
        <ImagePopup selectedCard={selectedCard} onClose={closeAllPopups} />
      )}

      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              ImagePopup={selectedCard}
              onCardClick={onCardClick}
              onClose={closeAllPopups}
            ></Card>
          );
        })}
      </section>
    </>
  );
}

export default Main;
