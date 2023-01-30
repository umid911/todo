import React from 'react'
import GlobalSvgIcons from '../assets/icons/GlobalSvgIcons'
import Search from './Search/Search'

import './ToDoHeader.scss'

const ToDoHeader = ({openSearch, setOpenSearch,search,setSearch }) => {
  
  const handeleOpenSearch =() => {
    setOpenSearch(true)
  }
  
  const handeleCloseSearch = () => {
    setOpenSearch(false)
    setSearch('')
  }
  
  const handleBackSearch = () => {
    setOpenSearch(false)
  }
  
  return (
    openSearch ? < Search 
    handeleCloseSearch={handeleCloseSearch}
    search={search}
    setSearch={setSearch}
    handleBackSearch={handleBackSearch}/>:
    <div className="todoHeader">
        <h2 className="todoHeader__title">Заметки</h2>
        <div  className="todoHeader__icon">
          <button className="todoHeader__switcher">RU</button>
          <div on onClick={handeleOpenSearch}>
          <GlobalSvgIcons id='search' />
          </div>
            
        </div>
    </div>
  )
}

export default ToDoHeader