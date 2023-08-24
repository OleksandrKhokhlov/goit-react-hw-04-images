import { LoadMoreBtnStyled } from './Button.styled';

export const LoadMoreBtn = ({ handlerClick, isLoading, children }) => {
  return (
    <LoadMoreBtnStyled
      type="button"
      onClick={handlerClick}
      disabled={isLoading}
    >
      {children}
    </LoadMoreBtnStyled>
  );
};
