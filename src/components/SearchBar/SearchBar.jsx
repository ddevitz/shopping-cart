import React, { useContext, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import fetchProducts from '../../api/fetchProducts';

import AppContext from '../../context/AppContext';
import './SearchBar.css';

function SearchBar(){

  const [searchValue, setSearchValue] = useState('');

  const { setProducts, setLoading } = useContext(AppContext);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    const products = await fetchProducts(searchValue);

    setProducts(products);
    setSearchValue('');
    setLoading(false);
  };

  return(
    <form className="search-bar" onSubmit={handleSearch}>
      <input 
        type="seachr"
        value={searchValue}
        placeholder="Buscar produtos" 
        className="search__input"
        onChange={ ({ target }) => setSearchValue(target.value) }
        required
      />
      <button type="submit" className="search__button">
        <BsSearch />
      </button>
    </form>
  );
}

export default SearchBar;
