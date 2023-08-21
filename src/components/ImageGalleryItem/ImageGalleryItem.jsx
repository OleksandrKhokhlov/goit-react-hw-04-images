import { Modal } from 'components/Modal/Modal';
import { ImageGalleryItems } from './ImageGalleryItem.styled';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModal: false,
  };

  handlerToggleModal = () => {
    this.setState(({isModal}) => ({ isModal: !isModal }));
  };

  render() {
    const {
      image: { webformatURL, largeImageURL, tags },
    } = this.props;
    return (
      <ImageGalleryItems onClick={this.handlerToggleModal}>
        <img src={webformatURL} alt={tags} />
        {this.state.isModal && (
          <Modal src={largeImageURL} alt={tags} onClose={this.handlerToggleModal} />
        )}
      </ImageGalleryItems>
    );
  }
}
