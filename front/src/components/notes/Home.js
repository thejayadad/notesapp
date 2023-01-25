import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {format} from 'timeago.js'
import axios from 'axios'

export default function Home() {
  const [notes, setNotes] = useState([])
  const [token, setToken] = useState('')

  const getNotes = async (token) =>{
      const res = await axios.get('api/notes', {
          headers:{Authorization: token}
      })
      setNotes(res.data)
  }

  useEffect(() =>{
      const token = localStorage.getItem('tokenStore')
      setToken(token)
      if(token){
          getNotes(token)
      }
  }, [])

  const deleteNote = async (id) =>{
      try {
          if(token){
              await axios.delete(`api/notes/${id}`, {
                  headers: {Authorization: token}
              })
              getNotes(token)
          }
      } catch (error) {
          window.location.href = "/";
      }
  }
  return (
    <div className='note-wrapper'>
      {
        notes.map(note => (
          <div className='card' key={note._id}>
        <h4 className='card-title'>{note.title}</h4>
        <div className='note-text'>
          <p>{note.content}</p>
        </div>
        <p className='date'>{format(note.date)}</p>
        <div className='card-footer'>
        {note.name}<Link className='edit' to={`edit/${note._id}`}>Edit</Link>
      </div>
      <button onClick={() => deleteNote(note._id)} className='close'>Delete</button>
      </div>
        ))
      }
    </div>
  )
}
