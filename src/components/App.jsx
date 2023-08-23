import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { pixabayAPI } from './Services/API';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(12);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getImages() {
      try {
        setIsLoading(true);
        const resp = await pixabayAPI(query, page, perPage);
        if (resp.status !== 200) {
          throw new Error();
        }
        setItems(prevItems => [...prevItems, ...resp.data.hits]);
        setTotalHits(resp.data.totalHits);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    }
    if (query!=='') {
      getImages();
    }
  },[page, perPage, query]);

  const handlerSubmit = evt => {
    evt.preventDefault();

    const queryCurrent = evt.target.elements.query.value.trim();

    setQuery(queryCurrent);
    setItems([]);
    setPage(1);
    evt.target.reset();
  };

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const totalPage = Math.round(totalHits / perPage);
  return (
    <>
      <Searchbar onSubmit={handlerSubmit} />
      <ImageGallery images={items} />
      {items.length > 0 && page <= totalPage && !isLoading && (
        <LoadMoreBtn handlerClick={handleLoadMore}>Load More</LoadMoreBtn>
      )}
      <Loader isLoading={isLoading} />
    </>
  );
};
