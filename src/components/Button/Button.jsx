import { LoadMoreBtnStyled } from "./Button.styled";

export const LoadMoreBtn = ({handlerClick, children }) => {
 return <LoadMoreBtnStyled type="button" onClick={handlerClick}>{children}</LoadMoreBtnStyled>;
};
