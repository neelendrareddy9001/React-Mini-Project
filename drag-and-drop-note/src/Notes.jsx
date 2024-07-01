import React, { useEffect } from 'react'
import Note from './Note'

const Notes = ({notes = [], setNotes = () => {}}) => {
 
  useEffect(() => {
    const updatedNotes = notes.map((note) => {
      const saveNotes = null;
      if(saveNotes) {
        return {};
      } else {
        const positions = determinedNewPosition();
        return {...note, positions}
      }
      
    })
    setNotes(updatedNotes)
  },[notes.length])
  
  

  const determinedNewPosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY)
    }
  }
  return (
    <div>
      {notes.map((note) => {
        return <Note key={note.id} initialPos={note.positions} content={note.text} />
      })}
      
    </div>
  )
}

export default Notes
