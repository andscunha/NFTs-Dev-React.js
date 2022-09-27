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
            src='https://i.seadn.io/gcs/files/6ee2b076281e1a98f0d70fea4efe7d84.gif?auto=format&w=128&h=128' />
          </div>
          <div className='tf-r-diamond-item' absolute-center>
            <img className='tf-r-diamond-img' 
            alt='diamond-banner' 
            src='https://i.seadn.io/gcs/files/f3b11e36be14a5d31c75b19d03996fed.gif?auto=format&w=128&h=128' />
          </div>
          <div className='tf-r-diamond-item' absolute-center>
            <img className='tf-r-diamond-img' 
            alt='diamond-banner' 
            src='https://i.seadn.io/gcs/files/c94e4322ce56aeaf726d0946e33a11a6.gif?auto=format&w=128&h=128' />
          </div>
          <div className='tf-r-diamond-item' absolute-center>
            <img className='tf-r-diamond-img' 
            alt='diamond-banner' 
            src='https://i.seadn.io/gcs/files/5a63d1481e61b12937305b2d5fdae5b2.gif?auto=format&w=128&h=128' />
          </div>
        </div>
      </div>
  </div>;
}

export default TopFold