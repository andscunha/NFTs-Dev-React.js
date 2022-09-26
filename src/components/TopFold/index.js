import React from 'react'
import Button from '../../common/Button';
import "./topFold.css";

const TopFold = () => {
  return <div className='topfold absolute-center'>
      <div className='tf-esquerda'>
        <div className='tf-heading'>
          Descubra & venda as <span className='header-gradient'>Melhores</span> coleções de NFTs
        </div>
        <div className='tf-descriçao'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis convallis vehicula. Phasellus ac sollicitudin orci.</div>
        <div className='tf-esquerda-btns'>
          <Button btnType="PRIMARY" btnText="EXPLORAR"/>
          <Button btnType="SECONDARY" btnText="Criar" customClass="tf-esquerda-secondary-btn"/>
        </div>
        <div className='tf-esquerda-infoStats'>
          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>200K+</div>
            <div className='tf-infoItem-label'>Coleções</div>
          </div>
          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>10K+</div>
            <div className='tf-infoItem-label'>Artistas</div>
          </div>
          <div className='tf-is-infoItem absolute-center'>
            <div className='tf-infoItem-count'>423K+</div>
            <div className='tf-infoItem-label'>Comunidade</div>
          </div>
        </div>
      </div>
      <div className='tf-direta'></div>
  </div>;
}

export default TopFold