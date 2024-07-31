import React from 'react'
import QRCode from "react-qr-code";

const QrCodeGenerator = ({value}) => {
  return (
    <QRCode 
    value={value} 
    size={150}
    level='L'
    bgColor='white'
    fgColor='black'
    />
  )
}

export default QrCodeGenerator