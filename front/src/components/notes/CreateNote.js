import React from 'react'

export default function CreateNote() {
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
