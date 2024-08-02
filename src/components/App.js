import '../index.css';
import React from 'react';
import { useState, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [cards, setCards] = useState([]);
  const [cardToDelete, setCardToDelete] = useState({});
  const [currentUser, setCurrentUser] = useState();
  const [confirmation, setConfirmation] = useState(false);

  function handleCardDelete(card) {
    setCardToDelete(card);
    setConfirmation(true);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.likeCard({ id: card._id, isLiked: !isLiked }).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  useEffect(() => {
    api.getUserInfo().then((data) => setCurrentUser(data));
  }, []);

  const handleUpdateUser = ({ name, about }) => {
    api
      .updateUser({ name, about })
      .then((newUserData) => {
        setCurrentUser(newUserData);
        setIsEditProfilePopupOpen(false);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };

  function handleUpdateAvatar(avatar) {
    api.updateAvatar(avatar).then((updateUser) => {
      setCurrentUser(updateUser);
      setIsEditAvatarPopupOpen(false);
    });
  }

  const handleAddPlaceSubmit = ({ name, link }) => {
    api.addCard({ name, link }).then((newCard) => {
      setCards([newCard, ...cards]);
      setIsAddPlacePopupOpen(false);
    });
  };

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
    setSelectedCard(false);
    setConfirmation(false);
  };

  useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

  const handleSubmitConfirm = (event) => {
    event.preventDefault();
    if (cardToDelete) {
      api.deleteCard(cardToDelete._id).then(() => {
        setCards((state) => state.filter((c) => c._id !== cardToDelete._id));
        closeAllPopups();
      });
    }
  };

  return (
    <div className="page">
      <CurrentUserContext.Provider value={{ currentUser }}>
        <Header />
        <Main
          onEditAvatarClick={handleEditAvatarClick}
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onClose={closeAllPopups}
          cards={cards}
          selectedCard={selectedCard}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlaceSubmit={handleAddPlaceSubmit}
        />
        <PopupWithForm
          name={'erase_photo'}
          title={'¿Estás seguro/a?'}
          buttonTitle={'Si'}
          content={'card'}
          buttonClass={'delete'}
          modifier={'delete'}
          isOpen={confirmation}
          onClose={closeAllPopups}
          onSubmit={handleSubmitConfirm}
        />

        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
