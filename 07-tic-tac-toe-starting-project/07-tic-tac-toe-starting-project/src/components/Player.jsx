import React, { useState } from 'react'

const Player = ({initialName, symbol, isActive}) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick(){
  
   setIsEditing((editing) => !editing);
   
  }
  
  function handleChange(event) {
    setPlayerName(event.target.value)
  }
  return (
    <li className={isActive ? 'active' : undefined}>
    <span className="player">
    {!isEditing && <span className="player-name">{playerName}</span> }
    {isEditing && <input type='text' required value={playerName} onChange={handleChange}/> }
    <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
  </li>
  )
}

export default Player