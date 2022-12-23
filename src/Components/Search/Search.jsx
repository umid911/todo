import React from 'react'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'

import './Search.scss'


const Search = ({handeleCloseSearch,search,setSearch,handleBackSearch }) => {
    
    const handleSearch =(e) => {
        setSearch(e.target.value)
    }
    return (
        <div className="search">
            <div onClick={handleBackSearch} className="search__back">
                <GlobalSvgIcons id='arrow' />
            </div>
            <input onChange={handleSearch} value={search} type="text" placeholder='Поиск...' />
            <div onClick={handeleCloseSearch} className="search__close">
                <GlobalSvgIcons id='close' />
            </div>
        </div>
    )
}

export default Search