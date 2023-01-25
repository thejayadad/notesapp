import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function CreateNote() {
  const [note, setNote] = useState({
    title: '',
    content: '',
    date: ''
})
const navigate = useNavigate()

const onChangeInput = e => {
    const {name, value} = e.target;
    setNote({...note, [name]:value})
}


const createNote = async e => {
    e.preventDefault()
    try {
        const token = localStorage.getItem('tokenStore')
        if(token){
            const {title, content, date} = note;
            const newNote = {
                title, content, date
            }

            await axios.post('/api/notes', newNote, {
                headers: {Authorization: token}
            })

            return navigate.push('/')
        }
    } catch (err) {
        window.location.href = "/";
    }
}

  return (
    <div className='create'>
      <h3>Create Note</h3>
    <form className='new-form'>
      <div className='row'>
        <label> Title: </label>
        <input  type="text"  id="title" name="title" />
      </div>
      <div className='row'>
        <label>Content: </label>
        <textarea required rows="3" id="content" name='content' />
      </div>
      <div className='row'>
      <label htmlFor="date">Date: </label>
        <input name='date' type="date" />
      </div>
      <button className='save' type='submit'>Save</button>
    </form>
    </div>
  )
}
