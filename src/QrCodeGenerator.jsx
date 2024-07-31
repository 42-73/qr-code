import React, { useState } from 'react'
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('')
    const [history, setHistory] = useState([])
    const [isShowHistory, setIsShowHistory] = useState(false)

    const onChangeHandler = (e) => {
        setValue(e.target.value);
    }
    const onClickHandler = () => {
        setResult(value)
        setHistory([...history, value])
        setValue('')
    }
    const showHistory = () => {
      setIsShowHistory(!isShowHistory)
    }

  return (
    <div>
      {result !== '' && <QRCode value={result} size={150} level='L' bgColor='white' fgColor='black'/>}
      <input type="text" value={value} onChange={onChangeHandler}/>
      <button onClick={onClickHandler}>Create QR code</button>
      <button onClick={showHistory}>Show QR code history</button>
      {isShowHistory && <ul>{history.map((el, ind) => <li key={ind}>{el}</li> )}</ul> }
    </div>
    
  )
}

export default QrCodeGenerator