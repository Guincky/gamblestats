import React, { useState } from 'react';
import Popup from './Popup'; // Ajuste o caminho conforme necessário

const Popup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div>
      <button onClick={openPopup}>Abrir Popup</button>

      {isPopupOpen && (
        <Popup message="Sua mensagem aqui." onClose={closePopup} />
      )}
    </div>
  );
};

export default Popup;
