import { useEffect, useState } from 'react';
import Listitam from './Components/Listitem/Listitam';
import ToDoHeader from './Components/ToDoHeader'
import ToDoNav from './Components/ToDoNav/ToDoNav';
import GlobalSvgIcons from './assets/icons/GlobalSvgIcons'
import Button from './Components/Button/Button';
import Model from './Components/Model/Model';
import { useTranslation } from "react-i18next";

const date = `${new Date().getDate()}.${new Date().getMonth() +1}.${new Date().getFullYear()}`

const getTodos = () => {
  const todos = localStorage.getItem('todos')
  
  if (todos) {
    return JSON.parse(todos)
  } else {
    return []
  }
}

function App() {
  
  const[gritToList, setGridToList] = useState(false)
  const[openSearch, setOpenSearch] = useState(false)
  const[openModel, setOpenModel] = useState(false)
  const[todos, setTodos] = useState(getTodos())
  const[title, setTitle] = useState('')
  const[content, setContent] = useState('')
  const[search, setSearch] = useState('')
  
  const [t, i18n] = useTranslation()
  
  
  useEffect(() => {
    
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  const toggoleGridToList = () => {
    setGridToList(!gritToList)
  }
  
  const handleOpenModel = () => {
    setOpenModel(true)
  }
  const hendleCloseModal = () => {
   setOpenModel(false)
  }
  
  const addTodos =() => {
    if (title != '' && content !== '') {
      const newTodo = {
        id:Math.random().toString(36).substring(2,9),
        title,
        date,
        content
    }
    setTodos([...todos, newTodo])
    setOpenModel(false)
    setTitle('')
    setContent('')

    }
  }
  const onEditTodos = (id, title, content) => {
    const newTodos = todos.map(todo => {
      if(todo.id == id) {
        todo.title = title
        todo.content = content
        todo.date = date
      }
      return todo
    })
    setTodos(newTodos)
    
   
    }
    const onDeleteTodos = (id) => {
      setTodos([...todos.filter(todo => todo.id !==id)])
  }
  
const changeLanguage = (lng) => {
  i18n.changeLanguage(lng)
}
  
  return (
    <div className="App">
         <ToDoHeader 
         openSearch={openSearch} 
         setOpenSearch={setOpenSearch}
         search={search}
         setSearch={setSearch}  />
         <div className="container">
          <ToDoNav toggoleGridToList={toggoleGridToList} gritToList={gritToList} />
          <div className={gritToList ? 'listItem' : 'grid'}>
            
          {
            todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase())).map(todo => (
              <Listitam gritToList={gritToList}
               todo={todo}
               onEditTodos={onEditTodos}
               onDeleteTodos={onDeleteTodos} />
            ))
          }
          </div>
         </div>
        <div className={openModel ? "App__btn active" : "App__btn"}>
        <Button click={handleOpenModel}>
         <GlobalSvgIcons id= 'edit'/>
        </Button>
        </div>
        <Model text='Добавить'
         openModel={openModel}
         close={hendleCloseModal}
         title={title}
         setTitle={setTitle}
         content={content}
         setContent={setContent}
         addAndEdit={addTodos}/>
        {/*  <button onClick={() => changeLanguage ('ru')}>Ru</button>
         <button onClick={() => changeLanguage ('en')}>en</button>
         <p>{t('hello')}</p> */}
         
    </div>
  );
}

export default App;
