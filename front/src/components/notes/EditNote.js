import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


export default function EditNote({match}) {
  const [note, setNote] = useState({
    title: '',
    content: '',
    date: '',
    id: ''
})
const navigate = useNavigate();

useEffect(() =>{
    const getNote = async () =>{
        const token = localStorage.getItem('tokenStore')
        if(match.params.id){
            const res = await axios.get(`/api/notes/${match.params.id}`, {
                headers: {Authorization: token}
            })
            setNote({
                title: res.data.title,
                content: res.data.content,
                date: new Date(res.data.date).toLocaleDateString(),
                id: res.data._id
            })
        }
    }
    getNote()
},[match.params.id])

const onChangeInput = e => {
    const {name, value} = e.target;
    setNote({...note, [name]:value})
}


const editNote = async e => {
    e.preventDefault()
    try {
        const token = localStorage.getItem('tokenStore')
        if(token){
            const {title, content, date, id} = note;
            const newNote = {
                title, content, date
            }

            await axios.put(`/api/notes/${id}`, newNote, {
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
      <h3>Edit Note</h3>
    <form onSubmit={editNote} autoComplete="off" className='new-form'>
      <div className='row'>
        <label> Title: </label>
        <input onChange={onChangeInput} value={note.title}  type="text"  id="title" name="title" />
      </div>
      <div className='row'>
        <label>Content: </label>
        <textarea type="text" value={note.content} id="content" name="content" required rows="3" onChange={onChangeInput} />
      </div>
      <div className='row'>
      <label htmlFor="date">Date: </label>
      <input type="date" id="date"name="date" onChange={onChangeInput} />
      </div>
      <button className='save' type='submit'>Save</button>
    </form>
    </div>
  )
}
