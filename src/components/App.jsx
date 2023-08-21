import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { pixabayAPI } from './Services/API';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreBtn } from './Button/Button';
import { MagnifyingGlass } from 'react-loader-spinner';

export class App extends Component {
  state = {
    query: '',
    items: [],
    page: 1,
    perPage: 12,
    totalHits: 0,
    isLoading: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page, perPage } = this.state;
    try {
      if (prevState.query !== query || prevState.page !== page) {
        this.setState({ isLoading: true });
        const resp = await pixabayAPI(query, page, perPage);
        if (resp.status !== 200) {
          throw new Error();
        }
        this.setState(prevState => ({
          items: [...prevState.items, ...resp.data.hits],
          totalHits: resp.data.totalHits,
          isLoading: false,
        }));
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  handlerSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.query.value.trim();
    this.setState({ query, items: [], page: 1 });
    evt.target.reset();
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { items, perPage, totalHits, page, isLoading } = this.state;
    const totalPage = Math.round(totalHits / perPage);
    return (
      <>
        <Searchbar onSubmit={this.handlerSubmit} />
        <ImageGallery images={items} />
        {items.length > 0 && page <= totalPage && !isLoading && (
          <LoadMoreBtn handlerClick={this.handleLoadMore}>
            Load More
          </LoadMoreBtn>
        )}
        <MagnifyingGlass
          visible={isLoading}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{ position: 'fixed', left: '50%', top: '50%' }}
          wrapperClass="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#3f51b5"
        />
      </>
    );
  }
}
