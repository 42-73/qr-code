import React, { useState } from 'react'
import QrCodeGenerator from './QrCodeGenerator'

const App = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }
    const onClickHandler = () => {
        setResult(value)
        setValue('')
    }

  return (
    <div>
        {result !== '' && <QrCodeGenerator value={result}/>}
        
        <input type="text" value={value} onChange={onChangeHandler}/>
        <button onClick={onClickHandler}>Create QR code</button>
    </div>
  )
}

export default App