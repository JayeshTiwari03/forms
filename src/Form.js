import React, {useState} from 'react'

const Form = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const handleChangeOne = (event) => {
        setFirstName(event.target.value)
    }
    const handleChangeTwo = (event) => {
        setLastName(event.target.value)
    }
    return (
        <div className='form'>
            <h1>FullForm</h1>
            <p>Kindly enter all the details as asked.</p>
            <label>First Name</label>
            <input 
                placeholder='Enter your First Name'
                type='text'
                value={firstName}
                onChange={handleChangeOne}
            />
            <label>Last Name</label>
            <input 
                placeholder='Enter your Last Name'
                type='text'
                value={lastName}
                
                onChange={handleChangeTwo}
            />
            <p>You have entered {firstName} {lastName}</p>
        </div>
    )
}

export default Form
