import React, {useState} from 'react'

const AddTransition = () => {
    const [text, setText] = useState(' ');
    const [amount, setAmount] = useState(0);
  return (
    <>
        <h3>Add new transition</h3>
        <form>
            <div className='form-control'>
                <label htmlFor='text'>Teaxt</label>
                <input 
                    type='text'
                    placeholder='Enter text...'
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label htmlFor='amount'
                    >Amount <br />
                </label>
                <input 
                    type='number' 
                    placeholder='Enter amount...' 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
            </div>
            <button className='btn'>Add transition</button>
        </form>
    </>
  )
}

export default AddTransition