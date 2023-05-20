import React from 'react'

const AddTransition = () => {
  return (
    <>
        <h3>Add new transition</h3>
        <form>
            <div className='form-control'>
                <label htmlFor='text'>Teaxt</label>
                <input type='text' placeholder='Enter text...'/>
            </div>
            <div className='form-control'>
                <label htmlFor='amount'
                    >Amount <br />
                </label>
                <input type='number' placeholder='Enter amount...' />
            </div>
            <button className='btn'>Add transition</button>
        </form>
    </>
  )
}

export default AddTransition