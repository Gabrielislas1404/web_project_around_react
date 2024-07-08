import React from 'react';
import { useState, useEffect } from 'react';
import { api } from '../utils/api';
import '../blocks/profile.css';
import Card from './Card';
import ImagePopup from './ImagePopup';

function Main({
  onEditAvatarClick,
  onEditProfileClick,
  onAddPlaceClick,
  onCardClick,
  onClose,
  selectedCard,
}) {
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
        <div className="profile__picture-wrapper">
          <div className="profile__picture-overlay"></div>
          <img
            src={userAvatar}
            alt="foto de perfil"
            className="profile__picture"
          />
          <button
            className="profile__picture-button"
            onClick={onEditAvatarClick}
          ></button>
        </div>

        <div className="profile__container">
          <h1 className="profile__name">{userName}</h1>
          <button
            type="button"
            className="profile__button"
            onClick={onEditProfileClick}
          ></button>
          <h2 className="profile__about-me">{userDescription}</h2>
        </div>
        <button
          type="button"
          className="profile__add-button"
          onClick={onAddPlaceClick}
        ></button>
      </section>

      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              imagePopup={selectedCard}
              onCardClick={onCardClick}
              onClose={onClose}
            ></Card>
          );
        })}
      </section>

      {selectedCard && (
        <ImagePopup selectedCard={selectedCard} onClose={onClose} />
      )}
    </>
  );
}

export default Main;
