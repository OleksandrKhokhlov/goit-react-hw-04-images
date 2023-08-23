import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = ({ isLoading }) => (
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
);
