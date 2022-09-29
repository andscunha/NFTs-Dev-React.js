import React from 'react';
import { TRENDING_NFTS } from '../../data/trendingNfts';
import TrendingCard from './TrendingCard/index.js';
import Button from "../../common/Button"
import "./trendingNfts.css";
import Slider from "react-slick/lib/slider"

const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  autoPlay: true,
  speed: 500,
  arrows: false,
}

const TrendingNfts = () => {
  return (
  <div className='trending-nfts'>
    <div className='tn-title absolute-center'>
      <span className='header-gradient'>NTFs TENDÊNCIA</span>
    </div>
      <div className='tn-bg-blob'></div>

      <Slider {...settings}>
        {TRENDING_NFTS.map((_nft)=>(
      <TrendingCard nft={_nft}/>
        ))}
      </Slider>
      <div className='tn-btn absolute-center'>
        <Button btnText='VEJA MAIS' type='Secondary' customClass='vermais-btn' />
      </div>
  </div>
  )
}

export default TrendingNfts