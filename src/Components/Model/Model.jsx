import React from 'react'

import'./Model.scss'


const Model = ({text, openModel,close,title,setTitle,content,setContent,addAndEdit }) => {
    
    const ChengeTitle = (e) => {
        setTitle(e.target.value)
    }
    
    const ChengeContent = (e) => {
        setContent(e.target.value)
    }
    
    
  return (
    <div  className= {openModel ?"model active" : 'model'}>
        <div className="model__wrapper">
            <h2 className="model__title">{text} заметка</h2>
            <form action='' className="model__from"> 
            <div className="model__group">
                <input onChange={ChengeTitle} value={title} type="text" required />
                <span className="bar"></span>
                <label>Title</label>
                
            </div>
            <div className="model__group">
                <input onChange={ChengeContent} value={content} type="text"  required/>
                <span className="bar"></span>
                <label>Content</label>
                
            </div>
                
            </form>
            <div className="model__btns">
                <button onClick={close}>Отмена</button>
                <button onClick={addAndEdit}>{text}</button>
                
            </div>
            
        </div>
        
    </div>
  )
}

export default Model