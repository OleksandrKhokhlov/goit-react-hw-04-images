import { useEffect } from 'react';
import { Overlay } from './Modal.styled';

export const Modal = ({ src, alt, onClose }) => {
  const handlerKeydown = evt => {
    if (evt.code === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handlerKeydown);

    return () => {
      window.removeEventListener('keydown', handlerKeydown);
    };
  });

  return (
    <Overlay>
      <div>
        <img src={src} alt={alt} />
      </div>
    </Overlay>
  );
};
