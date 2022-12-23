import React from 'react'
import { useState } from 'react'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import Model from '../Model/Model'
import'./Listitem.scss'

const Listitam = ({gritToList, todo, onEditTodos, onDeleteTodos}) => {
  const { title, date, content } = todo
  const[edit, setEdit] = useState(false)
  const[editTitle, setEditTitle] = useState(title)
  const[editComtent, setEditComtent] = useState(content)
  

  
  const editTodo = () => {
    setEdit(true)
  }
  
  const closeModel = () => {
    setEdit(false)
  }
  
  const deleteTodo = () => {
    onDeleteTodos(todo.id)
  }
  
  
  const editTodoClose = () => {
    if(editTitle && editComtent) {
      onEditTodos(todo.id, editTitle, editComtent)
      setEdit(false)
      setEditTitle(editTitle)
      setEditComtent(editComtent)
    }else {
      alert('Заполните все поля')
    }
  }
  
  return (
    <>
    <div className="list">
        <div className={gritToList ? "list__wrapper active" : "list__wrapper"} >
            <h2 className="list__title">{title}</h2>
            <p className="list__date">{date}</p>
        </div>
        <p className="list__description">{content}</p>
        <div className="list__btns">
            <button onClick={editTodo}>
                <GlobalSvgIcons id='edit'/>
                <span>РЕДАКТИРОВАТЬ</span>
            </button>
            <button onClick={deleteTodo}>
            <GlobalSvgIcons id='trash'/>
            <span>Удалить</span>
            </button>
            
        </div>
        
    </div>
    <Model 
    text='изменить'
    openModel={edit}
    title={editTitle}
    setTitle={setEditTitle}
    content={editComtent}
    setContent={setEditComtent}
    addAndEdit={editTodoClose}
    close={closeModel} />
    
    
    </>
  )
}

export default Listitam