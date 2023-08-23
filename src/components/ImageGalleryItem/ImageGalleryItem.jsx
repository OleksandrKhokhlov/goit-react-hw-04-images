import { Modal } from 'components/Modal/Modal';
import { ImageGalleryItems } from './ImageGalleryItem.styled';
import { useState } from 'react';

export const ImageGalleryItem = ({
  image: { webformatURL, largeImageURL, tags },
}) => {
  const [isModal, setisModal] = useState(false);

  const handlerToggleModal = () => {
    setisModal(!isModal);
  };

  return (
    <ImageGalleryItems onClick={handlerToggleModal}>
      <img src={webformatURL} alt={tags} />
      {isModal && (
        <Modal
          src={largeImageURL}
          alt={tags}
          onClose={handlerToggleModal}
        />
      )}
    </ImageGalleryItems>
  );
};
