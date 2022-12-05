import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Login({ setUser }) {
  //state to save form data
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
  })

  const navigate = useNavigate()
  const location = useLocation()

  //function to update form data state
  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!formData.name || !formData.email) return
    setFormData({ name: '', email: '' })
    //submit data to somewhere
    setUser(formData)
    if (location.state.from) navigate(location.state.from)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='name'
          onChange={handleChange}
          name='name'
          value={formData.name}
        />
        <input
          type='email'
          placeholder='Email'
          onChange={handleChange}
          name='email'
          value={formData.email}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
