import React, { createRef, useEffect, useRef } from 'react'
import Note from './Note'

const Notes = ({notes = [],setNotes = () => {}}) => {
 
  useEffect(() => {

    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    

    const updatedNotes = notes.map((note) => {
      const savedNote = savedNotes.find((n) => n.id === note.id)
      if(savedNote) {
        return {...note, pos: savedNote.pos};
      } else {
        const pos = determinedNewPosition();
        return {...note, pos}
      }
      
    })
    setNotes(updatedNotes)
    localStorage.setItem("notes",JSON.stringify(updatedNotes))
  },[notes.length])
  
  
  //noteRefs is an empty array
  const noteRefs = useRef([]);
  const determinedNewPosition = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY)
    }
  }
  const handleDragStart = (note,e) => {
    const {id} = note;
    const noteRef = noteRefs.current[id].current;
    const rect = noteRef.getBoundingClientRect();
    const offSetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const startPos = note;

    const handleMouseMove = () => {}

    const handleMouseUp = () => {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp)
  }
  return (
    <div>
      {notes.map((note,index) => {
        return <Note key={index}
          ref={noteRefs.current[note.id]
            ? noteRefs.current[note.id]
            : (noteRefs.current[note.id] = createRef())
          }
        initialPos={note.pos} content={note.text}
          onMouseDown = {(e) => handleDragStart(note,e)}
        ></Note>
      })}
      
    </div>
  )
}

export default Notes
