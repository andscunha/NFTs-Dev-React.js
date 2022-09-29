import React from 'react'
import { INFO_ITEMS } from '../../data/infoItems'
import "./infoSection.css"
import InfoItem from './Infoitem'

const InfoSection = () => {
  return <div className='info-section'>
    <div className='is-heading absolute-center'>
      <span className='header-gradient'>Crie e venda suas NFTs</span>
    </div>
    <div className='is-item-container'>
      {INFO_ITEMS.map((_infoItem)=>(
        <InfoItem item={_infoItem} />
      ))}
    </div>
  </div>
}

export default InfoSection