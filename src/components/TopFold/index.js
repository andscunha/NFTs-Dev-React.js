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
      <div className='tf-direta'>
        <div className='tf-r-bg-blob'></div>
        <div className='tf-direita-diamond'>
          <div className='tf-r-diamond-item' absolute-center>
            <img className='tf-r-diamond-img' 
            alt='diamond-banner' 
            src='https://i.seadn.io/gae/FeqZQ2fAjaNqCrxpz2x9ZlNR9PXAP6Ok-lwnaX6ti-BomzyEKmnslCZorU1-aKWM_zq6Mop7RJHT_YqVEKBXh9PIOEciNlxnQYjl?auto=format&w=1920' />
          </div>
          <div className='tf-r-diamond-item' absolute-center>
            <img className='tf-r-diamond-img' 
            alt='diamond-banner' 
            src='https://i.seadn.io/gae/15jgVo39FHdYFzjZyyF7pipKqXh8Bgb938KCncS3WOeLg-36TwXivdZggF3U93SYNh6J7vLEMvhAGqGdLklI57pZn7DQOvL3_u-mMA?auto=format&w=1920' />
          </div>
          <div className='tf-r-diamond-item' absolute-center>
            <img className='tf-r-diamond-img' 
            alt='diamond-banner' 
            src='https://i.seadn.io/gae/SygdTBiSbzKa1bwb6zW-1v_4PwqFvUP1p9mT66DrBIwXMyYXP9g8iFGgR06aJQdnPBHZKTa3dAvqK5Jeb7CHxMpk4-VWa_c-JPcmTA?auto=format&w=384' />
          </div>
          <div className='tf-r-diamond-item' absolute-center>
            <img className='tf-r-diamond-img' 
            alt='diamond-banner' 
            src='https://i.seadn.io/gcs/files/ee14c01f83c1fbf379962a57969bf9d9.gif?auto=format&w=1920' />
          </div>
        </div>
      </div>
  </div>;
}

export default TopFold