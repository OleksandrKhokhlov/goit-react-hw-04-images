import { Component } from 'react';
import { Overlay } from './Modal.styled';

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handlerKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown',this.handlerKeydown);
  }

  handlerKeydown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;
    return (
      <Overlay>
        <div>
          <img src={src} alt={alt} />
        </div>
      </Overlay>
    );
  }
}
