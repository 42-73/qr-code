import React from 'react'
import { Scanner } from '@yudiel/react-qr-scanner';

const QrCodeScanner = () => {


  return (
    <div>
     <p>123</p>
     <Scanner onScan={(result) => console.log(result)} />
    </div>
    
  )
}

export default QrCodeScanner