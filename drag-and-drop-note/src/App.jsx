import React, { useState } from 'react'
import Notes from './Notes';

const App = () => {
  const [notes, setNotes] = useState(
    [
      {
        id: 1,
        text: "Check descriptionn for my Frontend developer"
      },{
        id: 2,
        text: "Like this videos and subscribe to RoadsideCoder"
      }
    ]
  )
  
 
  return (
    <div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  )
}

export default App
