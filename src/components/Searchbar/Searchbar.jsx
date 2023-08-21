import { FcSearch } from 'react-icons/fc';

import {
  SearchForm,
  SearchFormButton,
  SearchFormInput,
  SearchbarHeader,
} from './Searchbar.styled';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarHeader>
        <SearchForm onSubmit={onSubmit}>
          <SearchFormButton type="submit">
            <FcSearch size={25} />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
    </SearchbarHeader>
  );
};
